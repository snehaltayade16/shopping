import { useEffect, useState } from 'react'
import { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import Filter from './filterOption'
import ProductsCards from './ProductsCards'
import {ProductContext} from '../context/ProductContext'

function Home(){
    const {data,loading} = useContext(ProductContext)

    const [uiData, setUiData] = useState(data)

    useEffect(() => {setUiData(data)},[data])
    
    function applayFilter(range){
        if(range !== 0){
            setUiData(data.filter((items) => Math.round(items.price) <= Number(range)))
        }else{
            console.log('<0')
            setUiData(data)
        }
    }

    return(
    <>
        <div className='absolute w-full h-full flex'>
        <aside className="w-64 h-full overflow-y-auto p-2.5">
            <div className='w-full h-full'>
                <Filter onFilterChange={applayFilter}/>
            </div>
        </aside>
            <ProductsCards data={uiData} isLoading={loading}/>
        </div>
    </>
    )
}
export default Home;