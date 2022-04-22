import {useReducer} from "react";

const init = () => {
    return {
        cat: [],
        dog: []
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCat':
            return {...state, cat: [...state.cat, {name: action.payload, id: Date.now()}]};
        case 'deleteCat':
            return {cat: [...state.cat.filter(cat => cat.id !== action.payload)], dog: [...state.dog]}
        case 'addDog':
            return {...state, dog: [...state.dog, {name: action.payload, id: Date.now()}]}
        case 'deleteDog':
            return {cat: [...state.cat], dog: [...state.dog.filter(dog => dog.id !== action.payload)]}
    }
}

const AnimalReducer = () => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return {state, dispatch};
}

export {AnimalReducer}