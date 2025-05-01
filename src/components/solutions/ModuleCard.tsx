
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ModuleCardProps {
  title: string;
  price: string;
}

const ModuleCard = ({ title, price }: ModuleCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-attune-teal">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-gray-800">{title}</h4>
          <span className="text-attune-teal-dark font-bold">{price}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
