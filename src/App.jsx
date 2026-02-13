import './App.css'
import useFetchData  from './customHooks/fetchData'
import Home from './Components/Home';
// import Header from './Components/Header'
// import Filter from './Components/filterOption'
import {useEffect} from 'react'
import {useState } from 'react'
import ProductsCards from './Components/ProductsCards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    const {productData,loading} = useFetchData('https://fakestoreapi.com/products')
    console.log('eeeeeeeeeeee',productData)
  const [uiData, setUiData] = useState(productData)
   
    //  useEffect(() => {
    //   setUiData(productData)
    // },[productData])
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home cardData={uiData} isLoding={loading} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
