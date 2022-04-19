import React from 'react';
import {Button} from "../Button/Button";

const PostDetails = ({post}) => {
    const {id, title, body, userId} = post;
    return (
        <div>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>

            <Button to={'comments'} state={post}>get comments</Button>
        </div>
    );
};

export {PostDetails};
