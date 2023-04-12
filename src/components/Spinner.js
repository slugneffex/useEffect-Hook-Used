import React from 'react'
import "./spinner.css"

const Spinner = () => {
    return (
        <div className='flex flex-col item-center space-y-2'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p className='text-bg-Dark text-lg font-semibold'>Loading...</p>
        </div>
    )
}

export default Spinner