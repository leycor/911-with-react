import React, { Fragment, useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';

const NavLinks = ({ menu, logo}) => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)

    }

    return (
        <Fragment>
            {/* Menú superior */}
            <nav className='flex sticky top-0 z-50 justify-between items-center bg-white  px-6 md:px-10  h-16 shadow-nav'>
                <img src={ logo } alt="" className='h-8 w-16'/>

                <div className='hidden md:flex flex-wrap uppercase text-black text-xs font-medium'>
                    {
                        menu.map( link => <p key={ link } className='mr-3 cursor-pointer hover:text-red-full '>{ link }</p> )
                    }
                </div>

                {/* Botón menó Responsive */}
                <div onClick={ handleToggleMenu }  className='flex md:hidden flex-col justify-center h-7 w-9 cursor-pointer'>
                    { toggleMenu !== true 
                        ? <FaBars className='w-full text-2xl text-gray-700 ' />
                        : <FaTimes className='w-full text-2xl text-gray-700 ' />
                    }    
                </div>
            </nav>

            {/* Menú responsive */}
            <div className={`${ toggleMenu !== true ? '-left-60' : 'left-0'} bg-white z-index-40  duration-300  md:hidden px-8 pt-8 shadow-md fixed w-60 min-h-screen font-medium text-poppins text-xs text-gray-800`}>
                {
                    menu.map( link => 
                        <p key={ link } onClick={ () => setToggleMenu( false )} className='mb-4 cursor-pointer hover:text-red-full '>{ link }</p> 
                    )
                }
                
            </div>
        </Fragment>
    )
}

export default NavLinks
