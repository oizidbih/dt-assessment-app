import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Trophy,
    TrendingUp,
    AlertCircle,
    Calendar,
    Users,
    FileCheck,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Clock
} from 'lucide-react';
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from 'recharts';

// Dummy Data
const maturityTrendData = [
    { month: 'Jan', score: 45 },
    { month: 'Feb', score: 52 },
    { month: 'Mar', score: 48 },
    { month: 'Apr', score: 61 },
    { month: 'May', score: 68 },
    { month: 'Jun', score: 72 },
];

const sectorData = [
    { name: 'Government', value: 400 },
    { name: 'Health', value: 300 },
    { name: 'Education', value: 300 },
    { name: 'Transport', value: 200 },
];

const pillarData = [
    { name: 'Strategy', score: 85 },
    { name: 'Governance', score: 72 },
    { name: 'Infrastructure', score: 65 },
    { name: 'Human Capital', score: 78 },
    { name: 'Innovation', score: 60 },
];

const COLORS = ['#8A1538', '#A29475', '#0d4261', '#129b82', '#4194b3'];

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const stats = user?.role === 'focal_point' ? [
        { label: 'Current Score', value: '68%', icon: Trophy, color: 'from-al-adaam/10 to-al-adaam/5', textColor: 'text-al-adaam', trend: '+5%', isUp: true },
        { label: 'Pending Items', value: '12', icon: AlertCircle, color: 'from-red-100 to-red-50', textColor: 'text-red-600', trend: '-2', isUp: false },
        { label: 'Submission Due', value: '14 Days', icon: Calendar, color: 'from-dune/10 to-dune/5', textColor: 'text-dune', trend: 'In Time', isUp: true },
    ] : [
        { label: 'Active Entities', value: '45', icon: Users, color: 'from-palm/20 to-palm/5', textColor: 'text-palm', trend: '+3 new', isUp: true },
        { label: 'Pending Reviews', value: '8', icon: FileCheck, color: 'from-red-100 to-red-50', textColor: 'text-red-500', trend: 'High Priority', isUp: false },
        { label: 'National Score', value: '72%', icon: TrendingUp, color: 'from-sea/20 to-sea/5', textColor: 'text-sea', trend: '+12%', isUp: true },
        { label: 'Completion Rate', value: '88%', icon: Activity, color: 'from-sunrise/20 to-sunrise/5', textColor: 'text-dune', trend: 'On Track', isUp: true },
    ];

    return (
        <div className="space-y-8 pb-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#040F25] tracking-tight">
                        Welcome back, {user?.name.split(' ')[1]}!
                    </h1>
                    <p className="text-gray-500 mt-1">
                        DTA Program is currently in <span className="text-al-adaam font-bold uppercase tracking-wider text-sm">Review Cycle 2023-Q4</span>
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition shadow-sm font-semibold text-sm">
                        Export Settings
                    </button>
                    <button className="px-5 py-2.5 bg-[#040F25] text-white rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-blue-900/20 font-semibold text-sm flex items-center">
                        Generate Report
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-1 gap-6 ${user?.role === 'focal_point' ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-30 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-110`} />

                        <div className="relative z-10">
                            <div className={`p-3 rounded-xl bg-gray-50 ${stat.textColor} w-fit mb-4`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                                    <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`flex items-center text-xs font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {stat.isUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                    {stat.trend}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Maturity Trend */}
                <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">National Maturity Trend</h3>
                            <p className="text-sm text-gray-500">Progress across all sectors over time</p>
                        </div>
                        <select className="bg-gray-50 border-none text-sm font-bold text-gray-600 rounded-lg px-3 py-1.5 focus:ring-0">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={maturityTrendData}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8A1538" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#8A1538" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                                />
                                <Area type="monotone" dataKey="score" stroke="#8A1538" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sector Distribution */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sector Breakdown</h3>
                    <p className="text-sm text-gray-500 mb-8">Entity participation by sector</p>
                    <div className="h-64 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={sectorData}
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={8}
                                    dataKey="value"
                                >
                                    {sectorData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-black text-gray-900">1.2k</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Entities</span>
                        </div>
                    </div>
                    <div className="mt-6 space-y-3">
                        {sectorData.map((item, index) => (
                            <div key={item.name} className="flex items-center justify-between text-sm">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[index] }} />
                                    <span className="text-gray-600 font-medium">{item.name}</span>
                                </div>
                                <span className="font-bold text-gray-900">{((item.value / 1200) * 100).toFixed(0)}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lower Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Pillar Performance */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-8">Pillar Performance</h3>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={pillarData} layout="vertical" margin={{ left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 13, fontWeight: 600 }} width={100} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={24}>
                                    {pillarData.map((_entry, index) => (
                                        <Cell key={`bar-${index}`} fill={index === 0 ? '#8A1538' : '#0d4261'} opacity={0.8 - (index * 0.1)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                        <button className="text-sm font-bold text-al-adaam hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: 'Ministry of Interior', action: 'Submitted Assessment', time: '12 mins ago', color: 'bg-green-100 text-green-700' },
                            { name: 'Public Health Authority', action: 'Requested Review', time: '45 mins ago', color: 'bg-yellow-100 text-yellow-700' },
                            { name: 'Ashghal', action: 'Pillar 3 Completed', time: '2 hours ago', color: 'bg-blue-100 text-blue-700' },
                            { name: 'MCIT IT Support', action: 'New Cycle Created', time: '5 hours ago', color: 'bg-purple-100 text-purple-700' },
                        ].map((activity, i) => (
                            <div key={i} className="flex items-center justify-between group">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center mr-4 group-hover:bg-gray-100 transition">
                                        <Activity className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">{activity.name}</p>
                                        <p className="text-xs text-gray-500">{activity.action}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md mb-1 ${activity.color}`}>
                                        {activity.action.split(' ')[0]}
                                    </p>
                                    <div className="flex items-center text-[10px] text-gray-400 font-bold justify-end">
                                        <Clock className="w-2.5 h-2.5 mr-1" />
                                        {activity.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
