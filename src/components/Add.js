import React,{Component} from 'react';
import ReactDom from 'react-dom';
export class Add extends React.Component{
  render(){

    let a=45;
    let b=25;
    let result;
    return result=a+b;

    ReactDOM.render(<Add /> ,document.getElementById('root'));
    
  }
}
