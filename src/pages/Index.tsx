
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, TrendingUp, Target } from "lucide-react"
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Your leadership knows member financial health drives business results.
              <span className="text-primary"> We prove it.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Whether you're managing member outcomes, optimizing product portfolios, or improving user engagement - the
              question is always the same: "How do we measure financial health impact?"
            </p>
            <p className="text-lg text-foreground mb-10 font-medium">Here's how our customers do it.</p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/demo">
                Talk to Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Is This You Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Is This You?</h2>
            <div className="space-y-4">
              {[
                "Leadership believes member financial health drives business results",
                "Your team can integrate measurement into existing touchpoints",
                "You have budget authority for member experience initiatives",
                "You need data to prove financial health programs actually work",
                '"Member financial outcomes" appears in your strategic plan or board presentations',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-card border border-border rounded-lg">
              <p className="text-muted-foreground italic">
                If member financial health isn't a business priority for your organization, we're probably not a fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">What We Actually Do</h2>
            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground mb-6">
                You know how most financial institutions ask "what products do you want?" instead of "how can we help
                you improve your financial situation?"
              </p>
              <p className="text-lg text-foreground font-medium">
                We built the measurement infrastructure so you can focus on the second question.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-destructive">The Problem</h3>
                  <p className="text-muted-foreground">
                    You're running financial health programs but can't prove they work
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-primary">The Solution</h3>
                  <p className="text-muted-foreground">
                    30-second assessment that measures what actually predicts member behavior
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-chart-4">The Result</h3>
                  <p className="text-muted-foreground">
                    Data showing which initiatives improve financial health (and which don't)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Leaders Quote */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Why Smart Leaders Care About This</h2>
            <blockquote className="text-xl lg:text-2xl mb-6 text-balance">
              "We realized financial health isn't just good for customers - it's good business. Healthy customers are
              more profitable, have lower risk, and stay with you longer."
            </blockquote>
            <p className="text-lg opacity-90 mb-8">
              — Bank of America CEO, Financial Health Network's EMERGE conference
            </p>
            <p className="text-lg">
              The conversation has shifted from "should we care about customer financial health?" to{" "}
              <strong>"how do we measure and optimize it?"</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Customer Proof Points */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Customers Prove It Works</h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Credit Human ($4.2B financial institution)</h3>
                      <p className="text-muted-foreground">Board mandated member financial health improvement.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Large Financial Services Firm</h3>
                      <p className="text-muted-foreground">
                        Integrating our assessment into their user onboarding to drive engagement and retention through
                        personalized financial insights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Virginia Financial Institution ($5.8B)</h3>
                      <p className="text-muted-foreground">
                        Discovered financially healthy members use <strong>32% more products</strong> - because those
                        products genuinely fit their situation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                Different institution types. Same business insight:
                <strong className="text-foreground"> financial health measurement drives better outcomes.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">30-second assessment</h3>
                <p className="text-muted-foreground">Using industry-standard FinHealth Score®</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant insights</h3>
                <p className="text-muted-foreground">On member segments and intervention opportunities</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Track progress</h3>
                <p className="text-muted-foreground">Which programs actually improve financial health over time</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                No data science team required. No complex integration. Just measurement that turns financial health from
                aspiration to business strategy.
              </p>
              <Button size="lg" variant="outline" asChild>
                <a href="/how-it-works">
                  See How It Works <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Bottom Line</h2>
            <p className="text-xl text-muted-foreground mb-8">
              When you make someone financially healthier, they do more business with you.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Not because you're selling harder, but because your products genuinely help their situation. That's the
              shift every financial services leader is figuring out.
            </p>
            <p className="text-xl font-semibold text-foreground mb-10">Ready to measure what matters?</p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/demo">Talk to Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Index
