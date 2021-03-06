import React from 'react';
import './person.css';

const person = (props) => {
return (
   <div className="Person">
    <p onClick={props.click}>I'M {props.name} with{props.age}!</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
    <p>{props.name}</p>
   </div>
    )
}

export default person;