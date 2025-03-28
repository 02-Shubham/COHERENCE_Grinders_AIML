import { Link } from 'react-router-dom';
import { FileText, Brain, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Resume Parsing',
    description: 'Instantly extract structured data from resumes in any format.'
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: 'AI Matching',
    description: 'Match candidates to job requirements with advanced AI algorithms.'
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Candidate Comparison',
    description: 'Compare candidates side by side to make informed decisions.'
  }
];

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            AI Resume Screener –{' '}
            <span className="text-primary">Smarter Hiring Starts Here.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Streamline your recruitment process with powerful AI tools that analyze, score, and compare resumes with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/upload">Upload Resume</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/tools">Explore Tools</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recruitment Tools Powered by AI</h2>
            <p className="text-muted-foreground max-w-2xl">
              Our suite of tools helps you make better hiring decisions in less time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="neumorphic-card border-none h-full">
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to transform your hiring process?</h2>
          <p className="text-muted-foreground max-w-2xl">
            Start using our AI-powered tools today and find the perfect candidates faster.
          </p>
          <Button asChild size="lg" className="rounded-full mt-4">
            <Link to="/upload" className="flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
