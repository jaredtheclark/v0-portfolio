import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Calendar, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"

export default function CarMartCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-balance mb-4">
              Transforming Auto Finance: A Unified Payments Platform for America's Car-Mart
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Led cross-functional team through complex technical transformation, replacing 3+ legacy systems with
              unified platform serving 100,000+ customers across 150+ dealerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Timeline</p>
                <p className="text-sm text-muted-foreground">4 months</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Role</p>
                <p className="text-sm text-muted-foreground">Principal UX Architect</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Users Impacted</p>
                <p className="text-sm text-muted-foreground">100,000+</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Key Metric</p>
                <p className="text-sm text-muted-foreground">200% ↑ autopay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Project Overview & Context</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Company Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dealerships</span>
                  <span className="font-medium">150+ across 12 states</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Customers</span>
                  <span className="font-medium">100,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Q3 Revenue</span>
                  <span className="font-medium">$325.7M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Associates</span>
                  <span className="font-medium">2,200+</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Business Analysts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Technology Architects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Senior Designers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Developers
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Challenge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Business Problems</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Fragmented Systems:</strong> Multiple payment platforms (CheckFree, Repay, Payment Mate)
                    creating operational complexity
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Poor Customer Experience:</strong> Manual workarounds, inconsistent interfaces, limited
                    payment options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Compliance Risk:</strong> Manual fund routing to bond groups, NACHA liability exposure
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Missed Revenue:</strong> Low autopay adoption (2%), limited digital engagement
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">User Pain Points</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Complex payment processes across multiple systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Limited payment method options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>No unified view of payment history</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Difficult autopay enrollment process</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Inconsistent experience across channels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">My Approach & Process</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Research & Discovery Phase</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Jobs-to-Be-Done (JTBD) Workshop Leadership</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Led cross-functional team through structured JTBD methodology</li>
                    <li>• Collaborated with Business Analysts on ORCA workshop</li>
                    <li>
                      • <strong>Core JTBD Identified:</strong> "When I process a payment I want a unified system to
                      handle every payment method (cash, card, ACH, etc.) So that I don't rely on multiple programs or
                      manual workarounds."
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Custom UX Research Kit</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Onsite contextual inquiry at dealerships</li>
                    <li>• Stakeholder interviews with lot managers and customers</li>
                    <li>• User testing during prototype and build phases</li>
                    <li>• Persona development based on real customer segments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-3">Strategic AI Integration</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Used generative AI to accelerate research synthesis</li>
                    <li>• Created initial wireframe foundations for design team refinement</li>
                    <li>• Led senior designer in AI tool adoption aligned with leadership initiatives</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Strategy & Leadership</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Design System Selection & Strategy</h4>
                  <p className="text-muted-foreground text-sm">
                    Selected appropriate design library for team consistency, established Figma-to-React component
                    alignment strategy, and created design-development handoff processes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Cross-Functional Collaboration</h4>
                  <p className="text-muted-foreground text-sm">
                    Translated JTBD into actionable user stories, built comprehensive backlog in Azure DevOps with
                    design links, and ensured design quality standards throughout development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Solution & Design Decisions</h2>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Unified Payment Platform Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Customer-Facing Capabilities</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Single interface for all payment methods</li>
                      <li>• Autopay with debit card support</li>
                      <li>• Self-service portal with complete payment history</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Real-time payment confirmation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Administrative Tools</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Automated fund routing to bond groups</li>
                      <li>• Real-time reporting dashboard</li>
                      <li>• Compliance tracking and audit trails</li>
                      <li>• Enhanced reconciliation capabilities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Methods Supported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">ACH (Personal/Business)</Badge>
                  <Badge variant="outline">Debit Cards</Badge>
                  <Badge variant="outline">Credit Cards</Badge>
                  <Badge variant="outline">Venmo</Badge>
                  <Badge variant="outline">PayPal</Badge>
                  <Badge variant="outline">Apple Pay</Badge>
                  <Badge variant="outline">Google Pay</Badge>
                  <Badge variant="outline">Cash (Walletron)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">1. Simplification</h4>
                      <p className="text-muted-foreground text-sm">
                        Consolidated complex multi-system process into single intuitive interface
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">2. Accessibility</h4>
                      <p className="text-muted-foreground text-sm">
                        Designed for customers with varying technical literacy
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">3. Trust</h4>
                      <p className="text-muted-foreground text-sm">
                        Clear confirmation flows and transparent fee structure ($2.50 per transaction)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">4. Efficiency</h4>
                      <p className="text-muted-foreground text-sm">
                        Reduced manual interventions and support ticket volume
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quantitative Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-sm font-medium">Autopay Adoption</span>
                  <span className="text-lg font-bold text-primary">200% ↑</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-sm font-medium">Active Website Users</span>
                  <span className="text-lg font-bold text-primary">15% ↑</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-sm font-medium">System Uptime</span>
                  <span className="text-lg font-bold text-primary">99.9%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                  <span className="text-sm font-medium">Delinquency Reduction</span>
                  <span className="text-lg font-bold text-primary">30% ↓</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Business Value</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Modernized payment infrastructure supporting future growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Eliminated dependency on 3+ legacy systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Enhanced compliance and reduced NACHA liability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Streamlined operations for 2,200+ associates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Positioned company for improved customer retention</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Key Learnings & Insights</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Design Strategy Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">AI as Accelerator</h4>
                  <p className="text-muted-foreground text-sm">
                    Successfully integrated AI tools to maintain quality while increasing velocity
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Cross-Functional Leadership</h4>
                  <p className="text-muted-foreground text-sm">
                    Importance of translating UX research into actionable development backlogs
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Stakeholder Management</h4>
                  <p className="text-muted-foreground text-sm">
                    Balance between business requirements and user needs critical for project success
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills Demonstrated</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Strategic Leadership</Badge>
                  <Badge>Research Excellence</Badge>
                  <Badge>Design Strategy</Badge>
                  <Badge>Business Acumen</Badge>
                  <Badge>Change Management</Badge>
                  <Badge>Cross-functional Collaboration</Badge>
                  <Badge>AI Integration</Badge>
                  <Badge>Agile Methodology</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <Button variant="outline">
              Next Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            This case study demonstrates comprehensive UX leadership in a complex, regulated industry environment,
            showcasing both strategic thinking and hands-on execution capabilities essential for Principal-level
            positions.
          </p>
        </div>
      </footer>
    </div>
  )
}
