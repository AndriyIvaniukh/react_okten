import React from 'react';
import {UseMemo} from "./components/UseMemo/UseMemo";
import {Main} from "./components/UseCAllBack/Main";

const App = () => {
    return (
        <div>
          <UseMemo/>
            <Main/>
        </div>
    );
};

export {App};