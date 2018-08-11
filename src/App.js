import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
    <div className = 'App'> 
      <Person age = '56'/>
      <Person age = '5'> here </Person>
      <Person age = '6'/>
    </div>
  
    );
  }
}

export default App;
