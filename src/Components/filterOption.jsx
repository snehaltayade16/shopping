import { useEffect, useState } from "react"

function FilterOptions({onFilterChange}){
    const [isChecked, setIsChecked] = useState(false)
    console.log('ischecked',isChecked)
   useEffect(() => {
    if(isChecked)
    {
        onFilterChange(100)
    }else{
         onFilterChange(0)
    }
   },[isChecked])
   const options = [{
        title:'Price'
    }]
    return(
        <>
            {
                options.map((options) => (
                    <div key={options.title}> <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/> {options.title} </div>
                ))
            }
        </>
    )
}
export default FilterOptions