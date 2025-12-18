import React from 'react';
import { type Question } from '../../types/survey';
import { useSurvey } from '../../context/SurveyContext';
import { Info } from 'lucide-react';
import EvidenceUpload from './EvidenceUpload';

interface QuestionCardProps {
    question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
    const { answers, setAnswer, addEvidence } = useSurvey();
    const currentAnswer = answers[question.id];

    const handleChange = (val: any) => {
        setAnswer(question.id, val);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg font-medium text-gray-900">{question.text}</h3>
                    {question.description && (
                        <p className="text-sm text-gray-500 mt-1 flex items-center">
                            <Info className="w-3 h-3 mr-1" />
                            {question.description}
                        </p>
                    )}
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Weight: {question.weight}
                </span>
            </div>

            {/* Render Input based on Type */}
            <div className="mb-6">
                {question.type === 'choice' && question.options && (
                    <div className="space-y-3">
                        {question.options.map((opt) => (
                            <label key={opt.id} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${currentAnswer?.value === opt.value ? 'bg-al-adaam/5 border-al-adaam ring-1 ring-al-adaam' : 'border-gray-200 hover:bg-gray-50'}`}>
                                <input
                                    type="radio"
                                    name={question.id}
                                    value={opt.value}
                                    checked={currentAnswer?.value === opt.value}
                                    onChange={() => handleChange(opt.value)}
                                    className="h-4 w-4 text-al-adaam focus:ring-al-adaam border-gray-300"
                                />
                                <span className="ml-3 block text-sm font-medium text-gray-700">
                                    {opt.label}
                                </span>
                            </label>
                        ))}
                    </div>
                )}

                {question.type === 'rating' && (
                    <div className="flex items-center space-x-4">
                        {[1, 2, 3, 4, 5].map((val) => (
                            <button
                                key={val}
                                onClick={() => handleChange(val)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all ${currentAnswer?.value === val
                                    ? 'bg-al-adaam text-white shadow-lg scale-110'
                                    : 'bg-gray-100 text-gray-500 hover:bg-dune hover:text-white'
                                    }`}
                            >
                                {val}
                            </button>
                        ))}
                    </div>
                )}

                {question.type === 'multi-choice' && question.options && (
                    <div className="space-y-2">
                        {question.options.map((opt) => {
                            const currentVals = (currentAnswer?.value as string[]) || [];
                            const isSelected = currentVals.includes(opt.value as string);
                            return (
                                <label key={opt.id} className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => {
                                            const newVals = isSelected
                                                ? currentVals.filter(v => v !== opt.value)
                                                : [...currentVals, opt.value];
                                            handleChange(newVals);
                                        }}
                                        className="h-4 w-4 text-al-adaam rounded border-gray-300 focus:ring-al-adaam"
                                    />
                                    <span className="text-gray-700 text-sm">{opt.label}</span>
                                </label>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className="border-t border-gray-100 pt-4">
                <EvidenceUpload
                    files={currentAnswer?.evidence?.files || []}
                    onUpload={(files) => addEvidence(question.id, files)}
                />
            </div>
        </div>
    );
};

export default QuestionCard;
