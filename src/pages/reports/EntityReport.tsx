import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Printer,
    ArrowLeft,
    TrendingUp,
    Target,
    Award,
    ShieldCheck,
    Zap,
    Download,
    Activity
} from 'lucide-react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

// Mock detailed data per entity
const entityDetails: any = {
    '1': { name: 'Ministry of Public Health', sector: 'Health', score: 92, trend: '+5%', status: 'Advanced' },
    '2': { name: 'Ministry of Education', sector: 'Education', score: 88, trend: '+2%', status: 'Established' },
};

const pillarTrendData = [
    { year: '2021', score: 45 },
    { year: '2022', score: 58 },
    { year: '2023', score: 72 },
    { year: '2024', score: 85 },
    { year: '2025', score: 92 },
];

const radarData = [
    { subject: 'Strategy', A: 92, B: 70, fullMark: 100 },
    { subject: 'Customer', A: 88, B: 65, fullMark: 100 },
    { subject: 'Operations', A: 95, B: 75, fullMark: 100 },
    { subject: 'Technology', A: 85, B: 68, fullMark: 100 },
    { subject: 'Data', A: 98, B: 72, fullMark: 100 },
];

const EntityReport: React.FC = () => {
    const { entityId } = useParams<{ entityId: string }>();
    const navigate = useNavigate();

    const details = entityDetails[entityId || '1'] || entityDetails['2'];

    const handlePrint = () => window.print();

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 space-y-8 animate-in slide-in-from-right-4 duration-700 print:py-0 print:max-w-none">
            {/* Header & Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 print:hidden">
                <button
                    onClick={() => navigate('/reports')}
                    className="flex items-center text-sm font-bold text-gray-500 hover:text-skyline transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Entity Overview
                </button>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handlePrint}
                        className="flex items-center px-4 py-2 border border-gray-200 rounded-xl bg-white text-gray-700 hover:bg-gray-50 text-sm font-bold shadow-sm transition-all"
                    >
                        <Printer className="w-4 h-4 mr-2" />
                        Print Report
                    </button>
                    <button className="flex items-center px-4 py-2 bg-skyline text-white rounded-xl hover:bg-sky-900 text-sm font-bold shadow-lg shadow-skyline/20 transition-all">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                    </button>
                </div>
            </div>

            {/* Main Report Card */}
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden print:shadow-none print:border-none">
                {/* Visual Header */}
                <div className="bg-gradient-to-r from-deep-navy to-skyline p-6 md:p-10 text-white relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl shrink-0" />
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] md:text-xs font-black uppercase tracking-widest text-white shrink-0">
                                    {details.status} Level
                                </span>
                                <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">• {details.sector} Sector</span>
                            </div>
                            <h1 className="text-2xl md:text-4xl font-black tracking-tight mb-2 truncate">{details.name}</h1>
                            <p className="text-white/80 text-xs md:text-sm font-medium max-w-lg">Digital Maturity Assessment Result • Fiscal Year 2025 Cycle</p>
                        </div>
                        <div className="text-center md:text-right bg-white/10 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-white/20 w-full md:min-w-[200px] md:w-auto">
                            <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Maturity Score</p>
                            <p className="text-4xl md:text-6xl font-black text-white leading-none mb-2">{details.score}%</p>
                            <div className="flex items-center justify-center md:justify-end text-green-400 font-bold text-xs">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {details.trend} vs 2024
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-10 space-y-10 md:space-y-12">
                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Comparison Chart */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-extrabold text-[#040F25]">Sector Benchmarking</h3>
                                <div className="flex items-center space-x-4 text-xs font-bold">
                                    <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-skyline mr-2" />Entity</span>
                                    <span className="flex items-center"><div className="w-3 h-3 rounded-full bg-gray-200 mr-2" />National Avg</span>
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart outerRadius="80%" data={radarData}>
                                        <PolarGrid stroke="#f1f5f9" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 13, fontWeight: 700 }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                        <Radar name="Entity" dataKey="A" stroke="#004B87" fill="#004B87" fillOpacity={0.2} strokeWidth={3} />
                                        <Radar name="National" dataKey="B" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.1} strokeWidth={2} />
                                        <Tooltip />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Trend Chart */}
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xl font-extrabold text-[#040F25]">Maturity Progression</h3>
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">YoY Comparison</span>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={pillarTrendData}>
                                        <defs>
                                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8C2F39" stopOpacity={0.1} />
                                                <stop offset="95%" stopColor="#8C2F39" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }} />
                                        <YAxis domain={[0, 100]} hide />
                                        <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                                        <Area type="monotone" dataKey="score" stroke="#8C2F39" strokeWidth={4} fillOpacity={1} fill="url(#colorScore)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Pillar Deep Dive */}
                    <div>
                        <h3 className="text-xl font-extrabold text-[#040F25] mb-8">Pillar Performance Breakdown</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: 'Strategy & Leadership', score: 92, icon: Target, color: 'skyline', desc: 'Exceptional strategic alignment with top-down vision.' },
                                { title: 'Customer Experience', score: 88, icon: Zap, color: 'palm', desc: 'Seamless digital service delivery across all touchpoints.' },
                                { title: 'Data & Analytics', score: 98, icon: ShieldCheck, color: 'al-adaam', desc: 'Advanced data governance and predictive modeling.' },
                                { title: 'Technology', score: 85, icon: Activity, color: 'skyline', desc: 'Modern cloud-first infrastructure and API integration.' },
                                { title: 'Operations', score: 95, icon: Award, color: 'dune', desc: 'Automated internal workflows and high efficiency.' },
                            ].map((p, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-gray-50 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-skyline/10 transition-all duration-300 group">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-white rounded-xl shadow-sm text-skyline group-hover:bg-skyline group-hover:text-white transition-colors">
                                            <p.icon className="w-5 h-5" />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-gray-900">{p.score}%</span>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2 leading-tight">{p.title}</h4>
                                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{p.desc}</p>
                                    <div className="mt-4 h-1.5 w-full bg-white rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-skyline rounded-full"
                                            style={{ width: `${p.score}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Strategic Recommendations */}
                    <div className="bg-[#040F25] text-white p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-skyline/10 rounded-full -mr-48 -mt-48 blur-3xl" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-8 flex items-center">
                                <Award className="w-8 h-8 mr-4 text-dune" />
                                MCIT Recommendation & Roadmap
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-dune uppercase tracking-widest text-xs">Immediate Priority</h4>
                                    <p className="text-white/80 font-medium leading-relaxed">
                                        Scale the "Advanced AI" pilot program from Operations to Customer Experience. This will likely push the CX score above 95% within the next cycle.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-dune uppercase tracking-widest text-xs">Long-term Vision</h4>
                                    <p className="text-white/80 font-medium leading-relaxed">
                                        Continue investing in sovereign cloud training for technical staff to ensure long-term sustainability and data security alignment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntityReport;
