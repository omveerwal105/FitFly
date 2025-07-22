import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup'element={<Signup />} />
      </Routes>
    </>
  )
}

export default App