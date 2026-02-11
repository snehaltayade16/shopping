import { useState } from "react"
import { useEffect } from "react"

function useFetchData(url){
    const[productData, setData] = useState([])
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        async function getData(){
            const data =  await fetch(url)
            console.log('custom hook',data)
            if(data.status == 200)
            {
                console.log('res 200')
                setData(await data.json())
                setLoading(false)
            }
        }
        getData()
    },[url])
    return {productData, loading}
}

export default useFetchData;