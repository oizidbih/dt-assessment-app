import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search,
    Filter,
    Building2,
    ChevronRight,
    TrendingUp,
    TrendingDown,
    Activity
} from 'lucide-react';

const ministryData = [
    { id: 1, name: 'Ministry of Public Health', sector: 'Health', score: 92, status: 'Submitted', change: '+5%', participation: '100%', lastUpdated: '2 hours ago' },
    { id: 2, name: 'Ministry of Education', sector: 'Education', score: 88, status: 'Submitted', change: '+2%', participation: '95%', lastUpdated: '1 day ago' },
    { id: 3, name: 'Ministry of Interior', sector: 'Government', score: 85, status: 'In Review', change: '+0%', participation: '88%', lastUpdated: '3 hours ago' },
    { id: 4, name: 'Ministry of Transport', sector: 'Transport', score: 79, status: 'Submitted', change: '-1%', participation: '100%', lastUpdated: '5 hours ago' },
    { id: 5, name: 'Ministry of Municipality', sector: 'Municipality', score: 74, status: 'Draft', change: '+3%', participation: '45%', lastUpdated: 'Yesterday' },
    { id: 6, name: 'Ministry of Communications', sector: 'Technology', score: 95, status: 'Submitted', change: '+6%', participation: '100%', lastUpdated: '10 mins ago' },
    { id: 7, name: 'Ministry of Justice', sector: 'Government', score: 68, status: 'In Review', change: '+4%', participation: '72%', lastUpdated: '4 hours ago' },
    { id: 8, name: 'Ministry of Environment', sector: 'Environment', score: 62, status: 'Draft', change: '+1%', participation: '30%', lastUpdated: '2 days ago' },
];

const ReportsOverview: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSector, setSelectedSector] = useState('All');

    const filteredMinistries = ministryData.filter(m => {
        const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === 'All' || m.sector === selectedSector;
        return matchesSearch && matchesSector;
    });

    const sectors = ['All', ...new Set(ministryData.map(m => m.sector))];

    return (
        <div className="space-y-8 pb-8 animate-in fade-in duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#040F25] tracking-tight">
                        Entity Reports
                    </h1>
                    <p className="text-gray-500 mt-1">
                        Detailed maturity insights across <span className="font-bold text-skyline">48 government entities</span>
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-skyline transition-colors" />
                        <input
                            type="text"
                            placeholder="Find ministry..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyline/20 focus:border-skyline w-full md:w-64 transition-all"
                        />
                    </div>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <select
                            value={selectedSector}
                            onChange={(e) => setSelectedSector(e.target.value)}
                            className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-skyline/20 focus:border-skyline appearance-none bg-white text-sm font-medium transition-all cursor-pointer"
                        >
                            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Grid of Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMinistries.map((m) => (
                    <div
                        key={m.id}
                        onClick={() => navigate(`/reports/${m.id}`)}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-skyline/20 transition-all duration-300 cursor-pointer overflow-hidden group"
                    >
                        {/* Status Bar */}
                        <div className={`h-1.5 w-full ${m.status === 'Submitted' ? 'bg-green-500' :
                                m.status === 'In Review' ? 'bg-skyline' : 'bg-orange-400'
                            }`} />

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2.5 bg-gray-50 rounded-xl text-gray-400 group-hover:text-skyline group-hover:bg-skyline/10 transition-colors">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${m.status === 'Submitted' ? 'bg-green-50 text-green-700' :
                                            m.status === 'In Review' ? 'bg-blue-50 text-blue-700' : 'bg-orange-50 text-orange-700'
                                        }`}>
                                        {m.status}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-skyline transition-colors leading-tight">
                                {m.name}
                            </h3>
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                                {m.sector} Sector
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Maturity Score</p>
                                    <div className="flex items-center">
                                        <span className="text-2xl font-black text-gray-900 leading-none mr-2">{m.score}%</span>
                                        {m.change.startsWith('+') ? (
                                            <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                                        ) : m.change.startsWith('-') ? (
                                            <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                                        ) : null}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Participation</p>
                                    <div className="flex items-center justify-end">
                                        <Activity className="w-3.5 h-3.5 text-skyline/60 mr-1.5" />
                                        <span className="text-sm font-bold text-gray-700">{m.participation}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Link */}
                        <div className="px-6 py-3 bg-gray-50 flex items-center justify-between group-hover:bg-skyline/5 transition-colors">
                            <span className="text-[10px] font-medium text-gray-400 italic">Updated {m.lastUpdated}</span>
                            <div className="flex items-center text-xs font-bold text-skyline opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                View Report <ChevronRight className="w-3 h-3 ml-0.5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filteredMinistries.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                    <p className="text-gray-400 font-medium">No results found matching your criteria</p>
                </div>
            )}
        </div>
    );
};

export default ReportsOverview;
