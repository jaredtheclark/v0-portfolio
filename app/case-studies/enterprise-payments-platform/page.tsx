"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { LetsConnect } from "@/components/lets-connect"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function EnterprisePaymentsPlatformCaseStudy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-medium leading-none tracking-tight">
              Enterprise Payments Modernization: Designing the Customer Payment Portal for Auto Loan Customers
            </h1>
            <p className="text-lg text-muted-foreground">
              Principal UX Architect · Enterprise Payments Modernization · 2025
            </p>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">The Situation</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              America's Car-Mart operates 150+ dealerships serving 100,000+ customers with in-house financing. Their
              payments infrastructure was fractured across multiple legacy systems with no unified source of truth.
            </p>
            <p>
              I was brought in to architect the UX strategy for an enterprise-wide payments modernization. I worked with a cross functional team of leaders in the business to identify the Jobs To Be Done (JTBD) by the payments system across the organization.
            </p>
            <p>
              Eight weeks in, leadership pivoted: ship a customer-facing payments platform by June 1, or miss a critical financial audit window. This was a major change since we initially would not be building our own interface, instead relying on an out of the box solution from the payment provider, ACI.
            </p>
            <p className="text-foreground">
              The scope collapsed from "transform everything" to <span className="font-semibold">"launch or else."</span>
            </p>
          </div>
        </div>
      </section>

      {/* What I Did */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 tracking-tight">What I Did</h2>
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl leading-tight tracking-tight">Reframed the problem under pressure.</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When the timeline compressed, I carved out the customer-critical Jobs to Be Done from the broader
                  research and built a focused product strategy that could ship within the time requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl leading-tight tracking-tight">Phoned a Friend</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With the new requirements, I was able to hire a designer I had worked with in the past to act as a force-multiplier. This was necessary since we needed to continue strategic research within the business, and implement our findings in the customer portal.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h3 className="text-xl leading-tight tracking-tight">Enabled a team to move fast without breaking things.</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Before bringing in this senior designer, I stood up the design system, documented the workflow, and synthesized
                  each requirement with business and technical context in Azure Dev Ops. This enabled them to deliver a working demo by the end of their first week.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl leading-tight tracking-tight">Validated with real users, not assumptions.</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Coached the team through usability studies with store managers, customer service associates, and actual
                  customers. We recorded sessions and used the findings to reinforce design decisions to skeptical stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Held the line when it mattered */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-normal leading-tight tracking-tight mb-6">Held the line when it mattered.</h3>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              As we were coming in for a landing to achieve our launch date, a senior leader bypassed our process entirely.
            </p>
            <p>
              A front-end developer had been pulled aside and directed to build a modal—one that would hijack the payment confirmation flow. When a customer tapped "Submit Payment," instead of seeing their confirmation, they'd be intercepted by a full-screen prompt to enroll in autopay. The primary button: "Enroll Now." The escape route: a small, low-contrast link that was easy to miss on mobile.
            </p>
            <p>The intent was clear: goose enrollment numbers. The method was a deceptive pattern.</p>

            <h4 className="text-xl font-medium leading-tight tracking-tight text-foreground pt-4">The Pressure</h4>
            <p>
              When I raised concerns, the response wasn't a conversation—it was a dismissal. Leadership asked when we would deliver what he asked for. Our product director suggested we just build what was requested. The developer had already coded it. The path of least resistance was paved and waiting. I had private support from a senior designer, and a UX designer in another department. But in the room where decisions were made, I was alone.
            </p>

            <h4 className="text-xl font-medium leading-tight tracking-tight text-foreground pt-4">What Was Actually at Risk</h4>
            <p>
              This wasn't just about ethics, the blocking modal created real business risk:
            </p>
          </div>

          {/* Three column risk cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-bold">Compliance exposure.</span>
                <br />
                Intercepting a payment action to push an unrelated enrollment could trigger regulatory scrutiny. The cognitive load to dismiss the modal and complete the original payment was high enough that some customers might believe they'd paid when they hadn't.
              </p>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-bold">Delinquency risk.</span>
                <br />
                Customers confused by the flow might leave thinking their payment was submitted. They'd find out they were delinquent when collections called.
              </p>
            </div>
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-bold">Trust erosion.</span>
                <br />
                America's Car-Mart serves customers with limited credit options. Many have been burned by predatory practices before. A bait-and-switch at the moment of payment would confirm their worst expectations—and tank the adoption we were trying to build.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <h4 className="text-xl font-medium leading-tight tracking-tight text-foreground pt-2">The Line I Held</h4>
            <p>
              I didn't fight the modal in a meeting with words I used design to cast my vision. I designed an alternative solution with inline visibility of autopay status during the one-time payment flow.
            </p>
            <p>
              Customers could see whether they were enrolled, and opt in without leaving their primary task. The same information appeared on the confirmation screen, a second, non-blocking touchpoint. I prototyped both approaches and created side-by-side GIFs: the directed solution (modal hijack, confused flow, small dismiss target) versus my solution (clear status, optional action, expected behavior).
            </p>
            <p>
              I presented the update to the full team as an iteration to our auto payment feature. No drama. No ultimatum. Just a better answer to the same business goal.
            </p>

            <h4 className="text-xl font-medium leading-tight tracking-tight text-foreground pt-2">The Resolution</h4>
            <p>
              The CTO approved the alternative on the spot. What changed wasn't just the UI, it was the relationship. That moment of respectful resistance, backed by a concrete solution, built trust I couldn't have earned by complying. I was pulled into higher-visibility projects and the Product Director started bringing me into strategic conversations earlier.
            </p>
            <p>
              Results spoke for themselves. A 200% increase in autopay enrollment, double the baseline, achieved without deception. Turns out, when you make it easy and honest, people say yes.
            </p>

            <h4 className="text-xl font-medium leading-tight tracking-tight text-foreground pt-2">What This Taught Me</h4>
            <p>
              Senior leadership isn't about avoiding conflict. It's about knowing which conflicts matter and showing up with solutions. The shortcut everyone wanted would have hit a number. The solution I built hit the number and protected the customer relationship that makes long-term numbers possible.
            </p>
            <p>
              That's the difference between executing and leading.
            </p>
          </div>
        </div>
      </section>

      {/* Results & Outcome */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">Results & Outcome</h2>

          <p className="text-xl leading-relaxed text-foreground mb-6">
            Our team launched a zero-to-one payments platform in four months, achieving 200% increase in autopay enrollment while blocking a C-level directive that would have broken the customer experience.
          </p>

          <ul className="space-y-3">
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="font-bold">•</span>
              <span>200% increase in autopay enrollment</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="font-bold">•</span>
              <span>15% growth in active online portal users post-launch</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="font-bold">•</span>
              <span>4-month delivery from kickoff to production (Jan–May 2025)</span>
            </li>
            <li className="text-lg leading-relaxed flex items-start gap-3">
              <span className="font-bold">•</span>
              <span>Expanded engagement: Both myself and the designer I brought in were requested for additional high-visibility projects</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What They Said */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">What They Said</h2>
          <div className="bg-foreground/5 rounded-3xl p-6">
            <blockquote className="text-lg leading-relaxed mb-4">
              "Jared brought exceptional strategic thinking and technical expertise to this complex project. They
              architected an end-to-end experience that balanced user needs with business requirements and
              technical constraints. What set Jared apart was their collaborative approach—making complex UX
              concepts accessible to all stakeholders and maintaining alignment throughout."
            </blockquote>
            <p className="text-sm font-medium">— John Whitman, Product Director</p>
          </div>
        </div>
      </section>

      {/* Let's Connect */}
      <LetsConnect onContactClick={() => setIsContactModalOpen(true)} />

      <ContactModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      <Footer />
    </div>
  )
}
