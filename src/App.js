import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

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

    pessoa.nome = event.target.value.length;

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
    const estilo = {
      backgroundColor : 'green',
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      ':hover': {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
     }

    let pessoas = null;

    if(this.state.mostrarPessoas){
      pessoas = (
        <div>
          {
            this.state.pessoas.map( (ps, indice) => {
              return <Person nome={ps.nome} 
              idade={ps.idade}
              key={ps.ID}
               clique={() => this.deletePerson(indice)}
               mudar={(event) => this.nomeHandler(event, ps.ID)}/>
            })
          }
      </div>
      )
      estilo.backgroundColor = 'red';
      estilo[':hover'] = {
        backgroundColor : '#ff4d4d',
        color : 'black'
      }
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

    let classes = [];
    if(this.state.pessoas.length <= 2){
      classes.push('vermelho');
    }
    if(this.state.pessoas.length <= 1){
      classes.push('bold');
    }
     
    return (
      <StyleRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Gesiel</h1>
        </header>
        <p className={classes.join(' ')}> Shrek is love, Shrek is life</p>
        <button onClick={this.togglePessoaHandler} style={estilo}>
         Switch! 
         </button>
         { pessoas }
         <br/>
         <input type="text" onChange={(event) => this.alteraOutra(event)}/>
         <p> {this.state.outra.length}</p>
         <ValidationComponent comprimento={this.state.outra.length}/>
         { charComps }
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
