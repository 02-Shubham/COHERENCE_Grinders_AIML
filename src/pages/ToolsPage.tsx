
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Award, Code, Users } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tools = [
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: 'Resume Parser',
    description: 'Extract key information from resumes in any format. Get structured data for candidates in seconds.',
    link: '/resume-parser'
  },
  {
    icon: <Award className="h-12 w-12 text-primary" />,
    title: 'Resume Scoring',
    description: 'Rank candidates based on job fit using our advanced AI algorithm with customizable criteria.',
    link: '/resume-scoring'
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Skill Matching',
    description: 'Compare required job skills with candidate profiles to find the perfect match for your positions.',
    link: '/skill-matching'
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: 'Candidate Comparison',
    description: 'View candidates side-by-side and analyze their strengths and weaknesses to make informed decisions.',
    link: '/candidate-comparison'
  }
];

const ToolsPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Resume Analysis Tools</h1>
        <p className="text-muted-foreground max-w-2xl">
          Our suite of AI-powered tools to help you screen, analyze, and compare candidates efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <Card key={index} className="neumorphic-card border-none overflow-hidden h-full">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-4">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  {tool.icon}
                </div>
                <h2 className="text-2xl font-semibold">{tool.title}</h2>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
            </CardContent>
            <CardFooter className="px-8 pb-8 pt-0">
              <Button asChild className="w-full rounded-full">
                <Link to={tool.link}>
                  Use {tool.title}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
