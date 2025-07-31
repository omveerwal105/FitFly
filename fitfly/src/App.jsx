import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Workout from './pages/Workout'
import Progress from './pages/Progress'
import Nutrition from './pages/Nutrition'
import Goals from './pages/Goals'
import WorkoutPlanner from './pages/WorkoutPlanner'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup'element={<Signup />} />
      <Route path='/dashboard'element={<Dashboard />} />
      <Route path='/workout' element = {<Workout />} />
      <Route path='/workout-planner' element = {<WorkoutPlanner />} />
      <Route path='/progress'element = {<Progress />} />
      <Route path='/nutrition'element = {<Nutrition />} />
      <Route path='/goals'element = {<Goals />} />
      </Routes>
    </>
  )
}

export default App