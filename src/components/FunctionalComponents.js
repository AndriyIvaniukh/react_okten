import React, {useEffect, useState} from 'react';

const FunctionalComponents = ({ssss}) => {

    console.log('constructor');

    const [state,setState] = useState({a:5, b:25});

    useEffect(()=>{
        console.log('component did mount');

        return ()=>{
            console.log('component will unmount')
        }
    },[]);

    useEffect(()=>{
        console.log('component did update');

    },[ssss, state]);


    const inc = () => {
        setState({...state, a: state.a + 1});
    }

    return (
        <div>
            <div>
                {console.log('render')}
                <div>Hello from functional Component</div>
                <div> Props: {ssss}</div>
                <div>
                    A: {state.a}
                    <button onClick={() => inc()}>inc A</button>
                </div>
                <div> B: {state.b}</div>
            </div>
        </div>
    );
};

export {FunctionalComponents};