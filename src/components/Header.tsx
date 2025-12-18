import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LogOut, User as UserIcon, Bell } from 'lucide-react';

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center">
                <span className="text-xl font-semibold text-gray-800">
                    {user?.role === 'admin' ? t('nav.overview') :
                        user?.role === 'focal_point' ? t('sidebar.title') : t('nav.dashboard')}
                </span>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-1 border rounded text-sm font-medium hover:bg-gray-50"
                >
                    {language === 'en' ? 'العربية' : 'English'}
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="h-8 w-px bg-gray-300 mx-2"></div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{t('app.role')}: {user?.role}</p>
                    </div>
                    <div className="w-8 h-8 bg-dune rounded-full flex items-center justify-center text-white">
                        <UserIcon className="w-5 h-5" />
                    </div>
                    <button
                        onClick={logout}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        title={t('app.logout')}
                    >
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
