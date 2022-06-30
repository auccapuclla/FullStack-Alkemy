import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function Income() {
  // Header State

  const data = [
    { id: 1, description: "food", date: "junary", amount: 400 },
    { id: 2, description: "food", date: "febraury", amount: 100 },
    { id: 20, description: "food", date: "march", amount: 900 },
  ];
  return (
    <div className="">
      <Form type={"Income"} />
      <Table data={data} />
    </div>
  );
}

export default Income;
