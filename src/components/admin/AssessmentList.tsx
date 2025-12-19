import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Bell, Search, Filter } from 'lucide-react';
import { clsx } from 'clsx';

// Mock Data Type
export interface Assessment {
    id: string;
    entityName: string;
    type: 'Annual' | 'Ad-hoc' | 'Self-Assessment';
    status: 'Not Started' | 'Overdue' | 'In Progress' | 'Review Pending' | 'Completed';
    dueDate: string;
    progress: number;
}

// Mock Data
const mockAssessments: Assessment[] = [
    { id: '1', entityName: 'Ministry of Interior', type: 'Annual', status: 'In Progress', dueDate: '2025-10-15', progress: 45 },
    { id: '2', entityName: 'Public Works Authority (Ashghal)', type: 'Annual', status: 'Review Pending', dueDate: '2025-09-30', progress: 100 },
    { id: '3', entityName: 'Ministry of Public Health', type: 'Ad-hoc', status: 'Not Started', dueDate: '2025-11-01', progress: 0 },
    { id: '4', entityName: 'Qatar Tourism', type: 'Self-Assessment', status: 'Overdue', dueDate: '2025-08-15', progress: 20 },
    { id: '5', entityName: 'Ministry of Education', type: 'Annual', status: 'Completed', dueDate: '2024-12-31', progress: 100 },
];

const AssessmentList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredAssessments = mockAssessments.filter(assessment => {
        const matchesSearch = assessment.entityName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'All' || assessment.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-800';
            case 'Review Pending': return 'bg-purple-100 text-purple-800';
            case 'Overdue': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Toolbar */}
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50/50">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search entity..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                        className="border-none bg-transparent text-sm text-gray-600 font-medium focus:ring-0 cursor-pointer"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Review Pending">Review Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Overdue">Overdue</option>
                        <option value="Not Started">Not Started</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Entity Name</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Progress</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Due Date</th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredAssessments.map((assessment) => (
                            <tr key={assessment.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-gray-900">{assessment.entityName}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{assessment.type}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={clsx("px-2.5 py-0.5 inline-flex text-xs font-bold rounded-full", getStatusColor(assessment.status))}>
                                        {assessment.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-16 bg-gray-200 rounded-full h-1.5 mr-2">
                                            <div className="bg-al-adaam h-1.5 rounded-full" style={{ width: `${assessment.progress}%` }}></div>
                                        </div>
                                        <span className="text-xs text-gray-500 font-medium">{assessment.progress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                    {assessment.dueDate}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="text-gray-400 hover:text-blue-600 transition-colors p-1" title="View Details">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="text-gray-400 hover:text-green-600 transition-colors p-1" title="Edit">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="text-gray-400 hover:text-orange-600 transition-colors p-1" title="Send Reminder">
                                            <Bell className="w-4 h-4" />
                                        </button>
                                        <button className="text-gray-400 hover:text-red-600 transition-colors p-1" title="Delete">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredAssessments.length === 0 && (
                    <div className="p-12 text-center text-gray-500">
                        No assessments found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AssessmentList;
