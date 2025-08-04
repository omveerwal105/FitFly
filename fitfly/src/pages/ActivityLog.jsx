import React, { useState } from 'react';

const SectionCard = ({ emoji, title, children }) => (
  <div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2">
    <div className="flex items-center gap-2 text-lg font-semibold">
      <span className="text-2xl">{emoji}</span>
      <span>{title}</span>
    </div>
    <div className="text-sm flex-1">{children}</div>
  </div>
);

const ActivityLog = () => {
  const [activity, setActivity] = useState({
    date: '2025-08-04',
    workout: 'Upper Body – 45 mins',
    calories: '320 kcal',
    meals: {
      breakfast: 'Oats, Eggs',
      lunch: 'Grilled Chicken Salad',
      dinner: 'Paneer Curry with Roti'
    },
    water: '2.5 Litres'
  });

  const handleDateChange = (e) => {
    setActivity((prev) => ({ ...prev, date: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Daily Activity Log</h1>
            <p className="text-sm text-gray-500 mt-1">Track your daily health metrics</p>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="date" className="text-sm font-medium">
              Date:
            </label>
            <input
              id="date"
              type="date"
              value={activity.date}
              onChange={handleDateChange}
              className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SectionCard emoji="✅" title="Workout Done">
            <div className="text-base">{activity.workout}</div>
          </SectionCard>

          <SectionCard emoji="🔥" title="Calories Burned">
            <div className="text-base">{activity.calories}</div>
          </SectionCard>

          <SectionCard emoji="🍽️" title="Meals">
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Breakfast:</span> {activity.meals.breakfast}
              </li>
              <li>
                <span className="font-medium">Lunch:</span> {activity.meals.lunch}
              </li>
              <li>
                <span className="font-medium">Dinner:</span> {activity.meals.dinner}
              </li>
            </ul>
          </SectionCard>

          <SectionCard emoji="💧" title="Water Intake">
            <div className="text-base">{activity.water}</div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
