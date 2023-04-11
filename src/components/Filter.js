import React from 'react'

const Filter = ({ filterData }) => {
    return (
        <div>
            {filterData.map((data) => {
             return(  <button>{data.title} </button> )
            })}
            <p> </p>
        </div>
    )
}

export default Filter