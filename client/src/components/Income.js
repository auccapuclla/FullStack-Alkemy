import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";

function Income() {
  return (
    <div className="">
      <Form type={"income"} />
      <Table type={"income"} />
    </div>
  );
}

export default Income;
