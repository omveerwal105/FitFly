import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* header section  */}
           <Navbar />

            {/* hero section */}

            <section className='flex-1 p-6 text-center'>
                <img src="/sly.jpeg" alt="hero" className="mx-auto mb-4" />
                <h2 className='text-2xl font-semibold'>Achieve your fitness goals</h2>
                <p className='text-gray-600 mt-2'>Track workouts, monitor diet, and stay consistent with ease.</p>
                <button className='bg-blue-600 mt-4 text-white px-4 py-2 rounded shadow hover:bg-blue-700'>Get Started</button>
            </section>

            {/* feature section */}

            <section className='p-6 bg-gray-100 text-center'>
                <h3 className='text-xl font-bold mb-4'>Features</h3>
                <div className='grid gap-4 sm:grid-cols-3'>
                    <div className='bg-white p-4 rounded shadow'>
                        <h4 className='font-semibold mb-2'>💪 Smart Workouts</h4>
                        <p className='text-sm text-gray-600'>Custom workout plans tailored to your goals.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h4 className="font-semibold mb-2">📊 Progress Tracker</h4>
                        <p className="text-sm text-gray-600">Visualize your progress over time.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h4 className="font-semibold mb-2">🥗 Diet Coach</h4>
                        <p className="text-sm text-gray-600">Meal suggestions to fuel your journey.</p>
                    </div>
                </div>
            </section>

            <footer className='bg-white mt-auto text-gray-500 text-center p-4 text-sm'>
                  © 2025 FitLife. All rights reserved.
            </footer>
        </div>
    )
}

export default Home