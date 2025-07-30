import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';


const Progress = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate])

  const weeklyData = [
    { day: 'Mon', workouts: 1 },
    { day: 'Tue', workouts: 5 },
    { day: 'Wed', workouts: 0 },
    { day: 'Thu', workouts: 3 },
    { day: 'Fri', workouts: 1 },
    { day: 'Sat', workouts: 0 },
    { day: 'Sun', workouts: 4 },
  ];



  const prog = [
    {
      label: 'This Week\'s Workouts',
      value: '5 sessions',
      emoji: '✅',
    },
    {
      label: 'Calories Burned',
      value: '3,200 kcal',
      emoji: '🔥',
    },
    {
      label: 'Active Days',
      value: '4/7 days',
      emoji: '📅',
    },
    {
      label: 'Time Spent',
      value: '2 hrs 45 mins',
      emoji: '⏱️',
    },
  ]

  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex 1 bg-gray-100 p-6'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-6'>Your Progress</h2>
          <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            {prog.map((pg) => (

              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                key={pg.label}>
                <div className='text-4xl mb-2'>{pg.emoji}</div>
                <h3 className='font-bold mb-1 text-lg text-blue-600'>{pg.value}</h3>
                <p className='text-sm text-gray-600'>{pg.label}</p>

              </div>

            ))}
          </div>

          <h3 className="text-xl font-semibold mt-10 mb-4">Weekly Workout Chart 📊</h3>
          <div className="bg-white p-6 mt-4 rounded-xl shadow">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="workouts" fill="#3b82f6"stroke="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>


        </div>
      </main>
    </div>
  )
}

export default Progress