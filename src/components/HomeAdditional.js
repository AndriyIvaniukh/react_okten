import React, {useRef} from 'react';
import {CatAndDogReducer} from "../reducers";
import {ShowAnimals} from "./ShowAnimals";
import {useEffect} from "react";


const HomeAdditional = () => {

    const reducer = CatAndDogReducer();
    const {state, dispatch} = reducer;

    const catName = useRef();
    const dogName = useRef();

    const addAnimal = (type, name) => {
        dispatch({type: type, payload: name.current.value});
        name.current.value = null;
    }

    return (
        <div>
            <div>
                <label>Add Cat: <input type="text" ref={catName} placeholder={'Cat name'}/></label>
                <button onClick={() => addAnimal('addCat', catName)}>AddCat</button>
            </div>
            <div>
                <label>Add Dog: <input type={'text'} ref={dogName} placeholder={'Dog name'}/></label>
                <button onClick={() => addAnimal('addDog', dogName)}>AddDog</button>
            </div>

            <ShowAnimals reducer={reducer}/>
        </div>
    );
};

export {HomeAdditional};