
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SkillMatchingPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Skill Matching</h1>
        <p className="text-muted-foreground max-w-2xl">
          Compare required job skills with candidate profiles to find the perfect match for your positions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span>Upload resumes and job descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span>Our AI identifies and categorizes skills from both sources</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span>Advanced matching algorithms evaluate skill compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span>View detailed skill match reports with visualizations</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Benefits</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Identify exact skill matches and skill gaps</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Find candidates with specialized skills that traditional screening might miss</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Detect skill synonyms and variations (e.g., "React.js" vs "React")</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Evaluate skill proficiency levels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Make data-driven hiring decisions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center">
        <Button asChild size="lg" className="rounded-full">
          <Link to="/upload" className="flex items-center">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SkillMatchingPage;
