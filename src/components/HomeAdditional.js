import React, {useRef} from 'react';
import {CatAndDogReducer} from "../reducers";


const HomeAdditional = () => {

    const {state, dispatch} = CatAndDogReducer();

    const name = useRef();

    const addCat = () => {
        dispatch({type: 'addCat', payload: name.current.value});
    }
    const delCat = () =>{
        dispatch({type: 'deleteCat', payload: 'Mia'});
    }

    return (
        <div>
            <div>
                <label>Add Cat: <input type="text" ref={name} placeholder={'Cat name'}/></label>
                <button onClick={()=>addCat()}>AddCat</button>
                <button onClick={()=>delCat()}>deleteCat</button>
            </div>
            <div>

            </div>

        </div>
    );
};

export {HomeAdditional};