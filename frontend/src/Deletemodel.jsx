import React,{useState , useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
function DeleteModel() {
    const {id} = useParams()
    const [name,setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate = useNavigate()
    .catch(error => console.log(error)) 
 }
const Update = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:3001/updateUser/'+id, {id ,modelName,brand,price,size})
    .then(res => {
        console.log(res)
        navigate('/')
    })
    .catch(err => console.log(err));

}
  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
    <h2>Delete</h2>      
</div>
</div>
  )


export default DeleteModel;