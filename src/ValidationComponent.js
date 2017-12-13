import React from 'react';

const validationComponent = (props) => {
    if(props.comprimento < 6){
    return(
        <div className="ValidationComponent">
            <p> Texto muito curto! </p>
        </div>
    );
}
    return(
        <div className="ValidationComponent">
        <p > Texto de tamanho ok! </p>
    </div> 
    );
}

export default validationComponent;