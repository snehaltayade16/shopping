import './App.css'
// import useFetchData  from './customHooks/fetchData'
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react';
import Category from './Components/Category';
import Cart from './Components/Cart'
import { useContext } from 'react';
import {ProductContext} from './context/ProductContext'
import { useEffect } from 'react';

function App() {
    const {data,loading,fetchData} = useContext(ProductContext)
    
    useEffect(() => {fetchData("https://fakestoreapi.com/products")},[])
    console.log('context', data, loading)

    // const productAllData = useFetchData('https://fakestoreapi.com/products')
    // console.log(productAllData.data,'topp')
    
    // const [productUiData, setproductUiData] = useState([])

    // useEffect(() => {
    //   setproductUiData(productAllData.data)
    // },[productAllData])
    

 
  return (
    <>
      <BrowserRouter>
      {/* {} */}
        <Routes>
            <Route path="/" element={<Home uiData={data}  isLoading={loading}/>}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/category" element={<Category />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
