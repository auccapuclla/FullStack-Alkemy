import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function Expenses() {
  return (
    <div className="">
      <Form type={"expenses"} />
      <Table type={"expenses"} />
    </div>
  );
}

export default Expenses;
