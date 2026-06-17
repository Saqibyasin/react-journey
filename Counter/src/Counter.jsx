import React, {useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    function handleDecrement(){
        if(count > 0){
            setCount(count - 1);
        }
    }
function handleIncrement(){
    setCount(count + 1);
}
function handleReset(){   
     setCount(0);
}

    return(
        <>  
        <h1>Counter: {count}</h1>
        <button onClick = {handleIncrement} >Increment</button>
        <button onClick = {handleDecrement} >Decrement</button>
        <button onClick = {handleReset} >Reset</button>
        </>
    )
}

export default Counter;