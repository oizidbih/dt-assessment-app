import React, { createContext, useContext, useState } from 'react';
import { type Nominee, mockNominees, type AwardCategory } from '../types/excellence';

interface ExcellenceContextType {
    nominees: Nominee[];
    voteForNominee: (nomineeId: string) => void;
    getCategoryNominees: (category: AwardCategory) => Nominee[];
}

const ExcellenceContext = createContext<ExcellenceContextType | undefined>(undefined);

export const ExcellenceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [nominees, setNominees] = useState<Nominee[]>(mockNominees);

    const voteForNominee = (nomineeId: string) => {
        setNominees(prev => prev.map(nom =>
            nom.id === nomineeId ? { ...nom, juryVotes: nom.juryVotes + 1 } : nom
        ));
    };

    const getCategoryNominees = (category: AwardCategory) => {
        return nominees.filter(n => n.category === category).sort((a, b) => b.score - a.score);
    };

    return (
        <ExcellenceContext.Provider value={{
            nominees,
            voteForNominee,
            getCategoryNominees
        }}>
            {children}
        </ExcellenceContext.Provider>
    );
};

export const useExcellence = () => {
    const context = useContext(ExcellenceContext);
    if (!context) {
        throw new Error('useExcellence must be used within an ExcellenceProvider');
    }
    return context;
};
