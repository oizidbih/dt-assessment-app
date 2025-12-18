import React from 'react';
import { useSurvey } from '../../context/SurveyContext';
import MaturityRadar from '../../components/charts/MaturityRadar';
import { Printer, AlertTriangle } from 'lucide-react';

const EntityReport: React.FC = () => {
    const { survey, getPillarProgress, getOverallScore, answers } = useSurvey();
    const overallScore = getOverallScore();

    // Prepare Data for Radar Chart
    const radarData = survey.pillars.map(p => ({
        subject: p.title,
        A: getPillarProgress(p.id), // Using progress as a proxy for score for this mock
        fullMark: 100,
    }));

    // Identify Gaps (Questions with low scores)
    const gaps = Object.values(answers).filter(ans => typeof ans.value === 'number' && ans.value < 3);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="max-w-5xl mx-auto py-8 px-4 print:py-0 print:max-w-none">
            <div className="flex items-center justify-between mb-8 print:hidden">
                <h1 className="text-2xl font-bold text-gray-900">Entity Digital Maturity Report</h1>
                <button
                    onClick={handlePrint}
                    className="flex items-center px-4 py-2 bg-dune text-white rounded-lg hover:bg-opacity-90"
                >
                    <Printer className="w-4 h-4 mr-2" />
                    Print Report
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 print:shadow-none print:border-none">
                <div className="text-center mb-10 border-b border-gray-100 pb-6">
                    <h2 className="text-3xl font-bold text-al-adaam mb-2">Ministry of Education</h2>
                    <p className="text-gray-500">Assessment Cycle: National DT Assessment 2025</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Maturity Overview</h3>
                        <div className="bg-gray-50 p-6 rounded-lg text-center mb-6">
                            <span className="block text-gray-500 text-sm mb-1">Overall Digital Maturity Score</span>
                            <span className="text-5xl font-bold text-al-adaam">{overallScore}%</span>
                        </div>
                        <div className="space-y-4">
                            {survey.pillars.map(p => {
                                const score = getPillarProgress(p.id);
                                return (
                                    <div key={p.id}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-medium text-gray-700">{p.title}</span>
                                            <span className="text-gray-600">{score}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-sea h-2 rounded-full" style={{ width: `${score}%` }}></div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4">
                        <MaturityRadar data={radarData} />
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            Visual representation of maturity across 5 key pillars.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Gap Analysis</h3>
                    {gaps.length > 0 ? (
                        <div className="border rounded-lg overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-red-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Alert</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-red-800 uppercase">Area / Question</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-red-800 uppercase">Score</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {gaps.map((gap, idx) => (
                                        <tr key={idx}>
                                            <td className="px-6 py-4">
                                                <AlertTriangle className="w-5 h-5 text-red-500" />
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {/* In real app, look up question text from ID */}
                                                Question ID: {gap.questionId}
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm font-bold text-red-600">
                                                {gap.value}/5
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                            No significant gaps identified. Excellent performance!
                        </div>
                    )}
                </div>

                <div className="bg-skyline text-white p-6 rounded-lg mt-8 print:bg-gray-100 print:text-black">
                    <h4 className="font-bold text-lg mb-2">Recommendations</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Focus on automating internal HR processes to improve the "Operations" score.</li>
                        <li>Increase investment in cloud infrastructure to align with national cloud-first policy.</li>
                        <li>Formalize the digital strategy documentation.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EntityReport;
