
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, PieChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CandidateComparisonPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Candidate Comparison</h1>
        <p className="text-muted-foreground max-w-2xl">
          View candidates side-by-side and analyze their strengths and weaknesses to make informed decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span>Upload multiple candidate resumes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span>Select candidates you want to compare side-by-side</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span>View detailed comparisons across various parameters</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span>Highlight key differences and make shortlisting decisions</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Benefits</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Visually compare candidates' skills, experience, and education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Identify complementary strengths in team hiring scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compare candidates against the same job requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Make objective, side-by-side comparisons of top candidates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Export comparison reports for team discussions</span>
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

export default CandidateComparisonPage;
