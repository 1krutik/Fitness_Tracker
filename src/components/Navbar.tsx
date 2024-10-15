import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Activity, BarChart2, Target, LogOut, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-br from-green-600 via-greenS-500 to-red-400 p-4 shadow-xl rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">Fitness Freak</Link>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>

        <div className={`md:flex items-center space-x-8 ${menuOpen ? 'block' : 'hidden'} md:block`}>
          {user ? (
            <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
              <Link
                to="/dashboard"
                className="flex items-center text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all shadow-md"
              >
                <Activity className="mr-2" size={24} />
                Dashboard
              </Link>
              <Link
                to="/workout-log"
                className="flex items-center text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all shadow-md"
              >
                <BarChart2 className="mr-2" size={24} />
                Log Workout
              </Link>
              <Link
                to="/statistics"
                className="flex items-center text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all shadow-md"
              >
                <BarChart2 className="mr-2" size={24} />
                Statistics
              </Link>
              <Link
                to="/goals"
                className="flex items-center text-white bg-gray-800 bg-opacity-70 px-4 py-2 rounded-lg hover:bg-opacity-100 transition-all shadow-md"
              >
                <Target className="mr-2" size={24} />
                Goals
              </Link>
              <button
                onClick={logout}
                className="flex items-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all shadow-md"
              >
                <LogOut className="mr-2" size={24} />
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                to="/login"
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-all shadow-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full transition-all shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
