import axios from "axios";
import { useState } from "react"
import { useNavigate,Link } from "react-router";

export const Add=()=>{
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
       e.preventDefault();
       console.log(obj);
       axios.post("http://localhost:5000/add/",obj)
       .then(res=>{
           alert("added successfully")
           console.log(obj)
           navigate("/")
       }
       )
       .catch(er=>console.log(er))
    }
    const [obj,setobj]=useState({
        name:"",
        quantity:0,
        price:0
    })
  return (
    <>
    <form onSubmit={handlesubmit} className="simple-form">
          <input type="text" placeholder="enter item name" name="name" onChange={(e)=>{setobj(prev=>({...prev,name:e.target.value}))}}/>
          <input type="text" placeholder="enter quantity" name="quantity" onChange={(e)=>{setobj(prev=>({...prev,quantity:e.target.value}))}}/>
          <input type="text" placeholder="enter price" name="price" onChange={(e)=>{setobj(prev=>({...prev,price:e.target.value}))}}/>
          <button className="btn btn-add">Add Item</button>
    </form>
    <Link to="/"><button className="btn btn-back">Go Back</button></Link>
</>
  )
}