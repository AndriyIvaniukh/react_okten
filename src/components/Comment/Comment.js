import React from 'react';

const Comment = ({comment}) => {

    const {id, postId, name, body, email} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>body: {body}</div>
            <div>email: {email}</div>
            <br/>
        </div>
    );
};

export {Comment};
