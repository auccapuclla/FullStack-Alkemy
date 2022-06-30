import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Form.css";

function Form({ type }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`fetching data from ${type}`);
  };
  return (
    <div className="container">
      <div className="form">
        <h4>Enter new {type}</h4>
        <form>
          <div class="container">
            <label for="uname">
              <b>Description</b>
              <input
                type="text"
                placeholder="Enter Description"
                name="uname"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
            <label for="uname">
              <b>Date</b>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="text"
                placeholder="Enter Date"
                name="uname"
                required
              />
            </label>
            <label for="uname">
              <b>Amount</b>
              <input
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name="uname"
                required
              />
            </label>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
