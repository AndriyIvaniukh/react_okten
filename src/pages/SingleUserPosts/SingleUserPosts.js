import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {postsService} from "../../services";
import {UserPosts} from "../../components/UserPosts/UserPosts";

const SingleUserPosts = () => {
    const {state} = useLocation();

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        postsService.getAllUserPosts(state.id).then(({data}) => setPosts(data));
    },[state])

    return (
        <div>
            {posts && posts.map(post => <UserPosts key={post.id} post={post}/>)}
        </div>
    );
};

export {SingleUserPosts};
