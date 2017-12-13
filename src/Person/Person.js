import React from 'react';
import './Person.css';

const person = (props) => {
return (
<div className="Person" >
    <p onClick={props.clique}> {props.nome} tem {props.idade } anos de idade </p>
    <p> {props.children} </p>
    <input type="text" onChange={props.mudar}/>
</div>
);
}

export default person;