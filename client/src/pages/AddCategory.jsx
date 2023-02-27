import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CategoryForm from "../components/CategoryForm";
import "../css/main.css"

const AddCategory = () =>{
    return(
        <>
            <Header />
            <div style={{display:"flex"}}>
                <Dashboard />
                <div style={{margin:"0 auto"}}>
                    <CategoryForm />
                </div>
            </div>
        </>
    )
}

export default AddCategory