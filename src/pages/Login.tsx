import React from 'react';
import { useAuth, type UserRole } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, BarChart3, Gavel, LayoutDashboard } from 'lucide-react';

const Login: React.FC = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (role: UserRole) => {
        login(role);
        navigate('/');
    };

    const roles: { role: UserRole; label: string; icon: React.ReactNode; description: string }[] = [
        {
            role: 'admin',
            label: 'DTA Program Manager',
            icon: <ShieldCheck className="w-6 h-6" />,
            description: 'Manage cycles, users, and overall system.'
        },
        {
            role: 'focal_point',
            label: 'Entity Focal Point',
            icon: <LayoutDashboard className="w-6 h-6" />,
            description: 'Submit assessments and manage entity data.'
        },
        {
            role: 'assessor',
            label: 'DTA Assessor',
            icon: <User className="w-6 h-6" />,
            description: 'Review and audit entity submissions.'
        },
        {
            role: 'executive',
            label: 'MCIT Executive',
            icon: <BarChart3 className="w-6 h-6" />,
            description: 'View high-level reports and dashboards.'
        },
        {
            role: 'jury',
            label: 'Excellence Jury',
            icon: <Gavel className="w-6 h-6" />,
            description: 'Evaluate nominations for awards.'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-al-adaam">
                    Digital Transformation Assessment
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Select a role to access the platform (Mock Login)
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border-t-4 border-al-adaam">
                    <div className="space-y-4">
                        {roles.map((item) => (
                            <button
                                key={item.role}
                                onClick={() => handleLogin(item.role)}
                                className="w-full flex items-center p-4 border border-gray-200 rounded-lg hover:border-al-adaam hover:bg-red-50 transition-colors group text-left"
                            >
                                <div className="mr-4 text-dune group-hover:text-al-adaam">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-al-adaam">
                                        {item.label}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {item.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
