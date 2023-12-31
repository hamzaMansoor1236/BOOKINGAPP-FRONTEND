import axios from "axios";
import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
        
    useEffect(()=>{
        fetchData();
    
    },[url]);

    const fetchData=  async ()=>{
        setLoading(true);
        try {
            const res= await axios.get(url); 
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }


    const reFetch=  async ()=>{
        setLoading(true);
        try {
            const res= await axios.get(url); 
            setData(res.data);
            
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    return {data,loading,error}
}

export default useFetch;