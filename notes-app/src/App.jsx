import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState("")
  const [noteText, setNoteText] = useState([]);
  const [search, setSearch] = useState("");

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
            return <li
              key={note.id}>
              {note.noteText}
              <button onClick={() => { handleDelete(note.id) }} >Delete</button>

            </li>
          })
        }
      </ul>
      { search && !filteredNotes.length && <p>No notes found</p>}

    </div>
  )
}


export default App;