import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {Provider} from "react-redux";
import {store} from "./redux";
import {unstable_HistoryRouter as BrowserRouter} from "react-router-dom";

import {history} from './services/axios.service'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);
