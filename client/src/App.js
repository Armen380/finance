import './App.css';
import { Route, Routes} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Main from "./pages/Main";
import AddCosts from "./pages/AddCosts";
import AddCategory from "./pages/AddCategory";
import CostDetail from "./pages/CostDetail";
import ChartPage from "./pages/ChartPage";

function App() {
    const token = sessionStorage.getItem("token")


    if(!token){
        return (
            <Routes>
                <Route path="/" element={<Registration />}/>
                <Route path="/login" element={<Login/>} />
            </Routes>
        )
    }else{
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Registration />}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/main" element={<Main />}/>
                    <Route path="/addCosts" element={<AddCosts />} />
                    <Route path="/addCategory" element={<AddCategory />} />
                    <Route path="/charts" element={<ChartPage />} />
                    <Route path="/cost/:id"  element={<CostDetail />} />
                </Routes>
            </div>
        );
    }
}


export default App;
