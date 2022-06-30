import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table.css";
import axios from "axios";
const Table = ({ data, type }) => {
  // Deletes a movement
  const BASE_URL = "http://localhost:3002";
  const [fetchedData, setFetchData] = useState([]);
  axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
    const persons = res.data;
    this.setState({ persons });
  });

  useEffect(() => {
    axios
      .delete(`${BASE_URL}/${type}`)
      .then((response) => console.log(response));
    // fetch("https://dog.ceo/api/breeds/image/random")
    // .then(response => response.json())
    //     // 4. Setting *dogImage* to the image url that we received from the response above
    // .then(data => setDogImage(data.message))
  }, []);

  const handleDelete = (id) => {
    const element = document.querySelector("#delete-request .status");
    axios
      .delete(`${BASE_URL}/${type}/${id}`)
      .then(() => (element.innerHTML = "Delete successful"));
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
          {data ? (
            data.map((elem) => (
              <tr>
                <td>{elem.description}</td>
                <td>{elem.date}</td>
                <td>{elem.amount}</td>
                <td>
                  <Link to={`/income/${elem.id}`}>
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
