
import { Check } from 'lucide-react';

interface ImplementationApproachPhaseProps {
  title: string;
  description: string;
  items: string[];
}

const ImplementationApproachPhase = ({ title, description, items }: ImplementationApproachPhaseProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-attune-teal">
      <h3 className="text-xl font-bold text-attune-teal-dark mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-attune-teal-light flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-attune-teal-dark" />
            </div>
            <span className="ml-3 text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImplementationApproachPhase;
