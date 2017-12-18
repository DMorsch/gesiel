import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

class Person extends Component{
    render() {
        return <div className={classes.Persona} >
        <p onClick={this.props.clique}> {this.props.nome} tem {this.props.idade } anos de idade </p>
        <p> {this.props.children} </p>
        <input type="text" onChange={this.props.mudar}/>
    </div>
    }
}
/*
const person = (props) => {
return (
<div className={classes.Persona} >
    <p onClick={props.clique}> {props.nome} tem {props.idade } anos de idade </p>
    <p> {props.children} </p>
    <input type="text" onChange={props.mudar}/>
</div>
);
}*/

Person.PropTypes ={
    clique: PropTypes.func,
    nome: PropTypes.string,
    idade: PropTypes.number,
    mudar: PropTypes.func
}

export default Person;