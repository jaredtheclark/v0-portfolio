# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for a Principal UX Product Designer, built with Next.js 14 and deployed on Vercel. The project is automatically synced with v0.app deployments and uses modern React patterns with TypeScript.

**Important**: This repository is automatically synced from v0.app. Any changes made to deployed apps on v0.app will be automatically pushed to this repository.

## Development Commands

```bash
# Install dependencies (uses Yarn)
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui (New York style) + Radix UI primitives
- **Fonts**: Geist Sans and Geist Mono
- **Package Manager**: Yarn 1.22.22
- **Analytics**: Vercel Analytics

## Architecture

### File Structure

```
app/
├── layout.tsx              # Root layout with metadata and analytics
├── page.tsx                # Homepage with hero, metrics, case studies
├── globals.css             # Tailwind imports and design tokens
└── case-studies/
    ├── page.tsx            # Case studies index
    ├── car-mart-payments/  # Individual case study
    └── jcpenney-pos/       # Individual case study

components/
├── navigation.tsx          # Global navigation with client-side routing
└── ui/                     # shadcn/ui components (Card, Button, Badge)

lib/
└── utils.ts                # Utility functions (cn helper)
```

### Path Aliases

The project uses TypeScript path aliases configured in `tsconfig.json`:

- `@/*` → Root directory
- `@/components` → Components directory
- `@/lib` → Library/utilities
- `@/components/ui` → UI component library
- `@/hooks` → React hooks (when added)

### Styling System

Uses Tailwind CSS v4 with:
- **CSS Variables**: All design tokens defined in `app/globals.css` using OKLCH color space
- **Theme Support**: Light and dark mode variables (dark mode via `.dark` class)
- **Custom Variants**: `@custom-variant dark` for dark mode scoping
- **Animation**: `tw-animate-css` plugin for enhanced animations
- **Class Merging**: `cn()` utility (tailwind-merge + clsx) for conditional classes

### Component Patterns

1. **Client Components**: Use `"use client"` directive for components with hooks (e.g., Navigation uses `usePathname`)
2. **Server Components**: Default for all other components (pages, layouts)
3. **UI Components**: Extend shadcn/ui components from `components/ui/` - these are built on Radix UI primitives
4. **Styling**: Use Tailwind utility classes with the `cn()` helper for conditional styling

### Design Token Structure

All colors use OKLCH format for better perceptual uniformity:
- `--primary`: Green (#15803d) - main brand color
- `--secondary`/`--accent`: Lime green (#84cc16) - accent color
- `--muted`: Very light green tint - background accents
- Design tokens include light and dark mode variants

## Build Configuration

The `next.config.mjs` has:
- **ESLint**: Ignored during builds (`ignoreDuringBuilds: true`)
- **TypeScript**: Build errors ignored (`ignoreBuildErrors: true`)
- **Images**: Unoptimized for static export compatibility

This configuration suggests the project prioritizes rapid iteration (common for v0.app projects).

## Adding New UI Components

This project uses shadcn/ui. To add new components:

```bash
# Example: Add a new component
npx shadcn@latest add [component-name]
```

Configuration is in `components.json`:
- Style: `new-york`
- RSC: Enabled
- Icon library: `lucide-react`

## Key Files to Understand

- `app/layout.tsx:9-13` - Metadata configuration for SEO
- `app/globals.css:6-41` - Design system color tokens and theme variables
- `lib/utils.ts:4-6` - The `cn()` utility for merging Tailwind classes
- `components/navigation.tsx:7-43` - Client-side navigation with active state

## Deployment

The project is deployed on Vercel and linked to v0.app:
- Changes from v0.app are automatically pushed to this repo
- Vercel deploys from this repository
- Vercel Analytics is integrated in the root layout
