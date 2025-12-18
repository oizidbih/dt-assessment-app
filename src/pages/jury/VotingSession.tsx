import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useExcellence } from '../../context/ExcellenceContext';
import { type AwardCategory } from '../../types/excellence';
import { Award, ThumbsUp, CheckCircle, ArrowLeft } from 'lucide-react';
import { clsx } from 'clsx';

const VotingSession: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();
    const { getCategoryNominees, voteForNominee } = useExcellence();
    const [votedId, setVotedId] = useState<string | null>(null);

    const category = decodeURIComponent(categoryId || '') as AwardCategory;
    const nominees = getCategoryNominees(category);

    const handleVote = (id: string) => {
        voteForNominee(id);
        setVotedId(id);
    };

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            <button
                onClick={() => navigate('/jury')}
                className="flex items-center text-gray-500 hover:text-gray-900 mb-6"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
            </button>

            <div className="flex items-center mb-8">
                <div className="p-3 bg-yellow-100 text-yellow-700 rounded-full mr-4">
                    <Award className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{category}</h1>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {nominees.map((nominee) => (
                    <div key={nominee.id} className={clsx(
                        "bg-white rounded-xl border p-6 transition-all",
                        votedId === nominee.id ? "border-green-500 shadow-md ring-1 ring-green-500" : "border-gray-200 shadow-sm"
                    )}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{nominee.entityName}</h3>
                                <div className="flex items-center space-x-4 mt-2">
                                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                        Score: {nominee.score}%
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Current Votes: {nominee.juryVotes}
                                    </span>
                                </div>
                                <p className="mt-4 text-gray-600 italic">
                                    "{nominee.justification}"
                                </p>
                            </div>

                            <button
                                onClick={() => handleVote(nominee.id)}
                                disabled={votedId !== null}
                                className={clsx(
                                    "flex items-center px-6 py-3 rounded-lg font-bold transition-colors",
                                    votedId === nominee.id
                                        ? "bg-green-100 text-green-700 cursor-default"
                                        : votedId !== null
                                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                            : "bg-al-adaam text-white hover:bg-opacity-90"
                                )}
                            >
                                {votedId === nominee.id ? (
                                    <>
                                        <CheckCircle className="w-5 h-5 mr-2" /> Voted
                                    </>
                                ) : (
                                    <>
                                        <ThumbsUp className="w-5 h-5 mr-2" /> Vote
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VotingSession;
