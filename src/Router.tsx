import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Login from 'screens/Login'
import ForgotPassword from 'screens/ForgotPassword'
import ResetPassword from 'screens/ResetPassword'
import Cases from 'screens/Cases'
import Clients from 'screens/Clients'
import Downloads from 'screens/Downloads'
import Preferences from 'screens/Preferences'
import Help from 'screens/Help'
import Register from 'screens/Register'

function Router () {
  return (
    <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/forgot-password'} element={<ForgotPassword />} />
        <Route path={'/reset-password/:resetCode'} element={<ResetPassword />} />
        <Route path={'/app'} element={<App />}>
            <Route path={'cases'} element={<Cases />} />
            <Route path={'clients'} element={<Clients />} />
            <Route path={'downloads'} element={<Downloads />} />
            <Route path={'preferences'} element={<Preferences />} />
            <Route path={'help'} element={<Help />} />
        </Route>
    
    </Routes>
  )
}

export default Router