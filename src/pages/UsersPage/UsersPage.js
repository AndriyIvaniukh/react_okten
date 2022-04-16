import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data));
    },[])

    return (
        <div style={{display:"flex"}}>
            <div>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};