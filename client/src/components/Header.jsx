import profile from "../img/profile.png"
import "../css/header.css"
import logo from "../img/logo.png"
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect,useState} from "react";

const Header = () =>{
    const [data,setData] = useState()
    const token = sessionStorage.getItem("token")

    useEffect(  () =>{
        axios.get("http://localhost:4444/api/auth/getMe",{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setData(res.data)
        })
    },[])

    if(data){
        return(
            <>
                <div className="header">
                    <img className="logo" src={logo} alt=""/>
                    <div className="header_content">
                        <h2>{data.username}</h2>
                        <img className="avatar" src={profile} alt=""/>
                        <Link to="/">
                            <button onClick={()=>{
                                sessionStorage.clear()
                            }}>  Ելք </button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }

}

export default Header