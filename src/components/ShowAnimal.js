import React from 'react';
import {useEffect} from "react";

const ShowAnimal = ({animal, dispatch, animalType}) => {

    const {name, id} = animal;

    useEffect(() => {
    }, [animal]);

    return (
        <div>
            {name}
            <button onClick={() => dispatch({type: `delete${animalType}`, payload: id})}>delete</button>
        </div>
    );
};

export {ShowAnimal};