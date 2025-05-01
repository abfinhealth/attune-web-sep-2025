
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Feature {
  title: string;
  items: string[];
}

interface PackageProps {
  package: {
    name: string;
    subtitle: string;
    description: string;
    features: Feature[];
    idealFor: string[];
    investment: string;
    note: string;
    quickWins: string;
    fullImplementation: string;
    color: string;
    includesFoundation?: boolean;
    includesAcceleration?: boolean;
    includesTransformation?: boolean;
  };
}

const PackageCard = ({ package: pkg }: PackageProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={`border-l-4 border-attune-teal hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
      <CardContent className="p-0">
        {/* Header */}
        <div className={`bg-${pkg.color} p-6`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-attune-teal-dark">{pkg.name}</h3>
              <p className="text-lg font-medium text-gray-700 mt-1">{pkg.subtitle}</p>
              <p className="text-gray-600 mt-2 italic">{pkg.description}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-attune-teal-dark">{pkg.investment}</p>
              <p className="text-sm text-gray-600 italic">{pkg.note}</p>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="mt-4 flex items-center text-attune-teal-dark hover:text-attune-teal hover:bg-white/50"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'View Less' : 'View Details'}
            {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
          </Button>
        </div>
        
        {/* Expandable Content */}
        <div className={`transition-all duration-300 ${expanded ? 'max-h-[2000px]' : 'max-h-0'} overflow-hidden`}>
          <div className="p-6">
            {/* Includes previous packages */}
            {(pkg.includesFoundation || pkg.includesAcceleration || pkg.includesTransformation) && (
              <div className="mb-6 p-4 bg-gray-50 rounded-md">
                <p className="font-bold text-gray-800 mb-2">This package includes everything in:</p>
                <ul className="space-y-1">
                  {pkg.includesTransformation && <li className="text-gray-700">• TRANSFORMATION</li>}
                  {pkg.includesAcceleration && <li className="text-gray-700">• ACCELERATION</li>}
                  {pkg.includesFoundation && <li className="text-gray-700">• FOUNDATION</li>}
                </ul>
                <p className="mt-2 text-gray-700">Plus the following additional features:</p>
              </div>
            )}
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-attune-teal-dark mb-4">What You Get</h4>
              <div className="space-y-6">
                {pkg.features.map((feature, index) => (
                  <div key={index}>
                    <h5 className="font-bold text-gray-800 mb-2">{feature.title}</h5>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-attune-teal mr-2">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ideal For */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-attune-teal-dark mb-4">Ideal For</h4>
              <ul className="space-y-2">
                {pkg.idealFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-attune-teal mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-bold text-gray-800 mb-1">Quick Wins</p>
                <p className="text-gray-700">{pkg.quickWins}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-bold text-gray-800 mb-1">Full Implementation</p>
                <p className="text-gray-700">{pkg.fullImplementation}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
