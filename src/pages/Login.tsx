import React from 'react';
import { useAuth, type UserRole } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, BarChart3, Gavel, LayoutDashboard, Play, Info, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import backgroundImg from '../assets/background.jpg';
import logoWithText from '../assets/logo.svg';
import introVideo from '../assets/intro.mp4';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showVideo, setShowVideo] = useState(false);
    const [showMethodology, setShowMethodology] = useState(false);

    const handleLogin = (role: UserRole) => {
        login(role);
        navigate('/');
    };

    const roles: { role: UserRole; label: string; icon: React.ReactNode; description: string }[] = [
        { role: 'admin', label: 'DTA Program Manager', icon: <ShieldCheck className="w-6 h-6" />, description: 'Manage cycles, users, and overall system.' },
        { role: 'focal_point', label: 'Entity Focal Point', icon: <LayoutDashboard className="w-6 h-6" />, description: 'Submit assessments and manage entity data.' },
        { role: 'assessor', label: 'DTA Assessor', icon: <User className="w-6 h-6" />, description: 'Review and audit entity submissions.' },
        { role: 'executive', label: 'MCIT Executive', icon: <BarChart3 className="w-6 h-6" />, description: 'View high-level reports and dashboards.' },
        { role: 'jury', label: 'Excellence Jury', icon: <Gavel className="w-6 h-6" />, description: 'Evaluate nominations for awards.' },
    ];

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <img src={backgroundImg} alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dune bg-opacity-60 backdrop-blur-sm"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center"
            >
                {/* Left Side: Welcome & actions */}
                <div className="flex-1 text-center md:text-left text-white">
                    <img src={logoWithText} alt="MCIT Logo" className="h-24 mx-auto md:mx-0 mb-6 drop-shadow-lg" />
                    <h1 className="text-4xl font-bold mb-4">Digital Transformation Assessment</h1>
                    <p className="text-lg text-gray-200 mb-8 max-w-lg">
                        Accelerating the digital adoption across government entities in the State of Qatar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => setShowVideo(true)}
                            className="flex items-center justify-center px-6 py-3 bg-al-adaam hover:bg-red-700 text-white rounded-lg font-semibold transition shadow-lg"
                        >
                            <Play className="w-5 h-5 mr-2" /> Watch Intro
                        </button>
                        <button
                            onClick={() => setShowMethodology(true)}
                            className="flex items-center justify-center px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 border border-white/40 text-white rounded-lg font-semibold transition backdrop-blur-md"
                        >
                            <Info className="w-5 h-5 mr-2" /> About Methodology
                        </button>
                    </div>
                </div>

                {/* Right Side: Login Card */}
                <div className="w-full md:w-[450px] bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <h2 className="text-2xl font-bold text-dune mb-6 text-center">Select Interface</h2>
                    <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {roles.map((item) => (
                            <button
                                key={item.role}
                                onClick={() => handleLogin(item.role)}
                                className="w-full flex items-center p-3 border border-gray-200 rounded-lg hover:border-al-adaam hover:bg-red-50 transition-all group text-left"
                            >
                                <div className="mr-3 text-dune group-hover:text-al-adaam p-2 bg-gray-50 rounded-full group-hover:bg-white transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800 group-hover:text-al-adaam">
                                        {item.label}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-tight">
                                        {item.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur">
                    <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full transition"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <video controls autoPlay className="w-full h-auto">
                            <source src={introVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}

            {/* Methodology Modal */}
            {showMethodology && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl"
                    >
                        <button
                            onClick={() => setShowMethodology(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <h3 className="text-2xl font-bold text-skyline mb-4">Assessment Methodology</h3>
                        <div className="prose prose-sm text-gray-600">
                            <p className="mb-3">
                                The National Digital Transformation Assessment is based on a comprehensive framework evaluating entities across 4 key pillars:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li><strong>Strategy & Leadership:</strong> Vision, governance, and culture.</li>
                                <li><strong>Technology & Innovation:</strong> Cloud adoption, AI, and cybersecurity.</li>
                                <li><strong>Service Delivery:</strong> User experience and service automation.</li>
                                <li><strong>Data Management:</strong> Data governance, quality, and analytics.</li>
                            </ul>
                            <p>
                                Entities are scored on a scale of 0-5 for each question, with weighted averages determining the final Maturity Level (Nascent to Advanced).
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default Login;
