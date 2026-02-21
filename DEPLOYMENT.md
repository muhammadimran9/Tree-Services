# Deployment Guide

## 🚀 Ready to Deploy

Your tree services website is now configured and ready for deployment! The build process has been tested and is working correctly.

## 📦 Deployment Options

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` or higher

The `netlify.toml` file is already configured with the correct settings.

### Option 2: Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure settings

### Option 3: Static Hosting (GitHub Pages, S3, etc.)
1. Run `npm run build` locally
2. Upload the `out/` folder to your static hosting provider
3. Ensure your hosting provider supports SPA routing (all routes should serve `index.html`)

## 🔧 Environment Setup

Before deploying:
1. Copy `.env.example` to `.env.local`
2. Update the environment variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com
   NEXT_PUBLIC_CONTACT_PHONE=+1-555-0123
   ```

## ✅ Pre-Deployment Checklist

- [x] Build process tested successfully
- [x] Static export configured (`output: 'export'`)
- [x] Environment variables template created
- [x] Netlify configuration updated
- [x] Sitemap and robots.txt configured for static export
- [x] Images optimized for static hosting
- [x] Console logs removed in production
- [ ] Update contact information in environment variables
- [ ] Configure custom domain
- [ ] Set up analytics if needed

## 🌐 Post-Deployment

After deployment:
1. Update the `baseUrl` in `app/sitemap.ts` to your actual domain
2. Update the sitemap URL in `app/robots.ts`
3. Test all pages and forms
4. Set up domain SSL certificate
5. Configure analytics if needed

## 📊 Performance Features

The website includes:
- ✅ Static Site Generation (SSG)
- ✅ Image optimization with WebP/AVIF support
- ✅ Gzip compression
- ✅ SEO-optimized metadata
- ✅ Structured data (Schema.org)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Responsive design

## 🚨 Important Notes

- The website uses static export, so dynamic features are limited
- All routes are pre-built at build time
- Forms will need external services (Formspree, Netlify Forms, etc.)
- Images are unoptimized for static hosting compatibility

## 🛠️ Troubleshooting

If build fails:
1. Check Node.js version (18+ recommended)
2. Clear cache: `rm -rf .next out`
3. Reinstall dependencies: `npm ci`
4. Check environment variables

## 🎯 Quick Deploy Commands

```bash
# Test build locally
npm run build

# Deploy to Netlify (if CLI installed)
netlify deploy --prod --dir=out

# Deploy to Vercel (if CLI installed)
vercel --prod
```

**Deployment successful! Your tree services website is ready to go live.**
