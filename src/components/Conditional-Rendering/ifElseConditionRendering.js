import React, {useState} from 'react'

function IfElseConditionRendering() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isvalid, setValid] = useState(true);

    // This is IF/ELSE Conditional Rendering

    if(isLoggedIn && isvalid){
        console.log("Login : ",isLoggedIn, "Valid :",isvalid)
        return(
            <div>Welcome Nayan</div>
        )
    }else{
        console.log("Login : ",isLoggedIn, "Valid :",isvalid)
        return(
            <div>Welcome Guest</div>
        )
    }

    // return (
    //     <div>
    //         <h3>Welcome To Nayan</h3>
    //         <h3>Welcome To Guest</h3>
    //     </div>
    // )
}

export default IfElseConditionRendering;
