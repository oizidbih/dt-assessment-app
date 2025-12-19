import React, { useState } from 'react';
import AssessmentList from '../../components/admin/AssessmentList';
import CreateAssessmentDialog from '../../components/admin/CreateAssessmentDialog';
import { Plus } from 'lucide-react';

const Assessments: React.FC = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const handleCreateSubmit = (data: any) => {
        console.log('Creating assessment:', data);
        // Here you would typically call an API to create the assessment
        // and then refresh the list.
        setIsCreateOpen(false);
    };

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Assessment Management</h1>
                    <p className="text-gray-500 mt-1">Monitor progress and schedule new assessments for government entities.</p>
                </div>
                <button
                    onClick={() => setIsCreateOpen(true)}
                    className="flex items-center px-5 py-2.5 bg-al-adaam text-white rounded-xl hover:bg-opacity-90 transition-all shadow-lg shadow-al-adaam/20 font-bold"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    New Assessment
                </button>
            </div>

            <AssessmentList />

            <CreateAssessmentDialog
                isOpen={isCreateOpen}
                onClose={() => setIsCreateOpen(false)}
                onSubmit={handleCreateSubmit}
            />
        </div>
    );
};

export default Assessments;
