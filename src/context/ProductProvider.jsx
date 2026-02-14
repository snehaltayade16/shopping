
import { useState } from "react";
import {ProductContext} from './ProductContext'

export function ProductProvider({children}){
    const[data, setData] = useState([])
    const[loading, setLoading] = useState(true)

    async function fetchData(url){
        try{
            const data =  await fetch(url)
            if(data.status == 200)
            {
                setData(await data.json())
                setLoading(false)
            }

        }catch(error){
            console.error(error)
            setLoading(false)  
        }finally{
            setLoading(false)  
        }
    }

    return(
        <ProductContext.Provider value={{data, loading, fetchData}}>
            {children}
        </ProductContext.Provider>
    )
}
