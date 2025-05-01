
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SolutionItem {
  subtitle: string;
  points: string[];
}

interface SolutionComponentProps {
  title: string;
  description: string;
  items: SolutionItem[];
  color: string;
}

const SolutionComponent = ({ title, description, items, color }: SolutionComponentProps) => {
  return (
    <Card className={`h-full border-t-4 border-attune-teal hover:shadow-lg transition-shadow duration-300`}>
      <CardContent className="p-6">
        <div className={`w-16 h-16 rounded-md ${color} mb-4 flex items-center justify-center`}>
          <span className="text-2xl font-bold text-attune-teal-dark">{title.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-bold text-attune-teal-dark mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
              <h4 className="font-bold text-gray-800 mb-2">{item.subtitle}</h4>
              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-attune-teal mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionComponent;
