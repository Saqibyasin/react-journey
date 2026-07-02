import React from 'react';
import { useState,useEffect } from 'react'

function App() {
  const [count, setCount] = useState(
  parseInt(localStorage.getItem("count")) || 0
  )

  useEffect(() => {
    localStorage.setItem("count",count);
  },[count]);
  
 return(
  <div>
        <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  </div>
 )
}
export default App;