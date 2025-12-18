import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';

interface MaturityRadarProps {
    data: {
        subject: string;
        A: number; // Current Score
        fullMark: number;
    }[];
}

const MaturityRadar: React.FC<MaturityRadarProps> = ({ data }) => {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                        name="Maturity"
                        dataKey="A"
                        stroke="#8A1538"
                        fill="#8A1538"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MaturityRadar;
