"use client"

import { Button } from "@/components/ui/button"
import { LinkedInButton } from "@/components/linkedin-button"

interface LetsConnectProps {
  onContactClick: () => void
}

export function LetsConnect({ onContactClick }: LetsConnectProps) {
  return (
    <section className="py-20 px-6 border-t border-border-50">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl md:text-4xl font-display mb-6 tracking-tight animate-fade-in">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground text-balance mb-8 animate-fade-in-delay-1">
          I'm looking for my next role building teams and shaping product strategy.
          If you need a design leader who ships measurable outcomes, let's talk.
        </p>
        <div className="flex items-center gap-4 mb-8 animate-fade-in-delay-2 justify-start">
          <Button size="lg" onClick={onContactClick} className="cursor-pointer group">
            <span className="inline-flex items-center transition-all duration-300 ease-out">
              <span>Say Hello</span>
              <span className="inline-block w-0 overflow-hidden opacity-0 translate-x-[-8px] transition-all duration-300 ease-out group-hover:w-[1.25rem] group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2">
                👋
              </span>
            </span>
          </Button>
          <LinkedInButton />
        </div>
        <p className="text-sm text-muted-foreground animate-fade-in-delay-3">
          Available for full-time roles
        </p>
      </div>
    </section>
  )
}
