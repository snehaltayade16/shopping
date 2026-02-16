import {CartContext} from '../context/CartContext.jsx'
import {useContext} from 'react'
import EmptyCart from '../assets/shopping.png'
import Delete from '../assets/delete.png'
function Cart () {
    const {cart,removeProduct} = useContext(CartContext)
    console.log(cart, removeProduct)
    return(
        <>
            {
                cart.length == 0 ? 
                <div className="h-full w-full flex items-center justify-center">
                    <div className="flex flex-col">
                        <img src={EmptyCart} />
                        <p className="text-center text-md">There is nothing in your bag</p>
                    </div>
                </div> :
                <div className="h-full w-full flex p-2.5 ">
                    <div className="flex-1 p-2.5">
                        <table className="w-full h-full">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quntity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                cart.map((items, index) => (
                                        <tr key={items.id} className="border-b">
                                            <td>{index + 1}</td>
                                            <td>{items.title}</td>
                                            <td>{items.price}</td>
                                            <td>{items.quantity}</td>
                                            <td><img src={Delete} className="h-6 cursor-pointer" onClick={() => removeProduct(items)}></img></td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="flex-1 p-5">
                        <div className="border h-fit rounded-md p-5">
                            <p className="text-center pb-5 border-b">Order Summary</p>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between my-5">
                                    <p>Items</p>
                                    <p>{cart.length}</p>
                                </div>
                                <div  className="flex items-center justify-between my-5">
                                    <p>Sub Total</p>
                                    <p>
                                        {
                                            cart.reduce((acc,items) => {return items.price + acc},0)
                                        }
                                    </p>
                                </div>
                                 <div  className="flex items-center justify-between my-5">
                                    <p>Shipping</p>
                                    <p>788</p>
                                </div>
                                 <div  className="flex items-center justify-between my-5">
                                    <p>Taxes</p>
                                    <p>788</p>
                                </div>
                                 <div  className="flex items-center justify-between my-5">
                                    <p>Coupun Discount</p>
                                    <p>788</p>
                                </div>
                               
                                <div  className="flex items-center justify-between my-5 border-b">
                                    <p className="py-5 ">Total</p>
                                    <p>788</p>
                                </div>
                                
                                <button>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart;