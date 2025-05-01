
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-attune-teal">
      <CardContent className="p-6">
        <h3 className="font-bold text-xl text-attune-teal-dark mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ValueCard;
