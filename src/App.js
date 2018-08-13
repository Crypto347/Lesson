import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state={
    persons: [
      {name:'Max', age: 28},
      {name:'Manu', age: 29},
      {name:'St', age: 26},
    ]
    
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name:'Manu', age: 29},
        {name:'St', age: 27},
      ]
    })
  }

  nameChangeHandler = (event)=>{
    this.setState({
      persons: [
        {name:'Max', age: 28},
        {name: event.target.value, age: 29},
        {name:'St', age: 26},
      ]
    })
  }

  render() {
    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
    <div className = 'App'> 
    <button style={style} onClick={this.switchNameHandler.bind(this,"Max")}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={()=>this.switchNameHandler("MAX")}
      />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangeHandler}> here </Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
    </div>
  
    );
  }
}

export default App;
