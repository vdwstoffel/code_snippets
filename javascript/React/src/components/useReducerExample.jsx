import React, { useReducer } from "react";

function UseReducerExample () {

    // reducer function that will be used for the useReducer hook
    const reducerFn = (state, action) => {
        // takes a object as action argument
        if (action.type === 'increase') {
            return state += 1 // should return a new state
        } else {
            return state +- 1
        }
    }

    // const [stateSnapshot, func_to_dispatch_new_action] = useReducer(triggeredFunction, initialState) 
    const [counter, dispatch] = useReducer(reducerFn, 0); // useReducer hook with the reducer function

    const increase = () => {
        dispatch({type: 'increase'});
    }

    const decrease = () => {
        dispatch({type: 'decrease'});
    }

    return (
        <React.Fragment>
        <h1>Counter: {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </React.Fragment>
    )
}

export default UseReducerExample;