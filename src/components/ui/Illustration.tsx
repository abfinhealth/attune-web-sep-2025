
import React from 'react';
import { Sparkles } from 'lucide-react';

type IllustrationProps = {
  type: 'plant' | 'chart' | 'checklist';
  className?: string;
};

const Illustration = ({ type, className = '' }: IllustrationProps) => {
  const renderIllustration = () => {
    switch (type) {
      case 'plant':
        return (
          <div className={`illustration-container ${className}`}>
            <div className="w-32 h-32 rounded-full bg-attune-yellow-light flex items-center justify-center relative">
              <Sparkles className="illustration-sparkle absolute -top-2 -right-2" />
              <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 20C30 20 20 30 20 50" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 15C30 15 40 25 35 45" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M25 10C25 10 45 15 40 35" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 60L30 40" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 65C20 65 30 70 40 65" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="30" cy="65" rx="10" ry="5" fill="#8DC7C8" fillOpacity="0.5"/>
              </svg>
            </div>
          </div>
        );
      case 'chart':
        return (
          <div className={`illustration-container ${className}`}>
            <div className="w-32 h-32 rounded-full bg-attune-yellow-light flex items-center justify-center relative">
              <Sparkles className="illustration-sparkle absolute -top-2 -right-2" />
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40L20 30L30 35L50 15" stroke="#F39C50" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="10" cy="40" r="3" fill="#F39C50"/>
                <circle cx="20" cy="30" r="3" fill="#F39C50"/>
                <circle cx="30" cy="35" r="3" fill="#F39C50"/>
                <circle cx="50" cy="15" r="3" fill="#F39C50"/>
              </svg>
            </div>
          </div>
        );
      case 'checklist':
        return (
          <div className={`illustration-container ${className}`}>
            <div className="w-32 h-32 rounded-full bg-attune-yellow-light flex items-center justify-center relative">
              <Sparkles className="illustration-sparkle absolute -top-2 -right-2" />
              <svg width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="40" height="50" rx="2" fill="#FFFFFF" stroke="#2B7C7E" strokeWidth="2"/>
                <line x1="20" y1="25" x2="40" y2="25" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="35" x2="40" y2="35" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <line x1="20" y1="45" x2="40" y2="45" stroke="#2B7C7E" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="15" cy="25" r="2" fill="#F39C50"/>
                <circle cx="15" cy="35" r="2" fill="#F39C50"/>
                <circle cx="15" cy="45" r="2" fill="#F39C50"/>
              </svg>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return renderIllustration();
};

export default Illustration;
