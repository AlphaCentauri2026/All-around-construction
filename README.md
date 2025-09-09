# 🏗️ All-Around Construction Website Template

A modern, professional construction company website template built with **Next.js 15**, **React 18**, and **Tailwind CSS**. Features AI-generated construction imagery and equipment-focused content perfect for construction companies, contractors, and building services.

## ✨ Features

- **🚀 Next.js 15** - Latest Next.js with App Router and Turbopack
- **⚛️ React 18** - Modern React with hooks and functional components
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **📱 Fully Responsive** - Perfect on all devices (desktop, tablet, mobile)
- **🖼️ AI-Generated Images** - High-quality Leonardo Vision XL construction imagery
- **🏗️ Equipment-Focused** - Showcases heavy machinery, cranes, and modern construction
- **⚡ Fast Loading** - Optimized images and code for performance
- **🔍 SEO Ready** - Proper meta tags and semantic HTML structure
- **♿ Accessibility** - WCAG compliant with keyboard navigation
- **📧 Contact Forms** - Functional contact forms with validation
- **🎯 8 Unique Pages** - Each with distinct layouts and functionality

## 📁 File Structure

```
allAroundConstruction-template/
├── README.md                 # This file
├── TEMPLATE_CONFIG.md        # Detailed customization guide
├── TEMPLATE_OVERVIEW.md      # Template overview and features
├── DEPLOYMENT.md            # Deployment instructions
├── package.json             # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── setup-template.js        # Quick setup script
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Homepage
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── projects/        # Projects page
│   │   ├── testimonials/    # Testimonials page
│   │   ├── team/            # Equipment Fleet page
│   │   ├── gallery/         # Gallery page
│   │   ├── contact/         # Contact page
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable React components
│   │   ├── Navigation.jsx   # Navigation component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── About.jsx        # About section component
│   │   ├── Services.jsx     # Services section component
│   │   ├── Projects.jsx     # Projects section component
│   │   ├── Testimonials.jsx # Testimonials section component
│   │   └── Contact.jsx      # Contact section component
│   └── data/                # JSON data files
│       ├── company.json     # Company information
│       ├── services.json    # Services data
│       ├── projects.json    # Projects data
│       └── testimonials.json # Testimonials data
└── public/
    └── images/              # Construction images and assets
        ├── Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_*.jpg
        ├── Leonardo_Vision_XL_Commercial_building_under_construction_cran_*.jpg
        ├── Leonardo_Vision_XL_Construction_of_a_modern_residential_house_*.jpg
        ├── Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_*.jpg
        ├── Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_*.jpg
        ├── Leonardo_Vision_XL_Construction_site_overview_showing_foundati_*.jpg
        ├── Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_*.jpg
        └── Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_*.jpg
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone or download** the template
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

### Quick Setup (Optional)

Run the setup script for guided customization:

```bash
node setup-template.js
```

## 🎨 Customization Guide

### 1. Company Information

Edit `src/data/company.json`:

```json
{
  "name": "Your Company Name",
  "tagline": "Your Company Tagline",
  "description": "Your company description...",
  "phone": "(555) 123-4567",
  "email": "info@yourcompany.com",
  "address": {
    "street": "123 Main Street",
    "city": "Your City",
    "state": "Your State",
    "zip": "12345"
  }
}
```

### 2. Services

Edit `src/data/services.json`:

```json
[
  {
    "id": 1,
    "title": "Residential Construction",
    "description": "Modern residential construction using cutting-edge techniques",
    "image": "/images/Leonardo_Vision_XL_Construction_of_a_modern_residential_house_0.jpg"
  }
]
```

### 3. Projects

Edit `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "Modern Residential Complex",
    "description": "Complete construction of contemporary residential homes",
    "image": "/images/Leonardo_Vision_XL_Construction_of_a_modern_residential_house_1.jpg",
    "category": "Residential"
  }
]
```

### 4. Testimonials

Edit `src/data/testimonials.json`:

```json
[
  {
    "id": 1,
    "name": "Johnson Property Development",
    "feedback": "Exceptional construction quality and professional project management",
    "rating": 5,
    "image": "/images/Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg",
    "project": "Commercial Construction"
  }
]
```

### 5. Images

**Replace images in `public/images/`:**

- All images use the standardized `/images/` path
- 32 high-quality construction images included
- Categories: Aerial views, Commercial construction, Residential construction, Heavy machinery, Construction complexes, Foundation work, Office interiors, Renovation projects

**Image Guidelines:**
- **Format**: JPG
- **Size**: 1200x800px minimum for backgrounds
- **Quality**: High resolution for best results
- **Naming**: Use descriptive names for easy identification

### 6. Colors and Styling

Edit `tailwind.config.js` to change the color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          500: '#ea580c',  // Main orange
          600: '#ea580c',  // Darker orange
          700: '#c2410c',  // Darkest orange
        }
      }
    }
  }
}
```

**Quick Color Changes:**
- Search and replace `orange-600` → Your primary color
- Search and replace `orange-700` → Your darker primary color
- Search and replace `orange-400` → Your lighter primary color

## 📱 Pages Included

1. **Homepage** - Company introduction with hero section and values
2. **About** - Detailed company information, equipment showcase, and mission
3. **Services** - Comprehensive services showcase with masonry layout
4. **Projects** - Portfolio gallery with asymmetric project grid
5. **Testimonials** - Client reviews with featured testimonials
6. **Equipment Fleet** - Heavy machinery and equipment showcase
7. **Gallery** - Image gallery with masonry layout and categories
8. **Contact** - Contact form with company information and map

## 🛠️ Technical Features

- **Next.js 15** - Latest Next.js with App Router and Turbopack
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development (optional)
- **Image Optimization** - Next.js Image component
- **SEO Ready** - Proper meta tags and structure
- **Static Export** - Can be deployed anywhere

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure build settings if needed

### Deploy to Any Static Hosting

1. Build the project: `npm run build`
2. Upload the `out` folder to your hosting provider

## 🔧 Advanced Customization

### Adding New Pages

1. Create new folder in `src/app/`
2. Add `page.tsx` file
3. Import Navigation and Footer components
4. Add to navigation menu

### Modifying Components

- Edit files in `src/components/`
- Update styling with Tailwind classes
- Add new functionality as needed

### SEO Optimization

Update meta tags in each page:

```jsx
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
}
```

## 📊 Performance Features

- **Fast Loading** - Optimized images and code
- **SEO Ready** - Proper meta tags and structure
- **Mobile First** - Responsive design approach
- **Accessibility** - WCAG compliant design
- **Modern Standards** - Latest web technologies

## 🎯 Target Audience

This template is perfect for:
- Construction companies
- General contractors
- Specialty contractors
- Home builders
- Renovation companies
- Construction consultants
- Architecture firms
- Engineering companies

## 📞 Support

### Documentation
- **TEMPLATE_CONFIG.md** - Detailed customization guide
- **TEMPLATE_OVERVIEW.md** - Template overview and features
- **DEPLOYMENT.md** - Deployment instructions

### Common Issues
- **Images not loading:** Check file paths in `public/images/`
- **Build errors:** Check Node.js version (18.0+ required)
- **Styling issues:** Clear browser cache and restart dev server

## 📋 Quick Start Checklist

- [ ] Update company information in `company.json`
- [ ] Replace images in `public/images/`
- [ ] Customize services in `services.json`
- [ ] Add your projects to `projects.json`
- [ ] Update testimonials in `testimonials.json`
- [ ] Change colors in `tailwind.config.js`
- [ ] Test all pages and links
- [ ] Deploy to your hosting platform

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Ready to build your construction website?** Start customizing today! 🚀