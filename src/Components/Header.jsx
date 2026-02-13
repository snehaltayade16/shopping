import HeaderLogo from '../assets/grocery-cart.png'
import HomeImg from '../assets/home.png'
import Cart from '../assets/menu-shopping-cart.png'
import User from '../assets/user.png'
import Category from '../assets/category.png'
import { Link } from 'react-router-dom'
function Header({cartProduct}){
    const headerLinks = [
        {
            title : 'Home',
            img: HomeImg,
            path : '/'
        },
        {
            title : 'Products',
            img: Category,
            path : '/products'
        },
        {
            title : 'Cart',
            img : Cart,
            path : '/cart'
        },
        {
            title : 'Profile',
            img: User,
            path : '/profile'
        },
        
    ]
    return(
        <header className='h-14 p-5'>
            <div className='w-full h-full flex items-center justify-between'>
                <div className="HeaderLogo h-full aspect-square">
                    <img src={HeaderLogo} className='h-full w-full' />
                </div>
                <div className="flex">
                    <ul className="flex">
                        {
                            headerLinks.map((items) => (
                            <Link to={items.path}>
                                <li key={items.title} title={items.title} className="relative pl-2.5 cursor-pointer"><img src={items.img} className="h-5" /> 
                                {
                                    items.title == 'Cart' && cartProduct.length > 0 &&
                                    (
                                        <span className='absolute flex items-center justify-center text-sm font-bold aspect-square bg-red-600 h-5 rounded-full top-[-10px] right-[-10px]' >{cartProduct.length > 5 ? '5+' : cartProduct.length}</span>
                                    )
                                }
                                </li>
                            </Link>))
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;