import { useEffect, useState } from 'react'
import { useContext } from 'react'
import Header from './Header'
import Filter from './filterOption'
import ProductsCards from './ProductsCards'
import {ProductContext} from '../context/ProductContext'

function Home(){
    const {data,loading} = useContext(ProductContext)

    const [uiData, setUiData] = useState(data)

    useEffect(() => {setUiData(data)},[data])
    
    function applayFilter(items){
        console.log(typeof(Number(items)))
        if(items !== 0){
            console.log('>0')
            console.log(data.filter((items) => Math.round(items.price) === 109))
        }else{
            console.log('<0')
            setUiData(data)
        }
    }

    console.log(uiData)

    return(
    <>
        <section className='h-full w-full flex flex-col'>
            {/* <Header /> */}
            <main className='flex flex-grow overflow-y-auto relative'>
                <div className='absolute w-full h-full flex'>
                <aside className="w-64 h-full overflow-y-auto p-2.5">
                    <div className='w-full h-full'>
                        <Filter onFilterChange={applayFilter}/>
                    </div>
                </aside>
                    <ProductsCards data={uiData} isLoading={loading}/>
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