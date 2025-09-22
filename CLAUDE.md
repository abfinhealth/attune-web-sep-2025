# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite development server on port 8080
- **Build for production**: `npm run build` - Creates optimized production build
- **Build for development**: `npm run build:dev` - Creates development build
- **Lint code**: `npm run lint` - Runs ESLint to check code quality
- **Preview production build**: `npm run preview` - Serves production build locally

## Project Architecture

This is a React + TypeScript application built with Vite, featuring a comprehensive dashboard system for credit union analytics and strategic planning.

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite with SWC plugin for fast compilation
- **Styling**: Tailwind CSS with custom Attune brand colors
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack React Query for server state
- **Routing**: React Router DOM with extensive route structure
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization

### Application Structure

The application follows a dual-architecture pattern:

1. **Marketing Website** - Public pages (/, /about, /solutions, etc.)
2. **Dashboard Application** - Protected functionality (/dashboard/*)

### Key Directories

- `src/pages/` - All route components, split between marketing and dashboard pages
- `src/components/` - Organized by feature domain:
  - `ui/` - Reusable UI components (shadcn/ui based)
  - `layout/` - Navigation, headers, sidebars
  - `home/`, `about/`, `contact/` - Marketing page components
  - `analytics/`, `reporting/`, `strategic/` - Dashboard feature components
- `src/lib/` - Utilities (currently just `utils.ts` for className merging)

### Routing Structure

The app uses React Router with two main sections:
- **Marketing routes**: /, /about, /solutions, /approach, /insights, /credit-unions, /contact
- **Dashboard routes**: /dashboard/* with extensive sub-routes for different analytics views

### Custom Theme

The project uses a custom Tailwind theme with:
- Attune brand colors (teal, orange, yellow variants)
- CSS variables for dynamic theming
- Custom animations and gradients
- Sidebar-specific color tokens

### Component Patterns

- Uses shadcn/ui component library with Radix primitives
- Consistent use of `cn()` utility for className merging
- React Query for data fetching (QueryClient configured in App.tsx)
- Form handling with React Hook Form + Zod validation

### Development Notes

- The project is configured for Lovable.dev integration
- Uses absolute imports with `@/` alias for src directory
- No test configuration currently present
- ESLint configured for React + TypeScript
- Vite development server runs on port 8080 with host "::" for network access