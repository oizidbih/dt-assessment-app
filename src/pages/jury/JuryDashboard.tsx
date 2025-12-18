import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { type AwardCategory } from '../../types/excellence';

const categories: { id: AwardCategory; description: string; count: number }[] = [
    { id: 'Best Overall Digital Transformation', description: 'Entities with highest overall maturity scores.', count: 2 },
    { id: 'Best in Innovation', description: 'Entities deploying cutting-edge technologies.', count: 2 },
    { id: 'Fastest Improver', description: 'Highest YoY score increase.', count: 0 },
    { id: 'Best Customer Experience', description: 'Top scores in CX pillar.', count: 0 },
];

const JuryDashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Jury Portal</h1>
            <p className="text-gray-500 mb-8">Review nominations and cast your votes for the National Digital Excellence Awards.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat) => (
                    <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center">
                                <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg mr-4">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{cat.id}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                {cat.count} Nominees
                            </div>
                            <button
                                onClick={() => navigate(`/jury/vote/${encodeURIComponent(cat.id)}`)}
                                disabled={cat.count === 0}
                                className="flex items-center text-al-adaam font-semibold hover:underline disabled:opacity-50 disabled:no-underline"
                            >
                                Start Voting <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JuryDashboard;
