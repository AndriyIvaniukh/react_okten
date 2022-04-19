import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {commentsService} from "../../services";
import {Comment} from "../../components";

const SinglePostComments = () => {

    const {state} = useLocation();

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAllPostComments(state.id).then(({data}) => setComments(data));
    },[state.id])

    return (
        <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {SinglePostComments};
