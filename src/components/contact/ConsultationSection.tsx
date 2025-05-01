
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ConsultationSection = () => {
  return (
    <section className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
      <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">Schedule a Consultation</h2>
      <p className="mb-6">
        The best way to understand how Attune can transform your credit union is through a personalized consultation. 
        In this 30-minute conversation, we'll:
      </p>
      <ul className="list-disc list-outside pl-5 mb-6 space-y-2">
        <li>Learn about your current situation and challenges</li>
        <li>Share relevant examples from our work with similar credit unions</li>
        <li>Explore potential approaches for your organization</li>
        <li>Answer your questions about our methodology and services</li>
        <li>Determine next steps if there's a potential fit</li>
      </ul>
      <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white w-full sm:w-auto flex items-center justify-center">
        <Calendar size={16} className="mr-2" />
        Schedule Now
      </Button>
    </section>
  );
};

export default ConsultationSection;
