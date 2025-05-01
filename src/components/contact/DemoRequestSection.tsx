
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoRequestSection = () => {
  return (
    <section className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
      <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">Request a Demo</h2>
      <p className="mb-4">
        See the Attune Measurement Platform in action with a guided demonstration. Our platform makes it 
        easy to collect, analyze, and report on financial health data that connects mission impact to business outcomes.
      </p>
      <p className="mb-4">In this 45-minute session, we'll show you:</p>
      <ul className="list-disc list-outside pl-5 mb-6 space-y-2">
        <li>How financial health assessment works</li>
        <li>Our executive and department-specific dashboards</li>
        <li>How we connect mission metrics to business performance</li>
        <li>Our reporting and visualization capabilities</li>
        <li>Implementation and customization options</li>
      </ul>
      <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white w-full sm:w-auto flex items-center justify-center">
        <Calendar size={16} className="mr-2" />
        Request Demo
      </Button>
    </section>
  );
};

export default DemoRequestSection;
