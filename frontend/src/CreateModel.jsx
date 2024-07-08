import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 function Createmodel() {
    const [name,setName]=useState()
    const [Model, setmodel]=useState()
    const [brand, setbrand]=useState()

    const navigate = useNavigate()
    const Submit=(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3001/CreateTv', {name, Brand, Size})
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
    <form onSubmit={Submit}>
    <h2>ADD Tv</h2>
            <div className='mb-2'>
            <label for="name">modelname:</label>
            <input type="text" id="name" name="name" required 
            onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="Brand">Brand:</label>
            <input type="Brand" id="Brand" name="Brand" required
            onChange={(e)=>setBrand(e.target.value)}/>
            </div>
            <div className='mb-2'>
            <label for="age">Size:</label>
            <input type="number" id="Size" name="Size" required
            onChange={(e)=>setSize(e.target.value)}/>
            </div>
            <button className='btn btn-success'type="submit">Submit</button>
    </form>
</div>
</div>
  )
}

export default Createmodel;