import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function Expenses() {
  return (
    <div className="">
      Expenses
      <Form />
      <Table />
    </div>
  );
}

export default Expenses;
