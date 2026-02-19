# Tree Services Website

A professional tree services website built with Next.js 16, TypeScript, and TailwindCSS.

## 🚀 Features

- **Next.js 16.1.6** with App Router
- **TypeScript** for type safety
- **TailwindCSS v4** with custom color palette
- **Responsive Design** (mobile-first)
- **SEO Optimized** with proper meta tags
- **Performance Focused** with image optimization
- **Component Architecture** with reusable UI components

## 🎨 Design System

### Color Palette
- **Primary Green**: #2E7D32
- **Light Green**: #66BB6A  
- **Accent Orange**: #FF7043
- **Dark Gray**: #1F1F1F
- **White**: #ffffff

### Typography
- **Font**: Inter (Google Fonts)
- **Display**: Inter with font-display: swap

### Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 📁 Project Structure

```
my-next-app/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx           # Homepage
│   ├── services/          # Services page
│   └── quote/             # Quote request page
├── components/            # Reusable UI components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── ServicesSection.tsx # Services showcase
│   ├── TestimonialsSection.tsx # Customer testimonials
│   └── CTASection.tsx     # Call-to-action section
├── data/                  # Static JSON data
│   ├── services.json      # Services data
│   └── faqs.json          # FAQ data
├── public/                # Static assets
└── styles/                # Custom styles (if needed)
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

### Homepage (`/`)
- Hero section with CTA
- Services overview
- Customer testimonials
- Contact form CTA

### Services (`/services`)
- Detailed service listings
- Features and benefits
- Professional descriptions

### Quote Request (`/quote`)
- Contact form with validation
- Service selection
- Emergency contact options

## 🎯 SEO Features

- **Meta tags** for all pages
- **Open Graph** tags for social sharing
- **Twitter Card** optimization
- **Canonical URLs**
- **Structured data** ready
- **Mobile-friendly** responsive design

## ⚡ Performance Optimizations

- **Image optimization** with next/image
- **Font preloading** with display:swap
- **CSS optimization** with TailwindCSS v4
- **Static generation** for better performance
- **Component lazy loading** ready

## 🚀 Deployment

This project is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Docker** (standalone output)

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Start
1. Install dependencies: `npm install`
2. Build: `npm run build`
3. Deploy to your preferred platform

## 📝 Customization

### Adding New Pages
1. Create new folder in `/app`
2. Add `page.tsx` with proper metadata
3. Import Header and Footer components

### Updating Colors
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary-green: #2E7D32;
  --light-green: #66BB6A;
  --accent-orange: #FF7043;
  --dark-gray: #1F1F1F;
}
```

### Adding Services
Update `data/services.json` with new service objects.

## 📞 Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/quote/page.tsx`
- `components/Header.tsx`

## 📄 License

This project is licensed under the MIT License.
