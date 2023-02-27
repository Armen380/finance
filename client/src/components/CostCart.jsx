import "../css/cart.css"
import axios from "axios";
import {useEffect,useState} from "react";
import IsLoading from "./IsLoading";
const CostCart = (props) =>{
    const [data,setData] = useState()
    const token = sessionStorage.getItem("token")

    useEffect(  () =>{
        axios.get(`http://localhost:4444/main/postsPrice/${props.id}`,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setData(res.data)
        })
    },[])
    if(data){
        return (
            <>
                <div className="cart">
                    <h2>{props.name}</h2>
                    <h3>{data.price} դրամ</h3>
                </div>
            </>
        )
    }else{
        return " "
    }

}

export default CostCart