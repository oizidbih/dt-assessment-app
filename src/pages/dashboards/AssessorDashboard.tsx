import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, CheckCircle, BarChart2, Search } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

const AssessorDashboard: React.FC = () => {
    // Blue/Indigo Theme
    const stats = [
        { label: 'Pending Reviews', value: '8', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
        { label: 'Avg Review Time', value: '1.2 Days', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        { label: 'Completed', value: '124', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
    ];

    const workloadData = [
        { day: 'Mon', reviews: 4 },
        { day: 'Tue', reviews: 7 },
        { day: 'Wed', reviews: 5 },
        { day: 'Thu', reviews: 8 },
        { day: 'Fri', reviews: 3 },
    ];

    const submissions = [
        { id: 'sub_001', entity: 'Ministry of Education', status: 'submitted', date: '2025-10-15', score: '78%', priority: 'High' },
        { id: 'sub_002', entity: 'Ministry of Health', status: 'under_review', date: '2025-10-14', score: '82%', priority: 'Medium' },
        { id: 'sub_003', entity: 'Ashghal', status: 'approved', date: '2025-10-12', score: '91%', priority: 'Low' },
    ];

    return (
        <div className="space-y-8 pb-8 animate-in float-up duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Assessor Workspace</h1>
                    <p className="text-gray-500">Manage your review queue and tracking.</p>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search submissions..."
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full md:w-64"
                    />
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center">
                        <div className={`p-4 rounded-lg ${stat.bg} ${stat.color} mr-4`}>
                            <stat.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Workload Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                        <BarChart2 className="w-5 h-5 mr-2 text-gray-400" />
                        Weekly Activity
                    </h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={workloadData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                                <Bar dataKey="reviews" radius={[4, 4, 0, 0]}>
                                    {workloadData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill="#4F46E5" opacity={0.6 + (index * 0.1)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Review Queue */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Priority Queue</h3>
                    <div className="space-y-4">
                        {submissions.map((sub) => (
                            <div key={sub.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors group">
                                <div className="flex items-start mb-4 sm:mb-0">
                                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{sub.entity}</h4>
                                        <div className="flex items-center text-xs text-gray-500 mt-1">
                                            <span className="mr-3">ID: {sub.id}</span>
                                            <span>{sub.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className={`px-2 py-1 text-xs font-bold uppercase rounded ${sub.priority === 'High' ? 'bg-red-100 text-red-700' :
                                            sub.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                        }`}>
                                        {sub.priority}
                                    </div>
                                    <div className="text-right mr-4 hidden sm:block">
                                        <p className="text-xs text-gray-500">Self-Score</p>
                                        <p className="font-bold text-gray-900">{sub.score}</p>
                                    </div>
                                    <Link
                                        to={`/review/${sub.id}`}
                                        className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm"
                                    >
                                        Review
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssessorDashboard;
