import React, { useState } from 'react';
import { X, Calendar, Building, FileText } from 'lucide-react';

interface CreateAssessmentDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
}

const CreateAssessmentDialog: React.FC<CreateAssessmentDialogProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        entityId: '',
        type: 'Annual',
        cycleName: '',
        startDate: '',
        dueDate: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-900">Create New Assessment</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* Entity Selection */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Target Entity</label>
                        <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <select
                                required
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam appearance-none"
                                value={formData.entityId}
                                onChange={(e) => setFormData({ ...formData, entityId: e.target.value })}
                            >
                                <option value="">Select Entity...</option>
                                <option value="1">Ministry of Interior</option>
                                <option value="2">Ashghal</option>
                                <option value="3">Ministry of Public Health</option>
                                <option value="4">Qatar Tourism</option>
                            </select>
                        </div>
                    </div>

                    {/* Cycle/Type */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Assessment Type</label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <select
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam appearance-none"
                                    value={formData.type}
                                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                >
                                    <option value="Annual">Annual Cycle</option>
                                    <option value="Ad-hoc">Ad-hoc</option>
                                    <option value="Self-Assessment">Self-Assessment</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Cycle Name</label>
                            <input
                                type="text"
                                placeholder="e.g. Q4 2025"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam"
                                value={formData.cycleName}
                                onChange={(e) => setFormData({ ...formData, cycleName: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Start Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="date"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam"
                                    value={formData.startDate}
                                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Due Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="date"
                                    required
                                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-al-adaam/20 focus:border-al-adaam"
                                    value={formData.dueDate}
                                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2.5 rounded-xl bg-al-adaam text-white font-bold hover:bg-opacity-90 shadow-lg shadow-al-adaam/20 transition-all hover:transform hover:scale-105"
                        >
                            Create Assessment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssessmentDialog;
