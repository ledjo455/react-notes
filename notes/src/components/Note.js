import { Button, Paper } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, id, delNote }) {
  const clickHandler = () => {
    delNote(id);
  };
  return (
    <Paper className="note-paper">
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} className="delete-button">
        <DeleteIcon className="delete-button-color" />
      </Button>
    </Paper>
  );
}

export default Note;
