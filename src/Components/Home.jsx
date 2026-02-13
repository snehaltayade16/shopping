import Header from './Header'
import ProductsCards from './ProductsCards'

function Home({uiData, isLoading}){
    console.log(uiData, isLoading, 'loadig')
    return(
    <>
        <section className='h-full w-full flex flex-col'>
            <Header />
            <main className='flex flex-grow overflow-y-auto relative'>
                <div className='absolute w-full h-full flex'>
                <aside className="w-64 h-full overflow-y-auto p-2.5">
                    <div className='w-full h-full'>
                        www
                        {/* <Filter /> */}
                    </div>
                </aside>
                    <ProductsCards cardsData={uiData} />
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