import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) =>{
    const style = {
        '@media(min-width: 400px)':{
            width: '350px'
        }
    }

    return(
        <div className="Person" style={style}>
            <p onClick={props.click}>Person {props.name} is {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default Radium(person);