import { useContext, useEffect, useRef, useState } from "react" 
import { ProductContext } from "../context/ProductContext"
function Search(){
    const {filtereProduct} = useContext(ProductContext)
    const [searchTerm, setSearchTerm] = useState(null)
    useEffect(() => {
        const timmer = setTimeout(() => {filtereProduct(searchTerm)},1000)
        return () => clearTimeout(timmer)
    },[searchTerm])
    return(
        <input placeholder="Serach Products"  onChange={(e) => setSearchTerm(e.target.value) } className="w-full p-1.5"></input>
    )
}
export default Search