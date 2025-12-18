import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Users as UsersIcon, Search, Plus, Edit2, Trash2, Shield, Mail, Building } from 'lucide-react';

const Users: React.FC = () => {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
    const [users, setUsers] = useState([
        { id: 1, name: 'Ahmed Al-Thani', email: 'admin@mcit.gov.qa', role: 'DTA Program Manager', entity: 'MCIT', status: 'Active' },
        { id: 2, name: 'Sarah Ahmed', email: 'focalpoint@edu.gov.qa', role: 'Entity Focal Point', entity: 'Ministry of Education', status: 'Active' },
        { id: 3, name: 'John Doe', email: 'assessor@consulting.com', role: 'DTA Assessor', entity: 'External', status: 'Active' },
        { id: 4, name: 'Fatima Khalid', email: 'jury@excellence.qa', role: 'Excellence Jury', entity: 'External', status: 'Inactive' },
        { id: 5, name: 'Hassan Ali', email: 'exec@mcit.gov.qa', role: 'MCIT Executive', entity: 'MCIT', status: 'Active' },
    ]);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this user? (Mock Action)')) {
            setUsers(users.filter(u => u.id !== id));
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div className="p-3 bg-gray-100 rounded-lg mr-4 rtl:ml-4 rtl:mr-0">
                        <UsersIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{t('nav.users') || 'User Management'}</h1>
                        <p className="text-gray-500">Manage system users, roles, and permissions.</p>
                    </div>
                </div>
                <button className="flex items-center px-4 py-2 bg-al-adaam text-white rounded-lg hover:bg-red-800 transition-colors">
                    <Plus className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                    Add New User
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center">
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-al-adaam focus:border-al-adaam"
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5 rtl:right-3 rtl:left-auto" />
                    </div>
                </div>

                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">User Info</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Entity</th>
                            <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-right rtl:text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-dune text-white flex items-center justify-center font-bold">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="ml-4 rtl:mr-4 rtl:ml-0">
                                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Mail className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" /> {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 flex items-center">
                                        <Shield className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0 text-al-adaam" />
                                        {user.role}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500 flex items-center">
                                        <Building className="w-3 h-3 mr-1 rtl:ml-1 rtl:mr-0" />
                                        {user.entity}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right rtl:text-left text-sm font-medium">
                                    <button className="text-indigo-600 hover:text-indigo-900 mx-2" title="Edit">
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900 mx-2" title="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
