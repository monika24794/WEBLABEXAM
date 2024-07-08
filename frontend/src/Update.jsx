import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateTv() {
  const { id } = useParams();
  const [modelname, setModelName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getTv/" + id)
      .then((result) => {
        console.log(result);
        setModelName(result.data.modelname);
        setBrand(result.data.brand);
        setPrice(result.data.price);
        setSize(result.data.size);
      })

      .catch((error) => console.log(error));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateTv/" + id, {
        modelname,
        brand,
        price,
        size,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-info justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Tv</h2>
          <div className="mb-2">
            <label for="modelname">ModelName:</label>
            <input
              type="text"
              id="modelname"
              name="modelname"
              required
              value={modelname}
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
              value={brand}
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
              value={price}
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
              value={size}
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

export default UpdateTv;