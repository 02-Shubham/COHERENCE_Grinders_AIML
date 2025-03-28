
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import ToolsPage from "./pages/ToolsPage";
import UploadPage from "./pages/UploadPage";
import ResultsPage from "./pages/ResultsPage";
import ComparisonPage from "./pages/ComparisonPage";
import NotFound from "./pages/NotFound";

// Import new tool-specific pages
import ResumeParserPage from "./pages/ResumeParserPage";
import ResumeScoringPage from "./pages/ResumeScoringPage";
import SkillMatchingPage from "./pages/SkillMatchingPage";
import CandidateComparisonPage from "./pages/CandidateComparisonPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/compare" element={<ComparisonPage />} />
            
            {/* New tool-specific routes */}
            <Route path="/resume-parser" element={<ResumeParserPage />} />
            <Route path="/resume-scoring" element={<ResumeScoringPage />} />
            <Route path="/skill-matching" element={<SkillMatchingPage />} />
            <Route path="/candidate-comparison" element={<CandidateComparisonPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
