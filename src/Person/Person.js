import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const estilo = {
        '@media (min-width: 500px)': {
            width : '450px'
        }
    }
return (
<div className="Person" style={estilo}>
    <p onClick={props.clique}> {props.nome} tem {props.idade } anos de idade </p>
    <p> {props.children} </p>
    <input type="text" onChange={props.mudar}/>
</div>
);
}

export default Radium(person);