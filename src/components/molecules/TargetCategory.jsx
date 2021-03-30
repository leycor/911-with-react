import React from 'react'

const TargetCategory = ({id, img, name, description}) => {
    return (
        <div className='flex flex-col h-target border border-gray-300'>
            <img src={ img}  alt="a" className='object-cover h-2/5 w-full mb-8'/>
            <div className='px-4 font-poppins'>
                <p className='text-base font-semibold text-red-full uppercase mb-1'>{ name }</p>
                <p className='break-word overflow-ellipsis text-sm text-gray-800'>{ description }</p>
            </div>
            <button className='mt-auto w-11/12 mx-auto mb-5 py-2 rounded bg-blue-800 text-white text-base'>Ver productos</button>
        </div>
    )
}

export default TargetCategory
