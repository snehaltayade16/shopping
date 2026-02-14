// import { useEffect, useState } from "react"

import {useState } from "react"

function FilterOptions({onFilterChange}){
    // 
    const[priceRangeValue, setPriceRangeValue] = useState(1000)
    const options = [{
        title:'Price'
    }]
    return(
        <>
            {
                options.map((options) => (
                    <div key={options.title}> 
                        <p>{options.title}</p>
                        <div className="w-full">
                            <p>20 - {priceRangeValue}</p>
                            <input  type="range" min="20" max="1000" value={priceRangeValue}  className="w-full" onChange={(e) => setPriceRangeValue(e.target.value)} onMouseUp={() => onFilterChange(priceRangeValue)} onTouchEnd={() => onFilterChange(priceRangeValue)}></input>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default FilterOptions