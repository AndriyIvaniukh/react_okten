import React, {useState} from 'react';
import {ClassComponent, FunctionalComponents} from "./components";


const App = () => {
    const [flag,setFlag] = useState(true);

    return (
        <div>
            {/*{flag && <ClassComponent ssss={'MyProps'}/>}*/}
            {flag && <FunctionalComponents ssss={'MyProps'}/>}
            <button onClick={()=>setFlag(!flag)}>Hide</button>
        </div>
    );
};

export default App;
