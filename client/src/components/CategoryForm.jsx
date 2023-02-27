import axios from "axios";
import {useState,useEffect} from "react";
import "../css/categoryForm.css"

const CategoryForm = () =>{
    const [name,setName] = useState()
    const [message,setMessage] = useState()
    const token = sessionStorage.getItem("token")

    const data = {
        name:name
    }
    const add = () =>{
            axios.post(`http://localhost:4444/category/addCategory`,data,{
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then((res)=>{
                setMessage(res.data)
            })
    }

    return(
        <>
            <div className="categoryForm">
                <form action="">
                    <input onChange={(event)=>{
                        setName(event.target.value)
                    }} placeholder="Գրեք Կատեգորիայի անունը" type="text"/>
                    <button type="submit" onClick={()=>{
                        add()
                    }}>Ավելացնել կատեգորիա</button>

                </form>
            </div>
        </>
    )
}

export default CategoryForm