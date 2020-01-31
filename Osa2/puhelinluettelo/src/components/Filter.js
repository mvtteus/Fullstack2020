import React from 'react'

const Filter = ({newSearch, handleFiltering}) => {
    return (
        <div>
            <form> 
            <div>
            manage filtering: <input value = {newSearch} onChange = {handleFiltering}/>
            </div>
            </form> 
        </div>
    )
}

export default Filter