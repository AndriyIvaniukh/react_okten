import React from 'react';
// import {Link} from "react-router-dom";
import {Button} from "../Botton/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id} -- {title}
            {/*<Link to={id.toString()} state={post}>get Details</Link>*/}
            <Button to={id.toString()} state={post}>get Details</Button>
        </div>
    );
};

export {Post};