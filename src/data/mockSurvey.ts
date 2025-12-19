import { type Survey } from '../types/survey';

export const mockSurvey: Survey = {
    id: 'national-dt-assessment-2025',
    title: 'National Digital Transformation Assessment 2025',
    description: 'A comprehensive evaluation of Qatar\'s digital maturity, aligned with global benchmarks (UN EGDI, OECD) and national strategic objectives (QNV 2030, NDS3, DA2030).',
    pillars: [
        {
            id: 'strategy_leadership',
            title: 'Strategy & Leadership',
            description: 'Vision, governance, and strategic alignment of digital initiatives.',
            weight: 15,
            standardMapping: ['OECD: Digital by Design', 'QNV 2030', 'DA2030'],
            sections: [
                {
                    id: 'sl_s1',
                    title: 'Strategic Alignment',
                    questions: [
                        {
                            id: 'q_sl_1',
                            text: 'Is your entity\'s digital strategy explicitly mapped to the Qatar Digital Agenda 2030 (DA2030)?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No alignment', value: 1 },
                                { id: 'opt2', label: 'Partial alignment (unformalized)', value: 2 },
                                { id: 'opt3', label: 'Formally mapped to key DA2030 pillars', value: 4 },
                                { id: 'opt4', label: 'Fully integrated with DA2030 and NDS3 targets', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['DA2030', 'NDS3']
                        },
                        {
                            id: 'q_sl_2',
                            text: 'Do you have a dedicated "Digital by Design" policy for all new government processes?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Processes are manual first', value: 1 },
                                { id: 'opt2', label: 'Digital is an afterthought', value: 2 },
                                { id: 'opt3', label: 'Digital by Design is recommended', value: 4 },
                                { id: 'opt4', label: 'Mandatory Digital by Design for all new services', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: Digital by Design', 'NDS3: Efficiency']
                        }
                    ]
                },
                {
                    id: 'sl_s2',
                    title: 'Governance & Investment',
                    questions: [
                        {
                            id: 'q_sl_3',
                            text: 'How frequently does the entity\'s senior leadership review digital transformation performance KPIs?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Never', value: 1 },
                                { id: 'opt2', label: 'Annually', value: 2 },
                                { id: 'opt3', label: 'Quarterly', value: 4 },
                                { id: 'opt4', label: 'Monthly/Continuous', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: Leadership', 'NDS3: Accountability']
                        }
                    ]
                }
            ]
        },
        {
            id: 'service_delivery',
            title: 'Digital Service Delivery',
            description: 'Quality, accessibility, and user-centricity of online services.',
            weight: 20,
            standardMapping: ['UN EGDI: OSI', 'OECD: User-Driven', 'NDS3'],
            sections: [
                {
                    id: 'sd_s1',
                    title: 'Service Maturity',
                    questions: [
                        {
                            id: 'q_sd_1',
                            text: 'What percentage of your public-facing services are fully digitized (end-to-end)?',
                            description: 'Targets NDS3 goal of 90% digitization.',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Below 50%', value: 1 },
                                { id: 'opt2', label: '50% - 75%', value: 3 },
                                { id: 'opt3', label: '76% - 89%', value: 4 },
                                { id: 'opt4', label: '90% or above (NDS3 Target)', value: 5 },
                            ],
                            weight: 7,
                            standardMapping: ['NDS3: 90% Digitization', 'UN EGDI: OSI']
                        },
                        {
                            id: 'q_sd_2',
                            text: 'Are your digital services fully mobile-responsive?',
                            description: 'Global benchmark is >96% mobile readiness.',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Not mobile-ready', value: 1 },
                                { id: 'opt2', label: 'Partial mobile support', value: 3 },
                                { id: 'opt3', label: 'Mobile-first design for all services', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['UN EGDI: Mobile Services', 'SDG 11']
                        },
                        {
                            id: 'q_sd_3',
                            text: 'How do you handle services for vulnerable populations (e.g., elderly, disabled)?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No specific digital measures', value: 1 },
                                { id: 'opt2', label: 'Basic accessibility compliance', value: 3 },
                                { id: 'opt3', label: 'Proactive digital inclusion initiatives', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['UN EGDI: Accessibility', 'SDG 10']
                        }
                    ]
                },
                {
                    id: 'sd_s2',
                    title: 'User Engagement',
                    questions: [
                        {
                            id: 'q_sd_4',
                            text: 'How frequently do you perform user-centric testing for digital services?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Never', value: 1 },
                                { id: 'opt2', label: 'On launch only', value: 2 },
                                { id: 'opt3', label: 'Annually', value: 3 },
                                { id: 'opt4', label: 'Continuous user-driven feedback loops', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: User-Driven', 'NDS3: 85% Satisfaction']
                        }
                    ]
                }
            ]
        },
        {
            id: 'tech_infrastructure',
            title: 'Infrastructure & Cybersecurity',
            description: 'Scalable cloud infrastructure and robust national cyber resilience.',
            weight: 20,
            standardMapping: ['UN EGDI: TII', 'DA2030: Infrastructure', 'NDS3: Cybersecurity'],
            sections: [
                {
                    id: 'ti_s1',
                    title: 'Cloud & Interoperability',
                    questions: [
                        {
                            id: 'q_ti_1',
                            text: 'To what extent is your infrastructure integrated with the Qatar National Cloud?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Siloed on-premise', value: 1 },
                                { id: 'opt2', label: 'Partially migrated', value: 3 },
                                { id: 'opt3', label: 'Full Cloud-native adoption', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['DA2030: Infrastructure', 'Hyperconnectivity']
                        },
                        {
                            id: 'q_ti_3',
                            text: 'Do you utilize government-wide shared services (e.g., TASMU, Mawared)?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No participation', value: 1 },
                                { id: 'opt2', label: 'Participating in 1-2 shared services', value: 3 },
                                { id: 'opt3', label: 'Deeply integrated with G2G platforms', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: Government as a Platform', 'NDS3: Integration']
                        }
                    ]
                },
                {
                    id: 'ti_s2',
                    title: 'Cyber Resilience',
                    questions: [
                        {
                            id: 'q_ti_2',
                            text: 'Does your entity comply with the National Cybersecurity Strategy 2024-2030?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No compliance framework', value: 1 },
                                { id: 'opt2', label: 'Partial compliance', value: 3 },
                                { id: 'opt3', label: 'Fully compliant and audited', value: 5 },
                            ],
                            weight: 10,
                            standardMapping: ['NDS3: Cybersecurity', 'National Cyber Strategy']
                        }
                    ]
                }
            ]
        },
        {
            id: 'data_tech',
            title: 'Data & Emerging Tech',
            description: 'Harnessing data assets and accelerating AI adoption.',
            weight: 15,
            standardMapping: ['OECD: Data-Driven', 'DA2030: Digital Technologies', 'NDS3: AI Adoption'],
            sections: [
                {
                    id: 'dt_s1',
                    title: 'Data Governance',
                    questions: [
                        {
                            id: 'q_dt_2',
                            text: 'Rate your entity\'s compliance with the National Data Privacy and Protection Law.',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No formal privacy policy', value: 1 },
                                { id: 'opt2', label: 'Basic compliance', value: 3 },
                                { id: 'opt3', label: 'Advanced privacy-by-design frameworks', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: Data Ethics', 'NDS3: Data Protection']
                        },
                        {
                            id: 'q_dt_3',
                            text: 'What percentage of your data is published as Open Data?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'None', value: 1 },
                                { id: 'opt2', label: 'Critical data only', value: 3 },
                                { id: 'opt3', label: 'Open by Default for all non-sensitive data', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['OECD: Open by Default', 'SDG 16']
                        }
                    ]
                },
                {
                    id: 'dt_s2',
                    title: 'AI & Innovation',
                    questions: [
                        {
                            id: 'q_dt_1',
                            text: 'Has the entity deployed AI use cases to improve operational efficiency?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No AI initiatives', value: 1 },
                                { id: 'opt2', label: 'AI in pilot/R&D phase', value: 3 },
                                { id: 'opt3', label: 'AI deployed in production', value: 4 },
                                { id: 'opt4', label: 'AI-first operational model', value: 5 },
                            ],
                            weight: 5,
                            standardMapping: ['DA2030: Technologies', 'Hyperautomation', 'NDS3: AI Adoption']
                        }
                    ]
                }
            ]
        },
        {
            id: 'digital_society',
            title: 'Talent & Society',
            description: 'Building a digitally savvy workforce and fostering digital inclusion.',
            weight: 15,
            standardMapping: ['UN EGDI: HCI', 'DA2030: Digital Society', 'SDG 4'],
            sections: [
                {
                    id: 'ds_s1',
                    title: 'Workforce Readiness',
                    questions: [
                        {
                            id: 'q_ds_1',
                            text: 'What percentage of your staff have received advanced digital skills training this year?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Below 10%', value: 1 },
                                { id: 'opt2', label: '10% - 30%', value: 2 },
                                { id: 'opt3', label: '31% - 60%', value: 4 },
                                { id: 'opt4', label: 'Above 60% (Talent Hub Goal)', value: 5 },
                            ],
                            weight: 7.5,
                            standardMapping: ['DA2030: Digital Society', 'NDS3: STEM']
                        },
                        {
                            id: 'q_ds_2',
                            text: 'Do you have a structured program to bridge the digital skills gap among employees?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'No program', value: 1 },
                                { id: 'opt2', label: 'Ad-hoc training', value: 3 },
                                { id: 'opt3', label: 'Continuous Upskilling Strategy', value: 5 },
                            ],
                            weight: 7.5,
                            standardMapping: ['OECD: Talent Gap', 'SDG 8']
                        }
                    ]
                }
            ]
        },
        {
            id: 'digital_economy',
            title: 'Digital Economy',
            description: 'Contribution to Qatar\'s non-hydrocarbon GDP and fostering innovation.',
            weight: 15,
            standardMapping: ['DA2030: Digital Economy', 'NDS3', 'SDG 9'],
            sections: [
                {
                    id: 'de_s1',
                    title: 'Economic Enablement',
                    questions: [
                        {
                            id: 'q_de_1',
                            text: 'Does your entity provide digital platforms that support SMEs or private sector growth?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Internal use only', value: 1 },
                                { id: 'opt2', label: 'Public services only', value: 2 },
                                { id: 'opt3', label: 'Dedicated SME support portals', value: 4 },
                                { id: 'opt4', label: 'Full ecosystem enablement', value: 5 },
                            ],
                            weight: 7.5,
                            standardMapping: ['DA2030: Digital Economy', 'SDG 9']
                        },
                        {
                            id: 'q_de_2',
                            text: 'Level of adoption of digital payment systems for entity services?',
                            type: 'choice',
                            options: [
                                { id: 'opt1', label: 'Cash/Physical payments only', value: 1 },
                                { id: 'opt2', label: 'Limited online payment', value: 3 },
                                { id: 'opt3', label: '100% Digital Payment acceptance', value: 5 },
                            ],
                            weight: 7.5,
                            standardMapping: ['NDS3: Digital Economy', 'DA2030']
                        }
                    ]
                }
            ]
        }
    ]
};
