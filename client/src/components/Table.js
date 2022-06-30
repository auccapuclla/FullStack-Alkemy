import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const Table = ({
  movements = [{ id: 10, concept: "d", date: "das", type: "das" }],
  setConsult,
}) => {
  if (movements.length === 0) {
    return null;
  }

  // Deletes a movement
  const removeMovement = (id) => {
    // axiosClient
    //   .delete(`/movements/${id}`)
    //   .then((res) => {
    //     setConsult(true);
    //   })
    //   .catch((error) => console.log(error));
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
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
            <td>
              <button>Update</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
