import React from 'react'


// First way to Normal Passing Props
// function passingProps(props) {
//     return (
//         <div>
//             <h4>My name is {props.name} and College name {props.college}</h4>
//         </div>
//     )
// }


// Secend way to distructuring props
// function passingProps({name,college}) {
//     return (
//         <div>
//             <h4>My name is {name} and College name {college}</h4>
//         </div>
//     )
// }


// Third Way to distructuring props
function passingProps(props) {
    const {name,college} = props
    return (
        <div>
            <h4>My name is {name} and College name {college}</h4>
        </div>
    )
}

// same way to distucturing state in Function components
// const {state1 , state2 } = state;

export default passingProps
