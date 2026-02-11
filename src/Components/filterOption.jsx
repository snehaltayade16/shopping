function FilterOptions({onFilterChange}){
    console.log('filter',onFilterChange)
   const options = [{
        title:'Price'
    }]
    return(
        <>
            {
                options.map((options) => (
                    <div> <input type="checkbox" onChange={() => onFilterChange(100) }/> {options.title} </div>
                ))
            }
        </>
    )
}
export default FilterOptions