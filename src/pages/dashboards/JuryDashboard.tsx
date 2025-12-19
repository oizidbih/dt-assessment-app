import React from 'react';
import { Award, ChevronRight, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { type AwardCategory } from '../../types/excellence';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const categories: { id: AwardCategory; description: string; count: number }[] = [
    { id: 'Best Overall Digital Transformation', description: 'Entities with highest overall maturity scores.', count: 2 },
    { id: 'Best in Innovation', description: 'Entities deploying cutting-edge technologies.', count: 2 },
    { id: 'Fastest Improver', description: 'Highest YoY score increase.', count: 0 },
    { id: 'Best Customer Experience', description: 'Top scores in CX pillar.', count: 0 },
];

const votingProgress = [
    { name: 'Voted', value: 4 },
    { name: 'Remaining', value: 8 },
];
const COLORS = ['#9333ea', '#f3f4f6'];

const JuryDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8 pb-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-1">Jury Portal</h1>
                    <p className="text-gray-500">Excellence Awards Voting Session</p>
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg text-sm font-medium border border-yellow-100">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Voting closes in 3 days
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Stats / Progress */}
                <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Your Voting Progress</h3>
                    <div className="h-64 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={votingProgress}
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    startAngle={90}
                                    endAngle={-270}
                                >
                                    {votingProgress.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-black text-purple-600">33%</span>
                            <span className="text-xs font-bold text-gray-400 uppercase">Completed</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-500">You have cast 4 votes out of 12 eligible nominations.</p>
                    </div>
                </div>

                {/* Categories */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                    {categories.map((cat) => (
                        <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group cursor-pointer" onClick={() => cat.count > 0 && navigate(`/jury/vote/${encodeURIComponent(cat.id)}`)}>
                            <div className="flex items-start justify-between">
                                <div className="flex items-start">
                                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl mr-5 group-hover:scale-110 transition-transform">
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{cat.id}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                                        <div className="mt-3 inline-flex items-center text-xs font-medium bg-gray-100 px-2.5 py-0.5 rounded-md text-gray-600">
                                            {cat.count} Nominees
                                        </div>
                                    </div>
                                </div>
                                <div className="text-gray-300 group-hover:text-purple-600 transition-colors">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JuryDashboard;
