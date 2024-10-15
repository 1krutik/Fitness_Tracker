import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Statistics: React.FC = () => {
  // Mock data (replace with actual data from API)
  const workoutTrends = [
    { date: '2024-03-01', duration: 30 },
    { date: '2024-03-02', duration: 45 },
    { date: '2024-03-03', duration: 60 },
    { date: '2024-03-04', duration: 30 },
    { date: '2024-03-05', duration: 45 },
  ];

  const activityTypes = [
    { name: 'Running', value: 40 },
    { name: 'Cycling', value: 30 },
    { name: 'Swimming', value: 20 },
    { name: 'Weightlifting', value: 10 },
  ];

  const COLORS = ['#87CEEB', '#98FB98', '#FFD700', '#FFB6C1']; // Soft light colors

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center text-gray-700 mb-6">Workout Statistics</h2>

      {/* Workout Trends Section */}
      <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Workout Trends</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workoutTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fill: '#6b7280' }} /> {/* Soft gray */}
              <YAxis tick={{ fill: '#6b7280' }} /> {/* Soft gray */}
              <Tooltip contentStyle={{ backgroundColor: '#f9f9f9', borderRadius: '10px', borderColor: '#e5e7eb' }} />
              <Legend />
              <Line type="monotone" dataKey="duration" stroke="#6495ED" activeDot={{ r: 8 }} /> {/* Light blue */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Activity Types Distribution Section */}
      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Activity Types Distribution</h3>
        <div className="bg-white p-6 rounded-lg shadow">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={activityTypes}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {activityTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#f9f9f9', borderRadius: '10px', borderColor: '#e5e7eb' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
