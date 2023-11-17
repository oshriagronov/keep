import React from 'react';
import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Input from './input.jsx';
import Note from "./note.jsx"
import notes from "../notes.js"



function App(){
    const [notesArray, setNotesArray] = React.useState(notes);


    function addNote(newNote){
        setNotesArray(prevNotes => [...prevNotes, newNote]);
    }

    function deleteNote(id){
        setNotesArray(notesArray.filter((notes, index) => index !== id));

    }
    return(
    <div>
        <Header />
        <div className="input-section">
            <Input onAdd={addNote}/>
        </div>
        <div className="box">
            {notesArray?.map((note, index) => (
                <Note 
                key={index} 
                id={index} 
                onDelete={deleteNote}
                title={note.title}
                content={note.content}    
                />
                ))}
        </div>
        <Footer />
    </div>);
}

export default App;