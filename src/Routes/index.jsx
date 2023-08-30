import React from 'react'
import Home from '../Pages/Main'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../Component/Layout/layout'
import '../GeneralStyle/index.scss'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import JoiningForm from '../Component/JoinigForm'
import StartBuisness from '../Component/StartBusiness'

const ApplicationRoutes = () => {

    function RequireAuth({ children }) {
        return <Layout>{children}</Layout>
    }

    return (
        <Routes>
              <Route path={"*" } element={<Navigate to="/home" replace />} />
            <Route path='/home' element={<div className='layout'><Home /></div>} />
            <Route path='/about' element={<div className='layout'><About /></div>} />
            <Route path='/contact' element={<div className='layout'><Contact /></div>} />
            <Route path='/joinig' element={<div className='layout'><JoiningForm /></div>} />
            <Route path='/start-business' element={<div className='layout'><StartBuisness /></div>} />
        </Routes>
    )
}

export default ApplicationRoutes