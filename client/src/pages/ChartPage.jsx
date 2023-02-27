import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import MyCosts from "../components/MyCosts";
import Chart from "../components/Chart";

const ChartPage = () =>{
 return(
     <>
         <div className="home">
             <Header />
             <div style={{display:"flex"}}>
                 <Dashboard />
                 <div style={{margin:"12px auto"}} >
                     <Chart />
                 </div>
             </div>
         </div>
     </>
 )
}

export default ChartPage