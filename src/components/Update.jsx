import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams,Link } from "react-router"

export const Update=()=>{
    const navigate=useNavigate()
    const [obj,setobj]=useState({
            name:"",
            quantity:0,
            price:0
        })
    const params=useParams();
    useEffect(()=>{
   axios.get(`http://localhost:5000/${params.id}`)
    .then(arr=>setobj(arr.data))
    .catch(er=>console.log(er))
    },[])
const handlesubmit=(e)=>{
       e.preventDefault();
       console.log(obj);
       axios.put(`http://localhost:5000/update/${params.id}`,obj)
       .then(res=>{
           alert("updated successfully")
           console.log(obj)
           navigate("/")
       }
       )
       .catch(er=>console.log(er))
    }
    return(
        <>
        <form onSubmit={handlesubmit} className="simple-form">
          <input type="text" placeholder="enter item name" name="name" value={obj.name} onChange={(e)=>{setobj(prev=>({...prev,name:e.target.value}))}}/>
          <input type="text" placeholder="enter quantity" name="quantity" value={obj.quantity} onChange={(e)=>{setobj(prev=>({...prev,quantity:e.target.value}))}}/>
          <input type="text" placeholder="enter price" name="price" value={obj.price} onChange={(e)=>{setobj(prev=>({...prev,price:e.target.value}))}}/>
          <button className="btn btn-update">Update Item</button>
    </form>
    <Link to="/"><button className="btn btn-back">Go Back</button></Link>
        </>
    )
} 