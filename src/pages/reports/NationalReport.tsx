import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const mockSectorData = [
    { name: 'Health', score: 85 },
    { name: 'Education', score: 72 },
    { name: 'Transport', score: 65 },
    { name: 'Municipality', score: 58 },
    { name: 'Environment', score: 45 },
];

const NationalReport: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Executive Dashboard</h1>
            <p className="text-gray-500 mb-8">National Digital Transformation Status Overview</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500">National Average</p>
                    <p className="text-3xl font-bold text-skyline mt-2">68.4%</p>
                    <p className="text-xs text-green-500 mt-1">↑ 4.2% vs 2024</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500">Participating Entities</p>
                    <p className="text-3xl font-bold text-skyline mt-2">48/52</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500">Top Performing Sector</p>
                    <p className="text-3xl font-bold text-palm mt-2">Health</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-500">Entities &gt; 80%</p>
                    <p className="text-3xl font-bold text-al-adaam mt-2">12</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[400px]">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Sectoral Performance</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart
                            data={mockSectorData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                            <XAxis type="number" domain={[0, 100]} />
                            <YAxis dataKey="name" type="category" width={100} />
                            <Tooltip />
                            <Bar dataKey="score" fill="#0d4261" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-[400px]">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Distribution by Maturity Level</h3>
                    <div className="flex flex-col justify-center h-full pb-10">
                        {/* Custom visual for distribution */}
                        {[
                            { label: 'Advanced (>80%)', count: 12, color: 'bg-palm', width: '25%' },
                            { label: 'Establish (60-80%)', count: 24, color: 'bg-sea', width: '50%' },
                            { label: 'Emerging (40-60%)', count: 10, color: 'bg-dune', width: '20%' },
                            { label: 'Nascent (<40%)', count: 2, color: 'bg-red-400', width: '5%' },
                        ].map((level, idx) => (
                            <div key={idx} className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium text-gray-700">{level.label}</span>
                                    <span className="font-bold text-gray-900">{level.count} Entities</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-4">
                                    <div className={`${level.color} h-4 rounded-full`} style={{ width: level.width }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NationalReport;
