import { children, useEffect, useState } from 'react'
import {CategoryContext} from './CategoryContext'

          
export function CategoryProvider({children}){
    const [catrgories, setCategories] = useState([])
    async function fetchCatrgory(){
        const data = await fetch('https://fakestoreapi.com/products/categories')
        setCategories(await data.json())
    }
    useEffect(() => {fetchCatrgory()},[])
    return(
        <CategoryContext.Provider value={{catrgories}}>
            {children}
        </CategoryContext.Provider>
    )
}