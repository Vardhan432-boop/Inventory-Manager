import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router"
export const List=()=>{
    const [data,setdata]=useState([])
useEffect(()=>{
   axios.get("http://localhost:5000/")
  .then(items=>setdata(items.data))
  .catch(er=>console.log(er))
},[])
return(
    <>
    <h1>Sapthagiri General Store Items</h1>
    <div className="table-container">
        <table className="modern-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(el=>{
                        return(
                            <tr key={el._id}>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td>{el.quantity}</td>
                                <td>
                            <Link to={`/update/${el._id}`}><button className="btn btn-update">Update</button></Link>
                            <Link to={`/delete/${el._id}`}><button className="btn btn-delete">Delete</button></Link>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Link to="/add/"><button className="btn btn-add">Add Item</button></Link>    
    </div>
    </>
)
  
}