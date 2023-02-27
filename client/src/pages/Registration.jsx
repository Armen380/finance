import img from "../img/login.png";
import {Link} from "react-router-dom";
import "../css/login.css"
import {useState} from "react";
import axios from "axios";

const Registration = () =>{
    const [userName,setUserName] = useState()
    const [password,setPassword] = useState()
    const [message,setMessage] = useState()

    const user = {
        username:userName,
        password:password
    }
    const addUser = async () =>{
        await axios.post("http://localhost:4444/api/auth/register",user).then((res)=>{
            setMessage(res.data.message)
            console.log(res.data.message)
        })
    }

    return(
        <>
            <div className="login_container">
                <img src={img} alt=""/>
                <div className="login">
                    <h2>Գրանցվեք</h2>
                    <form action="">
                        <input onChange={(event)=>{
                            setUserName(event.target.value)
                        }} type="text" placeholder="գրեք ձեր մուտքանունը"/>
                        <input onChange={(event)=>{
                            setPassword(event.target.value)
                        }} type="password" placeholder="գրեք ձեր գաղտնաբառը"/>
                        <p>{message ? message : " "}</p>
                        <button onClick={()=>{
                            addUser()
                        }} type="button" >Գրանցվեք</button>
                    </form>
                    <Link to="/login" >Մուտք գործեք</Link>
                </div>
            </div>
        </>
    )
}

export default Registration