import axios from "axios";
import { useNavigate, useParams } from "react-router"

export const Delete=()=>{
 const params=useParams();
 const navigate=useNavigate();
 axios.delete(`http://localhost:5000/delete/${params.id}`)
 .then(dat=>{
    alert("deleted successfully");
    navigate("/");
 }
 )
 .catch(er=>console.log(er))
}