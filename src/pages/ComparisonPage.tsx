
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, ArrowRight, Download } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

// Mock data for two candidates
const candidates = [
  {
    id: 1,
    name: "John Doe",
    title: "Senior Software Engineer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    score: 87,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Python", level: 70 },
      { name: "AWS", level: 75 },
    ],
    experience: "7 years",
    education: "Master of Computer Science",
    strengths: [
      "Strong frontend development experience",
      "Excellent communication skills",
      "Cloud deployment expertise"
    ],
    weaknesses: [
      "Limited experience with C#",
      "No cybersecurity certifications"
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Full Stack Developer",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    score: 82,
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "AWS", level: 65 },
    ],
    experience: "5 years",
    education: "Bachelor of Computer Science",
    strengths: [
      "Backend development expert",
      "Strong database skills",
      "Good problem solving abilities"
    ],
    weaknesses: [
      "Less UI/UX experience",
      "Limited leadership experience"
    ]
  }
];

const ComparisonPage = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-slide-down">
          <h1 className="text-3xl font-bold">Candidate Comparison</h1>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Comparison
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {candidates.map((candidate, idx) => (
            <div key={candidate.id} className="space-y-6 animate-slide-up">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{candidate.name}</CardTitle>
                  <CardDescription>{candidate.title}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Email:</span>
                      <span className="text-sm">{candidate.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Phone:</span>
                      <span className="text-sm">{candidate.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Experience:</span>
                      <span className="text-sm">{candidate.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Education:</span>
                      <span className="text-sm">{candidate.education}</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-3">AI Score</h4>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                        <span className="text-xl font-bold">{candidate.score}</span>
                      </div>
                      <Progress value={candidate.score} className="flex-1 h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="skills">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="assessment">Assessment</TabsTrigger>
                </TabsList>
                <TabsContent value="skills" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {candidate.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-4">
                        {candidate.skills.map((skill, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-sm">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="assessment" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Strengths & Weaknesses</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Strengths</h4>
                        <ul className="space-y-2">
                          {candidate.strengths.map((strength, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Check className="h-4 w-4 text-green-500 mt-0.5" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-2">Areas for Improvement</h4>
                        <ul className="space-y-2">
                          {candidate.weaknesses.map((weakness, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <X className="h-4 w-4 text-red-500 mt-0.5" />
                              <span>{weakness}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="flex justify-center space-x-4">
                <Button variant="secondary">Reject</Button>
                <Button>Shortlist</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center animate-slide-up">
          <Card className="w-full max-w-lg p-6 bg-muted/50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">Recommendation</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on job requirements and candidate profiles
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{candidates[0].name}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>
            <p className="mt-4 text-sm">
              John Doe has a slightly higher overall score and demonstrates stronger frontend development skills,
              which aligns better with the job requirements. Additionally, his cloud deployment expertise
              would be valuable for the team's upcoming projects.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPage;
