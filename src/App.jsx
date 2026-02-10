import './App.css'
import useFetchData  from './customHooks/fetchData'
import Header from './Components/Header'
import ProductsCards from './Components/ProductsCards'

function App() {
    const productData = useFetchData('https://fakestoreapi.com/products')
    console.log('productData',productData.loading)
  return (
    <>
    <section className='h-full w-full flex flex-col'>
      <Header />
      <main className='flex flex-grow overflow-y-auto'>
        <aside className="w-64 h-full overflow-y-auto"></aside>
        <section className='flex-1'>
            <ProductsCards cardData={productData} isLoding={productData.loading} />
        </section>
      </main>
      <footer className='h-12'>

      </footer>
    </section>
    </>
  )
}

export default App
