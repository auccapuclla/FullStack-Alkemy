import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // Header State
  const [movements, setMovements] = useState([]);
  const [consult, setConsult] = useState(true);

  return (
    <div className="topnav">
      <a className="active" href="#home">
        Wallet Tracker
      </a>
      <a href="#news">Income</a>
      <a href="#contact">Expenses</a>
      <a href="#about">Logout</a>
    </div>
  );
}

export default Navbar;
