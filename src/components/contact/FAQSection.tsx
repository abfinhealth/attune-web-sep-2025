
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What happens after I request a consultation?",
    answer: "You'll receive an immediate confirmation email with your scheduled time. Before the call, we'll send a brief overview of what to expect and any preparation suggestions. After the conversation, we'll follow up with relevant resources and next steps based on what we discussed."
  },
  {
    question: "Do you work with credit unions outside the United States?",
    answer: "While we primarily serve credit unions in the United States, we do work with select international credit unions and cooperative financial institutions that share similar structures and values. Contact us to discuss your specific situation."
  },
  {
    question: "How do your packages work? Can we customize them?",
    answer: "Our standard packages (Foundation, Acceleration, Transformation, and Innovation) provide structured starting points, but we customize our approach for each credit union based on your specific needs, resources, and objectives. During our initial consultations, we'll work to understand your unique situation and develop a tailored recommendation."
  },
  {
    question: "How quickly can we get started?",
    answer: "For most credit unions, we can begin initial assessment work within 2-4 weeks of agreement. Implementation timelines vary based on the scope and complexity of your engagement, but we typically identify quick wins within the first 60 days while building toward more comprehensive transformation."
  },
  {
    question: "Do you integrate with our existing systems?",
    answer: "Yes. The Attune Measurement Platform is designed to integrate with your core banking system and other key technologies. We have established connections with major credit union technology providers and can work with your IT team to ensure seamless data flow."
  }
];

const FAQSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <section className="mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-attune-teal-dark mb-6 text-center">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, showAll ? faqs.length : 3).map((faq, index) => (
            <AccordionItem value={`faq-${index}`} key={`faq-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {!showAll && faqs.length > 3 && (
          <div className="mt-6 text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="border-attune-teal text-attune-teal hover:bg-attune-teal-light"
            >
              View All FAQs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
