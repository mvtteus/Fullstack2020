import React from 'react'

const Filter = ({handleFiltering, showAll}) => {
    return (
        <div>
        <form>
            <div>
            filter shown with: <input value = {showAll} onChange = {handleFiltering}/>
            </div>
        </form> 
        </div>
    )
}

export default Filter