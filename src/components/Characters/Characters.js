import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {Character} from "../Character/Character";
import {characterService} from "../../services";

const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const {state} = useLocation();

    useEffect(()=>{
        characterService.getByCharacterList(state).then(({data}) => setCharacters(data))
    },[])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};