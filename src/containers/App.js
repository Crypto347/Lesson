import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor');
    this.state={
      persons: [
        {id: 'ddasf76', name:'Max', age: 28},
        {id: 'audsc87', name:'Manu', age: 29},
        {id: '89sdcll', name:'St', age: 26},
      ],
      showPersons: false
  };
}
  componentWillMount(){
    console.log('[App.js] inside componentWillMount()', this.state);
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }
  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] inside componentWillUpdate()',nextProps,nextState); 
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate()'); 
  }
  nameChangeHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex( p =>{
      return p.id === id
    });
    
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
    console.log('[App.js] inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deleteNameHandler}
        changed={this.nameChangeHandler}/>
    }
   

    return (
    <WithClass classes={classes.App}> 
    <button onClick={()=>{this.setState({showPersons: true})}}>Press</button>
      <Cockpit 
      addTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}/>
      {persons} 
    </WithClass>
    );
  }
}

export default App;
