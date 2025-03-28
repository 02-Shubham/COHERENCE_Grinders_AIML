
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeScoringPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Resume Scoring</h1>
        <p className="text-muted-foreground max-w-2xl">
          Rank candidates based on job fit using our advanced AI algorithm with customizable criteria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span>Upload resumes and job descriptions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span>Set your own scoring criteria or use our predefined templates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span>Our AI evaluates each candidate against job requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span>Review scored candidates ranked by best fit</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Benefits</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Objectively evaluate candidates against job requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remove unconscious bias from the screening process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customize scoring criteria for different roles</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Save time by focusing on the highest-scoring candidates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Gain insights into specific strengths and gaps</span>
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

export default ResumeScoringPage;
