import React, { PureComponent } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

export const AuthContex = React.createContext(false);

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
      showPersons: false,
      toggleClicked: 0,
      authenticated:false
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
    this.setState((prevState, props)=>{
      return {
      showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked + 1
    }});
  }

  logInHandler = () =>{
    this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deleteNameHandler}
        changed={this.nameChangeHandler}
        />
    }
   

    return (
    <Aux> 
    <button onClick={()=>{this.setState({showPersons: true})}}>Press</button>
      <Cockpit 
      addTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonsHandler}
      click={this.logInHandler}/>
      <AuthContex.Provider value={this.state.authenticated}>
        {persons}
      </AuthContex.Provider> 
    </Aux>
    );
  }
}

export default withClass(App,classes.App);
