import MyCosts from "../components/MyCosts";
import "../css/home.css"
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
const Main = () =>{
    return(
        <>
            <div className="home">
                <Header />
                <div style={{display:"flex"}}>
                    <Dashboard />
                    <div className="costs">
                        <MyCosts  />
                    </div>
                </div>
            </div>




        </>
    )
}
export default Main