import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  // Header State
  return (
    <div className="topnav">
      <a className="active" href="">
        <Link to={`/`}>Wallet Tracker</Link>
      </a>
      <a href="">
        <Link to={`/income`}>Income</Link>
      </a>
      <a href="">
        <Link to={`/expenses`}>Expenses</Link>
      </a>
      <a href="/">
        <Link to={`/`}>Log Out</Link>
      </a>
    </div>
  );
}

export default Navbar;
