import { useState } from "react"
import { useEffect } from "react"

function useFetchData(url){
    const[productData, setData] = useState(null)
    const[loading, setLoading] = useState(true)
    console.log(url)
    useEffect(() => {
        async function getData(){
            const data =  await fetch(url)
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