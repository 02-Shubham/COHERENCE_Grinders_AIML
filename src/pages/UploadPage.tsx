
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import FileUpload from '@/components/FileUpload';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FileText, Briefcase } from 'lucide-react';

interface FileWithPreview extends File {
  preview?: string;
  id: string;
}

const UploadPage = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const navigate = useNavigate();

  const handleFilesUploaded = (uploadedFiles: FileWithPreview[]) => {
    setFiles(uploadedFiles);
    
    // Start analysis after upload
    if (uploadedFiles.length > 0) {
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Fake analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    // Simulate completion after 4 seconds
    setTimeout(() => {
      clearInterval(interval);
      setAnalysisProgress(100);
      setIsAnalyzing(false);
      
      // Navigate to results page after analysis
      setTimeout(() => {
        navigate('/results');
      }, 1000);
    }, 4000);
  };

  const handleSubmitJobDescription = () => {
    if (jobDescription.trim().length > 20) {
      // Would typically send the job description to the backend
      startAnalysis();
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 animate-slide-down">
          <h1 className="text-3xl font-bold mb-2">Upload & Analyze Resumes</h1>
          <p className="text-muted-foreground">
            Upload resumes to extract key information and match against job requirements.
          </p>
        </div>

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Upload Resumes</span>
            </TabsTrigger>
            <TabsTrigger value="job" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>Job Description</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload Resumes</CardTitle>
                <CardDescription>
                  Upload one or more resumes to analyze. Supported formats include PDF, DOC, DOCX, and TXT.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload 
                  onFilesUploaded={handleFilesUploaded}
                  multiple={true}
                  maxFiles={5}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="job">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Paste the job description to match against candidate resumes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea 
                  placeholder="Paste job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button 
                  onClick={handleSubmitJobDescription}
                  disabled={jobDescription.trim().length < 20 || isAnalyzing}
                  className="w-full"
                >
                  Save & Continue
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {isAnalyzing && (
          <div className="mt-8 space-y-4 animate-fade-in">
            <div className="bg-background border border-border rounded-lg p-6">
              <h3 className="font-medium mb-4">Analyzing Resumes</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{analysisProgress < 100 ? "Processing..." : "Complete!"}</span>
                  <span className="text-sm">{analysisProgress}%</span>
                </div>
                <Progress value={analysisProgress} />
                
                <div className="text-sm text-muted-foreground mt-4 space-y-1.5">
                  {analysisProgress >= 20 && (
                    <p className="flex items-center">
                      <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">✓</span>
                      Extracting contact information
                    </p>
                  )}
                  {analysisProgress >= 40 && (
                    <p className="flex items-center">
                      <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">✓</span>
                      Parsing work experience
                    </p>
                  )}
                  {analysisProgress >= 60 && (
                    <p className="flex items-center">
                      <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">✓</span>
                      Identifying skills and competencies
                    </p>
                  )}
                  {analysisProgress >= 80 && (
                    <p className="flex items-center">
                      <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">✓</span>
                      Analyzing education history
                    </p>
                  )}
                  {analysisProgress >= 100 && (
                    <p className="flex items-center">
                      <span className="w-6 h-6 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mr-2">✓</span>
                      Generating candidate profile
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
