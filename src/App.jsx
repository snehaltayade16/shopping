import './App.css'
import useFetchData  from './customHooks/fetchData'
import Header from './Components/Header'
import Filter from './Components/filterOption'
// import ProductsCards from './Components/ProductsCards'
// import { useState } from 'react'

function App() {
    const {productData, isLoding} = useFetchData('https://fakestoreapi.com/products')
    console.log('wwwwwwwwwww',productData, isLoding)
    // const [addProductsToCart, setAddProductsToCart] = useState([])
    // function addToCart(selectedItems){
    //   setAddProductsToCart(prev => [...prev, selectedItems])
    //   console.log(addProductsToCart)
    // }
    function filterOptions(price){
     var filteredItems = productData.filter((items) => items.price > price)
      console.log('after filter',filteredItems)
    }
  return (
    <>
    <section className='h-full w-full flex flex-col'>
      {/* <Header cartProduct={addProductsToCart} /> */}
      <main className='flex flex-grow overflow-y-auto relative'>
        <div className='absolute w-full h-full flex'>
          <aside className="w-64 h-full overflow-y-auto">
            <div className='w-full h-full'>
              <Filter onFilterChange={filterOptions}/>
            </div>
          </aside>
          {/* <ProductsCards cardData={productData} isLoding={productData.loading}  onAddToCartProduct={addToCart}/> */}
        </div>
      </main>
      <footer className='h-12 flex items-center justify-center'>
          <p>Shopping Cart Website</p>
      </footer>
    </section>
    </>
  )
}

export default App
