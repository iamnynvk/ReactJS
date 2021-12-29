import React, { Component } from 'react'

class ElementConditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogged : false
        }
    }
    
    render() {
        let message;
        if(this.state.isLogged){
            console.log(this.state.isLogged)
            message = <div>Welcome to Nayan</div>
        }else{
            console.log(this.state.isLogged)
            message = <div>Welcome to Guest</div>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default ElementConditional;