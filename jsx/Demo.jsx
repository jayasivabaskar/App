import React, { Component } from "react";
import ListItem from "./ListItem";

export default class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            payload : [],
            errorMessage : "",
            input : ""
        }
    }

    componentWillMount(){
        axios.get('http://localhost:4000/todo')
            .then((response) => {
                console.log(response.data);
                this.setState({
                payload : response.data
            });
            })
            .catch((error) => {
                console.log("errrrr",error);
                 this.setState({
                errorMessage : error
            });
            });
    }

    whenDelete(data){
       console.log("mmmm", data);
        axios({method: 'delete', url: 'http://localhost:4000/todo', data: {data: data}})
        .then((response) => {
                console.log(response.data);
                this.setState({
                payload : response.data
            });
            })
            .catch((error) => {
                console.log("errrrr",error);
                 this.setState({
                errorMessage : error
            });
            });
    }
    onAdd(){
        console.log("targetValue",this.state.input);
        let obj =
            {
            "ProfileName" :"dummy",
            "FirstName":this.state.input,
            "LastName":"dummy",
            "Age":0,
            "Language":"dummy"
            };
        let arr1=this.state.payload;
        arr1.push(obj);
        this.setState({
            payload : arr1
        });
        axios.post('http://localhost:4000/todo',obj, {  
                headers: {
                            "Content-Type": "application/json"
                        }
            })
            .then(function(response) {
                console.log(response);
            }) .catch(function (error) {
                console.log(error);
            });
    }
    onInputChange(e){
        this.setState({
            input : e.target.value
        })
    }

    render(){
        console.log("payyyyy",this.state.payload);
        const value = this.state.payload;
        var data = this.state.payload.map((data, index) => 
        <ListItem whenClick={this.whenDelete.bind(this)}  text={data.FirstName} num ={index} key={index}></ListItem> )
        return(
            <div>
                <h1>Demo project..</h1>
                <input type ="text" name="name" value={this.state.input} onChange={this.onInputChange.bind(this)} required="true"/>
                <button style={{color:"white",backgroundColor:"green"}} onClick={this.onAdd.bind(this)} type="button">ADD</button>
                <div>{data}</div>
            </div>
        );
    }
}