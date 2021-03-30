import React, { Fragment } from 'react'
import TargetCategory from '../molecules/TargetCategory'

import mueble from '../../assets/img/mueble.jpg'
import TitleSection from '../molecules/TitleSection'

const GridCategory = () => {

    const categories = [ 
        {id:1, img: mueble , name: 'Colchones', description: 'Producto bastante cómodo para dormir con material muy bueno'},
        {id:2, img: mueble , name: 'Muebles', description: 'Producto bastante cómodo para dormir con material muy bueno'},
        {id:3, img: mueble , name: 'Camas', description: 'Producto bastante cómodo para dormir con material muy bueno'},
        {id:4, img: mueble , name: 'Sofa', description: 'Producto bastante cómodo para dormir con material muy bueno'},
    ]

    return (
        // Grilla de categorias
        <Fragment>
            <TitleSection 
            title='Bienvenidos a 911 beds' 
            subtitle='Ofrecemos los mejores productos para la comodidad y el descanso' 
            />
            <div data-aos="fade-up" className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8 md:px-10 xl:container xl:mx-auto mb-16'>

                {/* Categorias */}
                {
                    categories.map(  ({id, img, name, description}) => 
                        <TargetCategory 
                        key={id} 
                        img={img} 
                        name={name} 
                        description={description} />  
                    )
                }
            </div>
        </Fragment>
    )
}

export default GridCategory
