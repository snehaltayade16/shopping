
import { CartContext  } from "../context/CartContext";
import {Link} from 'react-router-dom'
import { useContext } from "react";
function ProductsCards({data, isLoading}){
    const {addToCart} = useContext(CartContext)
    
    // Add to cart function
    return(
       <>
        {
            data.length == 0  ? <div className="w-full h-full flex items-center justify-center">Loading....</div> 
                : <div className="w-full h-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                    {
                        data?.map((item) => (
                            <div className="aspect-[2/3] flex flex-col p-2.5 rounded-lg border" key={item.id}>
                                <Link to={`/productDetails/${item.id}`}>
                                    <div className="w-full h-52 rounded-md border">
                                        <img src={item.image} className="h-full w-full"/>
                                    </div>
                                </Link>
                                <div className="flex flex-grow flex-col justify-between">
                                    <div>
                                        <p title={item.title}  className="truncate text-lg">{item.title}</p>
                                        <p title={item.description} className="truncate text-sm">{item.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p>RS. {item.price}</p>
                                        <div className="cursor-pointer" onClick={(e) => {  e.stopPropagation(), addToCart(item)}}><p>Add to cart</p></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        }
       </>

    )
}
export default ProductsCards;