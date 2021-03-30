import React from 'react'

const Banner = ({banner, title, subtitle}) => {
    return (

        <div style={{ backgroundImage: `url(${banner})`, height:'92.5vh'}}  className='overflow-hidden bg-no-repeat bg-cover bg-center'>
            <div style={{ backgroundColor:`rgba(36, 63, 150 , 0.15)`}} className='flex items-center justify-center w-full h-full'>
                <div style={{ backgroundColor: `#00000054`}} className='text-white text-center w-full font-poppins py-5'>

                    <p className='text-5xl md:text-7xl font-medium py-1 uppercase animate__animated animate__backInDown'>{ title }</p>
                    <p className='text-sm md:text-base animate__animated animate__backInUp'> { subtitle } </p>
                </div>
            </div>
        </div>
    )
}

export default Banner
