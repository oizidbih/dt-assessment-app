import React from 'react';
import {
    Sparkles,
    TrendingUp,
    Users,
    Cpu,
    Globe,
    Zap,
    Brain,
    ShieldCheck,
    ArrowUpRight,
    Search
} from 'lucide-react';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

const economyTrendData = [
    { month: 'Jan', value: 4.2 },
    { month: 'Feb', value: 4.5 },
    { month: 'Mar', value: 4.8 },
    { month: 'Apr', value: 5.2 },
    { month: 'May', value: 5.9 },
    { month: 'Jun', value: 6.5 },
];

const adoptionData = [
    { name: 'Cloud Native', value: 85, impact: 'High' },
    { name: 'AI/ML Ops', value: 62, impact: 'Critical' },
    { name: 'Cyber Resilience', value: 78, impact: 'High' },
    { name: 'Green Tech', value: 45, impact: 'Medium' },
    { name: 'Blockchain', value: 30, impact: 'Emerging' },
];

const ExecutiveInsights: React.FC = () => {
    return (
        <div className="space-y-8 pb-12 animate-in fade-in duration-1000">
            {/* AI Intelligence Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#040F25] via-[#0A1A3F] to-[#040F25] rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl group">
                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-skyline/10 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-palm/5 rounded-full blur-[80px] -ml-32 -mb-32" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6 group-hover:border-skyline/30 transition-colors">
                            <Sparkles className="w-4 h-4 text-skyline animate-pulse" />
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/70">Quantum Strategic Intelligence</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
                            AI-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-skyline to-palm">National Intelligence</span>
                        </h1>
                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-8">
                            Synthesizing 1.2M+ data points across Qatar's government entities to provide real-time strategic foresight for the State's digital transformation roadmap.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="px-6 py-3 bg-skyline text-white rounded-xl font-bold flex items-center hover:bg-sky-400 transition-all shadow-lg shadow-skyline/20">
                                <Search className="w-4 h-4 mr-2" />
                                Deep Dive Analysis
                            </button>
                            <button className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all">
                                Export Executive Brief
                            </button>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center">
                        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                            {/* Orbital Rings */}
                            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 border border-skyline/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 border border-palm/20 rounded-full animate-[spin_10s_linear_infinite]" />

                            {/* Core Icon */}
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-skyline to-palm rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,75,135,0.4)] relative group-hover:scale-110 transition-transform duration-500">
                                <Brain className="w-12 h-12 md:w-16 md:h-16 text-white" />
                                <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping" />
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <div className="text-3xl font-black text-white">99.2%</div>
                            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Confidence Index</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Economic Impact Card */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-24 h-24 text-skyline" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-skyline mb-6">
                            <Globe className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Economy Impact</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            Assessment results indicate a <span className="text-skyline font-bold">+5.8%</span> potential contribution to Qatar's non-hydrocarbon GDP through service digitization.
                        </p>
                        <div className="h-32 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={economyTrendData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#004B87" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#004B87" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="value" stroke="#004B87" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Youth Development Card */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                        <Users className="w-24 h-24 text-palm" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-palm mb-6">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Youth & Talent Readiness</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            Organisational focus on "Digital Upskilling" has surged by <span className="text-palm font-bold">42%</span>, directly impacting youth technical employment prospects.
                        </p>
                        <div className="space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-xs font-bold text-gray-400">Current Readiness Index</span>
                                <span className="text-lg font-black text-palm">78/100</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-palm rounded-full w-[78%]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technology Adoption Matrix */}
                <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                        <Cpu className="w-24 h-24 text-secondary" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-secondary mb-6">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Adoption Velocity</h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            AI/ML Ops and Cloud Native architectures are seeing the highest investment priorities across the Govt sector.
                        </p>
                        <div className="h-32 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={adoptionData}>
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                        {adoptionData.map((_entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 1 ? '#F49E2D' : '#0d4261'} opacity={0.8} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Intelligent Insights Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Critical Observations */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">AI Observations</h3>
                        <span className="text-[10px] font-bold text-skyline px-2 py-1 bg-sky-50 rounded-lg uppercase tracking-widest">Real-time Sync</span>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Cross-Sector Synergy",
                                text: "A strong correlation (0.85) detected between 'Data Governance' in Health and 'Cyber Resilience' in Finance.",
                                icon: ShieldCheck,
                                color: "text-blue-500",
                                bg: "bg-blue-50"
                            },
                            {
                                title: "Policy Gap Identified",
                                text: "While tech adoption is high, 'Interoperability Standards' lag by 15% compared to OECD leading digital nations.",
                                icon: Zap,
                                color: "text-orange-500",
                                bg: "bg-orange-50"
                            },
                            {
                                title: "Resource Optimization",
                                text: "Potential for 22% infrastructure cost reduction identified through cross-entity shared service clusters.",
                                icon: Cpu,
                                color: "text-purple-500",
                                bg: "bg-purple-50"
                            }
                        ].map((insight, idx) => (
                            <div key={idx} className="flex gap-4 group cursor-default">
                                <div className={`w-12 h-12 shrink-0 rounded-2xl ${insight.bg} ${insight.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <insight.icon className="w-5 h-5" />
                                </div>
                                <div className="border-b border-gray-50 pb-4 flex-1">
                                    <h4 className="font-bold text-gray-900 mb-1">{insight.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">{insight.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Executive Action Roadmap */}
                <div className="bg-[#040F25] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-skyline/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10 h-full flex flex-col">
                        <h3 className="text-2xl font-black mb-8">Executive Recommendation</h3>
                        <div className="space-y-8 flex-1">
                            <div className="flex gap-6">
                                <div className="mt-1 text-skyline font-black text-2xl flex-shrink-0">01.</div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">Accelerate NDS3 Pillars</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Prioritize budget allocation for Pillar 4 (Infrastructure) for entities below 70% maturity to ensure national baseline consistency.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="mt-1 text-palm font-black text-2xl flex-shrink-0">02.</div>
                                <div>
                                    <h4 className="font-bold text-white mb-2 text-lg">National Data Exchange</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Launch the centralized data exchange protocol identified as the primary blocker for advanced AI deployment across Transport & Interior sectors.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-12 py-4 bg-gradient-to-r from-skyline to-palm rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center hover:opacity-90 transition-opacity">
                            Approve Recommended Policy Adjustments
                            <ArrowUpRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveInsights;
