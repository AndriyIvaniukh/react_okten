import React, {useEffect} from 'react';
import {ShowAnimal} from "./ShowAnimal";

const ShowAnimals = ({reducer}) => {

    const {state, dispatch} = reducer;
    useEffect(() => {

    }, [reducer])

    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <div>
                {state.dog && state.dog.map(dog => <ShowAnimal key={dog.id} animal={dog} animalType={'Dog'} dispatch={dispatch}/>)}
            </div>
            <div>
                {state.cat && state.cat.map(cat => <ShowAnimal key={cat.id} animal={cat} animalType={'Cat'} dispatch={dispatch}/>)}
            </div>
        </div>
    )
};

export {ShowAnimals};