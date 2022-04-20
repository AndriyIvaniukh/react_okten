import React, {useEffect, useState, useContext} from 'react';
import {postsService} from "../../services";
import {Outlet, useSearchParams} from "react-router-dom";

import css from "./PostPage.module.css"
import {Post} from "../../components";
// import {MyContext} from "../../index";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1', limit: '5'});

    // const value = useContext(MyContext);

    useEffect(() => {
        postsService.getAll(query.get('page'), query.get('limit')).then(({data}) => setPosts(data));
        // console.log(value);
        // value.name = "Olia";
    }, [query])

    const previusPage = () => {
        // let page = query.get('page');
        // page = +page - 1;
        // setQuery({page: page.toString()});

        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--;
        setQuery(queryObj);
    }

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++;
        setQuery(queryObj);
    }

    const incrementLimit = () => {
        const queryObg = Object.fromEntries(query.entries());
        queryObg.limit++;
        setQuery(queryObg);
    }

    const decrementLimit = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.limit--;
        setQuery(queryObj);
    }

    return (
        <div>
            <div className={css.postsPage}>
                <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>

                <div><Outlet/></div>
            </div>
            <button onClick={() => previusPage()}>previus Page</button>
            <button onClick={() => nextPage()}>next Page</button>
            <button onClick={() => incrementLimit()}>limit +1</button>
            <button onClick={() => decrementLimit()}>limit -1</button>
        </div>
    );
};

export {PostsPage};
