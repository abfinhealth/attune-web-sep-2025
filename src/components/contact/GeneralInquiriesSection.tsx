
import { Mail, Phone } from "lucide-react";

const GeneralInquiriesSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">General Inquiries</h2>
      <div className="space-y-3">
        <p className="flex items-center text-attune-teal">
          <Mail size={18} className="mr-2" /> 
          <a href="mailto:hello@attuneinsights.co" className="hover:underline">hello@attuneinsights.co</a>
        </p>
        <div className="flex items-start">
          <Phone size={18} className="mr-2 mt-1 text-attune-teal flex-shrink-0" />
          <div>
            <p><span className="font-bold">Hours:</span> Monday-Friday, 10:00am-6:00pm ET</p>
            <p className="text-gray-600">We typically respond to all inquiries within 1 business day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInquiriesSection;
