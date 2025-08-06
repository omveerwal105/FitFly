// components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons from lucide-react

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Workout Plans', path: '/workout', emoji: '💪' },
        { label: 'Progress', path: '/progress', emoji: '📈' },
        { label: 'Nutrition', path: '/nutrition', emoji: '🥗' },
        { label: 'Goals', path: '/goals', emoji: '🎯' },
    ];

    return (
        <>
            {/* Hamburger Menu for small screens */}
            <div className='md:hidden p-4'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`md:w-64 md:block ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg p-4 md:h-full`}>
                <h3 className='text-xl font-bold mb-4'>Menu</h3>
                <ul className='space-y-3'>
                    {navItems.map(item => (
                        <li key={item.label}>
                            <Link
                                to={item.path}
                                className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-800 font-medium'
                            >
                                <span className='text-lg'>{item.emoji}</span>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
