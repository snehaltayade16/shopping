function ProductsCards({cardData, isLoding}){
    console.log('data recive',cardData,isLoding)
    return(
        isLoding == true ? 
        <div className="w-full h-full flex items-center justify-center">Loading.....</div> 
        : <div className="w-full h-full grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {
                cardData.productData?.map(() => (
                    <div className="aspect-[2/3] flex flex-col p-2.5 rounded-lg">
                        <div className="w-full h-52 rounded-md"></div>
                        <div className="flex-1"></div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductsCards;