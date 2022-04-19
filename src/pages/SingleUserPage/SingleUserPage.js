import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";
import {usersService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {

    const {state} = useLocation();
    const {id} = useParams();
    const [user,setUser] = useState(state);

    useEffect(()=>{
        if(!state){
            usersService.getById(id).then(({data})=> setUser(data));
        }else{
            setUser(state);
        }
    },[id,state])

    return (
        <div>
            {user && <UserDetails key={user.id} user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {SingleUserPage};
