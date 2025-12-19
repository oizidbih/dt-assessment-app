import React from 'react';
import { useSurvey } from '../../context/SurveyContext';
import clsx from 'clsx';
import { CheckCircle2, Circle } from 'lucide-react';

interface PillarNavProps {
    currentPillarId: string;
    onSelect: (id: string) => void;
}

const PillarNav: React.FC<PillarNavProps> = ({ currentPillarId, onSelect }) => {
    const { survey, getPillarProgress } = useSurvey();

    return (
        <div className="w-full lg:w-64 bg-white border-b lg:border-r border-gray-200 overflow-x-auto lg:overflow-y-auto scrollbar-hide">
            <div className="p-4 border-b border-gray-100 hidden lg:block">
                <h2 className="font-semibold text-gray-900">Assessment Pillars</h2>
            </div>
            <nav className="p-2 flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1 min-w-max lg:min-w-0">
                {survey.pillars.map((pillar) => {
                    const progress = getPillarProgress(pillar.id);
                    const isActive = currentPillarId === pillar.id;
                    const isComplete = progress === 100;

                    return (
                        <button
                            key={pillar.id}
                            onClick={() => onSelect(pillar.id)}
                            className={clsx(
                                "flex flex-col p-3 rounded-lg text-left transition-all min-w-[140px] lg:w-full",
                                isActive ? "bg-gray-50 ring-1 ring-inset ring-gray-200" : "hover:bg-gray-50"
                            )}
                        >
                            <div className="flex items-center justify-between w-full mb-2 gap-2">
                                <span className={clsx("text-[10px] md:text-sm font-medium truncate", isActive ? "text-al-adaam" : "text-gray-700")}>
                                    {pillar.title}
                                </span>
                                {isComplete ? (
                                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-green-500 shrink-0" />
                                ) : (
                                    <Circle className="w-3 h-3 md:w-4 md:h-4 text-gray-300 shrink-0" />
                                )}
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                                <div
                                    className={clsx("h-full rounded-full transition-all duration-500",
                                        progress === 100 ? "bg-palm" : "bg-sea"
                                    )}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-[10px] text-gray-400 mt-1">{progress}%</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default PillarNav;
