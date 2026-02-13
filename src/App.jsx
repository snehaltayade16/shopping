import './App.css'
import useFetchData  from './customHooks/fetchData'
import Header from './Components/Header'
import Filter from './Components/filterOption'
// import {useEffect} from 'react'
import {useState } from 'react'
import ProductsCards from './Components/ProductsCards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    const {productData,loading} = useFetchData('https://fakestoreapi.com/products')
  
    // const [addProductsToCart, setAddProductsToCart] = useState([])
    const [uiData, setUiData] = useState(productData)
      console.log(loading,uiData)
    // useEffect(() => {
    //   setUiData(productData)
    // },[productData])
    // function addToCart(selectedItems){
    //   setAddProductsToCart(prev => [...prev, selectedItems])
    // }
    function applyFilter(item){
      console.log('appley filter',item)
      if(item != 0) {
        setUiData(productData.filter((item) => item.price == item))
      }else{
      setUiData(productData)
      }
    }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    <section className='h-full w-full flex flex-col'>
      {/* <Header cartProduct={addProductsToCart} /> */}
      <main className='flex flex-grow overflow-y-auto relative'>
        <div className='absolute w-full h-full flex'>
          <aside className="w-64 h-full overflow-y-auto p-2.5">
            <div className='w-full h-full'>
              <Filter onFilterChange={applyFilter}/>
            </div>
          </aside>
            {/* <ProductsCards cardData={uiData} isLoding={loading} onAddToCartProduct={addToCart}/> */}
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
