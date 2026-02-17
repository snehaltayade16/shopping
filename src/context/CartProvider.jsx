import { children , useState } from "react"
import { CartContext } from "./CartContext" 
export function CartProvider({children }){
    const [cart, setCart] = useState([])
    function addToCart(item){
        setCart(prev => {
            const idExits = prev.some((items) => items.id == item.id) 
                if(idExits == true) 
                    return prev; 
            return [...prev, item]
        })
    }
    function removeProduct(removeItem){
        console.log(removeItem)
        setCart(cart.filter((items) => items.id != removeItem.id))
    }
    return(
        <CartContext.Provider value={{addToCart, removeProduct, cart}}>
            {children }
        </CartContext.Provider>
    )
}
