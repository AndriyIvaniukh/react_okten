import React from 'react';

const PostDetails = ({post}) => {
    const {id, title, body, userId} = post;
    return (
        <div>
            <p>id: {id}</p>
            <p>userId: {userId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {PostDetails};