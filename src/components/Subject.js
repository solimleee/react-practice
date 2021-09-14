import React, { Component } from 'react';
class Subject extends Component {
    render(){
      console.log('Subject render');
      return (
        <header>
           <h1><a href="/" onClick={function(e){
               e.preventDefault();
           }}></a></h1>
        </header>  
      );
    }
  }
export default Subject;