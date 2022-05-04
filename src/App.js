import React from 'react';
import {Counters, Users} from "./components";

const App = () => {
    return (
        <div>
            <Counters/>
            <hr/>
            <Users/>
        </div>
    );
};

export {App};