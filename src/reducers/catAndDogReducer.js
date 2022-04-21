import {useReducer} from "react";


const CatAndDogReducer = () => {

    const [state, dispatch] = useReducer(reducer, 0,init);

    console.log(state);

    return {state, dispatch};
}



const init = () => {
    return{
        cat: [],
        dog: []
    }
}

const reducer = (state, action) => {
    switch (action.type){
        case 'addCat':
            return {...state, cat: [...state.cat, action.payload]};
        case 'deleteCat':
            return {cat: [...state.cat.filter(value => value !==action.payload)], dog: [...state.dog]}
    }
}

export {CatAndDogReducer};