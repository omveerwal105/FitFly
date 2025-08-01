import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const Profile = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLoggedIn()){
            navigate('/login');
        }
    },[navigate])
  const [profile, setProfile] = useState({
    name: 'Om Veerwal',
    age: 22,
    gender: 'Male',
    height: 175,
    weight: 74,
  });

  const [preferences, setPreferences] = useState({
    goal: 'Build Muscle',
    frequency: 4,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: name === 'age' || name === 'height' || name === 'weight' ? Number(value) : value,
    }));
  };

  const handlePrefChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: name === 'frequency' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, gender, height, weight } = profile;
    if (!name || !age || !gender || !height || !weight) {
      alert('Please fill out all profile fields.');
      return;
    }
    // For now we just log; later you can persist or lift state
    console.log('Saved profile:', profile);
    console.log('Saved preferences:', preferences);
    alert('Profile saved (in component state).');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
        
      <h1 className="text-2xl font-bold">Profile</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: User Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">User Info</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full border rounded px-3 py-2"
                type="text"
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium mb-1">
                Age
              </label>
              <input
                id="age"
                name="age"
                value={profile.age}
                onChange={handleProfileChange}
                className="w-full border rounded px-3 py-2"
                type="number"
                min={0}
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={profile.gender}
                onChange={handleProfileChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="height" className="block text-sm font-medium mb-1">
                  Height (cm)
                </label>
                <div className="relative">
                  <input
                    id="height"
                    name="height"
                    value={profile.height}
                    onChange={handleProfileChange}
                    className="w-full border rounded px-3 py-2 pr-12"
                    type="number"
                    min={0}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    cm
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label htmlFor="weight" className="block text-sm font-medium mb-1">
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    id="weight"
                    name="weight"
                    value={profile.weight}
                    onChange={handleProfileChange}
                    className="w-full border rounded px-3 py-2 pr-12"
                    type="number"
                    min={0}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                    kg
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Save Details
          </button>
        </div>

        {/* Section 2: Fitness Preferences */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Fitness Preferences</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="goal" className="block text-sm font-medium mb-1">
                Goal
              </label>
              <select
                id="goal"
                name="goal"
                value={preferences.goal}
                onChange={handlePrefChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select goal</option>
                <option value="Lose Weight">Lose Weight</option>
                <option value="Build Muscle">Build Muscle</option>
                <option value="Stay Fit">Stay Fit</option>
              </select>
            </div>

            <div>
              <label htmlFor="frequency" className="block text-sm font-medium mb-1">
                Workout Frequency (times/week)
              </label>
              <input
                id="frequency"
                name="frequency"
                value={preferences.frequency}
                onChange={handlePrefChange}
                className="w-full border rounded px-3 py-2"
                type="number"
                min={0}
                max={14}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
