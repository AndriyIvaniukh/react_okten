import React from 'react';

const UserPosts = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <div>post id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <br/>
        </div>
    );
};

export {UserPosts};
