
function ProductsCards({cardData, isLoding, onAddToCartProduct}){
    // const [cartProducts, setCartProducts] = useState([])
    console.log('data recive',cardData,isLoding,onAddToCartProduct)
    // Add to cart function
    return(
        isLoding == true ? 
        <div className="w-full h-full flex items-center justify-center">Loading.....</div> 
        : <div className="w-full h-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {
                cardData.productData?.map((item) => (
                    <div className="aspect-[2/3] flex flex-col p-2.5 rounded-lg border" key={item.id}>
                        <div className="w-full h-52 rounded-md border">
                            <img src={item.image} className="h-full w-full"/>
                        </div>
                        <div>
                            <div>
                                <p title={item.title}  className="truncate text-lg">{item.title}</p>
                                <p title={item.description} className="truncate text-sm">{item.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>RS. {item.price}</p>
                                <div className="cursor-pointer" onClick={() => onAddToCartProduct(item)}><p>Add to cart</p></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductsCards;