import './App.css'
import Header from './Components/Header'
import ProductsCards from './Components/ProductsCards'

function App() {

  return (
    <>
    <section className='h-full w-full flex flex-col'>
      <Header />
      <main className='flex flex-grow overflow-y-auto'>
        <aside className="w-64 h-full overflow-y-auto"></aside>
        <ProductsCards />
      </main>
      <footer className='h-12'>

      </footer>
    </section>
    </>
  )
}

export default App
