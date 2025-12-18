import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Trophy, TrendingUp, AlertCircle, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const getStats = () => {
        if (user?.role === 'focal_point') {
            return [
                { label: 'Current Score', value: '68%', icon: Trophy, color: 'text-al-adaam' },
                { label: 'Pending Items', value: '12', icon: AlertCircle, color: 'text-red-600' },
                { label: 'Submission Due', value: '14 Days', icon: Calendar, color: 'text-dune' },
            ];
        }
        // Default Admin stats
        return [
            { label: 'Active Entities', value: '45', icon: Trophy, color: 'text-palm' },
            { label: 'Pending Reviews', value: '8', icon: AlertCircle, color: 'text-red-500' },
            { label: 'Avg National Score', value: '72%', icon: TrendingUp, color: 'text-sea' },
        ];
    };

    const stats = getStats();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome back, {user?.name.split(' ')[1]}!
                    </h1>
                    <p className="text-gray-500">Here's what's happening today.</p>
                </div>
                <button className="px-4 py-2 bg-al-adaam text-white rounded-lg hover:bg-opacity-90 transition-colors">
                    Download Report
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                        <div className={`p-4 rounded-full bg-gray-50 ${stat.color} mr-4`}>
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center text-gray-400">
                    <Trophy className="w-12 h-12 mb-2 opacity-20" />
                    <p>Maturity Progress Chart Placeholder</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center text-gray-400">
                    <Calendar className="w-12 h-12 mb-2 opacity-20" />
                    <p>Upcoming Deadlines Placeholder</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
