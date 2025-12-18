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
    Users
} from 'lucide-react';
import clsx from 'clsx';

const Sidebar: React.FC = () => {
    const { user } = useAuth();
    const { t } = useLanguage();

    if (!user) return null;

    const getLinks = (role: UserRole) => {
        switch (role) {
            case 'admin':
                return [
                    { to: '/', label: t('nav.overview'), icon: Home },
                    { to: '/cycles', label: t('nav.cycles'), icon: Settings },
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
        <div className="w-64 bg-skyline min-h-screen flex flex-col text-white">
            <div className="h-16 flex items-center justify-center border-b border-white/10">
                <h1 className="text-xl font-bold text-sunrise">{t('sidebar.title')}</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
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
            <div className="p-4 border-t border-white/10">
                <p className="text-xs text-gray-400 text-center">{t('nav.version')}</p>
            </div>
        </div>
    );
};

export default Sidebar;
