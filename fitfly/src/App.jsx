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
import Profile from './pages/Profile'
import BMI from './pages/BMI'
import Community from './pages/Community'
import ActivityLog from './pages/ActivityLog'
import WorkoutDetails from './pages/WorkoutDetails'

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
      <Route path='/bmi' element = {<BMI />} />
      <Route path='/nutrition'element = {<Nutrition />} />
      <Route path='/goals'element = {<Goals />} />
      <Route path='/profile'element = {<Profile />} />
      <Route path='/community'element = {<Community />} />
      <Route path ='/activity-log'element = {<ActivityLog />} />
      <Route path='/workouts/:title' element = {<WorkoutDetails />} />
      </Routes>
    </>
  )
}

export default App