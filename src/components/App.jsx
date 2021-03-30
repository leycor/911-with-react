import React, { Fragment } from 'react'
import Nav from './organisms/Nav';

import GridCategory from './organisms/GridCategory';

const App = () => {

    return (
        <Fragment>

            {/* Menú */}
            <Nav />

            {/* Grilla colchones */}
            <GridCategory />

        </Fragment>
    )
}

export default App
