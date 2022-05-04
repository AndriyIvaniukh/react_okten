import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../redux";
import {User} from "./User";

const Users = () => {

    const state = useSelector(state => state.users);
    const dispatch = useDispatch();

    const userRef = useRef();
    return (
        <div>
            <label>name: <input type="text" ref={userRef}/></label>
            <button onClick={() => {
                dispatch(userActions.add({user: userRef.current.value}));
                userRef.current.value = '';
            }}>add
            </button>

            <hr/>
            <h1>users</h1>
            {state.users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};