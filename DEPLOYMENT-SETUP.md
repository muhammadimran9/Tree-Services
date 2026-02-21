# Deployment Configuration

## For Vercel (Recommended)
- Uses `next.config.js` (default)
- Server-side rendering enabled
- Auto-deploys from main branch
- No additional setup needed

## For Netlify
- Uses `next.config.netlify.js` (static export)
- Build command automatically switches config
- Deploys static HTML files
- Auto-deploys from main branch

## Environment Variables
Add these in your deployment platform dashboard:
- `NEXT_PUBLIC_SITE_URL` - Your domain URL
- `NEXT_PUBLIC_CONTACT_EMAIL` - Contact email
- `NEXT_PUBLIC_CONTACT_PHONE` - Phone number

## Auto-Deployment Setup
Both platforms auto-deploy when code is pushed to main branch.

### Vercel:
1. Connect GitHub repository
2. Select main branch
3. Deploy

### Netlify:
1. Connect GitHub repository
2. Select main branch
3. Build settings are auto-configured via netlify.toml
4. Deploy

## Collaborator Changes
All collaborators' commits to main branch will automatically trigger deployments on both platforms.
