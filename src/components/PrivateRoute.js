import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/auth.context'

const PrivateRoute = () => {

    const { user } = useAuthContext()

  return user ? <Outlet/> : <Navigate to="/signin"/>
}

export default PrivateRoute