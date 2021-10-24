import { Fab, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function FormArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const clickHandler = () => {
    addNote(note);
    setNote({
      title: "",
      content: "",
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
