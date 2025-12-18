import React, { useState } from 'react';
import { mockCycles, type Cycle } from '../../types/cycle';
import { Plus, Calendar, Settings, MoreHorizontal } from 'lucide-react';
import { clsx } from 'clsx';

const Cycles: React.FC = () => {
    const [cycleList, setCycleList] = useState<Cycle[]>(mockCycles);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreate = () => {
        // Mock creation
        const newCycle: Cycle = {
            id: `c_${Date.now()}`,
            name: 'New Assessment Cycle',
            startDate: '2025-10-01',
            endDate: '2025-12-31',
            status: 'upcoming',
            type: 'ad-hoc'
        };
        setCycleList([newCycle, ...cycleList]);
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Assessment Cycles</h1>
                    <p className="text-gray-500">Manage active and upcoming assessment periods.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center px-4 py-2 bg-al-adaam text-white rounded-lg hover:bg-opacity-90"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Cycle
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cycle Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Timeline
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cycleList.map((cycle) => (
                            <tr key={cycle.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <Settings className="w-5 h-5 text-gray-400 mr-3" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">{cycle.name}</div>
                                            <div className="text-xs text-gray-500">ID: {cycle.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                                        {cycle.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={clsx("px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize",
                                        cycle.status === 'active' ? "bg-green-100 text-green-800" :
                                            cycle.status === 'upcoming' ? "bg-yellow-100 text-yellow-800" :
                                                "bg-gray-100 text-gray-800"
                                    )}>
                                        {cycle.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                        {cycle.startDate} - {cycle.endDate}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-gray-400 hover:text-al-adaam">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Simple Mock Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">New Cycle</h2>
                        <p className="text-gray-600 mb-6">This simulates creating a new cycle.</p>
                        <div className="flex justify-end space-x-3">
                            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded hover:bg-gray-50">Cancel</button>
                            <button onClick={handleCreate} className="px-4 py-2 bg-al-adaam text-white rounded hover:bg-opacity-90">Create</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cycles;
