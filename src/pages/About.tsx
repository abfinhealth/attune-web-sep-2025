
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TeamMember from '@/components/about/TeamMember';
import ValueCard from '@/components/about/ValueCard';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const leadershipTeam = [
    {
      name: 'Andy Bandyopadhyay, PhD, CUDE',
      title: 'Founder & CEO',
      bio: 'Andy founded Attune with the vision of transforming how credit unions approach their mission. With a PhD from Georgia Tech and extensive experience in financial health measurement and strategy, Andy leads our mission to bring financial health to life.'
    },
    {
      name: 'Lina Ghani',
      title: 'Director of Business Operations',
      bio: 'Lina drives operational excellence across Attune with her strategic approach to business optimization. With a Master\'s degree from Oxford University and rich experience in scaling mission-driven organizations, Lina ensures our financial health strategies translate into effective implementation for credit unions.'
    },
    {
      name: 'Claire Suellentrop',
      title: 'Head of Go-To-Market',
      bio: 'Claire shapes how Attune communicates our mission-margin approach to the credit union market. Drawing on her extensive experience scaling B2B SaaS companies and co-founding the Customer-Led Growth Framework, Claire helps credit unions articulate financial health as their fundamental competitive advantage.'
    }
  ];

  const boardMembers = [
    {
      name: 'Niko Canner',
      title: 'Board Chair',
      bio: 'Niko brings extensive experience in strategy, organizational transformation, and mission-driven business models. As our Board Chair, he provides invaluable guidance on our growth strategy and market approach.'
    },
    {
      name: 'Jennifer Tescher',
      title: 'Board Member',
      bio: 'As CEO of the Financial Health Network, Jen is a pioneering advocate for financial health and has shaped the national conversation around how businesses can drive both social impact and financial performance.'
    },
    {
      name: 'Melinda Hightower',
      title: 'Board Member',
      bio: 'Mel brings deep expertise in financial services, strategic growth, and inclusive leadership. Her perspective helps ensure our solutions create meaningful impact for credit unions of all sizes.'
    }
  ];

  const values = [
    {
      title: 'Integration Over Separation',
      description: 'We reject the false choice between mission and margin, seeing them as two sides of the same coin.'
    },
    {
      title: 'Measurement Over Intention',
      description: 'We believe what gets measured gets managed—and what gets managed creates impact.'
    },
    {
      title: 'Implementation Over Ideas',
      description: 'We focus on bringing strategies to life, not just developing them.'
    },
    {
      title: 'Personalization Over One-Size-Fits-All',
      description: 'We recognize that financial health looks different for everyone and tailor our approaches accordingly.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-attune-teal-light to-attune-gray py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-attune-teal-dark mb-6">About Attune</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
              Transforming credit unions by making financial health their competitive advantage
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Attune was born from a simple but powerful insight: when credit unions improve the financial health of their members, they also strengthen their own bottom line. It's not a choice between mission and margin—it's a virtuous cycle.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Founded as a business line of the Financial Health Network in 2019, Attune became an independent company on October 1, 2023. Our journey began with a question: how might we help credit unions not just talk about financial health, but truly make it the core of their business model and competitive advantage?
                </p>
                <p className="text-lg text-gray-700">
                  Today, Attune is the industry standard for measuring and implementing financial health strategies that integrate mission and margin for credit unions. We've grown from an idea to a comprehensive solution that transforms how credit unions operate, measure success, and create value.
                </p>
              </div>
              <div className="bg-attune-teal-light p-10 rounded-lg">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Our North Star</h3>
                <h4 className="text-xl font-bold text-attune-teal mb-4">Bring Financial Health to Life</h4>
                <p className="text-gray-700 mb-6">
                  This simple phrase guides everything we do. It's about making financial health more than a concept or a talking point—it's about transforming it into lived reality for credit union members, employees, and communities.
                </p>
                <h5 className="font-bold text-gray-700 mb-3">We believe financial health is:</h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Not just something you offer, but who you are</li>
                  <li>Not a charitable initiative, but a business model</li>
                  <li>Not a side program, but your competitive advantage</li>
                  <li>Not measured in isolation, but connected to performance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12">Our Approach</h2>
            <div className="text-lg text-gray-700 space-y-6 max-w-4xl">
              <p>
                At Attune, we've redefined how credit unions approach financial health by rejecting the false choice between doing good and doing well. Our integrated approach connects mission impact directly to business outcomes, transforming how you operate, measure success, and differentiate in a crowded market.
              </p>
              <p>
                We don't just provide recommendations—we partner with you through every step of implementation, from strategic planning to front-line execution. And our measurement platform provides the data and insights to prove your impact and optimize your approach.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12">Our Team</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl">
              Attune brings together experts in credit unions, financial health, strategy, technology, and implementation. Our diverse team combines deep industry knowledge with fresh perspectives to create truly transformative solutions.
            </p>
            
            <h3 className="text-2xl font-bold text-attune-teal-dark mb-8">Leadership</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {leadershipTeam.map((member, index) => (
                <TeamMember key={index} name={member.name} title={member.title} bio={member.bio} />
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-attune-teal-dark mb-8">Our Board</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <TeamMember key={index} name={member.name} title={member.title} bio={member.bio} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-4 bg-attune-teal bg-opacity-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-attune-teal-dark mb-8">Join Our Team</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  Attune is growing, and we're looking for passionate people who share our vision of bringing financial health to life. We offer:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A mission-driven culture with meaningful work</li>
                  <li>A diverse, inclusive team spread across North America</li>
                  <li>Flexible, remote-first work environment</li>
                  <li>Opportunities to shape an emerging industry</li>
                  <li>Competitive compensation and benefits</li>
                </ul>
                <div className="mt-8">
                  <Button className="bg-attune-teal hover:bg-attune-teal-dark text-white">
                    View Open Positions
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-tr from-attune-teal-light to-attune-yellow-light p-10 rounded-lg">
                <h3 className="text-2xl font-bold text-attune-teal-dark mb-6">Contact Us</h3>
                <p className="text-gray-700 mb-6">
                  Ready to learn more about Attune? We'd love to hear from you.
                </p>
                <div className="flex items-center text-attune-teal mb-4">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>hello@attune.co</span>
                </div>
                <div className="flex items-center text-attune-teal mb-8">
                  <MapPin className="h-5 w-5 mr-3" />
                  <div>
                    <p>Toronto Office:</p>
                    <p>507 King Street East, Unit 411</p>
                    <p>Toronto, ON</p>
                  </div>
                </div>
                <Button className="bg-white text-attune-teal border border-attune-teal hover:bg-attune-teal hover:text-white transition-colors">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
