
import { useState } from "react";
import {ProductContext} from './ProductContext'

export function ProductProvider({children}){
    const [mainData, setMainData] = useState([])
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)

    async function fetchData(url){
        try{
            const data =  await fetch(url)
            if(data.status == 200)
            {
                const response = await data.json()
                setData(response)
                setMainData(response)
                setLoading(false)
            }

        }catch(error){
            console.error(error)
            setLoading(false)  
        }finally{
            setLoading(false)  
        }
    }

    function filtereProduct(search){
        console.log(search)
        if(search != null && search.length > 3)
        {
             setLoading(false)  
                const filteredData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
                setData(filteredData)

        }else{
            console.log('else')
             setLoading(false)  
             console.log(mainData)
            setData(mainData)
        }
    }

    return(
        <ProductContext.Provider value={{data, loading, fetchData, filtereProduct}}>
            {children}
        </ProductContext.Provider>
    )
}
