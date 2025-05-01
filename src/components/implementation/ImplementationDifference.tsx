
interface ImplementationDifferenceProps {
  title: string;
  description: string;
}

const ImplementationDifference = ({ title, description }: ImplementationDifferenceProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-attune-teal hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-attune-teal-dark mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ImplementationDifference;
