
import { ReactNode } from 'react';

interface ImplementationAreaCardProps {
  title: string;
  description: string;
  points: string[];
  colorClass: string;
}

const ImplementationAreaCard = ({ title, description, points, colorClass }: ImplementationAreaCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`${colorClass} p-6`}>
        <h3 className="text-2xl font-bold text-attune-teal-dark mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {points.map((point, index) => {
            // Extract the title and description if point has a colon
            const parts = point.split(': ');
            const pointTitle = parts[0];
            const pointDescription = parts.length > 1 ? parts[1] : null;
            
            return (
              <li key={index} className="pb-3">
                <p className="font-semibold text-attune-teal-dark">{pointTitle}</p>
                {pointDescription && <p className="text-gray-600 text-sm">{pointDescription}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImplementationAreaCard;
