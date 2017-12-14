import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './componentes/Persons/Person/Person';
import ValidationComponent from './ValidationComponent';
import CharComponent from './componentes/CharComponent';
import ErrorBoundary from './componentes/ErrorBoundary/ErrorBoundary';

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
    let pessoas = null;
    let btnClass = '';

    if(this.state.mostrarPessoas){
      pessoas = (
        <div>
          {
            this.state.pessoas.map( (ps, indice) => {
              return <ErrorBoundary  key={ps.ID}>
              <Person nome={ps.nome} 
              idade={ps.idade}
               clique={() => this.deletePerson(indice)}
               mudar={(event) => this.nomeHandler(event, ps.ID)}/>
               </ErrorBoundary>
            })
          }
      </div>
      )
      btnClass = classes.vermelho;
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

    let classez = [];
    if(this.state.pessoas.length <= 2){
      classez.push('vermelho');
    }
    if(this.state.pessoas.length <= 1){
      classez.push('bold');
    }
     
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to Gesiel</h1>
        </header>
        <p className={classez.join(' ')}> Shrek is love, Shrek is life</p>
        <button onClick={this.togglePessoaHandler} className={btnClass} >
         Switch! 
         </button>
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
