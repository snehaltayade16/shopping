import Header from './Header'
import Filter from './filterOption'
import ProductsCards from './ProductsCards'
import { useState, useEffect } from 'react'

function Home(uiData,loading){
    console.log('tttttttttttt',uiData)
    
    // const [addProductsToCart, setAddProductsToCart] = useEffect(0)

   

    // function addToCart(selectedItems){
    //     setAddProductsToCart(prev => [...prev, selectedItems])
    // }

    // function applyFilter(item){
    //     console.log('appley filter',item)
    //     if(item != 0) {
    //         setUiData(productData.filter((item) => item.price == item))
    //     }else{
    //     setUiData(productData)
    //     }
    // }

    return(
        <>
            <section>
                <Header />
                <main className='flex flex-grow overflow-y-auto relative'>
                    <div className='absolute w-full h-full flex'>
                    <aside className="w-64 h-full overflow-y-auto p-2.5">
                        <div className='w-full h-full'>
                            <Filter />
                        </div>
                    </aside>
                        <ProductsCards cardData={uiData} isLoding={loading} />
                    </div>
                </main>
                <footer className='h-12 flex items-center justify-center'>
                    <p>Shopping Cart Website</p>
                </footer>
            </section>
        </>
    )
}
export default Home;