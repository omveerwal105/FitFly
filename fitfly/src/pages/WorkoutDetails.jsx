import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

const WorkoutDetails = () => {
    const dummyWorkouts = [
        {
            title: 'Full Body Burn',
            emoji: '🔥',
            desc: 'High-intensity full body routine.',
            level: 'Intermediate',
            duration: '30 min',
            exercises: [
                { name: 'Jumping Jacks', sets: 3, reps: '30 sec' },
                { name: 'Push Ups', sets: 3, reps: '12' },
                { name: 'Squats', sets: 3, reps: '15' }
            ]
        },
        {
            title: 'Upper Body Strength',
            emoji: '💪',
            desc: 'Build arms, chest, and back.',
            level: 'Advanced',
            duration: '40 min',
            exercises: [
                { name: 'Push Ups', sets: 4, reps: '12' },
                { name: 'Pull Ups', sets: 3, reps: '8' },
                { name: 'Plank', sets: 3, reps: '60 sec' }
            ]
        },
        {
            title: 'Lower Body Power',
            emoji: '🦵',
            desc: 'Focus on glutes, quads, and calves.',
            level: 'Intermediate',
            duration: '35 min',
            exercises: [
                { name: 'Push Ups', sets: 4, reps: '12' },
                { name: 'Pull Ups', sets: 3, reps: '8' },
                { name: 'Plank', sets: 3, reps: '60 sec' }
            ]
        },
        {
            title: 'Yoga & Stretching',
            emoji: '🧘',
            desc: 'Improve flexibility and balance.',
            level: 'Beginner',
            duration: '25 min',
            exercises: [
                { name: 'Push Ups', sets: 4, reps: '12' },
                { name: 'Pull Ups', sets: 3, reps: '8' },
                { name: 'Plank', sets: 3, reps: '60 sec' }
            ]
        },
    ];
    const { title } = useParams();
    const navigate = useNavigate();
    const decodedTitle = decodeURIComponent(title);


    const workout = dummyWorkouts.find((w) => w.title === decodedTitle);

    if (!workout) {
        return (
            <div className='p-6'>
                <h2 className='text-xl font-bold text-red-600'>Workout Not Found</h2>
                <button className='mt-4 text-blue-600 underline' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }
    return (
        <div className='min-h-screen bg-gray-100'>
            <Navbar />
            <div className='max-w-3xl mx-auto p-6 bg-white mt-6 rounded-xl shadow'>
                <div className='flex items-center space-x-3'>
                    <div className='text-4xl'>{workout.emoji}</div>
                    <div>
                        <h2 className="text-2xl font-bold">{workout.title}</h2>
                        <p className="text-sm text-gray-500">{workout.level} • {workout.duration}</p>
                    </div>
                </div>
                <p className="mb-4 text-gray-700">{workout.desc}</p>
                <h3 className='text-xl font-semibold mb-2'>Exercise : </h3>
                <ul className='space-y-2'>
                    {workout.exercises.map((ex, index) => (
                        <li key={index} className="border p-3 rounded-md bg-gray-50">
                            <div className="font-medium">{ex.name}</div>
                            <div className="text-sm text-gray-600">Sets: {ex.sets} • Reps: {ex.reps}</div>
                        </li>
                    )

                    )}
                </ul>
            </div>
        </div>
    )
}

export default WorkoutDetails