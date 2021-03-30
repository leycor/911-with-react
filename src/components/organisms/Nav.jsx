import React, { Fragment } from 'react'

import logoColor from '../../assets/icon/logo-color.svg'
import bannerHome from '../../assets/img/banner-home.webp'
import Banner from '../molecules/Banner';
import NavInfo from '../molecules/NavInfo';
import NavLinks from '../molecules/NavLinks';

const Nav = () => {

    const menu = ['PRODUCTOS', 'ACERCA', 'DIRECCIÓN', 'CONTACTO']
    
    return (
        <Fragment>

            {/* Menú informativo */}
            <NavInfo email='bryanjohann1995@gmail.com' phone='+58 4143378626' facebook='https://www.facebook.com' />

            {/* Menú de nagevación */}
            <NavLinks menu={ menu } logo={ logoColor } />

            {/* Banner */}
            <Banner banner={ bannerHome } title='911 beds' subtitle='Calidad y confort al mejor precio' />

        </Fragment>
    );
}

export default Nav
