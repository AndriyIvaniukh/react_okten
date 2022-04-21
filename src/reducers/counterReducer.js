import {useReducer} from "react";

const init = (initCount) => {
    return {
        countOne: initCount,
        countTwo: initCount,
        countThree: initCount
    }

}

const reducer = (state, action) => {
    switch (action.type){
        case 'incCountOne':
            return {...state, countOne: state.countOne+1}
        case 'decCountOne':
            return {...state, countOne: state.countOne-1}
        case 'resetCountOne':
            return {...state, countOne: action.payload}
        case 'incCountTwo':
            return {...state, countTwo: state.countTwo+1}
        case 'decCountTwo':
            return {...state, countTwo: state.countTwo-1}
        case 'resetCountTwo':
            return {...state, countTwo: action.payload}
        case 'incCountThree':
            return {...state, countThree: state.countThree+1}
        case 'decCountThree':
            return {...state, countThree: state.countThree-1}
        case 'resetCountThree':
            return {...state, countThree: action.payload}
    }
}

const CounterReducer = () => {

    const [state,dispatch] = useReducer(reducer, 0, init);

    return {state,dispatch};
}

export {CounterReducer};

