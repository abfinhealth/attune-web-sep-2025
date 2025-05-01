
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
}

const TeamMember = ({ name, title, bio, imageUrl }: TeamMemberProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        {imageUrl && (
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {!imageUrl && (
          <div className="w-24 h-24 rounded-full bg-attune-teal-light flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-attune-teal">
              {name.split(' ')[0][0]}{name.split(' ')[1]?.[0]}
            </span>
          </div>
        )}
        <h3 className="font-bold text-xl text-attune-teal-dark text-center mt-2">{name}</h3>
        <p className="text-gray-600 text-center mb-4">{title}</p>
        <p className="text-gray-700">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
