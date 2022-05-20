import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../index"
import {episodeActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import css from "./Episodes.module.css"

const Episodes = () => {

    const {episodes, next, prev} = useSelector(state => state.episodes);
    const [query,setQuery] = useSearchParams({page:'1'});
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(episodeActions.getAll({page: query.get('page')}));
    }, [query.get('page')])

    return (
        <div>
            <div className={css.episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>) }
            </div>
            <button disabled={!prev} onClick={()=>setQuery({page: +query.get('page') - 1})}>prev</button>
            <button disabled={!next} onClick={()=>setQuery({page: +query.get('page') +1})}>next</button>
        </div>
    );
};

export {Episodes};