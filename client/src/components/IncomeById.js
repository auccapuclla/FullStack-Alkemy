import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";

function IncomeById() {
  const { id } = useParams();
  return <div className="">Balance Id</div>;
}

export default IncomeById;
