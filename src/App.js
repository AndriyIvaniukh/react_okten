import React, {useReducer} from 'react';

const init = (initCount) => {
    return {
      counter1: initCount,
      counter2: initCount
    }
}

const reducer = (state, action) =>{
  switch (action.type){
    case 'inc':
      return {...state, counter1: state.counter1++};
    case 'dec':
      return {...state, counter1: state.counter1--};
    case 'reset':
      return {...state, counter1: action.payload};
  }

}

const App = () => {

    const [state,dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
          <div>
            {state.counter1}
            <button onClick={()=>dispatch({type: 'inc'})}>inc</button>
            <button onClick={()=>dispatch({type: 'dec'})}>dec</button>
            <button onClick={()=>dispatch({type: 'reset', payload: 0})}>reset</button>
          </div>
        </div>
    );
};

export {App};