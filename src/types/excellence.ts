export type AwardCategory = 'Best Overall Digital Transformation' | 'Best in Innovation' | 'Fastest Improver' | 'Best Customer Experience';

export interface Nominee {
    id: string;
    entityName: string;
    category: AwardCategory;
    score: number; // The assessment score
    justification: string;
    juryVotes: number;
}

export const mockNominees: Nominee[] = [
    {
        id: 'nom_1',
        entityName: 'Ministry of Municipality',
        category: 'Best Overall Digital Transformation',
        score: 92,
        justification: 'Achieved 100% digitization of core services.',
        juryVotes: 12
    },
    {
        id: 'nom_2',
        entityName: 'Ashghal',
        category: 'Best Overall Digital Transformation',
        score: 89,
        justification: 'Implemented advanced AI-driven asset management.',
        juryVotes: 10
    },
    {
        id: 'nom_3',
        entityName: 'HMC',
        category: 'Best in Innovation',
        score: 85,
        justification: 'Tele-medicine platform rollout.',
        juryVotes: 15
    },
    {
        id: 'nom_4',
        entityName: 'Ministry of Education',
        category: 'Best in Innovation',
        score: 78,
        justification: 'VR classrooms pilot project.',
        juryVotes: 8
    }
];
