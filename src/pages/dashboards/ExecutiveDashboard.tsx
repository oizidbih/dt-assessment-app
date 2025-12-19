import React from 'react';
import { TrendingUp, Globe, Award, ShieldCheck } from 'lucide-react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
    BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

const ExecutiveDashboard: React.FC = () => {
    // Gold/Luxury Theme
    const kpis = [
        { label: 'National Digital Index', value: '78.4', sub: 'Top 10 Globally', icon: Globe, color: 'text-[#C5A065]', bg: 'bg-[#C5A065]/10' },
        { label: 'YoY Growth', value: '+14%', sub: 'Exceeding Targets', icon: TrendingUp, color: 'text-[#8A1538]', bg: 'bg-[#8A1538]/10' },
        { label: 'Digital GDP Contr.', value: '4.2%', sub: 'Billion QAR', icon: Award, color: 'text-[#0d4261]', bg: 'bg-[#0d4261]/10' },
    ];

    const sectorPerf = [
        { name: 'Health', score: 85 },
        { name: 'Edu', score: 82 },
        { name: 'Gov', score: 78 },
        { name: 'Trans', score: 70 },
        { name: 'Energy', score: 90 },
    ];

    const adoptionData = [
        { name: 'Advanced', value: 30 },
        { name: 'Intermediate', value: 45 },
        { name: 'Basic', value: 25 },
    ];
    const COLORS = ['#129b82', '#4194b3', '#A29475'];

    return (
        <div className="space-y-10 pb-10 animate-in fade-in duration-1000">
            {/* Executive Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-4xl font-black text-[#040F25] tracking-tight font-serif mb-2">Executive Overview</h1>
                    <p className="text-gray-500 text-lg">State of Digital Transformation - Q4 2025</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Updated</p>
                        <p className="text-sm font-bold text-gray-900">Today, 09:41 AM</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-gray-500" />
                    </div>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {kpis.map((kpi, i) => (
                    <div key={i} className="bg-white p-8 rounded-none border-l-4 border-l-[#C5A065] shadow-lg flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{kpi.label}</p>
                            <p className="text-5xl font-black text-gray-900 font-serif">{kpi.value}</p>
                            <p className="text-sm font-medium text-gray-500 mt-2">{kpi.sub}</p>
                        </div>
                        <div className={`p-4 rounded-full ${kpi.bg} ${kpi.color}`}>
                            <kpi.icon className="w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Sector Performance (Horizontal Bar) */}
                <div className="bg-white p-10 shadow-xl border-t-4 border-t-[#040F25]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Sector Performance Leaderboard</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sectorPerf} layout="vertical" margin={{ left: 40 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 14, fontWeight: 700, fill: '#374151' }} />
                                <Bar dataKey="score" barSize={32} radius={[0, 4, 4, 0]}>
                                    {sectorPerf.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={_entry.score > 80 ? '#129b82' : '#0d4261'} />
                                    ))}
                                </Bar>
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Adoption Levels (Donut) */}
                <div className="bg-white p-10 shadow-xl border-t-4 border-t-[#8A1538]">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Maturity Adoption Levels</h3>
                    <p className="text-gray-500 mb-8">Distribution of entities by maturity stage</p>
                    <div className="h-80 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={adoptionData} innerRadius={80} outerRadius={120} paddingAngle={2} dataKey="value">
                                    {adoptionData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-4xl font-black text-gray-900">100%</span>
                            <span className="text-sm font-bold text-gray-400">Reporting</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        {adoptionData.map((adt, index) => (
                            <div key={index} className="flex items-center text-sm font-medium">
                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }} />
                                {adt.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveDashboard;
