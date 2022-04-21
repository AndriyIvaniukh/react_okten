import React, {useRef} from 'react';
import {useAuth} from "../../hooks";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const LogInPage = () => {

    const {logIn} = useAuth();
    const {state:{pathname}} = useLocation();

    const userName = useRef();

    const navigate = useNavigate();



    return (
        <div>
            <input type='text' placeholder={'name'} ref={userName}/>
            <button onClick={()=>logIn(userName.current.value, ()=>navigate(pathname,{replace:true}))}>logIn</button>
        </div>
    );
};

export {LogInPage};
