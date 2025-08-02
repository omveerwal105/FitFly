import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isLoggedIn, logoutUser } from '../utils/auth';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    }

    const loggedIn = isLoggedIn();
    return (
        <header className='bg-white shadow p-4 flex justify-between items-center'>
            <h1 className='text-xl font-bold text-blue-600'>FitFly</h1>
            <nav className='space-x-4 text-sm text-gray-600'>
                <Link to='/' className='hover:text-blue-600'>Home</Link>
                <Link to ='/profile' className='hover:text-blue-600'>Profile</Link>
                {!loggedIn && (
                    <Link to='/login' className='hover:text-blue-600'>Login</Link>
                )}
                {loggedIn && (
                    <>
                        {!isHome && (
                            <>
                                <Link to="/dashboard" className='hover:text-blue-600'>Dashboard</Link>
                                <Link to="/workout" className='hover:text-blue-600'>Workout</Link>
                                <Link to="/progress" className='hover:text-blue-600'>Progress</Link>
                             
                                <Link to="/nutrition" className='hover:text-blue-600'>Nutrition</Link>
                                <Link to="/goals" className='hover:text-blue-600'>Goals</Link>
                            </>
                        )}
                        <button
                            onClick={handleLogout}
                            className="text-red-500 ml-2 hover:text-red-600"
                        >
                            Logout
                        </button>
                    </>
                )}





            </nav>
        </header>
    )
}

export default Navbar