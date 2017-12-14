import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        temErro : false,
        msgErro : ''
    }

    componentDidCatch = (error, info) => {
        this.setState({temErro : true, msgErro : info })
    }

    render(){
        if(this.state.temErro){
            return <h1> {this.state.msgErro} </h1>;
        } else{
            return this.props.children;
        }
    }
}
export default ErrorBoundary;