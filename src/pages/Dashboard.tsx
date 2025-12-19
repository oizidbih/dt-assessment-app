import React from 'react';
import { useAuth } from '../context/AuthContext';
import AdminDashboard from './dashboards/AdminDashboard';
import EntityDashboard from './dashboards/EntityDashboard';
import ExecutiveDashboard from './dashboards/ExecutiveDashboard';
import AssessorDashboard from './dashboards/AssessorDashboard';
import JuryDashboard from './dashboards/JuryDashboard';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    if (!user) return null;

    switch (user.role) {
        case 'admin':
            return <AdminDashboard />;
        case 'focal_point':
            return <EntityDashboard />;
        case 'executive':
            return <ExecutiveDashboard />;
        case 'assessor':
            return <AssessorDashboard />;
        case 'jury':
            return <JuryDashboard />;
        default:
            return <div className="p-8 text-center text-gray-500">Role not recognized</div>;
    }
};

export default Dashboard;
