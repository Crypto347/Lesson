import React, {Component} from 'react';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor',props);
    }
    componentWillMount(){
      console.log('[Person.js] inside componentWillMount()');
    }
    componentDidMount(){
      console.log('[Person.js] inside componentDidMount()');
    }
    render(){
        console.log('[Person.js] inside render()');
        return(
            <Aux>
                <p onClick={this.props.click}>Person {this.props.name} is {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );
        // return [
        //         <p key = "1" onClick={this.props.click}>Person {this.props.name} is {this.props.age} years old</p>,
        //         <p key = "2" >{this.props.children}</p>,
        //         <input key = "3" type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, classes.Person);