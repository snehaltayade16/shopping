import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function Layout(){
    console.log("layout render")
    return(
        <>
            <section className='h-full w-full flex flex-col'>
                <Header/>
                <main className='flex flex-grow overflow-y-auto relative'><Outlet /></main>
                <Footer/>
            </section>
        </>
    )
}
export default Layout;