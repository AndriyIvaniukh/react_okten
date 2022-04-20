import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

// export const MyContext = createContext(null);
//
// const value = {name: 'Max', age: 15};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<MyContext.Provider value={value}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    //</MyContext.Provider>
);
