import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturedProjectCard } from "@/components/featured-project-card"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1>Case Studies</h1>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-0 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <FeaturedProjectCard
            title="Enterprise Payments Platform"
            subtitle="America's Car-Mart · Principal UX Architect · 2025"
            outcome="Launched a zero-to-one payments platform in four months achieving 200% increase in autopay enrollment while blocking a C-level directive that would have broken the customer experience."
            metrics={[
              { value: "200%", label: "Autopay increase" },
              { value: "15%", label: "Portal growth" },
              { value: "4 mo", label: "Delivery time" },
              { value: "100K+", label: "Customers" },
            ]}
            imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/car-mart.png"
            fallbackColor="#2563EB"
            caseStudyLink="/case-studies/enterprise-payments-platform"
          />

          <FeaturedProjectCard
            title="Next Generation Point of Sale"
            subtitle="JCPenney · Senior UX Designer · 2022"
            outcome="Led UI design and design system creation for a national retailer's complete POS overhaul—from 20-year-old registers to mobile-first checkout across 650+ stores."
            metrics={[
              { value: "$6.2M", label: "Hardware savings" },
              { value: "86", label: "Jobs discovered" },
              { value: "31+", label: "Stores launched" },
              { value: "4 mo", label: "Research to handoff" },
            ]}
            imageSrc="https://dvrudj0acuc9axhx.public.blob.vercel-storage.com/Homepage%20Videos/jcpenney.png"
            fallbackColor="#E5E5E5"
            caseStudyLink="/case-studies/point-of-sale"
          />
        </div>
      </section>

      {/* Footer */}
      <section className="py-16">
        <Footer />
      </section>
    </div>
  )
}
