import React from 'react'

const TitleSection = ({title, subtitle}) => {
    return (
        <div className='flex flex-col items-center px-8 md:px-10  mt-12 mb-5'>
            <p className='text-center font-poppins font-medium text-3xl text-gray-800 mb-2'>{ title }</p>
            <p className='text-center font-poppins font-normal text-base text-gray-700 mb-7 pb-7 border-b border-gray-400'>{ subtitle }</p>
        </div>
    )
}

export default TitleSection
