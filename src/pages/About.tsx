
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, Target, Heart, GraduationCap, Building2 } from "lucide-react"
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Why Financial Institutions Need Financial Health Expertise
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              I'm Andy Bandyopadhyay, PhD, CUDE. I founded Attune because too many financial institutions were guessing
              at what their members need instead of actually measuring it.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Health Network connection and Andy's credentials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">The Financial Health Network Connection</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Attune was born from and incubated within the Financial Health Network - the organization that created
                  the FinHealth Score® and drives national financial health research.
                </p>
                <p className="text-lg text-muted-foreground">
                  I witnessed how financial institutions could become powerful catalysts for member financial health,
                  but most lacked the tools to measure and improve it systematically.
                </p>
              </div>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-primary/20 p-3 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Academic & Professional Background</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• PhD in science and technology policy</li>
                    <li>• Certified Credit Union Development Educator (CUDE)</li>
                    <li>• Research focus on member financial outcomes measurement</li>
                    <li>• 10+ years in quantitative and qualitative research roles</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 font-medium">
                    But here's what matters more: I've seen what happens when financial institutions actually measure
                    member financial health. The results speak for themselves.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Isn't Charity Work */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why This Isn't Charity Work</h2>

            <div className="bg-primary/10 p-8 rounded-lg mb-8">
              <p className="text-xl font-semibold text-primary mb-4">
                Here's the blunt truth: financial health isn't about helping people feel good. It's about building
                sustainable member relationships that drive business results.
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              When Credit Human's board said they wanted members healthier than the nation, they weren't talking about
              charity. They were talking about competitive advantage.
            </p>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-chart-2/20 p-3 rounded-lg">
                    <Building2 className="h-8 w-8 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">VACU proved it:</h3>
                    <p className="text-muted-foreground">
                      Financially healthy members use 32% more products. Not because you're selling harder, but because
                      those products genuinely fit their situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Andy's Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">The Thing Everyone Gets Wrong</h2>

              <p className="text-lg text-muted-foreground mb-6">
                You know how when you go to your bank or credit union, they're like "here's all our products, here's the
                rates, what do you want?" And you're sitting there thinking, "I have no idea what I actually need"?
                That's the problem we're solving.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                Most financial institutions think they know their members because they can see account balances and
                credit scores. But that's like saying you understand someone's health because you know their weight.
                You're missing the whole story.
              </p>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Here's a real example:</h3>
                  <p className="text-muted-foreground">
                    You've got a member with $50,000 in savings. Traditional metrics say they're doing great, right? But
                    what if they're actually stressed out of their minds because they don't have a separate emergency
                    fund, they're carrying high debt they don't understand, and they have no plan for retirement? That
                    person needs help, not another savings product.
                  </p>
                </CardContent>
              </Card>

              <div className="bg-primary/10 p-8 rounded-lg mb-12">
                <p className="text-lg font-semibold text-primary mb-4">
                  We built Attune because financial institutions need to understand the "why" behind financial behavior,
                  not just the "what."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Dimensions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">The Four Things That Actually Matter</h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Instead of just looking at account data, we measure four dimensions that actually predict how someone's
              doing financially:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-chart-1/20 p-3 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-chart-1" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-chart-1">Spend</h3>
                      <p className="text-muted-foreground">Can you manage your day-to-day cash flow without stress?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-chart-2/20 p-3 rounded-lg">
                      <Target className="h-8 w-8 text-chart-2" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-chart-2">Save</h3>
                      <p className="text-muted-foreground">Do you have a real financial cushion for emergencies?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-chart-3/20 p-3 rounded-lg">
                      <Users className="h-8 w-8 text-chart-3" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-chart-3">Borrow</h3>
                      <p className="text-muted-foreground">
                        Is your debt helping you build wealth or creating anxiety?
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-chart-4/20 p-3 rounded-lg">
                      <Heart className="h-8 w-8 text-chart-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-chart-4">Plan</h3>
                      <p className="text-muted-foreground">Do you feel confident about your financial future?</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground">
                When you understand these four things, suddenly member conversations make sense. Instead of guessing
                what products to offer, you can say "Your biggest challenge is spend management, so let's focus on these
                three specific things."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why This Actually Works</h2>

            <div className="text-center mb-12">
              <p className="text-2xl font-bold text-primary mb-6">
                Here's the blunt truth: when you make someone richer, they spend more money with you.
              </p>
              <p className="text-lg text-muted-foreground">
                When you give someone a more relevant product - one that actually helps them with their real financial
                challenges - they're more likely to buy it. And when that product genuinely works and helps them achieve
                their goals, they come back for the next one.
              </p>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <p className="text-xl font-semibold">
                  It's not rocket science. It's just that nobody was measuring the right things.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Drives This Work */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Drives This Work</h2>

            <div className="mb-8">
              <p className="text-xl font-semibold mb-6">
                Every decision we make, every feature we build, every partnership we form is guided by one mission:
                making member financial health a measurable business KPI for every financial institution.
              </p>
              <p className="text-lg">
                Not because it's the right thing to do (though it is). Because it's the smart business thing to do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-primary-foreground text-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">VACU Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Financially healthy members use <strong>3.3 products</strong> versus <strong>2.5</strong> for
                    vulnerable members. That's <strong>32% higher sales</strong> - because they genuinely need those
                    products.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary-foreground text-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Foster Care Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Healthy financial scores went from <strong>3.3% to 22.6%</strong> after just six weeks. That's real
                    impact on real people's lives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Make Financial Health Measurable?</h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                The organizations that really get this become industry leaders. They're speaking at conferences, other
                institutions are calling them for advice, their boards are making strategic decisions based on member
                financial health data.
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                They shift from "let me show you our loan rates" to "let me understand your financial situation and help
                you improve it." The business results follow naturally.
              </p>
            </div>

            <Card className="bg-muted/50 mb-12">
              <CardContent className="p-8">
                <p className="text-xl font-semibold text-foreground">
                  That's what Attune is really about. We're giving financial institutions the tools to actually help
                  people get financially healthier, and when you do that well, everyone wins - the member, the
                  institution, and the community.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button size="lg" asChild>
                <a href="/demo">
                  Talk to Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
