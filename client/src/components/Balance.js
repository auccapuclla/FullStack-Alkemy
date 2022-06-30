import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import axios from "axios";
const Balance = ({ type }) => {
  const BASE_URL = "http://localhost:3001";
  const [fetchedIncome, setFetchIncome] = useState([]);
  const [fetchedExpenses, setFetchExpenses] = useState([]);

  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get(`${BASE_URL}/balance`)
      .then((response) => setBalance(response.data.balance));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/expenses/latestExpenses`)
      .then((response) => setFetchExpenses(response.data.newExpenses));
    axios
      .get(`${BASE_URL}/income/latestIncome`)
      .then((response) => setFetchIncome(response.data.newIncome));
  }, []);
  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${type}/${id}`).then(() => console.log("sucess"));
  };

  return (
    <div className="container">
      <h3>Balance Summary: {balance} USD</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
          {fetchedIncome ? (
            fetchedIncome.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.description}</td>
                <td>{elem.date}</td>
                <td>{elem.amount}</td>
                <td>Income</td>
              </tr>
            ))
          ) : (
            <></>
          )}
          {fetchedExpenses ? (
            fetchedExpenses.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.description}</td>
                <td>{elem.date}</td>
                <td>{elem.amount}</td>
                <td>Expenses</td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Balance;
