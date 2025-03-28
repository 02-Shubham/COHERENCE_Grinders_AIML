
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Upload, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeParserPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col items-center text-center mb-12 animate-slide-down">
        <h1 className="text-4xl font-bold mb-4">Resume Parser</h1>
        <p className="text-muted-foreground max-w-2xl">
          Extract key information from resumes in any format. Get structured data for candidates in seconds.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How It Works</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 font-bold">1.</span>
                  <span>Upload resumes in any format (PDF, DOCX, TXT)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">2.</span>
                  <span>Our AI extracts key information including contact details, skills, experience, and education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">3.</span>
                  <span>Review the structured data in an easy-to-read format</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-bold">4.</span>
                  <span>Export the data or continue to analysis</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="neumorphic-card border-none">
          <CardContent className="p-8">
            <div className="flex flex-col space-y-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Benefits</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Save hours of manual data entry and resume review</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ensure all important information is captured consistently</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Eliminate human error in data extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create standardized candidate profiles for easier comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Process multiple resumes simultaneously</span>
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

export default ResumeParserPage;
