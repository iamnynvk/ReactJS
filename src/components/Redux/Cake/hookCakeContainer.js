import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from './cakeAction'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch() 
    return (
        <div>
            <h3>Number of Cakes - {numOfCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy To Cake</button>
        </div>
    )
}

export default HookCakeContainer
