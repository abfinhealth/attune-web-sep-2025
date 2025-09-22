import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, TrendingUp, Target, Building2, Award, BarChart3 } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Different institution types.
              <span className="text-primary"> Same business insight.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Financial health measurement drives better outcomes across financial institutions, banks, and financial
              services firms
            </p>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Credit Human */}
            <Card className="mb-16">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <Building2 className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h2 className="text-2xl font-bold">Credit Human</h2>
                        <p className="text-muted-foreground">$4.2B Financial Institution</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Board-Mandated Financial Health Initiative</h3>
                    <p className="text-muted-foreground mb-6">
                      Credit Human's board made a bold decision: "We want our employees to be healthier than our
                      members, and our members healthier than the nation. It's not true yet - go make it so, have the
                      resources you need."
                    </p>

                    <div className="bg-primary/10 p-6 rounded-lg">
                      <p className="font-semibold text-primary mb-2">The "Wendy Level" Approach</p>
                      <p className="text-sm text-muted-foreground">
                        Named after Wendy at Credit Human who championed this approach - when an organization stops
                        thinking about financial health as a nice-to-have and starts seeing it as core business
                        strategy.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Target className="h-6 w-6 text-chart-1 mr-2" />
                          <h4 className="font-semibold">Strategic Priority</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Financial health became a board-level mandate, not just a program
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Users className="h-6 w-6 text-chart-2 mr-2" />
                          <h4 className="font-semibold">Employee-First Model</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Started with employee financial health to model the approach for members
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Award className="h-6 w-6 text-chart-3 mr-2" />
                          <h4 className="font-semibold">Industry Recognition</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Became a model for other institutions implementing financial health programs
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Virginia Credit Union */}
            <Card className="mb-16">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <Card className="bg-chart-1/10">
                      <CardContent className="p-6 text-center">
                        <BarChart3 className="h-12 w-12 text-chart-1 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-chart-1 mb-2">32%</div>
                        <p className="text-sm text-muted-foreground">
                          Higher product usage by financially healthy members
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-chart-2/10">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="h-12 w-12 text-chart-2 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-chart-2 mb-2">3.3 vs 2.5</div>
                        <p className="text-sm text-muted-foreground">Products used: healthy vs vulnerable members</p>
                      </CardContent>
                    </Card>

                    <Card className="bg-chart-4/10">
                      <CardContent className="p-6 text-center">
                        <Award className="h-12 w-12 text-chart-4 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-chart-4 mb-2">22.6%</div>
                        <p className="text-sm text-muted-foreground">
                          Foster care program healthy scores after 6 weeks
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <div className="flex items-center mb-6">
                      <Building2 className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h2 className="text-2xl font-bold">Virginia Financial Institution (VACU)</h2>
                        <p className="text-muted-foreground">$5.8B Financial Institution</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Proving the Business Case</h3>
                    <p className="text-muted-foreground mb-6">
                      VACU discovered that financially healthy members use 32% more products than vulnerable members -
                      not because they're being sold more, but because those products genuinely fit their situation and
                      help them achieve their goals.
                    </p>

                    <h4 className="font-semibold mb-3">Foster Care Financial Education Success</h4>
                    <p className="text-muted-foreground mb-6">
                      When VACU's Foster Care Financial Education program used our measurement, healthy financial scores
                      went from 3.3% to 22.6% after just six weeks. That's real impact on real people's lives.
                    </p>

                    <div className="bg-primary/10 p-6 rounded-lg">
                      <p className="font-semibold text-primary mb-2">Key Insight</p>
                      <p className="text-sm text-muted-foreground">
                        "The products aren't just being used more - they're being used because they genuinely help
                        members improve their financial situation."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Large Financial Services Firm */}
            <Card className="mb-16">
              <CardContent className="p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <Building2 className="h-8 w-8 text-primary mr-3" />
                      <div>
                        <h2 className="text-2xl font-bold">Large Financial Services Firm</h2>
                        <p className="text-muted-foreground">Multi-billion dollar institution</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4">Onboarding Integration Strategy</h3>
                    <p className="text-muted-foreground mb-6">
                      This institution is integrating our assessment into their user onboarding process to drive
                      engagement and retention through personalized financial insights from day one.
                    </p>

                    <h4 className="font-semibold mb-3">The Strategic Shift</h4>
                    <p className="text-muted-foreground mb-6">
                      Instead of starting with product offerings, they begin every customer relationship by
                      understanding financial health status and providing relevant guidance.
                    </p>

                    <div className="bg-primary/10 p-6 rounded-lg">
                      <p className="font-semibold text-primary mb-2">Implementation Focus</p>
                      <p className="text-sm text-muted-foreground">
                        Using financial health data to personalize the entire customer journey, not just product
                        recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Users className="h-6 w-6 text-chart-1 mr-2" />
                          <h4 className="font-semibold">Onboarding Integration</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          30-second assessment becomes part of the new customer experience
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Target className="h-6 w-6 text-chart-2 mr-2" />
                          <h4 className="font-semibold">Personalized Insights</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Immediate, relevant financial guidance based on individual health scores
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-muted/50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-6 w-6 text-chart-3 mr-2" />
                          <h4 className="font-semibold">Engagement & Retention</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Higher customer lifetime value through relevant, helpful interactions
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Themes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Have in Common</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Leadership Buy-In</h3>
                  <p className="text-muted-foreground">
                    Financial health isn't a side project - it's a strategic priority with board-level support and
                    dedicated resources.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Data-Driven Approach</h3>
                  <p className="text-muted-foreground">
                    They measure what matters and use data to prove program effectiveness and guide strategic decisions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Member-Centric Focus</h3>
                  <p className="text-muted-foreground">
                    They've shifted from product-pushing to genuinely helping members improve their financial
                    situations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Industry Leadership</h2>

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

            <Card className="bg-primary text-primary-foreground mb-12">
              <CardContent className="p-8">
                <p className="text-xl font-semibold mb-4">
                  "Financial health isn't charity - it's smart business strategy."
                </p>
                <p className="opacity-90">— ING Netherlands CEO</p>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">Ready to join these industry leaders?</p>
              <Button size="lg" asChild>
                <a href="/demo">
                  Book Demo <ArrowRight className="ml-2 h-5 w-5" />
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

export default Customers