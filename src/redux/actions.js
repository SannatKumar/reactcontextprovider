export const increment = () => {
    return{
        type: 'INCREMENT',
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT',
    }
}

export const incrementWithPayload = value => {
    return{
        type: 'INCREMENT_WITH_PAYLOAD',
        payload: {value},
    }
}

export const decrementWithPayload = value => {
    return{
        type: 'DECREMENT_WITH_PAYLOAD',
        payload: {value},
    }
}