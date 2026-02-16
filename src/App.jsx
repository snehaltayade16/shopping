import './App.css'
// import useFetchData  from './customHooks/fetchData'
import Home from './Components/Home';
import Layout from './Components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react';
import Category from './Components/Category';
import Cart from './Components/Cart'
import { useContext } from 'react';
import {ProductContext} from './context/ProductContext'
import { CartContext } from './context/CartContext';
import { useEffect } from 'react';

function App() {
    const {data,loading,fetchData} = useContext(ProductContext)
    const {cart} = useContext(CartContext)
    useEffect(() => {fetchData("https://fakestoreapi.com/products")},[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home uiData={data}  isLoading={loading}/>}></Route>
            <Route path="/cart" element={<Cart cartData={cart} />}></Route>
            <Route path="/category" element={<Category />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
