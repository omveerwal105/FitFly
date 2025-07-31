import React, { useState } from 'react'
import WorkoutForm from './WorkoutForm'

const WorkoutPlanner = () => {

    const [customWorkouts, setCustomWorkouts] = useState([]);

    const handleSaveWorkout = (newWorkout) => {
        setCustomWorkouts((prev) => [...prev, newWorkout]);
    }
    const workouts = [
        {
            "day": "Monday",
            "type": "Push",
            "exercises": [
                "Barbell Bench Press",
                "Overhead Shoulder Press",
                "Incline Dumbbell Press",
                "Lateral Raises",
                "Tricep Pushdowns"
            ]
        },
        {
            "day": "Tuesday",
            "type": "Pull",
            "exercises": [
                "Deadlifts",
                "Pull-Ups",
                "Barbell Rows",
                "Face Pulls",
                "Bicep Curls"
            ]
        },
        {
            "day": "Wednesday",
            "type": "Legs",
            "exercises": [
                "Squats",
                "Leg Press",
                "Romanian Deadlifts",
                "Lunges",
                "Calf Raises"
            ]
        },
        {
            "day": "Thursday",
            "type": "Upper Body",
            "exercises": [
                "Pull-Ups",
                "Bench Press",
                "Shoulder Press",
                "Barbell Rows",
                "Skull Crushers"
            ]
        },
        {
            "day": "Friday",
            "type": "Full Body",
            "exercises": [
                "Squats",
                "Deadlifts",
                "Pull-Ups",
                "Push-Ups",
                "Burpees"
            ]
        },
        {
            "day": "Saturday",
            "type": "Active Rest",
            "exercises": [
                "Light Jogging",
                "Yoga",
                "Foam Rolling"
            ]
        },
        {
            "day": "Sunday",
            "type": "Rest",
            "exercises": []
        }
    ]

    return (
        <div className='flex flex-col min-h-screen'>
            <h2 className='text-lg font-bold text-center'>Workout Planner</h2>
            <WorkoutForm onSave={handleSaveWorkout} />

            <main className='flex-1 bg-white mt-3'>
                <div className='max-w-6xl mx-auto'>
                    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                        {workouts.map((workout) => (
                            <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                                key={workout.day}>
                                <div className='text-2xl font-bold'>{workout.day}</div>
                                <h3 className='text-lg font-bold mb-2'>{workout.type}</h3>
                                <ul className='list-disc  pl-5 text-gray-600'>
                                    {workout.exercises.map((exercise, idx) => (
                                        <li key={idx}>{exercise}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {customWorkouts.length > 0 && <h3 className=' text-lg font-bold mt-3'>Your Custom Plan</h3> }
                    
                    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                        {customWorkouts.length > 0 && customWorkouts.map((workout, index) => (
                            <div key={index} className="bg-green-100 p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer">
                                <div className='text-2xl font-bold'>Custom</div>
                                <h3 className='text-lg font-bold mb-2'>{workout.name} ({workout.type})</h3>
                                <p className='text-gray-600'>Sets: {workout.sets} | Reps: {workout.reps}</p>
                                <p className='mt-2 text-sm text-gray-500'>Days: {workout.days.join(", ")}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </main>



        </div>
    )
}

export default WorkoutPlanner