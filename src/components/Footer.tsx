
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">HireRight</h3>
            <p className="text-sm text-muted-foreground">
              Empowering recruiters with cutting-edge AI for smarter hiring decisions.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume Parser
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume Scoring
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Skill Matching
                </Link>
              </li>
              <li>
                <Link to="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                  Candidate Comparison
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                support@HireRight.example.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border text-sm">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} HireRight. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
