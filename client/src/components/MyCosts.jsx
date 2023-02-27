import axios from "axios";
import {useState,useEffect} from "react";
import CostCart from "./CostCart";
import IsLoading from "./IsLoading";
import "../css/costs.css"
import {Link} from "react-router-dom";
const MyCosts = () =>{
    const [data,setData] = useState()
    const token = sessionStorage.getItem("token")

    useEffect(  () =>{
        axios.get("http://localhost:4444/category/categories",{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setData(res.data)
        })
    },[])

    return data ? data.map((el)=>{
        return(
            <div key={el._id} className="carts">
                <Link to={`/cost/${el._id}`} >
                    <CostCart  name={el.name} id={el._id}    />
                </Link>
            </div>
        )
    }) : <IsLoading />
}
export default MyCosts