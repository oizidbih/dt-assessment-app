import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockSurvey } from '../data/mockSurvey';
import { type Survey, type AnswersState, type AssessmentStatus } from '../types/survey';

interface SurveyContextType {
    survey: Survey;
    answers: AnswersState;
    status: AssessmentStatus;
    setAnswer: (questionId: string, value: any) => void;
    addEvidence: (questionId: string, fileNames: string[]) => void;
    getOverallScore: () => number;
    getPillarProgress: (pillarId: string) => number;
    submitAssessment: () => void;
    addReviewComment: (questionId: string, text: string, author: string) => void;
}

const SurveyContext = createContext<SurveyContextType | undefined>(undefined);

export const SurveyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [answers, setAnswers] = useState<AnswersState>({});
    const [status, setStatus] = useState<AssessmentStatus>('draft');

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('dt_assessment_answers');
        if (saved) {
            setAnswers(JSON.parse(saved));
        }
        const savedStatus = localStorage.getItem('dt_assessment_status');
        if (savedStatus) {
            setStatus(savedStatus as AssessmentStatus);
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (Object.keys(answers).length > 0) {
            localStorage.setItem('dt_assessment_answers', JSON.stringify(answers));
        }
        localStorage.setItem('dt_assessment_status', status);
    }, [answers, status]);

    const setAnswer = (questionId: string, value: any) => {
        if (status !== 'draft' && status !== 'returned') return;
        setAnswers(prev => ({
            ...prev,
            [questionId]: {
                ...prev[questionId],
                questionId,
                value
            }
        }));
    };

    const addEvidence = (questionId: string, fileNames: string[]) => {
        if (status !== 'draft' && status !== 'returned') return;
        setAnswers(prev => {
            const existingFiles = prev[questionId]?.evidence?.files || [];
            return {
                ...prev,
                [questionId]: {
                    ...prev[questionId],
                    questionId,
                    evidence: {
                        id: Math.random().toString(36).substr(2, 9),
                        files: [...existingFiles, ...fileNames]
                    }
                }
            };
        });
    };

    const submitAssessment = () => {
        setStatus('submitted');
    };

    const addReviewComment = (questionId: string, text: string, author: string) => {
        setAnswers(prev => {
            const existingComments = prev[questionId]?.comments || [];
            return {
                ...prev,
                [questionId]: {
                    ...prev[questionId],
                    questionId,
                    comments: [
                        ...existingComments,
                        {
                            id: Math.random().toString(36).substr(2, 9),
                            questionId,
                            text,
                            author,
                            createdAt: new Date().toISOString()
                        }
                    ]
                }
            };
        });
    };

    const getPillarProgress = (pillarId: string) => {
        const pillar = mockSurvey.pillars.find(p => p.id === pillarId);
        if (!pillar) return 0;

        let totalQuestions = 0;
        let answeredQuestions = 0;

        pillar.sections.forEach(section => {
            section.questions.forEach(q => {
                totalQuestions++;
                if (answers[q.id]?.value !== undefined) {
                    answeredQuestions++;
                }
            });
        });

        return totalQuestions === 0 ? 0 : Math.round((answeredQuestions / totalQuestions) * 100);
    };

    // Mock score calculation - just averaging the values for now
    const getOverallScore = () => {
        let totalScore = 0;
        let totalWeight = 0;

        // Very simplified scoring logic for mockup
        Object.values(answers).forEach(ans => {
            if (typeof ans.value === 'number') {
                totalScore += ans.value;
                totalWeight += 5; // Assuming max score is 5 for everything
            }
        });

        return totalWeight === 0 ? 0 : Math.round((totalScore / totalWeight) * 100);
    };

    return (
        <SurveyContext.Provider value={{
            survey: mockSurvey,
            answers,
            status,
            setAnswer,
            addEvidence,
            getOverallScore,
            getPillarProgress,
            submitAssessment,
            addReviewComment
        }}>
            {children}
        </SurveyContext.Provider>
    );
};

export const useSurvey = () => {
    const context = useContext(SurveyContext);
    if (context === undefined) {
        throw new Error('useSurvey must be used within a SurveyProvider');
    }
    return context;
};
