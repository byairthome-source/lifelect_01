# Lifelect — Window Cleaning Robot B2B Website

Professional-grade window cleaning robot brand website with admin backend. Built with Next.js 14 App Router, Tailwind CSS, Prisma + SQLite, and NextAuth.js.

## Quick Start

```bash
npm install
cp .env.example .env.local    # edit secrets
npx prisma db push
npx prisma db seed
npm run dev                    # → http://localhost:3000
```

### Default Admin
- URL: `/admin/login`
- Email: `admin@lifelect.com`
- Password: `admin123`

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14.2 (App Router) |
| Styling | Tailwind CSS 3.4 |
| Database | SQLite + Prisma 5 |
| Auth | NextAuth.js v4 (Credentials + JWT) |
| Font | Inter (`next/font/google`) |

## Project Structure

```
src/
├── app/                # App Router pages + API routes
│   ├── (admin)/admin/  # Admin dashboard (auth-protected)
│   ├── (auth)/admin/   # Admin login
│   ├── api/            # Public + Admin API routes
│   ├── products/       # Product listing + detail
│   ├── blog/           # Blog listing + article
│   ├── about/          # Brand story
│   ├── contact/        # Contact form
│   └── legal pages
├── components/         # Reusable UI components
│   └── admin/          # Admin panel components
├── data/               # Static data (products, blog, partners, offices)
├── lib/                # Utilities (prisma, auth, products DAL, validation)
└── middleware.ts        # Auth guard for /admin/*
```

## Key Features

- 10 real products (M/D/BO Series) extracted from manufacturer PDF
- JSON-LD structured data (Product, Organization, Article, WebSite)
- Open Graph + Twitter Card meta tags on all pages
- Next.js Image optimization (WebP, lazy loading)
- Scroll-triggered fade-up animations, scroll progress bar
- Header scroll hide/show, Back-to-top button, Breadcrumb
- Full admin backend: product CRUD, inquiry CRM, image upload, dashboard
- Keyboard accessible, screen-reader friendly, reduced-motion support

## Commands

```bash
npm run dev        # Dev server
npm run build      # Production build
npm start          # Production server
npx prisma studio  # DB browser
npx prisma db seed # Re-seed database
```
