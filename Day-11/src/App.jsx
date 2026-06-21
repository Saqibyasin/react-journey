import { useState, useEffect } from "react";
function App(){
  const[count, setCount] = useState(0);
  useEffect(() => {
  console.log("Component rendered")
})  

useEffect(() => {
  console.log(`Count changed to: ${count}`)
}, [count]) 

useEffect(() => {
  console.log("Component mounted")
}, [])  
  return (
    <>
    <button onClick = {()=> {setCount(count+1) }}> count:{count}</button>
    </>
  );
}
export default App;