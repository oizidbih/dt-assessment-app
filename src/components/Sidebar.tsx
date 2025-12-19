import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth, type UserRole } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
    Home,
    FileText,
    BarChart2,
    Settings,
    Award,
    ClipboardList,
    Users,
    Sparkles
} from 'lucide-react';
import clsx from 'clsx';
import logo from '../assets/logo.svg';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const { user } = useAuth();
    const { t } = useLanguage();

    if (!user) return null;

    const getLinks = (role: UserRole) => {
        // ... (same switch logic)
        switch (role) {
            case 'admin':
                return [
                    { to: '/', label: t('nav.overview'), icon: Home },
                    { to: '/cycles', label: t('nav.cycles'), icon: Settings },
                    { to: '/assessments', label: 'Assessments', icon: ClipboardList },
                    { to: '/users', label: t('nav.users'), icon: Users },
                    { to: '/reports', label: t('nav.reports'), icon: BarChart2 },
                ];
            case 'focal_point':
                return [
                    { to: '/', label: t('nav.dashboard'), icon: Home },
                    { to: '/assessment', label: t('nav.assessment'), icon: ClipboardList },
                    { to: '/reports', label: t('nav.reports'), icon: BarChart2 },
                ];
            case 'assessor':
                return [
                    { to: '/', label: t('nav.assessor_dashboard'), icon: Home },
                    { to: '/reviews', label: t('nav.reviews'), icon: FileText },
                    { to: '/reports', label: t('nav.reports'), icon: BarChart2 },
                ];
            case 'executive':
                return [
                    { to: '/', label: t('nav.executive_dashboard'), icon: Home },
                    { to: '/strategic-insights', label: 'Strategic Insights', icon: Sparkles },
                    { to: '/national-reports', label: t('nav.national_reports'), icon: BarChart2 },
                ];
            case 'jury':
                return [
                    { to: '/', label: t('nav.jury_portal'), icon: Home },
                    { to: '/jury', label: t('nav.nominations'), icon: Award },
                ];
            default:
                return [];
        }
    };

    const links = getLinks(user.role);

    return (
        <div className={clsx(
            "fixed inset-y-0 left-0 z-50 w-64 bg-[#040F25] flex flex-col text-white shadow-xl transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
            isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
            {/* Background Light Effect */}
            <div className="absolute top-1/2 -left-24 w-48 h-96 bg-palm/20 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 z-0 opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
            <div className="absolute top-1/2 -left-12 w-24 h-48 bg-white/5 blur-[40px] rounded-full pointer-events-none -translate-y-1/2 z-0" />

            <div className="h-24 flex items-center justify-center border-b border-white/10 px-6 relative z-10">
                <img src={logo} alt="MCIT Logo" className="h-16 w-auto" />
            </div>
            <nav className="flex-1 p-4 space-y-2 relative z-10">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => {
                            if (window.innerWidth < 1024) onClose();
                        }}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center px-4 py-3 rounded-lg transition-colors',
                                isActive
                                    ? 'bg-al-adaam text-white'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                            )
                        }
                    >
                        <link.icon className="w-5 h-5 rtl:ml-3 ltr:mr-3" />
                        <span className="font-medium">{link.label}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-white/10 relative z-10">
                <p className="text-xs text-gray-400 text-center">{t('nav.version')}</p>
            </div>
        </div>
    );
};

export default Sidebar;
