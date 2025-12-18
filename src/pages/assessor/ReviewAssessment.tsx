import React, { useState } from 'react';
import { useSurvey } from '../../context/SurveyContext';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, ThumbsUp, RotateCcw, ChevronDown, ChevronRight } from 'lucide-react';

const ReviewAssessment: React.FC = () => {
    const { survey, answers, addReviewComment } = useSurvey();
    const navigate = useNavigate();
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [commentText, setCommentText] = useState<string>('');
    const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

    const toggleSection = (id: string) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    const handeAddComment = (qId: string) => {
        if (commentText.trim()) {
            addReviewComment(qId, commentText, 'Assessor');
            setCommentText('');
            setActiveQuestionId(null);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Review: Ministry of Education</h1>
                    <p className="text-gray-500">Mock Submission #sub_001</p>
                </div>
                <div className="flex space-x-3">
                    <button
                        onClick={() => navigate('/reviews')}
                        className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 flex items-center"
                    >
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Return to Entity
                    </button>
                    <button className="px-4 py-2 bg-palm text-white rounded-lg hover:bg-opacity-90 flex items-center shadow-sm">
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Approve Assessment
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {survey.pillars.map((pillar) => (
                    <div key={pillar.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 p-4 border-b border-gray-100 font-semibold text-gray-800">
                            {pillar.title}
                        </div>
                        <div className="p-4">
                            {pillar.sections.map((section) => (
                                <div key={section.id} className="mb-6 last:mb-0">
                                    <div
                                        onClick={() => toggleSection(section.id)}
                                        className="flex items-center cursor-pointer text-skyline hover:underline mb-3"
                                    >
                                        {expandedSection === section.id ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronRight className="w-4 h-4 mr-1" />}
                                        <h3 className="font-medium">{section.title}</h3>
                                    </div>

                                    {expandedSection === section.id && (
                                        <div className="space-y-6 ml-5 pl-5 border-l-2 border-gray-100">
                                            {section.questions.map((q) => {
                                                const ans = answers[q.id];
                                                return (
                                                    <div key={q.id} className="bg-white">
                                                        <p className="text-sm font-medium text-gray-900 mb-2">{q.text}</p>
                                                        <div className="p-3 bg-gray-50 rounded-md text-sm text-gray-800 border border-gray-200">
                                                            <span className="font-mono text-gray-500 mr-2">[Answer]:</span>
                                                            {JSON.stringify(ans?.value ?? 'N/A')}
                                                        </div>

                                                        {ans?.comments && ans.comments.length > 0 && (
                                                            <div className="mt-2 space-y-2">
                                                                {ans.comments.map(c => (
                                                                    <div key={c.id} className="bg-yellow-50 p-2 rounded text-xs text-yellow-800 border border-yellow-100">
                                                                        <span className="font-bold">{c.author}:</span> {c.text}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        <div className="mt-2">
                                                            {activeQuestionId === q.id ? (
                                                                <div className="flex items-center space-x-2">
                                                                    <input
                                                                        type="text"
                                                                        value={commentText}
                                                                        onChange={(e) => setCommentText(e.target.value)}
                                                                        placeholder="Add feedback..."
                                                                        className="flex-1 text-sm border-gray-300 rounded-md focus:ring-al-adaam focus:border-al-adaam"
                                                                    />
                                                                    <button
                                                                        onClick={() => handeAddComment(q.id)}
                                                                        className="px-3 py-1 bg-skyline text-white text-xs rounded"
                                                                    >
                                                                        Add
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <button
                                                                    onClick={() => setActiveQuestionId(q.id)}
                                                                    className="text-xs text-al-adaam hover:underline flex items-center"
                                                                >
                                                                    <MessageSquare className="w-3 h-3 mr-1" />
                                                                    Add Comment
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewAssessment;
