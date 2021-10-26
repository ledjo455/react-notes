import { Button, Paper } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, importance, date, shigjeta, id, delNote }) {
  const clickHandler = () => {
    delNote(id);
  };
  return (
    <Paper className="note-paper">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <h2>{importance}</h2>
        <h1>{date}</h1>
        <h1>{shigjeta} m</h1>
      </div>
      <Button onClick={clickHandler} className="delete-button">
        <DeleteIcon className="delete-button-color" />
      </Button>
    </Paper>
  );
}

export default Note;
