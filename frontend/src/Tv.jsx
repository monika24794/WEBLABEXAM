import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tv() {
  const [tv, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setUsers(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteTv/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-warning justify-content-center align-items-center">
      <div className="w-50 bg-white rouded p-3">
        <h1>TV SHOWROOM</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ModelName</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Size</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {tv.map((tv) => (
              <tr>
                <td>{tv.modelname}</td>
                <td>{tv.brand}</td>
                <td>{tv.price}</td>
                <td>{tv.size}</td>
                <td>
                  <Link to={`/update/${tv._id}`} className="btn btn-success">
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(tv._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/addTv" className="btn btn-success">
          Add +
        </Link>
      </div>
    </div>
  );
}

export default Tv;