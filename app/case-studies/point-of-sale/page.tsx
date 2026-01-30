"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { LetsConnect } from "@/components/lets-connect"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function PointOfSaleCaseStudy() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1>
              JCPenney Next Generation POS
            </h1>
            <p className="text-lg text-muted-foreground">
              Point of Sale Modernization · Senior UX Designer · 2022
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div>
              <p className="text-3xl font-semibold">$6.2M</p>
              <p className="text-sm text-muted-foreground">Hardware savings</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">86</p>
              <p className="text-sm text-muted-foreground">Workflows redesigned</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">31+</p>
              <p className="text-sm text-muted-foreground">Stores launched</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">4 mo</p>
              <p className="text-sm text-muted-foreground">Research to handoff</p>
            </div>
          </div>

          <p className="text-base leading-relaxed mt-6">
            Led UI design and design system creation for a national retailer&#39;s complete POS overhaul, from 20-year-old registers to mobile-first checkout across 650+ stores. Mobile-first checkout now enables floor-based selling, faster credit approvals, and a unified omnichannel experience.
          </p>
        </div>
      </section>

      {/* Situation */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Situation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal text-foreground">Tethered Legacy Hardware</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Outdated hardware keeps associates stuck at fixed registers with no mobile checkout options. This limits flexibility on the sales floor and slows down busy moments when speed matters most.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal text-foreground">Fragmented Commerce</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                In-store and online checkout don&#39;t connect well. Payments run through separate systems, and customer data lives in different databases, creating a fragmented experience across channels.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal text-foreground">High-Friction Credit Flow</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The store credit card application process is slow and cumbersome. Customers often wait for approvals before they can complete a purchase, which leads to long lines and unnecessary friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f8f6f2] rounded-[40px] p-8 border border-border">
            <p className="font-medium text-xl tracking-tight text-foreground mb-4">Senior Product Designer</p>
            <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
              <li>Owned UI strategy and the end-to-end design system for JCPenney&#39;s next-generation checkout platform</li>
              <li>Led in-store contextual research and persona validation in stores</li>
              <li>Co-facilitated JTBD and ORCA workshops with cross-functional partners to define 86 core associate workflows</li>
              <li>Partnered with a UX Architect on research strategy and worked alongside architects and engineering to ship the platform</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Users */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4">Users</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The platform served multiple operational roles across the store. Personas for each role was grounded in research-validated behaviors and emotional needs. I wanted to capture what users did alongside the pressure, trust, and accountability they carried into every transaction.
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Role List */}
            <div className="flex flex-col gap-2 md:w-[308px] shrink-0">
              <div className="border border-border rounded-lg p-4 bg-[#f8f6f2]">
                <p className="text-sm font-medium text-foreground tracking-wide">Cashiers</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground tracking-wide">Supervisors</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground tracking-wide">Back Office Managers</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground tracking-wide">Specialty Associates</p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <p className="text-sm font-medium text-muted-foreground tracking-wide">Store Operations Leadership</p>
              </div>
            </div>

            {/* Detail Card */}
            <div className="flex-1 border border-border rounded-2xl p-6 bg-white">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium text-xl tracking-tight text-foreground">Cashier Priorities</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Executing high-volume transactions under speed and accuracy demands, where system crashes or irreversible actions directly impacted customer wait times and audit risk.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground tracking-wide mb-1">Impact</p>
                  <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
                    <li>15% faster average transaction time</li>
                    <li>Fewer restarts and cancellations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Discovery: Understanding 86 Ways to Do a Job</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground mb-8">
            <p>
              Field research surfaced a pattern where small interaction failures were compounding into significant operational drag. Rewards prompts fired before cashiers finished scanning, breaking their flow. Tender selection was linear and unforgiving, so one wrong tap meant voiding the transaction entirely. Return lookups were brittle enough that most associates defaulted to manual entry.
            </p>
            <p>
              These weren&#39;t outliers. They were the normal state of the system under real conditions, and they had measurable downstream effects. Longer transaction times, increased audit exposure, and degraded customer experience at the register.
            </p>
          </div>

          {/* Method Cards */}
          <div className="bg-[#f8f6f2] rounded-2xl p-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-foreground">Contextual Inquiry</p>
                <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
                  We observed real transactions in-store to capture authentic workflows, friction points, and associate workarounds—revealing where the legacy POS system consistently failed to support day-to-day operations.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-foreground">AI Insight Synthesis</p>
                <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
                  AI-assisted transcript synthesis surfaced recurring behavioral patterns, while early assumption mapping aligned stakeholders on key risks and unknowns.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-foreground">Workshops</p>
                <p className="text-xs text-muted-foreground tracking-wide leading-relaxed">
                  Cross-functional workshops identified 86 core associate jobs across 13 operational categories, creating a shared research foundation that drove product priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">A Scalable, System-Aligned POS Platform</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              JCPenney needed more than redesigned screens. They needed a UI foundation capable of powering mobile checkout, complex retail workflows, and future in-store products.
            </p>
            <p>
              I built a complete, system-aligned design layer from tokens through application components, giving the organization a flexible platform they could own, extend, and scale.
            </p>

            <h3 className="text-foreground pt-4 text-xl font-semibold">System Architecture</h3>
            <p>
              A token-driven structure mapped typography, color, and spacing into responsive primitives and reusable components. Everything was designed to adapt seamlessly between handheld mobile checkout and docked terminals.
            </p>

            <h3 className="text-foreground pt-4 text-xl font-semibold">Impact</h3>
            <p>
              The design system became the foundation of JCPenney&#39;s next-generation POS platform, enabling rapid iteration, clearer engineering handoff, and long-term scalability.
            </p>
            <p>
              Internal UX leadership highlighted its depth, responsiveness, and technical rigor. They called out how seamlessly it integrated brand, system logic, and future product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Key Design Decisions</h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-foreground text-xl font-semibold">Mobile-First, Dock-Aware</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Rather than split the POS into separate mobile and terminal experiences, I designed a single responsive system that adapted seamlessly between handheld floor use and docked checkout—supporting fast transactions on the sales floor and complex operations at the register.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The responsive mobile-to-dock experience was designed specifically to reduce restarts, cancellations, and transaction time, directly supporting our checkout KPIs and minimizing audit-triggering cancellation patterns.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground text-xl font-semibold">Journey Maps at Scale</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                To operationalize insights across 86 workflows, I built a reusable journey mapping system in Figma that standardized current and future state documentation, turning research into clear development priorities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-foreground text-xl font-semibold">UI Aligned to System Objects</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Using the ORCA object model, the UI was structured directly around core business entities like Customer, Transaction, and Tender—creating immediate clarity for engineering and reducing integration friction during handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Business Impact */}
            <div className="bg-[#f8f6f2] rounded-2xl p-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-foreground tracking-wide mb-4">Business Impact</p>
              <ul className="space-y-2 list-disc pl-5 text-sm tracking-wide">
                <li>$6.2M saved through hardware selection study and vendor negotiations</li>
                <li>31+ stores modernized with the new POS system following our design</li>
                <li>Aggressive timeline met across two 16-week engagements</li>
              </ul>
            </div>

            {/* Customer & Associate Experience */}
            <div className="bg-[#f8f6f2] rounded-2xl p-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-foreground tracking-wide mb-4">Customer &amp; Associate Experience</p>
              <ul className="space-y-2 list-disc pl-5 text-sm tracking-wide">
                <li><span className="text-foreground font-normal">Mobile checkout enabled</span> <span className="text-muted-foreground">reducing wait times for customers who could complete purchases on the floor</span></li>
                <li><span className="text-foreground font-normal">Streamlined credit applications</span> <span className="text-muted-foreground">allowing same-transaction approval and purchase</span></li>
                <li><span className="text-foreground font-normal">Unified omnichannel experience</span> <span className="text-muted-foreground">connecting in-store and online systems</span></li>
              </ul>
            </div>

            {/* Operational Impact */}
            <div className="bg-[#f8f6f2] rounded-2xl p-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-foreground tracking-wide mb-4">Operational Impact</p>
              <ul className="space-y-2 list-disc pl-5 text-sm tracking-wide">
                <li><span className="text-foreground font-normal">~15% faster</span> <span className="text-muted-foreground">average transaction time</span></li>
                <li><span className="text-muted-foreground">Major reduction in hardware</span> <span className="text-foreground font-normal">incident rates</span></li>
                <li><span className="text-foreground font-normal">Faster end-of-day close</span> <span className="text-muted-foreground">and reconciliation</span></li>
                <li><span className="text-foreground font-normal">Fewer returns</span> <span className="text-muted-foreground">errors and rework</span></li>
              </ul>
            </div>

            {/* Organizational Enablement */}
            <div className="bg-[#f8f6f2] rounded-2xl p-6 shadow-[0px_1px_0px_0px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-medium text-foreground tracking-wide mb-4">Organizational Enablement</p>
              <ul className="space-y-2 list-disc pl-5 text-sm tracking-wide">
                <li><span className="text-foreground font-normal">Design system established</span> <span className="text-muted-foreground">that JCPenney&#39;s UX team could extend to future products</span></li>
                <li><span className="text-foreground font-normal">Agile practices introduced</span> <span className="text-muted-foreground">through sprint ceremonies and backlog management</span></li>
                <li><span className="text-foreground font-normal">Research foundation created</span> <span className="text-muted-foreground">with documented personas, journey maps, and JTBD that informed subsequent phases</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Reflection</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              This project reinforced the value of research as infrastructure. The 86 jobs-to-be-done became a shared language that guided priorities, tradeoffs, and success metrics across teams.
            </p>
            <p>
              Building the design system solo under tight timelines forced ruthless clarity around what components truly needed to do. Every variant and behavior had to directly support real workflows.
            </p>
            <p>
              Most importantly, I learned how to run cross-functional workshops that respected stakeholder time while producing actionable outcomes. Preparation, clear structure, and follow-through turned complex collaboration into real momentum.
            </p>
          </div>
        </div>
      </section>

      {/* What They Said */}
      <section className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 tracking-tight">What They Said</h2>
          <div className="relative bg-[#e3e1d7] rounded-[32px] p-8">
            {/* Opening Quote Mark */}
            <svg
              className="absolute -left-8 -top-4 w-16 h-16 text-muted-foreground/30"
              viewBox="0 0 67 61"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M40.4603 61C39.9242 60.4649 39.1199 59.9298 38.0476 59.3947C38.8519 58.8596 39.388 58.4583 39.6561 58.1908C35.903 58.1908 33.8924 57.7895 33.6243 56.9868C33.3563 55.9167 32.552 54.9803 31.2116 54.1776V54.9802C30.1393 55.2478 29.7372 55.2478 30.0053 54.9802C30.2734 54.4452 30.1393 53.9101 29.6032 53.375C30.6755 52.5724 31.2116 51.636 31.2116 50.5658C31.2116 50.0307 31.0776 49.4956 30.8095 48.9605C30.8095 48.1579 30.8095 47.489 30.8095 46.9539C30.8095 45.0811 31.4797 43.4759 32.8201 42.1381V42.9408C34.1605 43.2083 34.6967 43.2083 34.4286 42.9408C34.4286 42.4057 34.5626 41.8706 34.8307 41.3355L32.8201 40.5329C34.4286 39.4627 35.769 37.3224 36.8413 34.1118C38.1817 30.9013 39.388 28.6272 40.4603 27.2895C40.4603 27.8246 40.7284 28.3596 41.2645 28.8947C41.2645 26.7544 41.8007 25.1491 42.873 24.0789C42.873 24.3465 42.873 24.614 42.873 24.8816C43.1411 24.8816 43.4092 25.1491 43.6772 25.6842V21.671H46.8942V20.4671C46.09 19.932 45.5538 19.5307 45.2857 19.2631C45.0176 18.9956 45.2857 18.5943 46.09 18.0592C46.6261 14.046 48.5026 11.6381 51.7196 10.8355V7.625C53.8642 7.0899 55.0705 6.28726 55.3386 5.21709C55.8748 4.14692 56.679 2.94298 57.7513 1.60527L60.164 4.41446C62.0406 2.27411 64.0511 0.802621 66.1958 0L67 4.41446C65.6596 5.2171 64.8554 6.28728 64.5873 7.625L62.5767 6.82235C62.3086 8.42763 62.1746 9.09649 62.1746 8.82893C62.1746 8.29385 61.5044 8.69517 60.164 10.0329C61.5044 10.0329 62.3086 10.3004 62.5767 10.8355C61.2363 11.6381 60.4321 12.7083 60.164 14.046C59.8959 15.3838 59.6279 16.7215 59.3598 18.0592C58.5556 17.7917 58.0194 17.6579 57.7513 17.6579C57.4832 17.3903 56.9471 17.5241 56.1429 18.0592H58.5556C58.2875 20.1995 57.6173 22.3399 56.545 24.4803C55.7407 26.3531 55.0705 28.2259 54.5344 30.0987H53.7302V28.0921C52.3898 28.0921 51.4515 28.3596 50.9153 28.8947L54.5344 31.3026C52.9259 34.7807 51.7196 38.3925 50.9153 42.1381C50.3792 45.6162 49.4409 49.0943 48.1005 52.5724C47.0282 52.5724 46.4921 52.4386 46.4921 52.171C46.7601 51.9035 46.6261 52.3048 46.09 53.375C46.6261 54.1776 46.8942 54.9803 46.8942 55.7829C46.8942 56.5855 46.8942 57.3881 46.8942 58.1908C45.8219 58.4583 44.7496 58.9934 43.6772 59.796C42.6049 60.3311 41.5326 60.7324 40.4603 61ZM10.8571 61C9.24868 59.6623 7.37213 58.8596 5.22751 58.5921C3.08289 58.3246 1.34039 57.3882 0 55.7829C1.34039 55.2478 2.14462 54.7127 2.4127 54.1776C2.68078 53.6425 2.94885 52.8399 3.21693 51.7697C1.87654 51.5022 1.07231 51.3684 0.804233 51.3684C0.804233 51.3684 0.536155 50.8333 0 49.7632C1.07231 48.4254 1.87654 47.0877 2.4127 45.75C2.94885 44.4123 3.75309 43.2083 4.8254 42.1381C4.28924 41.6031 3.75309 41.068 3.21693 40.5329L6.03175 41.3355V40.5329C4.95944 39.9978 4.42328 39.7303 4.42328 39.7303C4.69136 39.4627 4.55732 38.7939 4.02116 37.7237C5.09347 36.6535 5.76367 35.5833 6.03175 34.5131C6.5679 33.443 7.64021 32.6403 9.24868 32.1053V31.3026L10.8571 32.1053V31.3026C11.9295 30.2325 12.7337 28.0921 13.2698 24.8816C12.4656 24.614 12.0635 24.614 12.0635 24.8816C12.3316 25.1491 12.1975 24.8816 11.6614 24.0789C14.0741 21.9386 15.5485 19.7982 16.0847 17.6579C16.6208 15.5175 17.6931 13.2434 19.3016 10.8355C20.642 8.69517 22.2504 6.95614 24.127 5.61842C26.0035 4.2807 27.8801 2.67544 29.7566 0.802621C31.3651 1.07016 32.5714 1.47148 33.3757 2.00658C34.448 2.54166 35.1182 3.87938 35.3862 6.01973C34.3139 6.28727 33.3757 7.75876 32.5714 10.4342C32.0353 13.1096 31.3651 15.1162 30.5608 16.4539L28.9524 15.6513C28.6843 15.9188 28.5503 16.4539 28.5503 17.2566C28.5503 17.5241 28.5503 17.9254 28.5503 18.4605C28.8183 18.7281 28.9524 19.1294 28.9524 19.6645C28.9524 21.2697 28.2822 22.6075 26.9418 23.6776C25.6014 24.7478 24.5291 25.9517 23.7249 27.2895C23.9929 28.3596 24.261 29.1623 24.5291 29.6974C25.0653 30.2324 25.3333 30.7675 25.3333 31.3026C25.3333 32.9079 24.7972 33.7105 23.7249 33.7105C22.9206 33.7105 22.1164 33.9781 21.3122 34.5131C21.0441 35.5833 21.0441 36.2522 21.3122 36.5197C21.8483 36.5197 22.1164 36.921 22.1164 37.7237C22.1164 38.7939 21.8483 39.9978 21.3122 41.3355C20.5079 44.8136 19.7037 48.9605 18.8995 53.7763C18.0952 58.3245 15.4145 60.7324 10.8571 61Z"/>
            </svg>

            {/* Closing Quote Mark */}
            <svg
              className="absolute -right-8 -bottom-4 w-16 h-16 text-muted-foreground/30"
              viewBox="0 0 71 57"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M32.6627 57C32.9598 54.9055 33.5542 53.1102 34.4458 51.6142C35.3374 50.1181 36.2289 48.622 37.1205 47.126L38.9036 48.0236C39.2008 43.2362 40.9839 39.0472 44.253 35.4567C43.9558 35.1575 43.6586 35.0079 43.3614 35.0079C43.0643 35.0079 42.7671 34.8583 42.4699 34.5591C44.5502 33.6614 45.5904 32.315 45.5904 30.5197C45.5904 28.4252 46.3333 26.6299 47.8193 25.1339C47.8193 26.3307 48.1165 27.2283 48.7108 27.8268C48.7108 27.2283 48.4137 25.8819 47.8193 23.7874C47.5221 21.6929 47.5221 20.3465 47.8193 19.748C48.4137 18.5512 49.008 18.1024 49.6024 18.4016C50.494 18.4016 51.0884 17.5039 51.3855 15.7087C50.1968 15.4094 49.6024 15.2598 49.6024 15.2598C49.8996 14.9606 49.8996 14.2126 49.6024 13.0157C50.1968 12.4173 50.494 11.6693 50.494 10.7716C51.9799 10.7716 52.8715 10.7716 53.1687 10.7716C53.7631 10.7716 54.3574 10.1732 54.9518 8.97637H52.2771L53.1687 4.03937H54.506C55.992 4.03937 57.1807 3.74015 58.0723 3.14172C58.9639 2.24409 60.004 1.19685 61.1928 0C63.2731 1.19685 65.3534 1.94488 67.4337 2.24409C69.5141 2.5433 70.7028 4.03936 71 6.73228C68.9197 7.33071 68.0281 9.4252 68.3253 13.0157C68.6225 16.3071 68.6225 19 68.3253 21.0945C67.4337 20.7953 66.5422 20.7953 65.6506 21.0945C65.9478 21.6929 66.0964 22.4409 66.0964 23.3386C66.0964 24.8346 65.3534 26.3307 63.8675 27.8268H62.5301C61.9357 28.4252 61.49 29.3228 61.1928 30.5197C61.1928 31.7165 61.1928 32.7638 61.1928 33.6614H58.5181C58.5181 36.0551 57.0321 39.0472 54.0602 42.6378C51.0884 46.2283 48.4137 48.3228 46.0361 48.9213V51.6142C44.8474 52.2126 43.6586 52.9606 42.4699 53.8583C41.2811 54.7559 40.0924 55.8031 38.9036 57H32.6627ZM7.13253 52.5118C5.94377 53.4095 4.75502 54.1575 3.56626 54.7559C2.37751 55.0551 1.18875 55.5039 0 56.1024V52.5118C0.891566 51.9134 1.63454 51.1654 2.22891 50.2677C2.82329 49.3701 3.26908 48.622 3.56626 48.0236L6.24096 49.8189C5.94377 48.3228 5.64659 47.4252 5.3494 47.126C5.05221 46.5276 5.05221 45.6299 5.3494 44.4331C7.72691 42.0394 9.95582 37.8504 12.0361 31.8661C14.1165 25.8819 15.1566 21.3937 15.1566 18.4016H17.8313C17.8313 16.3071 18.1285 13.3149 18.7229 9.42518C19.6145 5.23621 20.8032 2.5433 22.2892 1.34647C22.8835 0.748031 23.9237 0.448813 25.4096 0.448813C26.8956 0.149604 27.9357 0 28.5301 0C30.9076 1.49606 32.9879 2.3937 34.7711 2.69291C36.8514 2.99211 38.0402 4.78739 38.3374 8.07874H37.8916L36.5542 7.62993C34.7711 10.3228 34.1767 12.7165 34.7711 14.811C35.6626 16.9055 35.6626 19.2992 34.7711 21.9921C33.2851 26.4803 30.759 30.5197 27.1928 34.1102C23.9237 37.4016 21.1004 41.1417 18.7229 45.3307L16.0482 42.6378C15.751 45.3307 15.008 47.5748 13.8193 49.3701C12.6305 51.1654 10.4016 52.2126 7.13253 52.5118Z"/>
            </svg>

            <blockquote className="text-lg leading-relaxed text-foreground mb-4">
              Kitestring was a strategic partner in shaping JCPenney&#39;s next-generation store technology, modernizing both checkout systems and the customer and associate experience. Their strong UI/UX capabilities drove major improvements in core checkout workflows and specialty areas like Jewelry and Salon, helping bring our transformation roadmap to life.
            </blockquote>
            <p className="text-sm font-medium text-foreground">— Irfan Butt, Director, JCPenney</p>
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
