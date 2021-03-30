import React from 'react'
import { FaFacebookF } from 'react-icons/fa';

const NavInfo = ({email, phone, facebook}) => {
    return (

        <nav className='-mt-10 md:mt-0 duration-300 flex justify-between items-center  px-6 md:px-10 bg-blue-900 h-10'>
            <div className='flex text-white text-xs font-medium'>
                <p className='mr-4 font-poppins'>{ phone }</p>
                <p className='font-poppins'>{ email }</p>
            </div>

            <div className='flex text-white'>
                <a href={ facebook } target={`__blank`}><FaFacebookF className='text-lg' /></a>
                
            </div>
        </nav>

    )
}

export default NavInfo
