import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
    return this.props.pessoas.map( (ps, indice) => {
      return <Person nome={ps.nome} 
      idade={ps.idade}
      key={ps.ID}
       clique={() => this.props.clicked(indice)}
       mudar={(event) => this.props.mudou(event, ps.ID)}/>
    })
  }
}
/*
const persons = (props) => props.pessoas.map( (ps, indice) => {
    return <Person nome={ps.nome} 
    idade={ps.idade}
    key={ps.ID}
     clique={() => props.clicked(indice)}
     mudar={(event) => props.mudou(event, ps.ID)}/>
  })*/

  export default Persons;