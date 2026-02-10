function Header(){
    // const headerLinks = [
    //     {
    //         title : 'Home',
    //         img:''
    //     },
    //     {
    //         title : 'products',
    //         img:''
    //     },
    //     {
    //         title : 'profile',
    //         img:''
    //     },
    //     {
    //         title : 'Cart',
    //         img : ''
    //     },
    //     {
    //         title : 'Login',
    //         img : ''
    //     }
    // ]
    return(
        <header className='h-14 p-2.5'>
            <div className='w-full h-full flex items-center justify-between'>
                <div className="HeaderLogo h-full aspect-square">

                </div>
                <div className="flex">
                    {/* <ul className="flex">
                        {
                            headerLinks.map((items) => (<li className="pl-2.5">{items.title}</li>))
                        }
                    </ul> */}
                </div>
            </div>
        </header>
    )
}
export default Header;