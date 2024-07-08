import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddTv() {
  const [modelname, setModelName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addTv", { modelname, brand, price, size })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>ADD Tv</h2>
          <div className="mb-2">
            <label for="modelname">ModelName:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label for="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              required
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label for="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label for="size">Size:</label>
            <input
              type="number"
              id="size"
              name="size"
              required
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTv;