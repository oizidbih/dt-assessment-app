import React from 'react';
import {
    Trophy,
    AlertCircle,
    Calendar,
    Target,
    ArrowUpRight
} from 'lucide-react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip
} from 'recharts';

// Data for Entity
const radarData = [
    { subject: 'Strategy', A: 120, B: 110, fullMark: 150 },
    { subject: 'Governance', A: 98, B: 130, fullMark: 150 },
    { subject: 'Infrastructure', A: 86, B: 130, fullMark: 150 },
    { subject: 'Human Capital', A: 99, B: 100, fullMark: 150 },
    { subject: 'Innovation', A: 85, B: 90, fullMark: 150 },
    { subject: 'Security', A: 65, B: 85, fullMark: 150 },
];

const progressData = [
    { name: 'Strategy & Leadership', completed: 100 },
    { name: 'Change Management', completed: 80 },
    { name: 'Governance', completed: 45 },
    { name: 'Technology & Infrastructure', completed: 20 },
    { name: 'Data & Analytics', completed: 0 },
];

const EntityDashboard: React.FC = () => {
    // Teal/Green Theme
    const stats = [
        { label: 'Current Score', value: '68%', icon: Trophy, color: 'from-palm/20 to-palm/5', textColor: 'text-palm', trend: '+5% vs last year', isUp: true },
        { label: 'Pending Items', value: '12', icon: AlertCircle, color: 'from-orange-100 to-orange-50', textColor: 'text-orange-600', trend: 'Urgent', isUp: false },
        { label: 'Submission Due', value: '14 Days', icon: Calendar, color: 'from-dune/20 to-dune/10', textColor: 'text-dune', trend: 'Oct 15, 2025', isUp: true },
    ];

    return (
        <div className="space-y-8 pb-8 animate-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#040F25] tracking-tight">
                        My Entity Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Tracking progress for <span className="font-bold text-palm">Ministry of Interior</span>
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="px-5 py-2.5 bg-palm text-white rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-palm/20 font-semibold text-sm flex items-center">
                        Continue Assessment
                        <ArrowUpRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-40 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-110`} />
                        <div className="relative z-10">
                            <div className={`p-3 rounded-xl bg-gray-50 ${stat.textColor} w-fit mb-4`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                                <div className="mt-2 flex items-center text-xs font-bold text-gray-400">
                                    {stat.isUp ? <ArrowUpRight className="w-3 h-3 mr-1 text-green-500" /> : <AlertCircle className="w-3 h-3 mr-1 text-orange-500" />}
                                    {stat.trend}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Benchmarking Radar */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-gray-900">Performance Benchmark</h3>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-palm mr-2" />My Entity</div>
                            <div className="flex items-center"><div className="w-3 h-3 rounded-full bg-gray-300 mr-2" />National Avg</div>
                        </div>
                    </div>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart outerRadius={110} data={radarData}>
                                <PolarGrid stroke="#f0f0f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                <Radar name="My Entity" dataKey="A" stroke="#129b82" strokeWidth={3} fill="#129b82" fillOpacity={0.2} />
                                <Radar name="National Avg" dataKey="B" stroke="#D1D5DB" strokeWidth={2} fill="#D1D5DB" fillOpacity={0.1} />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pillar Progress */}
                <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Assessment Progress</h3>
                    <div className="space-y-6">
                        {progressData.map((p, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm font-bold mb-2">
                                    <span className="text-gray-700">{p.name}</span>
                                    <span className={p.completed === 100 ? 'text-green-600' : 'text-gray-500'}>{p.completed}%</span>
                                </div>
                                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-1000 ${p.completed === 100 ? 'bg-green-500' : 'bg-palm'}`}
                                        style={{ width: `${p.completed}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start">
                        <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                            <h4 className="text-sm font-bold text-blue-900">Next Action</h4>
                            <p className="text-sm text-blue-700 mt-1">Complete the <span className="font-semibold">Human Capital</span> section to unlock the initial review report.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntityDashboard;
