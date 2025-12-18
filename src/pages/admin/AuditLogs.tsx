import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Search } from 'lucide-react';

const AuditLogs: React.FC = () => {
    const { t } = useLanguage();

    // Mock Logs
    const logs = [
        { id: 1, action: 'User Login', user: 'admin@mcit.gov.qa', timestamp: '2025-10-20 09:00:15', ip: '192.168.1.10' },
        { id: 2, action: 'Assessment Submitted', user: 'focalpoint@edu.gov.qa', timestamp: '2025-10-20 09:30:00', ip: '10.0.0.5' },
        { id: 3, action: 'Vote Cast', user: 'jury1@mcit.gov.qa', timestamp: '2025-10-20 10:15:22', ip: '192.168.1.12' },
        { id: 4, action: 'Report Exported', user: 'minister@mcit.gov.qa', timestamp: '2025-10-20 11:00:00', ip: '10.0.0.8' },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="flex items-center mb-6">
                <div className="p-3 bg-gray-100 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
                    <ShieldCheck className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('audit.title')}</h1>
                    <p className="text-gray-500">Track all system activities for security and compliance.</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="Search logs..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-al-adaam focus:border-al-adaam"
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 rtl:right-3 rtl:left-auto" />
                    </div>
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 border rounded-lg">
                        Export Logs
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.action}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.user}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{log.timestamp}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{log.ip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuditLogs;
