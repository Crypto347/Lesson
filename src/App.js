import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  state={
    persons: [
      {id: 'ddasf76', name:'Max', age: 28},
      {id: 'audsc87', name:'Manu', age: 29},
      {id: '89sdcll', name:'St', age: 26},
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id});
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person,index) => {
          return <Person 
            click={()=>this.deleteNameHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}/>
        })}
      </div>
      );
    }

    return (
    <div className = 'App'> 
      <button 
      style={style} 
      onClick={this.togglePersonsHandler}>Toggle Person</button>
      {persons} 
    </div>
    );
  }
}

export default App;
