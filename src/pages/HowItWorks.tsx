import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Clock, Users, Target, TrendingUp, Settings, BarChart } from "lucide-react"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              How Member Financial Health Measurement Actually Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Your board approved the budget. Your team is ready. But how do you actually measure financial health
              impact without hiring data scientists?
            </p>
            <p className="text-lg font-semibold text-foreground mb-10">
              Here's what Credit Human and Golden 1 learned.
            </p>
          </div>
        </div>
      </section>

      {/* Four Dimensions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
              The Four Dimensions That Actually Predict Member Behavior
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              These four dimensions predict product usage, retention, and lifetime value better than traditional
              metrics.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Spend</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Can they manage daily cash flow without stress?</p>
                  <p className="text-muted-foreground">
                    Not just income vs. expenses - how do they feel about money management?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Save</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Do they have a real financial cushion?</p>
                  <p className="text-muted-foreground">
                    Not just account balances - do they have emergency fund strategy?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <BarChart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Borrow</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Is debt helping them build wealth or creating anxiety?</p>
                  <p className="text-muted-foreground">
                    Not just credit scores - how does debt impact their daily life?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Plan</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Do they feel confident about their financial future?</p>
                  <p className="text-muted-foreground">
                    Not just retirement accounts - do they have actionable financial goals?
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Implementation Timeline: 90 Days to Full Deployment
            </h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1-30
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Days 1-30: Assessment Setup</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Configure FinHealth Score® for your members</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Train your team on insights interpretation</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Establish baseline measurements</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      31-60
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Days 31-60: Pilot Program</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Deploy with 500-1000 members</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Gather initial insights and patterns</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Refine integration with existing systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      61-90
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Days 61-90: Full Rollout</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Scale to full membership</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Implement ongoing measurement cycles</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <p>Establish reporting for leadership</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg text-center">
              <p className="text-lg font-medium">
                Most financial institutions see actionable insights within the first two weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day-to-Day Operations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What Your Team Actually Does Day-to-Day</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              No new processes. Just better questions and better data.
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">
                    Member-Facing Staff: Ask different questions in conversations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-medium text-red-800 mb-2">Instead of:</p>
                      <p className="text-red-700">"What products interest you?"</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="font-medium text-green-800 mb-2">Now:</p>
                      <p className="text-green-700">"Help me understand your financial priorities."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Marketing Team: Send relevant content to specific segments</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-medium text-red-800 mb-2">Instead of:</p>
                      <p className="text-red-700">Generic rate promotions to everyone</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="font-medium text-green-800 mb-2">Now:</p>
                      <p className="text-green-700">Emergency fund content to members with low Save scores</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Leadership: Make decisions based on member outcomes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="font-medium text-red-800 mb-2">Instead of:</p>
                      <p className="text-red-700">Product utilization reports</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="font-medium text-green-800 mb-2">Now:</p>
                      <p className="text-green-700">Financial health improvement tracking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Technical Requirements (Minimal)</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              We adapt to your existing technology. You don't adapt to ours.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Settings className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Survey deployment</h3>
                  <p className="text-muted-foreground">Email or text link (we provide)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <BarChart className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Data integration</h3>
                  <p className="text-muted-foreground">Read-only access to core system (optional)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Reporting access</h3>
                  <p className="text-muted-foreground">Web-based dashboard (no installation)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Staff training</h3>
                  <p className="text-muted-foreground">2-hour session (we facilitate)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Expected Results Timeline</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold">Week 1</h3>
                  </div>
                  <p className="text-muted-foreground">First member insights available</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold">Month 1</h3>
                  </div>
                  <p className="text-muted-foreground">Segment patterns identified</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold">Month 3</h3>
                  </div>
                  <p className="text-muted-foreground">Program impact measurement</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="h-6 w-6 text-primary mr-2" />
                    <h3 className="font-bold">Month 6</h3>
                  </div>
                  <p className="text-muted-foreground">Board presentation with ROI data</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-primary text-primary-foreground rounded-lg text-center">
              <p className="text-xl font-semibold">
                VACU saw 22.6% improvement in financial health scores within six weeks of program changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/demo">
                Talk to Our Team <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HowItWorks