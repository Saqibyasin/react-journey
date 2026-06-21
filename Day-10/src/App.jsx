import { useState } from "react";

function App(){

  const placeholderText1 = "Enter Diameter";
  const placeholderText2 = "Enter Length of Log";
  const [length , setLength] = useState("");
  const [diameter , setDiameter] = useState("");
  const [logs, setLog] = useState([])
  return (
    <div>
     <input type = "number" placeholder={placeholderText1} value = {diameter} onChange ={(e) => 
      {
      console.log(e.target.value)
      setDiameter(e.target.value)
      }
     } />
     <input type = "number" placeholder={placeholderText2} value = {length} onChange = {(e)=>{
      console.log(e.target.value)
      setLength(e.target.value)
     }} />
     <button onClick={() => {
  setLog([...logs, { id: Date.now(), length, diameter }])
  setDiameter("")   
}} >Add Log</button>
     <ul>{
        logs.map((log)=>{
          return <li key = {log.id}>diameter : {log.diameter}  length: {log.length} </li>
        })}
     </ul>
    </div>
  )
}
export default App;