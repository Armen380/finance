import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CostForm from "../components/CostForm";

const AddCosts = () =>{
    return(
        <>
            <Header />
            <div style={{display:"flex"}}>
                <Dashboard />
                <div style={{margin:"0 auto"}}>
                    <CostForm />
                </div>
            </div>

        </>
    )
}

export default AddCosts