import React, { Component } from "react";
class Student extends Component{
    constructor(props){
        super(props);

        this.state={
            name:"Vijayant",
            roll: this.props.roll
        }
    }    
        render(){
            return(
                <h1>Hello ,{this.state.name},Your roll no.is{this.state.roll}</h1>
            );
        }
    
}
export default Student;