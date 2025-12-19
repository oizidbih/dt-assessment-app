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
    { subject: 'Strategy Alignment', A: 120, B: 110, fullMark: 150 },
    { subject: 'User-Centricity', A: 98, B: 130, fullMark: 150 },
    { subject: 'Infrastructure', A: 86, B: 130, fullMark: 150 },
    { subject: 'Human Capital', A: 99, B: 100, fullMark: 150 },
    { subject: 'Data & AI', A: 85, B: 90, fullMark: 150 },
    { subject: 'Cyber Resilience', A: 65, B: 85, fullMark: 150 },
];

const standardsAlignment = [
    {
        name: 'UN EGDI',
        full: 'UN E-Government Index',
        status: 'High',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        impact: 'Contributes to Qatar\'s global digital ranking.',
        risk: 'Lower global visibility and international ranking.'
    },
    {
        name: 'NDS3',
        full: 'National Dev Strategy 3',
        status: 'At Risk',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        impact: 'Meets 90% digitization & 85% satisfaction targets.',
        risk: 'Failure to meet mandatory national efficiency mandates.'
    },
    {
        name: 'OECD DGI',
        full: 'Digital Government Index',
        status: 'Medium',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        impact: 'Aligns with "Digital by Design" best practices.',
        risk: 'Incoherent governance and siloed service delivery.'
    },
    {
        name: 'DA2030',
        full: 'Digital Agenda 2030',
        status: 'High',
        color: 'text-palm',
        bg: 'bg-palm/5',
        impact: 'Drives Digital Economy and Society pillars.',
        risk: 'Missed opportunities for economic diversification.'
    },
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

            {/* Standards Alignment Highlights */}
            <div className="bg-[#040F25] rounded-3xl md:rounded-[2.5rem] p-4 md:p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-palm/20 blur-[80px] md:blur-[120px] rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48" />
                <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-6 md:mb-8">
                        <div className="p-2 bg-palm rounded-lg shadow-lg shadow-palm/30">
                            <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-black tracking-tight uppercase">Strategic Standards Alignment</h2>
                            <p className="text-palm font-bold text-[10px] md:text-xs tracking-widest opacity-80 uppercase">International & National Benchmarks</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {standardsAlignment.map((s, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl hover:bg-white/15 transition-all group">
                                <div className="flex justify-between items-start mb-3 md:mb-4">
                                    <span className="text-base md:text-lg font-black tracking-tighter">{s.name}</span>
                                    <span className={`text-[8px] md:text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${s.status === 'At Risk' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-palm/20 text-palm border border-palm/30'}`}>
                                        {s.status}
                                    </span>
                                </div>
                                <p className="text-[10px] md:text-[11px] font-medium text-white/60 mb-2">{s.full}</p>
                                <p className="text-[11px] md:text-xs font-bold leading-tight group-hover:text-palm transition-colors">{s.impact}</p>
                            </div>
                        ))}
                    </div>

                    {/* Risk Analysis Banner */}
                    <div className="mt-6 md:mt-8 p-4 md:p-6 bg-red-950/30 border border-red-500/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500">
                            <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[10px] md:text-sm font-black text-red-400 uppercase tracking-widest mb-1">Non-Alignment Risk Monitor</h4>
                            <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                                "Gaps in <span className="text-red-300 font-bold">NDS3</span> and <span className="text-red-300 font-bold">OECD</span> metrics indicate potential risks to national efficiency mandates. Non-compliance results in reduced budget prioritization for digital programs and lowers Qatar's international readiness index."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Benchmarking Radar */}
                <div className="bg-white p-4 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">Performance Benchmark</h3>
                        <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold">
                            <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-palm mr-2" />My Entity</div>
                            <div className="flex items-center"><div className="w-2.5 h-2.5 rounded-full bg-gray-300 mr-2" />National Avg</div>
                        </div>
                    </div>
                    <div className="h-64 md:h-80 w-full overflow-hidden">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart outerRadius={window.innerWidth < 768 ? 70 : 110} data={radarData}>
                                <PolarGrid stroke="#f0f0f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6B7280', fontSize: 10, fontWeight: 600 }} />
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
