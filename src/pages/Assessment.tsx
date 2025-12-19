import React, { useState } from 'react';
import { useSurvey } from '../context/SurveyContext';
import PillarNav from '../components/survey/PillarNav';
import QuestionCard from '../components/survey/QuestionCard';
import { Save, Send, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Assessment: React.FC = () => {
    const { survey } = useSurvey();
    const [currentPillarId, setCurrentPillarId] = useState(survey.pillars[0].id);
    const navigate = useNavigate();

    const currentPillar = survey.pillars.find(p => p.id === currentPillarId);

    if (!currentPillar) return <div>Pillar not found</div>;

    const handleNextPillar = () => {
        const idx = survey.pillars.findIndex(p => p.id === currentPillarId);
        if (idx < survey.pillars.length - 1) {
            setCurrentPillarId(survey.pillars[idx + 1].id);
            window.scrollTo(0, 0);
        }
    };

    const isLastPillar = survey.pillars[survey.pillars.length - 1].id === currentPillarId;

    return (
        <div className="flex bg-gray-50 h-[calc(100vh-4rem)]">
            <PillarNav
                currentPillarId={currentPillarId}
                onSelect={setCurrentPillarId}
            />

            <div className="flex-1 overflow-auto scroll-smooth">
                {/* Methodology Highlight */}
                <div className="bg-gradient-to-r from-[#040F25] to-[#004B87] text-white py-4 px-6 shadow-md border-b border-white/10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
                                <Award className="w-6 h-6 text-dune" />
                            </div>
                            <div>
                                <h4 className="text-sm font-black uppercase tracking-widest text-dune">QDGM Framework 2025</h4>
                                <p className="text-xs text-white/70 font-medium">Fully aligned with UN EGDI, OECD, and Qatar Digital Agenda 2030</p>
                            </div>
                        </div>
                        <div className="flex -space-x-2">
                            {['UN EGDI', 'OECD', 'SDG', 'DA2030', 'NDS3'].map((tag) => (
                                <div key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[9px] font-black tracking-tighter hover:bg-white/20 transition-colors cursor-help" title={`Verified mapping to ${tag} standards`}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto py-8 px-4">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">{currentPillar.title}</h1>
                        <p className="text-gray-500 mt-2">{currentPillar.description}</p>
                    </div>

                    <div className="space-y-8">
                        {currentPillar.sections.map((section) => (
                            <div key={section.id}>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                    {section.title}
                                </h2>
                                <div>
                                    {section.questions.map((q) => (
                                        <QuestionCard key={q.id} question={q} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200">
                        <button className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Save className="w-4 h-4 mr-2" />
                            Save Draft
                        </button>

                        {isLastPillar ? (
                            <button
                                onClick={() => navigate('/reports')}
                                className="flex items-center px-6 py-2 bg-palm text-white rounded-lg hover:bg-opacity-90 shadow-sm"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Submit Assessment
                            </button>
                        ) : (
                            <button
                                onClick={handleNextPillar}
                                className="flex items-center px-6 py-2 bg-al-adaam text-white rounded-lg hover:bg-opacity-90 shadow-sm"
                            >
                                Next Pillar
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assessment;
