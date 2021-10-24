import React from "react";
import Paper from "@material-ui/core/Paper";
function Header() {
  return (
    <Paper elevation={3} square className="paper-header">
      <h1 style={{ fontWeight: 100 }} className="site-name">
        React App
      </h1>
      <img
        src="https://icons.iconarchive.com/icons/bokehlicia/pacifica/256/google-keep-icon.png"
        alt="logo"
      ></img>
    </Paper>
  );
}

export default Header;
