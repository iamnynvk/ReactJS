import React, { Component } from 'react'

// Normal passing props and get props
// class passingPropsClass extends Component {
//     render(props) {
//         return (
//             <div>
//                 <h4>Hello My name is {this.props.name} and college name {this.props.college}</h4>
//             </div>
//         )
//     }
// }



// First way to get props and disturing props
// class passingPropsClass extends Component {
//     render() {
//         const {name, college} = this.props
//         return (
//             <div>
//                 <h4>Hello My name is {name} and college name {college}</h4>
//             </div>
//         )
//     }
// }


// secend Methord to distruction and get props
class passingPropsClass extends Component {
    render() {
        const {name, college} = this.props
        return (
            <div>
                <h4>Hello My name is {name} and college name {college}</h4>
            </div>
        )
    }
}

// same way to distucturing state in class components
// const {state1 , state2 } = this.state;

export default passingPropsClass;
