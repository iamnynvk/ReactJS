import React, { Component } from 'react'
import ChildComponent from './childComponent';

class parentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Vekariya Nayan',
            mark : 120,
            result : 'pass'
        }
        this.greetHandler = this.greetHandler.bind(this);
    }

    greetHandler(childName){
        console.log(this.state);
        this.setState({
            name: 'Gopi Desai',
            mark : 320, 
            result: "first class"
        },()=>{
            console.log(this.state);
            alert(`${this.state.name} from ${childName}`)
        })
       
    }
    
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <ChildComponent greets={this.greetHandler}/>
            </div>
        )
    }
}

export default parentComponent
