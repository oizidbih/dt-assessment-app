import { type Survey } from '../types/survey';

export const mockSurvey: Survey = {
    id: 'national-dt-assessment-2025',
    title: 'National Digital Transformation Assessment 2025',
    description: 'Assessment of digital maturity across defined pillars in alignment with Qatar National Vision 2030.',
    pillars: [
        {
            id: 'p1',
            title: 'Strategy & Leadership',
            description: 'Vision, governance, and strategic alignment of digital initiatives.',
            weight: 20,
            sections: [
                {
                    id: 'p1_s1',
                    title: 'Digital Strategy',
                    questions: [
                        {
                            id: 'q1_1',
                            text: 'Does the entity have a documented digital transformation strategy?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No strategy exists', value: 1 },
                                { id: 'opt2', label: 'Draft strategy exists', value: 2 },
                                { id: 'opt3', label: 'Approved strategy exists but not implemented', value: 3 },
                                { id: 'opt4', label: 'Approved strategy largely implemented', value: 4 },
                                { id: 'opt5', label: 'Strategy fully implemented and regularly reviewed', value: 5 },
                            ],
                            weight: 5
                        },
                        {
                            id: 'q1_2',
                            text: 'Is there a dedicated budget for digital transformation initiatives?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No specific budget', value: 1 },
                                { id: 'opt2', label: 'Ad-hoc funding', value: 2 },
                                { id: 'opt3', label: 'Defined yearly budget', value: 4 },
                                { id: 'opt4', label: 'Multi-year guaranteed investment', value: 5 },
                            ],
                            weight: 3
                        }
                    ]
                },
                {
                    id: 'p1_s2',
                    title: 'Governance',
                    questions: [
                        {
                            id: 'q1_3',
                            text: 'Rate the effectiveness of the Digital Steering Committee.',
                            type: 'rating',
                            min: 1,
                            max: 5,
                            weight: 2
                        }
                    ]
                }
            ]
        },
        {
            id: 'p2',
            title: 'Customer Experience',
            description: 'Quality, accessibility, and user-centricity of digital services.',
            weight: 25,
            sections: [
                {
                    id: 'p2_s1',
                    title: 'Service Delivery',
                    questions: [
                        {
                            id: 'q2_1',
                            text: 'What percentage of services are available online end-to-end?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: '0-20%', value: 1 },
                                { id: 'opt2', label: '21-50%', value: 2 },
                                { id: 'opt3', label: '51-80%', value: 3 },
                                { id: 'opt4', label: '81-99%', value: 4 },
                                { id: 'opt5', label: '100%', value: 5 },
                            ],
                            weight: 5
                        },
                        {
                            id: 'q2_2',
                            text: 'Which channels are used for user feedback? (Select all that apply)',
                            type: 'multi-choice',
                            options: [
                                { id: 'opt1', label: 'Surveys', value: 'surveys' },
                                { id: 'opt2', label: 'Focus Groups', value: 'focus_groups' },
                                { id: 'opt3', label: 'Social Media', value: 'social' },
                                { id: 'opt4', label: 'Website Feedback Form', value: 'web_form' },
                            ],
                            weight: 3
                        }
                    ]
                }
            ]
        },
        {
            id: 'p3',
            title: 'Operations & Processes',
            description: 'Efficiency, automation, and integration of internal processes.',
            weight: 20,
            sections: [
                {
                    id: 'p3_s1',
                    title: 'Process Automation',
                    questions: [
                        {
                            id: 'q3_1',
                            text: 'To what extent are internal HR and Finance processes automated?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Manual/Paper-based', value: 1 },
                                { id: 'opt2', label: 'Partially digital', value: 3 },
                                { id: 'opt3', label: 'Fully digital (ERP)', value: 5 },
                            ],
                            weight: 4
                        }
                    ]
                }
            ]
        },
        {
            id: 'p4',
            title: 'Technology & Data',
            description: 'Infrastructure, cybersecurity, and data management capabilities.',
            weight: 35,
            sections: [
                {
                    id: 'p4_s1',
                    title: 'Infrastructure',
                    questions: [
                        {
                            id: 'q4_1',
                            text: 'Is the entity using Cloud services?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No, on-premise only', value: 1 },
                                { id: 'opt2', label: 'Private Cloud', value: 3 },
                                { id: 'opt3', label: 'Hybrid/Public Cloud', value: 5 },
                            ],
                            weight: 4
                        }
                    ]
                }
            ]
        }
    ]
};
