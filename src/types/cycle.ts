export type CycleStatus = 'upcoming' | 'active' | 'closed';
export type CycleType = 'annual' | 'ad-hoc';

export interface Cycle {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    status: CycleStatus;
    type: CycleType;
}

export const mockCycles: Cycle[] = [
    {
        id: 'c_2025',
        name: 'National DT Assessment 2025',
        startDate: '2025-01-01',
        endDate: '2025-03-31',
        status: 'active',
        type: 'annual'
    },
    {
        id: 'c_q3_health',
        name: 'Q3 Health Sector Review',
        startDate: '2025-07-01',
        endDate: '2025-07-31',
        status: 'upcoming',
        type: 'ad-hoc'
    },
    {
        id: 'c_2024',
        name: 'National DT Assessment 2024',
        startDate: '2024-01-01',
        endDate: '2024-03-31',
        status: 'closed',
        type: 'annual'
    }
];
