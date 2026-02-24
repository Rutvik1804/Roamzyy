# Roamzy - Premium Travel Website

**Tagline:** Journeys made easy

A luxury-modern travel brand website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Brand Colors

- **Gradient:** #008acc → #2d3d7c
- **Primary Blue:** #3564af
- **Lemon Yellow (CTA only):** #ffff00
- **White:** #ffffff
- **Black:** #000000

⚠️ Yellow is used ONLY for:
- CTA buttons
- Price highlights
- Important icons
- Badge highlights

## 🌐 Website Structure

### Main Pages

#### 1. Home Page (`/`)
- Hero section with video background
- Destination categories (International, India, Honeymoon)
- Theme-based travel section
- Why choose us
- Gallery section
- Video testimonials
- Contact form
- Enquiry popup (appears after 20 seconds)
- Floating WhatsApp button

#### 2. International Listing Page (`/international`)
- Video hero background
- Horizontal scrolling image strip
- 10 destination cards:
  - Dubai
  - Bali
  - Thailand
  - Vietnam
  - Maldives
  - Singapore
  - Europe
  - Malaysia
  - Kazakhstan
  - Bhutan

#### 3. Individual Country Pages (`/international/{country}`)
Example: `/international/dubai`
- Video hero background
- 2-column layout:
  - **Left:** Sticky pricing card with enquiry form
  - **Right:** Day-wise itinerary, things to do, gallery, FAQs
- All 10 countries use the same template

#### 4. India Listing Page (`/india`)
- Video hero background
- 5 destination cards:
  - Ladakh
  - Kashmir
  - Kerala
  - Rajasthan
  - Andaman
- Features section
- CTA section

#### 5. Individual India Pages (`/india/{destination}`)
- Same layout as international country pages
- Customized for Indian destinations

#### 6. Honeymoon Page (`/honeymoon`)
- Romantic video hero
- Special features with icons
- 6 honeymoon destinations:
  - Maldives
  - Bali
  - Switzerland
  - Kashmir
  - Andaman
  - Thailand
- Couple testimonials
- Romantic CTA section

#### 7. Themes Listing Page (`/themes`)
- Dynamic image hero with 8 themes:
  - Adventure
  - Relaxing
  - High Energy
  - Stress Relief
  - Luxury
  - Romantic
  - Cultural
  - Wildlife
- Each theme has unique gradient and icon
- Benefits of theme-based travel

#### 8. Individual Theme Pages (`/themes/{theme}`)
- Uses Dubai page template
- Customized for each theme

#### 9. Visa Page (`/visa`)
- Airport/traveler video hero
- Visa assistance features
- Countries supported (image grid)
- 4-step process timeline
- Documents required checklist
- FAQs

#### 10. About Us Page (`/about`)
- Company story video hero
- Vision & Mission cards
- Stats counter (50K+ travelers, 100+ destinations, etc.)
- Why choose Roamzy (6 features)
- Team section (4 members)
- CTA section

#### 11. Contact Page (`/contact`)
- Video hero background
- Contact form with fields:
  - Name
  - Email
  - Phone
  - Destination
  - Travel Date
  - Message
- Contact information cards (phone, email, address, hours)
- Google Maps embed
- CTA section

## 🎭 Key Features

### Design Features
- Fully responsive mobile-first design
- Video backgrounds on all hero sections
- Parallax scrolling effects
- Smooth animations with Framer Motion
- Glassmorphism effects
- Rounded corners (20px+)
- Image zoom on hover
- Card lift effects
- Smooth transitions (0.4s ease)

### Conversion Elements
- ✅ Sticky CTA buttons
- ✅ Floating WhatsApp icon
- ✅ Enquiry popup (appears after 20 seconds)
- ✅ Sticky pricing cards on destination pages
- ✅ Quick enquiry buttons
- ✅ Call to action sections

### SEO Optimized
- Proper H1, H2, H3 structure
- Semantic HTML
- Meta-ready structure
- Fast loading with lazy loading
- Optimized images

### Animations
- Scroll reveal animations
- Parallax sections
- Hover zoom effects
- Card lift animations
- Smooth dropdowns
- Image fade transitions
- Infinite horizontal sliders
- Micro-interactions

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **UI Components:** Radix UI + shadcn/ui
- **Build Tool:** Vite
- **Icons:** Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn)
│   ├── VideoHero.tsx    # Reusable video hero component
│   ├── DestinationCard.tsx
│   ├── StickyPricingCard.tsx
│   ├── EnquiryPopup.tsx
│   ├── FloatingButtons.tsx
│   ├── Header.tsx       # Main navigation
│   ├── Footer.tsx
│   └── ...
├── pages/
│   ├── Index.tsx        # Home page
│   ├── InternationalListing.tsx
│   ├── IndiaListing.tsx
│   ├── DubaiPage.tsx    # Template for destination pages
│   ├── HoneymoonPage.tsx
│   ├── ThemesPage.tsx
│   ├── VisaPage.tsx
│   ├── AboutUsPage.tsx
│   ├── ContactPage.tsx
│   └── NotFound.tsx
└── App.tsx              # Main routing
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## 🎨 Customization

### Updating Brand Colors
Edit `src/index.css` to update CSS variables:
- `--primary`: Main brand color
- `--accent`: CTA button color (yellow)
- `--gradient-start`: Gradient start color
- `--gradient-end`: Gradient end color

### Adding New Destinations
1. Update the destination arrays in respective listing pages
2. Create routing in `App.tsx` (or reuse DubaiPage template)
3. Customize content in the page component

### Modifying Video URLs
Replace placeholder video URLs with your own:
- Use services like Pexels, Pixabay for free videos
- Or upload to your CDN/hosting

### Updating Images
Replace Unsplash URLs with your own images:
- Recommended: Use a CDN for better performance
- Image optimization: WebP format, lazy loading

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading images
- Code splitting with React Router
- Optimized animations
- Efficient re-renders with React Query
- Fast build with Vite

## 🔍 SEO Checklist

- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Meta tags ready structure
- ⏳ Add sitemap.xml
- ⏳ Add robots.txt (already created in public/)
- ⏳ Add structured data (FAQ schema)

## 📝 TODO

- [ ] Add booking integration
- [ ] Connect contact forms to backend
- [ ] Add payment gateway
- [ ] Implement user authentication
- [ ] Add admin panel for managing packages
- [ ] Add blog section
- [ ] Implement reviews system
- [ ] Add multilingual support

## 🤝 Contributing

This is a proprietary project for Roamzy Travels.

## 📄 License

Copyright © 2026 Roamzy Travels Pvt Ltd. All rights reserved.

---

Built with ❤️ for travelers around the world
