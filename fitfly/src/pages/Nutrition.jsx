import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const Nutrition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
    }
  })
  const summary = [
    { label: 'Calories', value: '2200 kcal', emoji: '🔥' },
    { label: 'Protein', value: '120g', emoji: '🍗' },
    { label: 'Carbs', value: '250g', emoji: '🍞' },
    { label: 'Fats', value: '70g', emoji: '🥑' },
  ];

  const meals = [
    {
      name: 'Breakfast',
      items: ['Oats with milk', 'Banana', 'Boiled eggs'],
      emoji: '🌅'
    },
    {
      name: 'Lunch',
      items: ['Grilled chicken', 'Brown rice', 'Salad'],
      emoji: '🌞'
    },
    {
      name: 'Dinner',
      items: ['Paneer tikka', 'Mixed veggies', 'Multigrain roti'],
      emoji: '🌙'
    },
    {
      name: 'Snacks',
      items: ['Protein bar', 'Nuts', 'Greek yogurt'],
      emoji: '🍏'
    }
  ];


  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className="bg-green-100 text-green-800 p-4 rounded-xl mt-8 shadow">
        💡 <strong>Tip:</strong> Drink at least 2-3 liters of water daily to stay hydrated!
      </div>


      <main className='flex-1 bg-gradient-to-b from-gray-100 to-white p-4 '>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-4'>Today’s Meals 🍽️</h2>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>


            {meals.map((meal) => (
              <div className="bg-white p-5 rounded-xl shadow hover:shadow-md transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                key={meal.name}>
                <div className='text-4xl mb-2'>{meal.emoji}</div>
                <h3 className='font-bold text-lg mb-1'>{meal.name}</h3>

                <ul className='list-disc pl-5 text-gray-600'>
                  {meal.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>


              </div>

            ))}
          </div>

          <h2 className='text-2xl font-semibold mt-10 mb-4'>Daily Summary 🧮</h2>

          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6'>

            {summary.map((sum) => (
              <div
                key={sum.label}
                className='bg-white p-5 rounded-xl shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-200 text-center'
              >
                <div className='text-4xl mb-3'>{sum.emoji}</div>
                <h3 className='text-lg font-bold mb-1'>{sum.label}</h3>
                <p className='text-gray-600 text-sm'>{sum.value}</p>
              </div>
            ))}
          </div>


        </div>
      </main>

    </div>
  )
}

export default Nutrition