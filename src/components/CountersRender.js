import React from 'react';
import {CounterReducer} from "../reducers/counterReducer";

const CountersRender = () => {

    const {state, dispatch} = CounterReducer();

    return (
        <div>
            <div>
                Counter One: {state.countOne}
                <button onClick={()=>dispatch({type: 'incCountOne'})}>inc</button>
                <button onClick={()=>dispatch({type: 'decCountOne'})}>dec</button>
                <button onClick={()=>dispatch({type: 'resetCountOne', payload: -10})}>reset</button>
            </div>
            <div>
                Counter Two: {state.countTwo}
                <button onClick={()=>dispatch({type: 'incCountTwo'})}>inc</button>
                <button onClick={()=>dispatch({type: 'decCountTwo'})}>dec</button>
                <button onClick={()=>dispatch({type: 'resetCountTwo', payload: 0})}>reset</button>
            </div>
            <div>
                Counter Three: {state.countThree}
                <button onClick={()=>dispatch({type: 'incCountThree'})}>inc</button>
                <button onClick={()=>dispatch({type: 'decCountThree'})}>dec</button>
                <button onClick={()=>dispatch({type: 'resetCountThree', payload: 10})}>reset</button>
            </div>
        </div>
    );
};

export {CountersRender};