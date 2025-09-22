import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Calendar, Mail, Linkedin } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              See How Member Financial Health Measurement Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Ready to see how Credit Human, VACU, and Golden 1 turned member financial health from aspiration to
              business KPI?
            </p>
            <p className="text-lg font-semibold text-foreground mb-10">Book a 30-minute demo with our team.</p>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll See in the Demo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Live Platform Walkthrough</h3>
                  <p className="text-muted-foreground">The actual dashboard your team will use daily</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Member Journey Simulation</h3>
                  <p className="text-muted-foreground">How assessment works from member perspective</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Results Interpretation</h3>
                  <p className="text-muted-foreground">How to read insights and identify opportunities</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Integration Overview</h3>
                  <p className="text-muted-foreground">How this fits with your existing systems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Implementation Timeline</h3>
                  <p className="text-muted-foreground">What happens after you decide to move forward</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Come Prepared */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Come Prepared to Discuss</h2>
            <div className="space-y-6">
              {[
                { title: "Your Strategic Goals", desc: "How does financial health fit your current priorities?" },
                { title: "Budget Authority", desc: "Who needs to approve vendor decisions at your organization?" },
                { title: "Timeline", desc: "When are you looking to implement measurement programs?" },
                { title: "Team Capacity", desc: "Who would manage this day-to-day?" },
                { title: "Current Programs", desc: "What financial wellness initiatives do you already have?" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Is This Demo Right for You?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200 bg-green-50/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Yes, if:</h3>
                  <div className="space-y-3">
                    {[
                      "Your strategic plan includes member financial health outcomes",
                      "You have budget authority for member experience tools",
                      "Your team can integrate measurement into existing touchpoints",
                      "You're ready to implement within 6 months",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-green-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Maybe not, if:</h3>
                  <div className="space-y-3">
                    {[
                      "You're just exploring what financial health measurement means",
                      "You need multiple approval layers for any vendor decision",
                      "You don't have capacity for implementation this year",
                      "You're looking for free survey tools",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="h-5 w-5 rounded-full bg-orange-300 mt-0.5 flex-shrink-0" />
                        <p className="text-orange-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Connect */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Alternative Ways to Connect</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">andy@attune.co</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">Connect with Andy Bandyopadhyay</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Prefer to Learn More First?</h3>
                <div className="space-y-2">
                  <a href="/customers" className="block text-primary hover:underline">
                    • Review our customer stories
                  </a>
                  <a href="/how-it-works" className="block text-primary hover:underline">
                    • Read about implementation process
                  </a>
                  <a href="/about" className="block text-primary hover:underline">
                    • Check out Andy's background
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Happens After the Demo</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Qualified Fit</h3>
                  <p className="text-muted-foreground">Detailed proposal with timeline and pricing</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Need More Info</h3>
                  <p className="text-muted-foreground">Resources and follow-up questions to help evaluation</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Not a Fit</h3>
                  <p className="text-muted-foreground">Honest assessment and potential alternatives</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <p className="text-center font-medium">
                We're looking for Credit Human-level commitment to member financial health as business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Schedule Your Demo</h2>
            <div className="bg-muted/50 p-8 rounded-lg mb-8">
              <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-4">[CALENDLY EMBED WOULD GO HERE]</p>
              <Button size="lg" className="text-lg px-8 py-6">
                Book Your Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Questions Before Scheduling?</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Do we need special technology?</h3>
                  <p className="text-muted-foreground">
                    No special equipment needed. We adapt to your existing systems.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">How long is implementation?</h3>
                  <p className="text-muted-foreground">
                    90 days from contract to full deployment for most financial institutions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">What size financial institutions do you work with?</h3>
                  <p className="text-muted-foreground">
                    $500M to $10B+ in assets. Size matters less than strategic commitment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    How is this different from surveys we could build ourselves?
                  </h3>
                  <p className="text-muted-foreground">
                    8 questions based on 10 years of research. Analysis, benchmarks, and recommendations included.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-semibold text-foreground mb-6">Ready to measure what matters?</p>
              <Button size="lg" className="text-lg px-8 py-6">
                Schedule Your Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Demo