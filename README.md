# Britt Tech Group LLC Website

A professional, modern website for Britt Tech Group LLC, providing IT and technology services for small and mid-sized businesses.

## Features

- **Homepage**: Company introduction, services overview, and call-to-action buttons
- **About Us**: Company history, mission, team profiles, and client testimonials
- **Services**: Detailed service pages for:
  - Custom Computer Programming Services (NAICS 541511)
  - Other Computer Related Services (NAICS 541519)
  - Computer Facilities Management Services (NAICS 541513)
  - Technology Consulting
- **Resources**: Blog articles, downloadable resources, and FAQ section
- **Contact Us**: Inquiry form, company contact information, and scheduling options
- **Client Portal**: Secure client login for tracking projects and support tickets
- **Privacy Policy**: Comprehensive data handling practices and privacy information

## Technology Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment Ready**: Optimized for production deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page with form
│   ├── portal/            # Client portal with authentication
│   ├── privacy/           # Privacy policy page
│   ├── resources/         # Resources page (blog, downloads, FAQ)
│   ├── services/          # Services pages
│   │   ├── custom-programming/
│   │   ├── computer-services/
│   │   ├── facilities-management/
│   │   └── consulting/
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation component
│   └── Footer.tsx        # Footer component
├── public/                # Static assets (images, etc.)
└── package.json          # Dependencies and scripts
```

## SEO Features

- Meta tags and Open Graph tags for social sharing
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Responsive design for mobile-first indexing

## Customization

### Updating Company Information

1. **Contact Information**: Update in `app/contact/page.tsx`
2. **Company Details**: Update in `app/about/page.tsx`
3. **Services**: Modify service descriptions in `app/services/` pages
4. **Branding**: Update colors in `tailwind.config.js`

### Adding Content

- **Blog Posts**: Add to `app/resources/page.tsx` or create a blog system
- **Resources**: Add downloadable resources in `app/resources/page.tsx`
- **Team Members**: Update team section in `app/about/page.tsx`

## Deployment

This website is ready to deploy on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Environment Variables

For production, you may want to set:
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- Contact form backend API endpoint (if implementing backend)

## Security Considerations

- Client portal authentication should be connected to a secure backend
- Contact forms should be connected to a backend API with rate limiting
- Implement CSRF protection for forms
- Use HTTPS in production
- Regularly update dependencies

## Budget Considerations

This website is built to fit within a $20,000 budget. For production deployment, consider:
- Hosting costs (Vercel/Netlify free tier available)
- Domain registration
- SSL certificate (usually included with hosting)
- Email service for contact forms
- Backend API for forms and client portal (if needed)

## Support

For questions or support, contact Britt Tech Group LLC.

## License

Copyright © 2026 Britt Tech Group LLC. All rights reserved.
