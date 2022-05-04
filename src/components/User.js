import React from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const User = ({user}) => {

    const dispatch =useDispatch();

    return (
        <div>
            {user.id} --- {user.name}
            <button onClick={()=>dispatch(userActions.deleteById({id:user.id}))}>delete</button>
        </div>
    );
};

export {User};