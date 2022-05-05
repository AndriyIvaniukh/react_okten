import React from 'react';
import Forms from "./components/Forms";
import {Cats, Dog} from "./components";

const App = () => {
  return (
      <div>
          <div>
              <Forms/>
          </div>
          <div style={{display: "flex", justifyContent: "space-around"}}>
              <Cats/>
              {/*<Dogs/>*/}
          </div>
      </div>
  );
};

export default App;
