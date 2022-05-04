import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";

const Counters = () => {

    const state = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                Count1: {state.count1}
                <button onClick={()=>dispatch(counterActions.incCount1())}>inc</button>
                <button onClick={()=>dispatch(counterActions.decCount1())}>dec</button>
                <button onClick={()=>dispatch(counterActions.resetCount1(5))}>reset to 5</button>
            </div>
            <div>
                Count2: {state.count2}
                <button onClick={()=>dispatch(counterActions.incCount2())}>inc</button>
                <button onClick={()=>dispatch(counterActions.decCount2())}>dec</button>
                <button onClick={()=>dispatch(counterActions.resetCount2())}>reset to  0</button>
            </div>

        </div>
    );
};

export {Counters};