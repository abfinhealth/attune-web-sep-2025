
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Mail, Phone, MapPin, Users, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationSection from "@/components/contact/ConsultationSection";
import DemoRequestSection from "@/components/contact/DemoRequestSection";
import GeneralInquiriesSection from "@/components/contact/GeneralInquiriesSection";
import FAQSection from "@/components/contact/FAQSection";

const Contact = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [thanksDialogOpen, setThanksDialogOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribing(false);
      setThanksDialogOpen(true);
      setSubscribeEmail("");
      toast({
        title: "Subscription successful",
        description: "You've been added to our newsletter list.",
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-b from-white to-attune-teal-light py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-attune-teal-dark mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              We're excited to hear from you and explore how we can help your credit union bring financial health to life. Choose the option that works best for you.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left column with contact options */}
            <div className="space-y-16">
              <ConsultationSection />
              <DemoRequestSection />
            </div>

            {/* Right column with additional information */}
            <div className="space-y-16">
              <GeneralInquiriesSection />
              
              {/* Media & Speaking Requests */}
              <section>
                <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">Media & Speaking Requests</h2>
                <p className="mb-4">For media inquiries, interview requests, or to book an Attune speaker for your event, please contact:</p>
                <p className="flex items-center text-attune-teal">
                  <Mail size={18} className="mr-2" /> 
                  <a href="mailto:media@attune.co" className="hover:underline">media@attune.co</a>
                </p>
              </section>

              {/* Visit Our Office */}
              <section>
                <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">Visit Our Office</h2>
                <div className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 text-attune-teal flex-shrink-0" />
                  <div>
                    <p className="font-bold">Toronto Office:</p>
                    <p>507 King Street East, Unit 411<br />
                    Toronto, ON M5A 1M3<br />
                    Canada</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">
                  While we maintain an office in Toronto, our team is distributed across North America. 
                  We'd be happy to arrange an in-person or virtual meeting based on your location and preferences.
                </p>
              </section>

              {/* Join Our Team */}
              <section>
                <h2 className="text-2xl font-display font-bold text-attune-teal-dark mb-4">Join Our Team</h2>
                <div className="flex items-start mb-4">
                  <Users size={18} className="mr-2 mt-1 text-attune-teal flex-shrink-0" />
                  <p>
                    Interested in career opportunities with Attune? We're always looking for passionate 
                    people who share our vision of bringing financial health to life.
                  </p>
                </div>
                <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white">
                  View Open Positions
                </Button>
              </section>
            </div>
          </div>

          {/* Stay Connected */}
          <section className="mt-16 pt-16 border-t border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-attune-teal-dark mb-4">Stay Connected</h2>
              <p className="text-lg mb-8">
                Subscribe to our monthly newsletter for the latest insights, case studies, 
                and resources on financial health transformation for credit unions.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="bg-attune-teal hover:bg-attune-teal-dark text-white"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>

              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-attune-teal transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-attune-teal transition-colors">
                  <Twitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection />

          {/* Final CTA */}
          <section className="mt-20 text-center bg-attune-teal-light rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-attune-teal-dark mb-4">
              Let's Transform Your Credit Union Through Financial Health
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              We're excited to explore how we can help you bring financial health to life—making 
              it the core of your business model and competitive advantage.
            </p>
            <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white text-lg py-6 px-8">
              Schedule a Consultation
            </Button>
          </section>
        </div>
      </main>

      <Dialog open={thanksDialogOpen} onOpenChange={setThanksDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for subscribing!</DialogTitle>
          </DialogHeader>
          <p>You'll receive our monthly newsletter with the latest insights, case studies, and resources on financial health transformation.</p>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Contact;
