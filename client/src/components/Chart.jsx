import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy"
import axios from "axios";
import {useEffect,useState} from "react";



ReactFC.fcRoot(FusionCharts, Charts, CandyTheme);
const Chart = () =>{

    const [data,setData] = useState()
    const [categoryId,setCategoryId] = useState()
    const [price,setPrice] = useState()
    const token = sessionStorage.getItem("token")
    useEffect(  () =>{
        axios.get("http://localhost:4444/category/categories",{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setData(res.data)
        })
    },[])
    const chartData = []

    const getPrice = (id) =>{
        axios.get(`http://localhost:4444/main/postsPrice/${id}`,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res)=>{
            setPrice(res.data.price)
            setCategoryId(res.data.categoryId)
        })
    }

    if(data ){
        data.map((el)=> {
            getPrice(el._id)
            if(categoryId == el._id){
                el.price = price
            }

            chartData.push({
                "label": el.name,
                "value": el.price
            })
        })
    }

    const chartConfigs = {
        type: "column2d", // The chart type
        width: "900", // Width of the chart
        height: "500", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                //Set the chart caption
                caption: "Ծախսերի գրաֆիկ",
                //Set the x-axis name
                xAxisName: "Ծախսեր",
                theme: "candy"
            },
            // Chart Data
            data: chartData
        }
    };

    return <ReactFC {...chartConfigs} />;

}

export default Chart