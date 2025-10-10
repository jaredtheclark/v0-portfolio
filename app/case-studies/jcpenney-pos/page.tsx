import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowLeft, Clock, Users, DollarSign, Smartphone, Zap, Target, TrendingUp } from "lucide-react"

export default function JCPenneyCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">32 weeks</Badge>
            <Badge variant="outline">Enterprise Retail</Badge>
            <Badge variant="outline">Mobile POS</Badge>
          </div>

          <h1 className="text-4xl font-bold text-balance mb-4">JCPenney Point of Sale Redesign</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Transforming a 20-year-old point-of-sale system into a modern, omnichannel experience that unified online
            and in-store operations while dramatically improving customer and associate workflows.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">$6.2M</h3>
              <p className="text-muted-foreground">Cost savings achieved</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">31+</h3>
              <p className="text-muted-foreground">Stores modernized</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">17%</h3>
              <p className="text-muted-foreground">Hardware cost reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Executive Summary</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As Staff Product Designer, I led the design of a comprehensive transformation of JCPenney's legacy point-of-sale system. The project involved two 16-week engagements that modernized checkout experiences
              across 31+ stores, enabling mobile transactions and omnichannel integration while saving $6.2 million in
              hardware costs.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The Challenge</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Legacy System Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  20-year-old POS technology creating competitive disadvantage with slow, inflexible workflows that
                  couldn't adapt to modern retail needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Operational Inefficiencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Associates tied to fixed registers with no mobile capabilities, creating bottlenecks and limiting
                  customer service flexibility.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Pain Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Customers</h4>
                  <p className="text-sm text-muted-foreground">
                    Long wait times and fragmented experience across online and in-store channels
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Sales Associates</h4>
                  <p className="text-sm text-muted-foreground">
                    Limited mobility and inefficient workflows reducing productivity and customer service quality
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Business</h4>
                  <p className="text-sm text-muted-foreground">
                    High operational costs, competitive disadvantage, and lost sales opportunities
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Research & Discovery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Methodology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Jobs-to-be-Done Analysis:</strong> Mapped every use case team members encounter during
                    transactions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Contextual Inquiry:</strong> On-site observation of current workflows and pain points
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Stakeholder Interviews:</strong> Understanding business requirements and constraints
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    <strong>Competitive Analysis:</strong> Benchmarking against modern retail experiences
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Mobile checkout capabilities could reduce customer wait times significantly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Credit approval process integration was critical for transaction completion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Unified customer data was essential for omnichannel experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">
                    Associates needed flexible tools that could work across store environments
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Design Strategy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mobility First</h4>
                    <p className="text-sm text-muted-foreground">Enable checkout anywhere in the store</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Seamless Integration</h4>
                    <p className="text-sm text-muted-foreground">Unify online and offline experiences</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Efficiency Focus</h4>
                    <p className="text-sm text-muted-foreground">Streamline every step of the transaction process</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Flexibility</h4>
                    <p className="text-sm text-muted-foreground">
                      Support various transaction scenarios and environments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Mobile POS Capabilities</h4>
                    <p className="text-sm text-muted-foreground">Untether associates from fixed registers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Flexible Checkout System</h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless transition between mobile and fixed terminals
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Integrated Credit Processing</h4>
                    <p className="text-sm text-muted-foreground">Real-time approval within transaction flow</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Unified Customer Database</h4>
                    <p className="text-sm text-muted-foreground">Single source of truth across channels</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Delivered */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Solutions Delivered</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Mobile Checkout System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Floor-based transaction capabilities</li>
                  <li>• Reduced customer wait times</li>
                  <li>• Increased associate productivity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Flexible Transaction Flow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Start transactions on mobile</li>
                  <li>• Transfer seamlessly to docking stations</li>
                  <li>• Complete at fixed terminals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Integrated Credit Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time store card approval</li>
                  <li>• Single-transaction completion</li>
                  <li>• Improved conversion rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unified Omnichannel Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Connected online and in-store data</li>
                  <li>• Consistent customer experience</li>
                  <li>• Integrated payment processing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Specialized Workflows</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Jewelry Department</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized checkout for high-value items with enhanced security protocols
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Salon Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Appointment and service-specific transactions with integrated scheduling
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Windows & Home</h4>
                  <p className="text-sm text-muted-foreground">
                    Large item and installation workflows with delivery coordination
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Quantitative Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">$6.2 million saved</h4>
                    <p className="text-sm text-muted-foreground">17% reduction in hardware and support costs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">31+ stores modernized</h4>
                    <p className="text-sm text-muted-foreground">Within aggressive timeline requirements</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">System Performance</h4>
                    <p className="text-sm text-muted-foreground">Improved transaction efficiency and reliability</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Qualitative Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Customer Experience</h4>
                    <p className="text-sm text-muted-foreground">Reduced wait times, smoother checkout process</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Associate Experience</h4>
                    <p className="text-sm text-muted-foreground">Increased mobility and efficiency</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Business Operations</h4>
                    <p className="text-sm text-muted-foreground">Streamlined processes, better data integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Long-term Strategic Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Established foundation for 3-year transformation roadmap</li>
                    <li>• Enabled omnichannel retail strategy</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Improved change management capabilities</li>
                    <li>• Enhanced agile development practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "Kitestring has and continues to be a strategic partner by helping to shape and develop our
                transformation journey. From the start Kitestring understood the scope of what JCP was looking to do not
                only modernizing Store's Checkout Technology but also Customer and Associate Experience... Eugene and
                his team are a fantastic partner to work with who brought a level of transparency to the program that
                was required in making critical decisions quickly to continue our forward momentum."
              </blockquote>
              <footer className="text-sm">
                <strong className="text-primary">— Irfan Butt, Director, JCPenney</strong>
              </footer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Key Learnings</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Design Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mobile-first approach in retail requires careful consideration of environmental factors</li>
                  <li>• Seamless transitions between devices are critical for user adoption</li>
                  <li>• Integration complexity often lies in legacy system compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Process Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Early stakeholder alignment accelerates implementation</li>
                  <li>• Pilot programs are essential for validating design decisions</li>
                  <li>• Documentation quality directly impacts change management success</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Technology transformation requires both technical and cultural change</li>
                  <li>• Phased rollouts allow for iterative improvement</li>
                  <li>• Partnership selection significantly impacts project outcomes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills Demonstrated</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Design & Research Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Workshop Facilitation: Co-led complex stakeholder workshops (JTBD, ORCA)</li>
                  <li>• Research Translation: Converted insights into actionable design requirements</li>
                  <li>• Hardware-Specific Design: Created design systems for physical device constraints</li>
                  <li>• Prototype Development: Built interactive demos showcasing hardware-software integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technical Design Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Android Platform Design: Optimized interfaces for Android POS devices</li>
                  <li>• Physical Interaction Design: Leveraged hardware buttons and device capabilities</li>
                  <li>• Modular Design Systems: Created scalable, hardware-adaptable component libraries</li>
                  <li>• Cross-platform Considerations: Balanced software flexibility with hardware constraints</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
            <Button asChild>
              <Link href="/case-studies/car-mart-payments">
                View Car-Mart Case Study
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
