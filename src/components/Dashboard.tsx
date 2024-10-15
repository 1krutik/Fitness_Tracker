import React from 'react';
import { Activity, Target, PlusCircle, BarChart2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data (replace with actual data from API)
  const recentWorkouts = [
    { id: 1, type: 'Running', duration: 30, date: '2024-03-15' },
    { id: 2, type: 'Weightlifting', duration: 45, date: '2024-03-14' },
    { id: 3, type: 'Cycling', duration: 60, date: '2024-03-13' },
  ];

  const weeklyGoal = { target: 150, current: 75 };

  // Calculate percentage for circular progress
  const progressPercentage = Math.round((weeklyGoal.current / weeklyGoal.target) * 100);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-gray-700">Welcome, {user?.email}</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Workouts Card */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Activity className="w-8 h-8 mr-3 text-purple-500" />
            Recent Workouts
          </h2>
          <ul className="space-y-4">
            {recentWorkouts.map((workout) => (
              <li 
                key={workout.id} 
                className="flex justify-between items-center bg-white bg-opacity-50 p-4 rounded-lg"
              >
                <span className="font-medium">{workout.type}</span>
                <span className="text-gray-600">{workout.duration} min</span>
                <span className="text-sm text-gray-500">{workout.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Goal Progress with Circular Progress */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl shadow-xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-green-500" />
            Weekly Goal Progress
          </h2>
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-full" 
                style={{
                  background: `conic-gradient(#00bfff ${progressPercentage}%, transparent 0%)`
                }}
              />
              <span className="text-2xl font-bold text-gray-700">{progressPercentage}%</span>
            </div>
          </div>
          <p className="text-gray-600 text-center">You've completed {weeklyGoal.current} of {weeklyGoal.target} minutes this week!</p>
        </div>
      </div>

      {/* Buttons with Modern Styles */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link 
          to="/workout-log" 
          className="bg-gradient-to-r from-teal-200 to-green-200 text-gray-800 px-6 py-4 rounded-full shadow-lg hover:from-teal-300 hover:to-green-300 transition duration-300 transform hover:scale-105 flex items-center justify-center w-64"
        >
          <PlusCircle className="w-6 h-6 mr-2 text-teal-600" />
          Log New Workout
        </Link>
        <Link 
          to="/statistics" 
          className="bg-gradient-to-r from-indigo-200 to-blue-200 text-gray-800 px-6 py-4 rounded-full shadow-lg hover:from-indigo-300 hover:to-blue-300 transition duration-300 transform hover:scale-105 flex items-center justify-center w-64"
        >
          <BarChart2 className="w-6 h-6 mr-2 text-indigo-600" />
          View Statistics
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
