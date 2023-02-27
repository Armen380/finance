import "../css/login.css"
import {useState} from "react";
import axios from "axios";
import Main from "./Main";
import img from "../img/account.png"
import {Link, redirect} from "react-router-dom";
 const Login = () =>{
     const [userName,setUserName] = useState()
     const [password,setPassword] = useState()
     const [token,setToken] = useState()
     const [message,setMessage] = useState()
     const user = {
         username:userName,
         password:password
     }
     if(token){
         sessionStorage.setItem("token",token)
     }
     const isLogin = sessionStorage.getItem("token")
     if(isLogin){
        return <Main  />
     }
    return(
        <>
            <div className="login_container">
                <img src={img} alt=""/>
                <div className="login">
                    <h2>Մուտք գործեք</h2>
                    <form action="">
                        <input onChange={(event)=>{
                            setUserName(event.target.value)
                        }} type="text" placeholder="գրեք ձեր մուտքանունը"/>
                        <input onChange={(event)=>{
                            setPassword(event.target.value)
                        }} type="password" placeholder="գրեք ձեր գաղտնաբառը"/>
                        <p>{message ? message : " "}</p>
                        <button type="button" onClick={()=>{
                            axios.post("http://localhost:4444/api/auth/login",user,{
                                headers:{
                                    'Content-Type': 'application/json'
                                }
                            }).then((res)=>{
                                setToken(res.data.token)
                                setMessage(res.data.message)
                            })
                        }} >Մուտք գործեք</button>
                    </form>
                    <Link to="/" >Գրանցում</Link>
                </div>
            </div>

        </>
    )
 }

 export default Login