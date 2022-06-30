import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import axios from "axios";
const Table = ({ type }) => {
  // Deletes a movement
  const BASE_URL = "http://localhost:3001";
  const [fetchedData, setFetchData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${type}`)
      .then((response) => setFetchData(response.data));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${type}/${id}`).then(() => console.log("sucess"));
  };

  return (
    <div className="container">
      <h3>Summary</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
          {fetchedData ? (
            fetchedData.map((elem) => (
              <tr key={elem.id}>
                <td>{elem.description}</td>
                <td>{elem.date}</td>
                <td>{elem.amount}</td>
                <td>
                  <Link to={`/${type}/${elem.id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => handleDelete(elem.id)}>Delete</button>
                </td>
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

export default Table;
