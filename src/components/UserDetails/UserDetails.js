import React from 'react';
import {Button} from "../Button/Button";

const UserDetails = ({user}) => {

    const {id, name, username, email, phone} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
           
            <Button to={'posts'} state={user}>get posts</Button>
        </div>
    );
};

export {UserDetails};
