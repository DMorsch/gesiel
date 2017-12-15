import React from 'react';
import logo from '../logo.svg';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let classez = [];
    if(props.pessoas.length <= 2){
      classez.push('vermelho');
    }
    if(props.pessoas.length <= 1){
      classez.push('bold');
    }

    let btnClass = '';
    if(props.mostrar){
      btnClass = classes.vermelho;
    }

    return(
      <div className={classes.Cockpit}>
      <header className={classes.AppHeader}>
      <img src={logo} className={classes.AppLogo} alt="logo" />
      <h1 className={classes.AppTitle}>{props.titulo}</h1>
      </header>
     <p className={classez.join(' ')}> Shrek is love, Shrek is life</p>
     <button onClick={props.clique} className={btnClass} >
      Switch! 
      </button>
    </div>
    );
}

export default cockpit;