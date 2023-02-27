import "../css/dashboard.css"
import chart from "../img/cost.png"
import img from "../img/save-money.png"
import {Link,NavLink} from "react-router-dom";
import addCat from "../img/add.png"
import add from "../img/add-to-basket.png"
const Dashboard = () =>{
    return(
        <>
            <div className="dashboard">
                <NavLink to="/main"className={({isActive})=> (isActive ? "active" : "item")}>
                    <p></p>
                    <img src={img} alt=""/>
                    <p>Իմ Ծախսերը</p>
                </NavLink>
                <NavLink to="/charts" className={({isActive})=> (isActive ? "active" : "item")}>
                    <p></p>
                    <img src={chart} alt=""/>
                    <p>Ծախսերի գրաֆիկ</p>
                </NavLink>
                <NavLink to="/addCosts"className={({isActive})=> (isActive ? "active" : "item")}>
                    <p></p>
                    <img src={add} alt=""/>
                    <p>Ավելացնել ծախս</p>
                </NavLink>
                <NavLink to="/addCategory"className={({isActive})=> (isActive ? "active" : "item")}>
                    <p></p>
                    <img src={addCat} alt=""/>
                    <p>Ավելացնել ծախսի տեսակ</p>
                </NavLink>
            </div>
        </>
    )
}
export default Dashboard