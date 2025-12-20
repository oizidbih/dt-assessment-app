import React from 'react';
import { useAuth, type UserRole } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, BarChart3, Gavel, LayoutDashboard, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import backgroundImg from '../assets/background.jpg';
import logoWithText from '../assets/logo.svg';
import introVideo from '../assets/intro.mp4';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogin = (role: UserRole) => {
        login(role);
        navigate('/');
    };

    const roles: { role: UserRole; labelKey: string; icon: React.ReactNode; descKey: string }[] = [
        { role: 'admin', labelKey: 'login.role_dta_manager', icon: <ShieldCheck className="w-6 h-6" />, descKey: 'login.role_dta_manager_desc' },
        { role: 'focal_point', labelKey: 'login.role_focal_point', icon: <LayoutDashboard className="w-6 h-6" />, descKey: 'login.role_focal_point_desc' },
        { role: 'assessor', labelKey: 'login.role_assessor', icon: <User className="w-6 h-6" />, descKey: 'login.role_assessor_desc' },
        { role: 'executive', labelKey: 'login.role_executive', icon: <BarChart3 className="w-6 h-6" />, descKey: 'login.role_executive_desc' },
        { role: 'jury', labelKey: 'login.role_jury', icon: <Gavel className="w-6 h-6" />, descKey: 'login.role_jury_desc' },
    ];

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden font-inter">

            <div className="absolute inset-0 z-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#040F25] bg-opacity-60 backdrop-blur-sm"></div>
            </div>

            {/* Premium Header */}
            <header className="absolute top-0 left-0 right-0 z-50 bg-[#040F25] shadow-[0_20px_50px_rgba(59,130,246,0.15)] border-b border-white/5">
                {/* Lighting Effect from top */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none h-px"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <img src={logoWithText} alt="MCIT Logo" className="h-12 w-auto filter brightness-0 invert" />
                    </div>

                    <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
                        <a href="#" className="text-white text-xs font-bold tracking-widest hover:text-white/70 transition">{t('nav.home')}</a>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse group cursor-pointer">
                            <a href="#" className="text-white text-xs font-bold tracking-widest group-hover:text-white/70 transition uppercase">{t('nav.about_us')}</a>
                            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition" />
                        </div>
                        <a href="#" className="text-white text-xs font-bold tracking-widest hover:text-white/70 transition uppercase">{t('nav.gov_ai_program')}</a>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse group cursor-pointer">
                            <a href="#" className="text-white text-xs font-bold tracking-widest group-hover:text-white/70 transition uppercase">{t('nav.career')}</a>
                            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition" />
                        </div>
                        <a href="#" className="text-white text-xs font-bold tracking-widest hover:text-white/70 transition uppercase">{t('nav.services')}</a>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse group cursor-pointer">
                            <a href="#" className="text-white text-xs font-bold tracking-widest group-hover:text-white/70 transition uppercase">{t('nav.media_centre')}</a>
                            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition" />
                        </div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse group cursor-pointer">
                            <a href="#" className="text-white text-xs font-bold tracking-widest group-hover:text-white/70 transition uppercase">{t('nav.publications')}</a>
                            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition" />
                        </div>
                        <div className="flex items-center space-x-1 rtl:space-x-reverse group cursor-pointer">
                            <a href="#" className="text-white text-xs font-bold tracking-widest group-hover:text-white/70 transition uppercase">{t('nav.help_contact')}</a>
                            <ChevronDown className="w-3 h-3 text-white/70 group-hover:text-white transition" />
                        </div>
                    </nav>
                </div>
            </header>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
            >

                <div className="w-full flex flex-col md:flex-row gap-8 items-stretch justify-center">
                    {/* Left Side: Welcome & Video */}
                    <div className="w-full md:w-[450px] flex flex-col items-center md:items-start">
                        {/* Video Player with Text Overlay */}
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/20 relative group flex items-center justify-center text-center min-h-[450px]">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            >
                                <source src={introVideo} type="video/mp4" />
                            </video>
                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Text Overlay */}
                            <div className="relative z-10 p-8 pt-16 flex flex-col items-center justify-start h-full">
                                <h1 className="text-2xl md:text-4xl font-black mb-4 text-white drop-shadow-2xl text-center leading-tight">
                                    {t('login.page_title')}
                                </h1>
                                <p className="text-base md:text-lg text-gray-200 max-w-sm drop-shadow-lg font-medium text-center italic opacity-90">
                                    {t('login.page_subtitle')}
                                </p>
                            </div>
                        </div>


                    </div>

                    {/* Right Side: Login Card */}
                    <div className="w-full md:w-[450px] bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20 flex flex-col">
                        <h2 className="text-2xl font-bold text-dune mb-6 text-center">{t('login.select_interface')}</h2>
                        <div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            {roles.map((item) => (
                                <button
                                    key={item.role}
                                    onClick={() => handleLogin(item.role)}
                                    className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-al-adaam hover:bg-red-50 transition-all group text-left rtl:text-right"
                                >
                                    <div className="mr-3 rtl:mr-0 rtl:ml-3 text-dune group-hover:text-al-adaam p-2 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-gray-800 group-hover:text-al-adaam">
                                            {t(item.labelKey)}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-tight">
                                            {t(item.descKey)}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>


        </div>
    );
};

export default Login;
