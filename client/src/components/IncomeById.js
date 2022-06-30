import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = "http://localhost:3001";

// alert(`fetching data from ${type}`);

function IncomeById({ type = "income" }) {
  const BASE_URL = "http://localhost:3001";
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();
  console.log(id);
  console.log(`${BASE_URL}/${type}/${id}`);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/${type}/${id}`)
      .then((response) => console.log(response));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/${type}`, { description, amount, date })
      .then(() => console.log("sucess"));
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
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

            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default IncomeById;
