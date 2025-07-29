import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { isLoggedIn } from '../utils/auth';

const Dashboard = () => {

    const navigate = useNavigate();

    useEffect(()=>{
       if(!isLoggedIn()) {
        navigate('/login');
       }
    },[navigate]);
    const features = [
        {
            title: 'Workout Plans',
            description: 'Find personalized workout routines.',
            emoji: '💪',
            link : '/workout'
        },
        {
            title: 'Track Progress',
            description: 'Monitor your fitness journey.',
            emoji: '📈',
            link : '/progress'
        },
        {
            title: 'Nutrition',
            description: 'Get healthy meal suggestions.',
            emoji: '🥗',
            link : '/nutrition'
        },
        {
            title: 'Goals',
            description: 'Set and crush your fitness goals.',
            emoji: '🎯',
            link : '/goals'
        },
    ];
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />


            <main className='p-6 flex-1 bg-gray-100 text-center'>
                <div className='max-w-6xl mx-auto'>
                <h2 className='text-xl font-semibold mb-6 text-left'>Hi Om 👋, Ready to workout?</h2>
                <div className='grid gap-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-4'>

                    {features.map((feature) => (
                        <Link to={feature.link} key={feature.title}>
                        <div className='bg-white p-6 rounded-xl  hover:scale-105 transform transition-transform duration-200 cursor-pointer'>
                            <div className='text-3xl mb-2'>{feature.emoji}</div>
                            <h4 className='text-lg font-semibold mb-1'>{feature.title}</h4>
                            <p className='text-gray-500 text-sm'>{feature.description}</p>
                        </div>
                        </Link>
                    ))}

                </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard