import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = "https://alchemy-fs-backend.herokuapp.com";

function IncomeById({ type = "income" }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/${type}/${id}`).then((response) => {
      setDescription(response.data.description);
      setAmount(response.data.amount);
      setDate(response.data.date);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${BASE_URL}/${type}/${id}`, { description, amount, date })
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
