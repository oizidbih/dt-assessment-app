import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LogOut, User as UserIcon, Bell, Menu } from 'lucide-react';

interface HeaderProps {
    onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    const { user, logout } = useAuth();
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 shadow-sm relative z-20">
            <div className="flex items-center">
                <button
                    onClick={onMenuToggle}
                    className="p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-lg lg:hidden"
                >
                    <Menu className="w-6 h-6" />
                </button>
                <span className="text-lg md:text-xl font-semibold text-gray-800 truncate max-w-[150px] md:max-w-none">
                    {user?.role === 'admin' ? t('nav.overview') :
                        user?.role === 'focal_point' ? t('sidebar.title') : t('nav.dashboard')}
                </span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4 rtl:space-x-reverse">
                <button
                    onClick={toggleLanguage}
                    className="px-2 py-1 md:px-3 border rounded text-[10px] md:text-sm font-medium hover:bg-gray-50"
                >
                    {language === 'en' ? 'العربية' : 'English'}
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="h-6 w-px bg-gray-300 mx-1 md:mx-2 hidden sm:block"></div>
                <div className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse">
                    <div className="text-right hidden lg:block">
                        <p className="text-sm font-medium text-gray-900 truncate max-w-[100px]">{user?.name}</p>
                        <p className="text-xs text-gray-500 capitalize">{t('app.role')}: {user?.role}</p>
                    </div>
                    <div className="w-8 h-8 bg-dune rounded-full flex items-center justify-center text-white shrink-0">
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
