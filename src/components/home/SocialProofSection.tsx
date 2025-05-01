
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const SocialProofSection = () => {
  const testimonials = [
    {
      quote: "Attune has transformed how we think about our mission. Financial health isn't just something we talk about anymore—it's how we operate, differentiate, and grow. Our board, leadership team, and employees are all aligned around a shared vision that drives both purpose and performance.",
      author: "Sarah Johnson",
      title: "CEO, Community First Credit Union"
    },
    {
      quote: "Working with Attune allowed us to move beyond fragmented initiatives to a cohesive strategy that touches every part of our organization. Their measurement platform has given us unprecedented visibility into both our mission impact and business outcomes, proving that financial health truly drives our success.",
      author: "Michael Rivera",
      title: "COO, Horizon Credit Union"
    }
  ];

  const statistics = [
    { value: "43%", label: "Average improvement in member financial health scores" },
    { value: "2.8x", label: "Increase in product adoption among financially healthy members" },
    { value: "58%", label: "Higher deposit growth in credit unions with integrated strategies" },
    { value: "92%", label: "Of employees report greater alignment with mission" }
  ];

  return (
    <section className="bg-attune-gray py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Transforming Credit Unions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              See how leading organizations are bringing financial health to life
            </p>
          </div>
        </ScrollAnimation>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} threshold={0.2} className="delay-100">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col relative overflow-hidden card-hover">
                <div className="text-6xl font-serif text-attune-purple-light absolute top-4 left-4 opacity-20">"</div>
                <p className="text-gray-700 mb-6 relative z-10">
                  {testimonial.quote}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold text-attune-purple-dark">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
                <div className="text-6xl font-serif text-attune-purple-light absolute bottom-4 right-4 opacity-20">"</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Statistics */}
        <ScrollAnimation threshold={0.2}>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">Impact Statistics</h3>
        </ScrollAnimation>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <ScrollAnimation key={index} threshold={0.2} className="delay-200">
              <div className="bg-white rounded-xl shadow-md p-6 text-center card-hover">
                <p className="text-3xl md:text-4xl font-bold mb-2 text-attune-purple">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
