import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
    PieChart, Pie, Cell
} from 'recharts';
import { ArrowUpRight, Download, Filter } from 'lucide-react';
// import { useLanguage } from '../../context/LanguageContext';

// --- Mock Data ---

const kpiData = [
    { label: 'National Maturity Index', value: '68.4%', trend: '+4.2%', color: 'text-al-adaam' },
    { label: 'Participating Entities', value: '48/52', trend: '92% Rate', color: 'text-skyline' },
    { label: 'Completed Assessments', value: '42', trend: 'Last 7 days', color: 'text-green-600' },
    { label: 'Top Performing Sector', value: 'Health', trend: 'Avg 85%', color: 'text-palm' },
];

const radarData = [
    { subject: 'Strategy', A: 85, B: 65, fullMark: 100 },
    { subject: 'Customer Exp.', A: 78, B: 58, fullMark: 100 },
    { subject: 'Operations', A: 62, B: 72, fullMark: 100 },
    { subject: 'Technology', A: 90, B: 60, fullMark: 100 },
    { subject: 'Data', A: 55, B: 45, fullMark: 100 },
    { subject: 'Innovation', A: 70, B: 50, fullMark: 100 },
];

const sectorData = [
    { name: 'Health', score: 85 },
    { name: 'Education', score: 72 },
    { name: 'Transport', score: 65 },
    { name: 'Municipality', score: 58 },
    { name: 'Environment', score: 45 },
    { name: 'Justice', score: 60 },
    { name: 'Finance', score: 78 },
];

const maturityDistribution = [
    { name: 'Advanced', value: 12 },
    { name: 'Established', value: 20 },
    { name: 'Emerging', value: 10 },
    { name: 'Nascent', value: 6 },
];

const COLORS = ['#8C2F39', '#004B87', '#00A3A1', '#B0B0B0']; // Al-Adaam, Skyline, Sea, Grey

type Ministry = {
    id: number;
    name: string;
    sector: string;
    score: number;
    status: 'Submitted' | 'In Review' | 'Draft';
    change: string;
};

const ministryData: Ministry[] = [
    { id: 1, name: 'Ministry of Public Health', sector: 'Health', score: 92, status: 'Submitted', change: '+5%' },
    { id: 2, name: 'Ministry of Education', sector: 'Education', score: 88, status: 'Submitted', change: '+2%' },
    { id: 3, name: 'Ministry of Interior', sector: 'Government', score: 85, status: 'In Review', change: '+0%' },
    { id: 4, name: 'Ministry of Transport', sector: 'Transport', score: 79, status: 'Submitted', change: '-1%' },
    { id: 5, name: 'Ministry of Municipality', sector: 'Municipality', score: 74, status: 'Draft', change: '+3%' },
    { id: 6, name: 'Ministry of Communications', sector: 'Technology', score: 95, status: 'Submitted', change: '+6%' },
    { id: 7, name: 'Ministry of Justice', sector: 'Government', score: 68, status: 'In Review', change: '+4%' },
    { id: 8, name: 'Ministry of Environment', sector: 'Environment', score: 62, status: 'Draft', change: '+1%' },
];

const NationalReport: React.FC = () => {
    // const { t } = useLanguage();
    const [filterSector] = useState('All');

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 space-y-8">

            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">National Digital Maturity Dashboard</h1>
                    <p className="text-gray-500 mt-1">Real-time insights across government entities • 2025 Cycle</p>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                        <Filter className="w-4 h-4 mr-2" /> Filter: {filterSector}
                    </button>
                    <button className="flex items-center px-4 py-2 bg-skyline text-white rounded-lg hover:bg-sky-900 text-sm font-medium">
                        <Download className="w-4 h-4 mr-2" /> Export PDF
                    </button>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                        <div>
                            <p className="text-sm font-medium text-gray-500">{kpi.label}</p>
                            <h3 className={`text-3xl font-bold mt-2 ${kpi.color}`}>{kpi.value}</h3>
                        </div>
                        <div className="flex items-center mt-4 text-sm">
                            <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                            <span className="text-green-600 font-medium">{kpi.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Row 1: Radar (Comparison) & Donut (Distribution) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Maturity by Pillar</h3>
                        <div className="flex space-x-4 text-xs">
                            <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-al-adaam mr-2"></div> Top Performer</span>
                            <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-skyline mr-2"></div> National Avg</span>
                        </div>
                    </div>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart outerRadius="80%" data={radarData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                <Radar name="Top Performer" dataKey="A" stroke="#8C2F39" fill="#8C2F39" fillOpacity={0.3} />
                                <Radar name="National Avg" dataKey="B" stroke="#004B87" fill="#004B87" fillOpacity={0.3} />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Donut & Details */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Maturity Level Distribution</h3>
                    <div className="flex-1 flex flex-col md:flex-row items-center">
                        <div className="w-full h-[250px] md:w-1/2">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={maturityDistribution}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {maturityDistribution.map((_entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4">
                            {maturityDistribution.map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center">
                                        <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">{item.value} Entities</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts Row 2: Sectoral Bar Chart */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-6">Average Performance by Sector</h3>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sectorData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                            <Bar dataKey="score" fill="#004B87" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Entity Leaderboard Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-800">Entity Performance Leaderboard</h3>
                    <button className="text-sm text-skyline font-medium hover:underline">View All Entities</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Rank</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Entity</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sector</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Score</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">vs Last Year</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {ministryData.map((item, index) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${index < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {index + 1}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.sector}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-bold text-gray-900">{item.score}%</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`text-sm font-medium ${item.change.startsWith('+') ? 'text-green-600' : item.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}`}>
                                            {item.change}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                                            item.status === 'In Review' ? 'bg-blue-100 text-blue-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default NationalReport;
