import React, { Component } from 'react'

class eventExperimentClass extends Component {
    // if you make it arrow function you dont need to bind class to event - that's called "Binding Event Handler"
    // this.eventHandler = this.eventHandler.bind(this)
    eventHandler() {
        console.log("button clicked!");
    }
    render() {
        return (
            <div>
                <button onClick={this.eventHandler}>Click!</button>
            </div>
        )
    }
}

export default eventExperimentClass;
