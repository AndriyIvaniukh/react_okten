import React, {useEffect} from 'react';

const Child = ({sayHello}) => {
    useEffect(()=>{
        console.log('update child component');
    },[sayHello])

    return (
        <div>
            <button onClick={sayHello}>say</button>
        </div>
    );
};

export {Child};