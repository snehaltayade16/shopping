import { useState } from "react"
import { useEffect } from "react"

function useFetchData(url){
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            const data =  await fetch(url)
            if(data.status == 200)
            {
                setData(await data.json())
                setLoading(false)
            }
        }
        getData()
    },[url])
    return {data, loading}
}

export default useFetchData;