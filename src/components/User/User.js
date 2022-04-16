import React from 'react';
import {Button} from "../Botton/Button";

const User = ({user}) => {

    const {id, name} = user;

    return (
        <div>
            {id}--{name} <Button to={id.toString()} state={user}>user Details</Button>
        </div>
    );
};

export {User};