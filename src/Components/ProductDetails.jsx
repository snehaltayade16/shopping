import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import RatingStar from "../assets/star.png"
function ProductDetails(){
    const {id} = useParams()
    const {data} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)
    const products = data.find((item) => (item.id === Number(id)))
    console.log(products)
    return(
        <>
            <div className="w-full h-full flex p-5">
                <div className="w-2/5 aspect-square border">
                    <img src={products.image} className="h-full w-full"></img>
                </div>
                <div className="px-2.5">
                    <div className="border-b pb-5 mb-5">
                        <p className="text-2xl">{products.title}</p>
                        <p className="my-5 text-sm">{products.description}</p>
                        <div className="border flex items-center py-1.5 px-2.5 w-fit">
                            <p className="mr-1.5">{products.rating.rate}</p>
                            <img src={RatingStar} className="h-5 mr-2.5" /> | Rating 
                        </div>
                    </div>
                    <p className="mb-.25 text-2xl">RS. {products.price}</p>
                    <div className="flex items-center justify-center mt-2.5">
                        <button onClick={() => addToCart(products)}>Add to Cart</button>
                        <button className="ml-1.5">Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetails;