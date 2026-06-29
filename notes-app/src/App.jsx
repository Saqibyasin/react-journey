import { useState } from "react";

function App(){
 const[inputText, setInputText] = useState("")
 const[noteText, setNoteText] = useState([]);
 function handleClick(){
  if(!inputText.trim()){
        return;
  }
  else{
      setNoteText([...noteText,{id:Date.now(), noteText : inputText}])
      setInputText("");
  }
 }
 function handleDelete(id){
      setNoteText(noteText.filter((note)=>{
        return note.id !== id;
      }))
 }

  return (
    <div>
<input type="text" value = {inputText} onChange={(e)=>{
              setInputText(e.target.value);
              
}} />
    <button onClick={handleClick}>
                  Add Note</button>
      <ul>
        {
          noteText.map((note)=>{
            return <li 
            key = {note.id}>
              {note.noteText}
              <button onClick={()=>{handleDelete(note.id)}} >Delete</button>
            
            </li>
          })
        }
      </ul>

    </div>
  )
}


export default App;