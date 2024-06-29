import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '../pages'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/summary' element={<Summary></Summary>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;