const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter: state.counter + 1,
            }

        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1,
            }

        case 'INCREMENT_WITH_PAYLOAD':
            return{
                ...state,
                counter: state.counter + action.payload
            }
        
        case 'DECREMENT_WITH_PAYLOAD':
            return{
                ...state,
                counter: state.counter - action.payload
            }
        default: 
        return state
    }
}

export default reducer