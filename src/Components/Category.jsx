import {useContext} from 'react'
import { CategoryContext } from '../context/CategoryContext';
import { ProductContext } from '../context/ProductContext' 
function Category () {
    const {catrgories} = useContext(CategoryContext)
    const { data } = useContext(ProductContext)
    console.log(catrgories,data)
    return(
        <>
            <div className="h-full w-full p-2.5">
                {
                    catrgories.map((categoryTitle,index) => {
                        const matchProducts = data.filter((products) => products.category == categoryTitle )
                        console.log(categoryTitle,matchProducts)
                        return(
                            <>
                                <p className='py-5 font-bold text-2xl capitalize'>{categoryTitle}</p>
                                    <div className='w-full flex flex-wrap gap-5'>
                                        {
                                            matchProducts.map((items) => (
                                                    <div class="h-80 aspect-square border p-1.5">
                                                        <div className="h-60 border p-1.5">
                                                            <img src={items.image} className="h-full w-full object-fit"></img>
                                                        </div>
                                                        <p className='text-md font-bold'>{items.title}</p>
                                                    </div>
                                            ))

                                        }
                                    </div>
                            </>
                        )
                    })
                }
                {/* {
                    catrgories.map((title,index) => (
                        <p>{title}</p>
                        {
                            data.map((item,index) => (
                                item.category == title ? (<div>{item.title}</div>) : (<div>No Product Aviable</div>)
                            ))
                        }
                    ))
                } */}
                <p></p>
            </div>
        </>
    )
}

export default Category;