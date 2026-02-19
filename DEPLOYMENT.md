# Deployment Guide

## Quick Start
1. Run `deploy.bat` (Windows) to build the site
2. Upload the `out` folder to your hosting provider

## Prerequisites
- Node.js 18+ installed
- Update contact info in `.env.local`

## Deployment Options

### Option 1: Netlify (Recommended)
1. Push code to GitHub
2. Connect repository at [netlify.com](https://netlify.com)
3. Build settings are auto-configured via `netlify.toml`
4. Add environment variables from `.env.example`

### Option 2: Vercel
1. Push code to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Auto-detects Next.js settings
4. Add environment variables from `.env.example`

### Option 3: Manual Upload
1. Run `npm run build`
2. Upload contents of `out/` folder to web host

## Environment Variables
Update these in your hosting dashboard:
- `NEXT_PUBLIC_SITE_URL`: Your domain
- `NEXT_PUBLIC_CONTACT_EMAIL`: Contact email
- `NEXT_PUBLIC_CONTACT_PHONE`: Phone number

## Pre-Deployment Checklist
- [x] Static export configured
- [x] Build scripts ready
- [x] Environment variables template
- [ ] Update contact information
- [ ] Test build locally
- [ ] Configure custom domain
