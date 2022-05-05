import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

const Forms = () => {

    const catName = useRef();
    const dogName = useRef();

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <label>Cat name: <input type="text" ref={catName} placeholder={'name'}/></label>
                <button onClick={()=>{dispatch(catActions.add({catName:catName.current.value}))}}>add Cat</button>
            </div>
            <div>
                <label>dog name: <input type="text" ref={dogName} placeholder={'name'}/></label>
                <button onClick={()=>{}}>add Cat</button>
            </div>
        </div>
    );
};

export default Forms;
