import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.pessoas.map( (ps, indice) => {
    return <Person nome={ps.nome} 
    idade={ps.idade}
    key={ps.ID}
     clique={() => props.clicked(indice)}
     mudar={(event) => props.mudou(event, ps.ID)}/>
  })

  export default persons;