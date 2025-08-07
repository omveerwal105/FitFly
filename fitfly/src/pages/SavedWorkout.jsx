import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const SavedWorkout = () => {
  const [workouts, setWorkouts] = useState([
    { title: "Quick Abs", emoji: "💪", duration: "10 min", level: "Beginner" },
    { title: "HIIT Power", emoji: "⚡", duration: "25 min", level: "Advanced" }
  ]);

  const handleRemove = (title) => {
    const updated = workouts.filter((w) => w.title !== title);
    setWorkouts(updated);
    console.log('Removed', title);
  };

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Saved Workouts 🏷️</h2>

        {workouts.length === 0 ? (
          <p className="text-center text-gray-500">No saved workouts yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {workouts.map((workout) => (
              <div
                key={workout.title}
                className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
              >
                <div className="text-4xl mb-2">{workout.emoji}</div>
                <h3 className="text-xl font-semibold">{workout.title}</h3>
                <p className="text-gray-600">Duration: {workout.duration}</p>
                <p className="text-gray-600">Level: {workout.level}</p>
                <button
                  onClick={() => handleRemove(workout.title)}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedWorkout;
