import { DECREAMENT, INCREAMENT, RESET } from "./counterType"

export const countIncreament = () => {
    return{
        type: INCREAMENT
    }
}

export const countDecreament = () => {
    return{
        type: DECREAMENT
    }
}

export const countReset = () => {
    return{
        type: RESET
    }
}