import React, { useState }from 'react'
import PropPytes from 'prop-types';

const CounterApp = ({value})=>{
    const [counter, setCounter]  = useState(value);

    // console.log(counter);
    // handleAdd
    // const handleAdd = (e)=> setCounter(counter++);
    const handleAdd = (e)=> setCounter((c)=>c+1);
    const handleSubstract = (e)=> setCounter((c)=>c-1);
    const handleReset = (e)=> setCounter((c)=>c=value);
    return <> 
        <h1>CounterApp</h1> 
        <h2> { counter } </h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubstract}>-1</button>
        <button onClick={handleReset}>reset</button>
    </>
}

CounterApp.propTypes = {
    value: PropPytes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;