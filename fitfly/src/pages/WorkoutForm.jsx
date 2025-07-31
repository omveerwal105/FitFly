import React, { useState } from 'react'

const WorkoutForm = ({ onSave }) => {
    const [workouts, setWorkouts] = useState({
        type: '',
        name: '',
        sets: '',
        reps: '',
        days: []
    });

    const handleSubmit = () => {
        if (!workouts.type || !workouts.name || !workouts.sets || !workouts.reps || workouts.days.length === 0) {
            alert("Please fill out all fields and select at least one day.");
            return;
        }

        onSave(workouts);

        
        setWorkouts({
            type: '',
            name: '',
            sets: '',
            reps: '',
            days: []
        });
    };

    const handleWorkout = (e) => {
        const { name, value } = e.target;

        setWorkouts((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDaysChange = (e) => {
        const { value, checked } = e.target;

        setWorkouts((prev) => ({
            ...prev,
            days: checked ?
                [...prev.days, value] :
                prev.days.filter((day) => day !== value)
        }));
    }
    return (
        <div className='bg-white rounded-xl p-6 shadow max-w-xl mx-auto'>
            <h3 className='text-xl font-semibold mb-4'>Create a Workout</h3>

            <label className='block mb-2'>Workout Type</label>
            <select name='type' value={workouts.type} onChange={handleWorkout} className='w-full p-2 border mb-4'>
                <option value="">Select Type</option>
                <option value="Cardio">Cardio</option>
                <option value="Strength">Strength</option>
                <option value="Flexibility">Flexibility</option>
            </select>

            <label className='block mb-2'>Workout Name</label>
            <input name='name' value={workouts.name} onChange={handleWorkout} className='w-full border p-2 mb-4' />

            <div className="flex gap-4 mb-4">
                <input type="number" name="sets" value={workouts.sets} onChange={handleWorkout} placeholder="Sets" className="w-1/2 p-2 border" />
                <input type="number" name="reps" value={workouts.reps} onChange={handleWorkout} placeholder="Reps" className="w-1/2 p-2 border" />
            </div>

            <label className='block mb-2'>Days</label>
            <div className='grid grid-cols-4 gap-2'>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <label key={day} className='flex items-center space-x-2'>
                        <input type='checkbox' value={day} onChange={handleDaysChange} checked={workouts.days.includes(day)} />
                        <span>{day}</span>

                    </label>
                ))}
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={handleSubmit}>
                Save Workout
            </button>
        </div>
    )
}

export default WorkoutForm