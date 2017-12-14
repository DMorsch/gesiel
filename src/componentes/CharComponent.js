import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return(
        <div className="CharComponent">
            <p onClick={props.clique}> {props.valor} </p>
        </div>
    );
}

export default charComponent;