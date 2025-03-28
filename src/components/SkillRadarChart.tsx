
import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface Skill {
  subject: string;
  candidate: number;
  required: number;
}

interface SkillRadarChartProps {
  skills: Skill[];
}

const SkillRadarChart = ({ skills }: SkillRadarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))' }} />
        <PolarRadiusAxis angle={90} domain={[0, 100]} />
        <Radar
          name="Required Skills"
          dataKey="required"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
        />
        <Radar
          name="Candidate Skills"
          dataKey="candidate"
          stroke="hsl(var(--accent-foreground))"
          fill="hsl(var(--accent-foreground))"
          fillOpacity={0.5}
        />
        <Legend
          wrapperStyle={{
            paddingTop: "20px",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillRadarChart;
