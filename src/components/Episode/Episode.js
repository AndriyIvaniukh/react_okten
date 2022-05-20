import React from 'react';
import css from "./Episode.module.css"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {episodeActions} from "../../redux";

const Episode = ({episode:{name, air_date, episode, characters}}) => {

    const navigate = useNavigate();
const dispatch = useDispatch();

    const toCharacters =()=> {
        dispatch(episodeActions.currentEpisode({episodeName: name}));
        navigate('/characters', {state: characters});

    }

    return (
        <div className={css.episode} onClick={()=> toCharacters()}>
            <h1>{name}</h1>
            <h2>{air_date}</h2>
            <h2>{episode}</h2>
        </div>
    );
};

export {Episode};