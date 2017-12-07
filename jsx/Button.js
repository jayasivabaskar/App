import React, { Component } from 'react';

class Button  extends Component {

    render() {
        return (
           <button onClick={this.props.whenClick} className="btn btn-default dropdown-toggle" type="button">
             {this.props.caption}
             <span className="caret"></span>
            </button> 
        );
    }
}

export default Button;