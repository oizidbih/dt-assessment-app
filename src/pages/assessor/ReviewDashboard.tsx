import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const ReviewDashboard: React.FC = () => {
    // Mock Data
    const submissions = [
        { id: 'sub_001', entity: 'Ministry of Education', status: 'submitted', date: '2025-10-15', score: '78%' },
        { id: 'sub_002', entity: 'Ministry of Health', status: 'under_review', date: '2025-10-14', score: '82%' },
        { id: 'sub_003', entity: 'Ashghal', status: 'approved', date: '2025-10-12', score: '91%' },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Assessor Dashboard</h1>

            <div className="grid grid-cols-1 gap-6">
                {submissions.map((sub) => (
                    <div key={sub.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-50 text-sea rounded-lg mr-4">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{sub.entity}</h3>
                                <p className="text-sm text-gray-500">Submitted on {sub.date}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="text-right">
                                <div className="text-sm text-gray-500">Self-Score</div>
                                <div className="font-bold text-gray-900">{sub.score}</div>
                            </div>

                            <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${sub.status === 'approved' ? 'bg-green-100 text-green-800' :
                                sub.status === 'under_review' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-blue-100 text-blue-800'
                                }`}>
                                {sub.status.replace('_', ' ')}
                            </div>

                            <Link
                                to={`/review/${sub.id}`}
                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700"
                            >
                                {sub.status === 'approved' ? 'View' : 'Start Review'}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewDashboard;
