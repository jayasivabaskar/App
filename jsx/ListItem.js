import React, { Component } from 'react';
import Button from "./Button";
class ListItem extends Component {

   onDelete(){
        this.props.whenClick(this.props.num);
   }
    render() {
        return (
            <li className="list-group-item">
                <div>{this.props.text}</div> 
                <button style={{color:"white",backgroundColor:"red"}} onClick={this.onDelete.bind(this)} type="button">Delete</button>
            </li>
        );
    }
}

export default ListItem;