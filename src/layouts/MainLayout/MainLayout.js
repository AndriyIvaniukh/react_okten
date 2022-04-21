import React from 'react';
import {Outlet, NavLink, useNavigate, useLocation} from 'react-router-dom'

import css from './MainLayout.module.css'
import {useAuth} from "../../hooks";

const MainLayout = () => {

    const navigate = useNavigate();

    const {user, logOut} = useAuth();

    return (
        <div>
            <div className={css.header}>
                <NavLink to={'home'}>Home</NavLink>
                <NavLink to={'users'}>Users</NavLink>
                <NavLink to={'posts'} replace>Posts</NavLink>
                <NavLink to={'about'}>About</NavLink>
                {user&& <h2>{user}<button onClick={()=>logOut(()=>navigate('/'))}>logOut</button></h2> }
            </div>
            <hr/>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>

            <Outlet/>
        </div>
    );
};

export {MainLayout};
