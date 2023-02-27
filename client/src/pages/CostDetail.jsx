import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import "../css/detailCart.css"
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import IsLoading from "../components/IsLoading";
import CostDetailCart from "../components/CostDetailCart";

const CostDetail = () =>{
    let {id,limit,page} = useParams()
    const [data,setData] = useState()
    const [allPrice, setAllPrice] = useState()
    const token = sessionStorage.getItem("token")

    useEffect(  () =>{
        axios.get(`http://localhost:4444/main/post/${id}?limit=12&&page=${1}`,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setData(res.data.data)
            setAllPrice(res.data.price)
        })
    },[])

    return (
        <>
            <Header/>
            <div style={{display:"flex"}}>
                <Dashboard />
                <div className="costList">
                    {
                        data ? data.map((el,index)=>{
                            return(
                                <>
                                    <div key={index} className="detailCart">
                                        <CostDetailCart title={el.title} price={el.price} createdAt={el.createdAt.slice(0,10)} id= {el._id} />
                                    </div>
                                </>
                            )
                        }): <IsLoading />
                    }
                    <h4> Ընդհանուր՝ {allPrice ? allPrice : 0} դրամ</h4>
                </div>
            </div>

        </>

    )


}
export default CostDetail