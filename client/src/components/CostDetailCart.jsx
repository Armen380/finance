import axios from "axios";
import trash from "../img/trash.png"
import {useState} from "react";
const CostDetailCart = (props) =>{
    const token = sessionStorage.getItem("token")
    const deletePost = (id) =>{
        axios.delete(`http://localhost:4444/main/deletePost/${id}`,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            alert(res.data.message)
        })
    }
    return(
        <>
            <div></div>
            <p>{props.title}</p>
            <p>{props.price} դրամ</p>
            <p>{props.createdAt}</p>
            <button className="delete" onClick={()=>{
                deletePost(props.id)
            }}><img   src={trash} alt=""/></button>
        </>
    )
}

export default CostDetailCart