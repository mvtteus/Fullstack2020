import React from 'react'

const Filter = ({newSearch, handleFiltering}) => {
    return (
        <div>
            <form> 
            <div>
            manage filtering: <input value = {newSearch} onChange = {handleFiltering}/>
            {console.log(newSearch)}
            </div>
            </form> 
        </div>
    )
}

export default Filter