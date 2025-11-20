import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl  font-display mb-2 uppercase tracking-tight text-left">Case Studies</h2>
          <p className="text-lg text-muted-foreground text-left">Deep dives into recent enterprise transformations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Link href="/case-studies/car-mart-payments" className="group">
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">America's Car-Mart</h3>
                  <p className="text-muted-foreground">Unified Payments Platform</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      Transforming Auto Finance: A Unified Payments Platform
                    </CardTitle>
                    <CardDescription>
                      Led cross-functional team through complex technical transformation, replacing 3+ legacy systems
                      with unified platform serving 100,000+ customers.
                    </CardDescription>
                  </div>
                  {/* <Badge variant="tertiary">4 months</Badge> */}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      200% increase in autopay adoption, 15% more active users, unified customer experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/case-studies/jcpenney-pos" className="group">
            <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:border-primary/50">
              <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">JCPenney</h3>
                  <p className="text-muted-foreground">Point of Sale Redesign</p>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">Modernizing Retail: Mobile-First POS System</CardTitle>
                    <CardDescription>
                      Transformed 20-year-old point-of-sale system into modern, omnichannel experience across 31+
                      stores.
                    </CardDescription>
                  </div>
                  {/* <Badge variant="tertiary">32 weeks</Badge> */}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      $6.2M cost savings, mobile checkout capabilities, unified omnichannel experience
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
