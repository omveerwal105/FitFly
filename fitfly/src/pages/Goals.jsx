import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const Goals = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate])
  const goalsData = [
    {
      title: 'Muscle Gain',
      emoji: '💪',
      description: 'Build lean muscle mass with strength training.',
      progress: 60,
    },
    {
      title: 'Fat Loss',
      emoji: '🔥',
      description: 'Burn fat with a mix of cardio & diet control.',
      progress: 30,
    },
    {
      title: 'Cardio Endurance',
      emoji: '🏃‍♂️',
      description: 'Improve heart health and stamina.',
      progress: 45,
    },
    {
      title: 'Flexibility',
      emoji: '🧘‍♂️',
      description: 'Increase range of motion and mobility.',
      progress: 50,
    },
    {
      title: 'Consistency',
      emoji: '📅',
      description: 'Maintain workout streak and daily discipline.',
      progress: 80,
    },
  ];


  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <main className='flex-1 bg-gray-100 p-5'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-6'>Your Fitness Goals 🎯</h2>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {goalsData.map((goal) => (
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer "
                key={goal.title}
              >
                <div className='text-4xl mb-2'>{goal.emoji}</div>
                <h3 className='font-bold text-lg mb-1'>{goal.title}</h3>
                <p className='text-gray-600 text-sm'>{goal.description}</p>

                <div className='w-full bg-gray-200 rounded-full mt-3 h-2.5'>
                  <div className='bg-gradient-to-r from-blue-300 to-blue-600  h-2.5 rounded-full transition-all duration-300 ease-in-out'
                    style={{ width: `${goal.progress}%` }} >
                  </div>
                </div>
                <p className="text-xs font-medium text-blue-600 mt-1">
                  {goal.progress}% completed
                </p>

              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  )
}

export default Goals