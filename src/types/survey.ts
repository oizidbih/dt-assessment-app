export type QuestionType = 'choice' | 'multi-choice' | 'text' | 'rating' | 'scale';

export interface Option {
    id: string;
    label: string;
    value: number | string;
}

export interface Question {
    id: string;
    text: string;
    description?: string;
    type: QuestionType;
    options?: Option[]; // For choice/multi-choice
    min?: number; // For rating/scale
    max?: number;
    weight: number;
    standardMapping?: string[]; // e.g. ["UN EGDI: OSI", "QNV 2030"]
}

export interface Section {
    id: string;
    title: string;
    questions: Question[];
}

export interface Pillar {
    id: string;
    title: string;
    description: string;
    icon?: string;
    sections: Section[];
    weight: number;
    standardMapping?: string[];
}

export interface Survey {
    id: string;
    title: string;
    description: string;
    pillars: Pillar[];
}


export interface Evidence {
    id: string;
    files: string[]; // filenames for mock
    notes?: string;
}

export type AssessmentStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'returned';

export interface ReviewComment {
    id: string;
    questionId: string;
    text: string;
    author: string;
    createdAt: string;
}

export interface Answer {
    questionId: string;
    value: any;
    evidence?: Evidence;
    comments?: ReviewComment[];
}

export type AnswersState = Record<string, Answer>;
