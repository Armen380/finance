import axios from "axios";
import {useEffect,useState} from "react";
import "../css/costForm.css"
const CostForm = () =>{
    const [categories, setCategories] = useState()
    const [categoryId,setCategoryId] = useState()
    const [title,setTitle] =  useState()
    const [price,setPrice] =  useState()
    const [message,setMessage]  = useState()
    const token = sessionStorage.getItem("token")

    useEffect(  () =>{
        axios.get("http://localhost:4444/category/categories",{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setCategories(res.data)
        })
    },[])

    const data = {
        title:title,
        price:price,
        categoryId:categoryId
    }
    const add = () =>{
        axios.post(`http://localhost:4444/main/addPost`,data,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setMessage(res.data)
            console.log(res)
        })
    }
    return(
        <>
            <div className="costForm">
                <form className="costForm" action="">
                    <select onChange={(event)=>{
                        setCategoryId(event.target.value)
                    }} name="" id="">
                        <option value="">Ընտրեք ծախսի կատեգորիան</option>
                        {categories ? categories.map((el,index)=>{
                            return(
                                <option key={index} value={el._id}>{el.name}</option>
                            )
                        }): " no items found"}
                    </select>
                    <input placeholder="Գրեք ծախսի անունը" onChange={(event)=>{
                        setTitle(event.target.value)
                    }} type="text"/>
                    <input placeholder="Գրեք ծախսի գինը" onChange={(event)=>{
                        setPrice(event.target.value)
                    }} type="number"/>
                    <button type="submit" onClick={()=>{
                        add()
                    }}>Ավելացնել Ծախս</button>
                </form>

            </div>

        </>
    )
}

export default CostForm