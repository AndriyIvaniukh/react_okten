import React, {useEffect, useState} from 'react';
import {postsService} from "../../services";
import {Outlet} from "react-router-dom";

import css from "./PostPage.module.css"
import {Post} from "../../components";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(value => setPosts(value.data));
    }, [])

    return (
        <div className={css.postsPage}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>

        </div>
    );
};

export {PostsPage};