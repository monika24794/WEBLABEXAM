import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tv from "./Tv";
import AddTv from "./AddTv";
import UpdateTv from "./UpdateTv";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tv />}></Route>
          <Route path="/addTv" element={<AddTv />}></Route>
          <Route path="/update/:id" element={<UpdateTv />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;