import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [noteText, setNoteText] = useState([]);
  const [search, setSearch] = useState("");
  const [editInput, setEditInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  function handleClick() {
    if (!inputText.trim()) {
      return;
    }
    else {
      setNoteText([...noteText, { id: Date.now(), noteText: inputText }])
      setInputText("");
    }
  }
  function handleDelete(id) {
    setNoteText(noteText.filter((note) => {
      return note.id !== id;
    }))
  }

  function handleEdit(id,text){
    setEditingId(id);
    setEditInput(text);
    
  }
  function handleSave(id){
   setNoteText(noteText.map((note)=>{
    return (note.id===id)?{...note, noteText:editInput}: note;

   }))
   setEditInput('');
   setEditingId(null);
  }

  const filteredNotes = noteText.filter((note)=>{
    return note.noteText.toLowerCase().includes(search.toLowerCase());
  }

  )

  return (
    <div>
      <input placeholder="Enter Note" type="text" value={inputText} onChange={(e) => {
        setInputText(e.target.value);

      }} />

      <button onClick={handleClick}>
        Add Note</button>

      <input type="text" placeholder="Search Note" value={search} onChange={(e) => {
        setSearch(e.target.value);
      }
      } />
      <ul>
        {
          filteredNotes.map((note) => {
            return (editingId === note.id)? <li
              key={note.id}>
            <input type="text" value ={editInput} onChange={(e)=>{
              setEditInput(e.target.value);

            }} />
              
              <button onClick={()=>{handleSave(note.id)}}>Save</button>
              

            </li>:<li
              key={note.id}>
              {note.noteText}
              <button onClick={() => { handleDelete(note.id) }} >Delete</button>
              <button onClick={()=>{handleEdit(note.id,note.noteText)}}>Edit</button>
              

            </li>
          })
        }
      </ul>
      { search && !filteredNotes.length && <p>No notes found</p>}

    </div>
  )
}


export default App;