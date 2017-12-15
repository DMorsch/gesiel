import React, { Component } from 'react';
import classes from './App.css';
import Persons from './componentes/Persons/Persons';
import ValidationComponent from './ValidationComponent';
import CharComponent from './componentes/CharComponent';
import Cockpit from './cockpit/Cockpit'

class App extends Component {
  state = {
    pessoas : [
      {ID : '#1', nome:"Gesiel", idade:"36"},
      {ID : '#2',nome:"Icaro", idade:"23"},
      {ID : '#3', nome:"Ijuí", idade:"19"}
    ],
    outra : '',
    mostrarPessoas : false
  }

  botaoHandler = () => {
    this.setState({
      pessoas : [
        {nome:"Ijui", idade:"36"},
        {nome:"Gesiel", idade:"23"},
        {nome:"Icaro", idade:"19"}
      ],
    })
  }

  nomeHandler = (event,id) => {
    const personIndex = this.state.pessoas.findIndex((p) => {
      return p.ID === id;
    });

    const pessoa = {...this.state.pessoas[personIndex]};

    pessoa.nome = event.target.value;

    const pess = [...this.state.pessoas];
    pess[personIndex] = pessoa;

    this.setState({
      pessoas : pess
    })
  }

  togglePessoaHandler = () => {
    this.state.mostrarPessoas ? 
    this.setState( {mostrarPessoas : false})
    : 
    this.setState( {mostrarPessoas : true})
  }

  deletePerson = (personIndice) => {
    const pes = [...this.state.pessoas];
    pes.splice(personIndice,1);
    this.setState({pessoas : pes});
  }

  alteraOutra = (event) => {
    this.setState({outra : event.target.value})
  }

  deletarChar = (charInd) => {
    const qlqr = [...this.state.outra.split('')];
    qlqr.splice(charInd, 1);
    const temp = qlqr.join('');
    this.setState({outra : temp});
  }

  render() {
    let pessoas = null;

    if(this.state.mostrarPessoas){
      pessoas = (
          <Persons 
          pessoas={this.state.pessoas}
          clicked={this.deletePerson}
          mudou={this.nomeHandler}
          />
      )
    }

    let vetor = this.state.outra.split('');

    let charComps = (
      <div>
        {
          vetor.map((cc, ind) => {
            return <CharComponent valor={cc}
            clique={() => this.deletarChar(ind)} />
          })
        }
      </div>
    )

    
     
    return (
      <div className={classes.App}>
        <Cockpit
        titulo={this.props.titulo}
        mostrar={this.state.mostrarPessoas}
        pessoas={this.state.pessoas}
        clique={this.togglePessoaHandler}
        />
         { pessoas }
         <br/>
         <input type="text" onChange={(event) => this.alteraOutra(event)}/>
         <p> {this.state.outra.length}</p>
         <ValidationComponent comprimento={this.state.outra.length}/>
         { charComps }
      </div>
    );
  }
}

export default App;
