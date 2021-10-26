import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function FormArea({ addNote }) {
  const d = new Date();
  const [note, setNote] = useState({
    title: "",
    content: "",
    importance: "",
    date: d.getFullYear(),
    shigjeta: "",
  });

  const clickHandler = () => {
    addNote(note);
    setNote({
      title: "",
      content: "",
      importance: "",
      date: d.getFullYear(),
      shigjeta: "",
    });
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };
  return (
    <Paper className="form-area">
      <form>
        <TextField
          name="title"
          value={note.title}
          onChange={changeHandler}
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          name="content"
          value={note.content}
          onChange={changeHandler}
          label="Content"
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
        />
        <TextField
          name="importance"
          value={note.importance}
          onChange={changeHandler}
          label="Importance"
          multiline
          rows={2}
          fullWidth
          autoComplete="off"
        />
        <select name="shigjeta" value={note.shigjeta} onChange={changeHandler}>
          <option>None</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
        </select>{" "}
        <br />
        <br />
        <Fab
          onClick={clickHandler}
          className="addbutton"
          style={{ marginTop: "20px" }}
        >
          <AddIcon></AddIcon>
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
