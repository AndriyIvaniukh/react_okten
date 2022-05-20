import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = async (id) => {
        await dispatch(carActions.deleteCarById({id: id}));
    }

    const update = (car) => {
        dispatch(carActions.addCarForUpdate(car));
    }

    return (
        <div>
            {id} - {model} - {price} - {year}
            <button onClick={() => deleteCar(id)}>delete</button>
            <button onClick={() => update(car)}>update</button>
        </div>
    );
};
export {Car};