import React, { useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import {
    Users,
    FileCheck,
    TrendingUp,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Clock
} from 'lucide-react';
import {
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8A1538', '#A29475', '#0d4261', '#129b82', '#4194b3'];

const AdminDashboard: React.FC = () => {
    const { user } = useAuth();
    const { t } = useTranslation();

    // Translated chart data
    const maturityTrendData = useMemo(() => [
        { month: t('months.jan'), score: 45 },
        { month: t('months.feb'), score: 52 },
        { month: t('months.mar'), score: 48 },
        { month: t('months.apr'), score: 61 },
        { month: t('months.may'), score: 68 },
        { month: t('months.jun'), score: 72 },
    ], [t]);

    const sectorData = useMemo(() => [
        { name: t('sectors.government'), value: 400 },
        { name: t('sectors.health'), value: 300 },
        { name: t('sectors.education'), value: 300 },
        { name: t('sectors.transport'), value: 200 },
    ], [t]);

    const pillarData = useMemo(() => {
        const data = [
            { name: t('pillars.strategy'), score: 85 },
            { name: t('pillars.governance'), score: 72 },
            { name: t('pillars.infrastructure'), score: 65 },
            { name: t('pillars.human_capital'), score: 78 },
            { name: t('pillars.innovation'), score: 60 },
        ];
        // Reverse data order for RTL to make bars appear to grow from right
        return document.documentElement.dir === 'rtl' ? [...data].reverse() : data;
    }, [t]);

    const stats = [
        { labelKey: 'admin.active_entities', value: '45', icon: Users, color: 'from-palm/20 to-palm/5', textColor: 'text-palm', trendKey: 'admin.new_entities', isUp: true },
        { labelKey: 'admin.pending_reviews', value: '8', icon: FileCheck, color: 'from-red-100 to-red-50', textColor: 'text-red-500', trendKey: 'admin.high_priority', isUp: false },
        { labelKey: 'admin.national_score', value: '72%', icon: TrendingUp, color: 'from-sea/20 to-sea/5', textColor: 'text-sea', trendKey: 'admin.score_increase', isUp: true },
        { labelKey: 'admin.completion_rate', value: '88%', icon: Activity, color: 'from-sunrise/20 to-sunrise/5', textColor: 'text-dune', trendKey: 'admin.on_track', isUp: true },
    ];

    const activities = useMemo(() => [
        { nameKey: 'entities.ministry_interior', actionKey: 'admin.submitted_assessment', time: t('admin.mins_ago', { count: 12 }), color: 'bg-green-100 text-green-700' },
        { nameKey: 'entities.public_health', actionKey: 'admin.requested_review', time: t('admin.mins_ago', { count: 45 }), color: 'bg-yellow-100 text-yellow-700' },
        { nameKey: 'entities.ashghal', actionKey: 'admin.pillar_completed', time: t('admin.hours_ago', { count: 2 }), color: 'bg-blue-100 text-blue-700' },
        { nameKey: 'entities.mcit_support', actionKey: 'admin.new_cycle_created', time: t('admin.hours_ago', { count: 5 }), color: 'bg-purple-100 text-purple-700' },
    ], [t]);

    return (
        <div className="space-y-8 pb-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-[#040F25] tracking-tight">
                        {t('admin.program_overview')}
                    </h1>
                    <p className="text-gray-500 mt-1">
                        {t('admin.welcome_back', { name: user?.name.split(' ')[1] || user?.name })} <span className="text-al-adaam font-bold uppercase tracking-wider text-sm">{t('admin.cycle_label')}</span>
                    </p>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition shadow-sm font-semibold text-sm">
                        {t('common.export_data')}
                    </button>
                    <button className="px-5 py-2.5 bg-[#040F25] text-white rounded-xl hover:bg-opacity-90 transition shadow-lg shadow-blue-900/20 font-semibold text-sm flex items-center">
                        {t('common.generate_report')}
                        <ArrowUpRight className="ml-2 rtl:ml-0 rtl:mr-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-5 md:p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className={`absolute top-0 right-0 rtl:right-auto rtl:left-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-30 -mr-16 rtl:-mr-0 rtl:-ml-16 -mt-16 rounded-full transition-transform group-hover:scale-110`} />
                        <div className="relative z-10">
                            <div className={`p-2.5 rounded-xl bg-gray-50 ${stat.textColor} w-fit mb-3 md:mb-4`}>
                                <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="flex items-end justify-between">
                                <div>
                                    <p className="text-[10px] md:text-sm font-medium text-gray-500 mb-1">{t(stat.labelKey)}</p>
                                    <p className="text-2xl md:text-3xl font-black text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded-lg ${stat.isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {stat.isUp ? <ArrowUpRight className="w-2.5 h-2.5 mr-1 rtl:mr-0 rtl:ml-1" /> : <ArrowDownRight className="w-2.5 h-2.5 mr-1 rtl:mr-0 rtl:ml-1" />}
                                    {t(stat.trendKey)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Visualizations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Maturity Trend */}
                <div className="lg:col-span-2 bg-white p-4 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 font-display uppercase tracking-tight">{t('admin.national_maturity_trend')}</h3>
                    <div className="h-64 md:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={maturityTrendData}>
                                <defs>
                                    <linearGradient id="colorScoreAdmin" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8A1538" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#8A1538" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} dy={10} reversed={document.documentElement.dir === 'rtl'} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 10 }} />
                                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="score" stroke="#8A1538" strokeWidth={3} fillOpacity={1} fill="url(#colorScoreAdmin)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sector Distribution */}
                <div className="bg-white p-4 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-display uppercase tracking-tight">{t('admin.sector_breakdown')}</h3>
                    <div className="h-48 md:h-64 w-full relative flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={sectorData} innerRadius={window.innerWidth < 768 ? 50 : 60} outerRadius={window.innerWidth < 768 ? 70 : 80} paddingAngle={5} dataKey="value">
                                    {sectorData.map((_entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-xl md:text-2xl font-black text-gray-900">1.2k</span>
                            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase">{t('common.entities')}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Pillar Performance */}
                <div className="bg-white p-4 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-8 font-display uppercase tracking-tight">{t('admin.pillar_performance')}</h3>
                    <div className="h-64 md:h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={pillarData}
                                layout="vertical"
                                margin={{ left: window.innerWidth < 768 ? 0 : 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f0f0f0" />
                                <XAxis type="number" hide reversed={document.documentElement.dir === 'rtl'} />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#4B5563', fontSize: 11, fontWeight: 600 }}
                                    width={80}
                                    orientation={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
                                />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Bar
                                    dataKey="score"
                                    radius={document.documentElement.dir === 'rtl' ? [8, 0, 0, 8] : [0, 8, 8, 0]}
                                    barSize={20}
                                >
                                    {pillarData.map((_entry, index) => (
                                        <Cell key={`bar-${index}`} fill={index === 0 ? '#8A1538' : '#0d4261'} opacity={0.8 - (index * 0.1)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-4 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 font-display uppercase tracking-tight">{t('admin.recent_activity')}</h3>
                        <button className="text-xs font-bold text-secondary hover:underline uppercase tracking-widest">{t('common.view_all')}</button>
                    </div>
                    <div className="space-y-6">
                        {activities.map((activity, i) => (
                            <div key={i} className="flex items-center justify-between group">
                                <div className="flex items-center min-w-0">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gray-50 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 md:mr-4 rtl:md:mr-0 rtl:md:ml-4 group-hover:bg-gray-100 transition shrink-0">
                                        <Activity className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                                    </div>
                                    <div className="truncate">
                                        <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{t(activity.nameKey)}</p>
                                        <p className="text-[10px] md:text-xs text-gray-500 truncate">{t(activity.actionKey)}</p>
                                    </div>
                                </div>
                                <div className="text-right rtl:text-left shrink-0 ml-4 rtl:ml-0 rtl:mr-4">
                                    <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md mb-1 ${activity.color}`}>
                                        {t(activity.actionKey).split(' ')[0]}
                                    </p>
                                    <div className="flex items-center text-[8px] md:text-[10px] text-gray-400 font-bold justify-end rtl:justify-start">
                                        <Clock className="w-2.5 h-2.5 mr-1 rtl:mr-0 rtl:ml-1" />
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

export default AdminDashboard;
