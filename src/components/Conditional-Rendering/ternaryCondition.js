import React,{useState} from 'react'

function TernaryCondition() {
    const [isLogged, setisLogged] = useState(true)
    return (
        isLogged ? <div>Hello Welcome To Nayan</div> : <div>Hello Welcome To Guest</div>
    )
}

export default TernaryCondition;

