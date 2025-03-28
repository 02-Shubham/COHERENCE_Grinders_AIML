
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, User, Briefcase, GraduationCap, Code, Phone, Mail, Check, X } from 'lucide-react';
import SkillRadarChart from '@/components/SkillRadarChart';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock data for demonstration
const candidateData = {
  name: "John Doe",
  contact: {
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      duration: "2018 - Present",
      description: "Led development of cloud applications and microservices architecture."
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      duration: "2015 - 2018",
      description: "Developed and maintained web applications using React and Node.js."
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      year: "2015"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      year: "2013"
    }
  ],
  skills: [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 70 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 80 },
    { name: "SQL", level: 85 },
    { name: "GraphQL", level: 65 }
  ],
  score: 87,
  matchStrengths: [
    "Strong frontend development experience",
    "Excellent communication skills",
    "Cloud deployment expertise"
  ],
  matchWeaknesses: [
    "Limited experience with C#",
    "No cybersecurity certifications"
  ]
};

// Mock data for radar chart
const skillRadarData = [
  { subject: 'JavaScript', candidate: 95, required: 80 },
  { subject: 'React', candidate: 90, required: 85 },
  { subject: 'Node.js', candidate: 85, required: 70 },
  { subject: 'Python', candidate: 70, required: 40 },
  { subject: 'AWS', candidate: 75, required: 90 },
  { subject: 'Docker', candidate: 80, required: 75 },
  { subject: 'SQL', candidate: 85, required: 80 },
  { subject: 'GraphQL', candidate: 65, required: 50 },
];

const ResultsPage = () => {
  const navigate = useNavigate();

  const handleDownloadReport = () => {
    // In a real app, this would generate and download a PDF or other document format
    console.log("Downloading report...");
  };

  const handleCompareCandidate = () => {
    navigate('/compare');
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Candidate Data */}
          <div className="lg:col-span-7 space-y-6 animate-slide-up">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Resume Analysis</h1>
              <Button onClick={handleDownloadReport} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex flex-col space-y-1.5">
                  <CardTitle className="text-2xl">{candidateData.name}</CardTitle>
                  <CardDescription>Senior Software Engineer</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button onClick={handleCompareCandidate} variant="outline" size="sm">
                    Compare
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{candidateData.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{candidateData.contact.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Education</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Skills</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {candidateData.experience.map((exp, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{exp.title}</h4>
                              <p className="text-sm text-muted-foreground">{exp.company}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{exp.duration}</span>
                          </div>
                          <p className="text-sm">{exp.description}</p>
                          {index < candidateData.experience.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {candidateData.education.map((edu, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{edu.degree}</h4>
                              <p className="text-sm text-muted-foreground">{edu.institution}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{edu.year}</span>
                          </div>
                          {index < candidateData.education.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Competencies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {candidateData.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-4">
                      {candidateData.skills.slice(0, 5).map((skill, index) => (
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
            </Tabs>
          </div>

          {/* Right Side - Analysis & Matching */}
          <div className="lg:col-span-5 space-y-6 animate-slide-up">
            <Card className="neumorphic-card border-none overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle>AI-Generated Score</CardTitle>
                <CardDescription>
                  Based on job requirements and candidate profile
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative pt-4">
                  <svg className="w-full" viewBox="0 0 100 10" style={{ transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="5"
                      cy="5"
                      r="4"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="1"
                    />
                    <circle
                      cx="5"
                      cy="5"
                      r="4"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1"
                      strokeDasharray="25.12"
                      strokeDashoffset={25.12 - (25.12 * candidateData.score) / 100}
                      transform="rotate(-90 5 5)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl font-bold">{candidateData.score}</span>
                      <span className="text-muted-foreground text-sm">/100</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Match Strengths</h4>
                    <ul className="space-y-2">
                      {candidateData.matchStrengths.map((strength, index) => (
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
                      {candidateData.matchWeaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <X className="h-4 w-4 text-red-500 mt-0.5" />
                          <span>{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-0">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm">Shortlist Candidate</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills Matching</CardTitle>
                <CardDescription>
                  Comparison between candidate skills and job requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SkillRadarChart skills={skillRadarData} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
