import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  subtitle: string
  description: string
  metrics?: { value: string; label: string }[]
  imageSrc?: string
  caseStudyLink?: string
  comingSoon?: boolean
}

export function CaseStudyCard({
  title,
  subtitle,
  description,
  metrics,
  imageSrc,
  caseStudyLink,
  comingSoon = false,
}: CaseStudyCardProps) {
  const isClickable = !comingSoon && caseStudyLink

  const cardContent = (
    <>
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#E8E4DB]">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${title} project preview`}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-4 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-heading font-semibold tracking-tight mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground mb-3 pr-0">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-4 gap-2 mb-4">
            {metrics.map((metric, index) => (
              <div key={index} className="text-left">
                <p className="text-base font-semibold text-foreground">
                  {metric.value}
                </p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        {isClickable && (
          <div>
            <Button variant="outline" className="rounded-lg pointer-events-none">
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    </>
  )

  if (isClickable) {
    return (
      <Link href={caseStudyLink} className="flex flex-col group cursor-pointer">
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="flex flex-col">
      {cardContent}
    </div>
  )
}
