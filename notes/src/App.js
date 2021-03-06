import React, { useState } from "react";
import Footer from "./components/Footer";
import FormArea from "./components/FormArea";
import Header from "./components/Header";
import Note from "./components/Note";

export function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }

  function delNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          delNote={delNote}
          title={note.title}
          content={note.content}
          importance={note.importance}
          date={note.date}
          shigjeta={note.shigjeta}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
