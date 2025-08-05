import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { isLoggedIn } from '../utils/auth';
import { Link } from 'react-router-dom';

const Workout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  }, [navigate]);

  const workouts = [
    {
      title: 'Full Body Burn',
      emoji: '🔥',
      desc: 'High-intensity full body routine.',
      level: 'Intermediate',
      duration: '30 min'
    },
    {
      title: 'Upper Body Strength',
      emoji: '💪',
      desc: 'Build arms, chest, and back.',
      level: 'Advanced',
      duration: '40 min'
    },
    {
      title: 'Lower Body Power',
      emoji: '🦵',
      desc: 'Focus on glutes, quads, and calves.',
      level: 'Intermediate',
      duration: '35 min'
    },
    {
      title: 'Yoga & Stretching',
      emoji: '🧘',
      desc: 'Improve flexibility and balance.',
      level: 'Beginner',
      duration: '25 min'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Choose Your Workout 🏋️</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {workouts.map((workout) => (
              <div
                key={workout.title}
                className="bg-white p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                <div className="text-4xl mb-2">{workout.emoji}</div>
                <h3 className="text-lg font-bold mb-1">{workout.title}</h3>
                <div className='text-sm text-gray-500 mb-2'>{workout.level} . {workout.duration}</div>
                <Link to={`/workouts/${encodeURIComponent(workout.title)}`}>
                <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
                  View Plan
                </button>
                </Link>
                <p className="text-sm text-gray-600 mt-1">{workout.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <Link to="/workout-planner" className="text-blue-600 hover:underline">Go to Workout Planner</Link>
      </main>


    </div>
  );
};

export default Workout;
