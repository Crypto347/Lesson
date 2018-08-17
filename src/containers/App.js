import React, { Component } from 'react';
import classes from './App.css';

import Person from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

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
    const personIndex = this.state.persons.findIndex( p =>{
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
    let persons = null;
    

    if(this.state.showPersons){
      persons = <Person 
        persons={this.state.persons}
        clicked={this.deleteNameHandler}
        changed={this.nameChangeHandler}/>
    }
   

    return (
    <div className = {classes.App}> 
      <Cockpit 
      addTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
      {persons} 
    </div>
    
    );
  }
}

export default App;
