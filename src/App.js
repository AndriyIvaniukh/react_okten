import React from 'react';
import {CountersRender, HomeAdditional, LecturesExample} from "./components";



const App = () => {


    return (
        <div>
          <div>
              <h2>Lecture Example</h2>
              <LecturesExample/>
              <hr/>
              <h2>HomeWork counters</h2>
              <CountersRender/>
              <hr/>
              <h2>Home Additional</h2>
              <HomeAdditional/>
          </div>
        </div>
    );
};

export {App};