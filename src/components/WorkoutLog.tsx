import React, { useState, useEffect } from 'react';
import { Activity, Clock, Flame, Calendar } from 'lucide-react';

const CALORIE_BURN_RATES = {
  running: 11.4,
  cycling: 7.5,
  swimming: 8.3,
  weightlifting: 3.8,
};

const Workouts: React.FC = () => {
  const [workoutData, setWorkoutData] = useState({
    activityType: '',
    duration: 0,
    caloriesBurned: 0,
    date: new Date().toISOString().split('T')[0],
  });
  
  const [recentWorkouts, setRecentWorkouts] = useState([]);

  useEffect(() => {
    if (workoutData.activityType && workoutData.duration) {
      const caloriesBurned = Math.round(CALORIE_BURN_RATES[workoutData.activityType] * workoutData.duration);
      setWorkoutData(prev => ({ ...prev, caloriesBurned }));
    }
  }, [workoutData.activityType, workoutData.duration]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newWorkout = { ...workoutData, id: Date.now() };
    setRecentWorkouts(prev => [newWorkout, ...prev].slice(0, 5));
    setWorkoutData({
      activityType: '',
      duration: 0,
      caloriesBurned: 0,
      date: new Date().toISOString().split('T')[0],
    });
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-6">Workout Logger</h2>

      {/* Log Workout Form */}
      <div className="bg-gradient-to-r from-pink-100 via-yellow-100 to-green-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Log a New Workout</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Activity Type</label>
              <select
                className="w-full px-3 py-2 border rounded bg-gray-50 border-gray-300"
                value={workoutData.activityType}
                onChange={(e) => setWorkoutData(prev => ({ ...prev, activityType: e.target.value }))}
              >
                <option value="">Select an activity</option>
                <option value="running">Running</option>
                <option value="cycling">Cycling</option>
                <option value="swimming">Swimming</option>
                <option value="weightlifting">Weightlifting</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Duration (minutes)</label>
              <input
                className="w-full px-3 py-2 border rounded bg-gray-50 border-gray-300"
                type="number"
                value={workoutData.duration}
                onChange={(e) => setWorkoutData(prev => ({ ...prev, duration: Number(e.target.value) }))}
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Calories Burned</label>
              <input
                className="w-full px-3 py-2 border rounded bg-gray-100 border-gray-300"
                type="number"
                value={workoutData.caloriesBurned}
                readOnly
              />
            </div>
            <button className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500 transition duration-300">
              Log Workout
            </button>
          </form>
        </div>
      </div>

      {/* Recent Workouts */}
      {recentWorkouts.length > 0 && (
        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Recent Workouts</h3>
          <ul className="space-y-3">
            {recentWorkouts.map(workout => (
              <li key={workout.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <Activity className="text-blue-400" />
                  <span className="font-medium text-gray-700">{workout.activityType}</span>
                </div>
                <div className="text-gray-500">
                  <Clock className="mr-1" /> {workout.duration} min
                  <Flame className="ml-4 mr-1" /> {workout.caloriesBurned} cal
                  <Calendar className="ml-4 mr-1" /> {new Date(workout.date).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Workouts;
