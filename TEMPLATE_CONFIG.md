# Template Configuration Guide

This guide will help you quickly customize the All-Around Construction template for your business.

## 🏢 Company Information Setup

### 1. Basic Company Details
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
  },
  "social": {
    "facebook": "https://facebook.com/yourcompany",
    "twitter": "https://twitter.com/yourcompany",
    "instagram": "https://instagram.com/yourcompany",
    "linkedin": "https://linkedin.com/company/yourcompany"
  }
}
```

### 2. Services Configuration
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

### 3. Projects Portfolio
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

### 4. Client Testimonials
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

## 🖼️ Image Setup

### Required Images
Place these images in `public/images/`:

#### Construction Site Images
- `Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_0.jpg` - Aerial construction view
- `Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_1.jpg` - Aerial construction view
- `Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_2.jpg` - Aerial construction view
- `Leonardo_Vision_XL_Aerial_view_of_a_modern_construction_site_w_3.jpg` - Aerial construction view

#### Commercial Construction
- `Leonardo_Vision_XL_Commercial_building_under_construction_cran_0.jpg` - Commercial building with crane
- `Leonardo_Vision_XL_Commercial_building_under_construction_cran_1.jpg` - Commercial building with crane
- `Leonardo_Vision_XL_Commercial_building_under_construction_cran_2.jpg` - Commercial building with crane
- `Leonardo_Vision_XL_Commercial_building_under_construction_cran_3.jpg` - Commercial building with crane

#### Residential Construction
- `Leonardo_Vision_XL_Construction_of_a_modern_residential_house_0.jpg` - Modern residential house
- `Leonardo_Vision_XL_Construction_of_a_modern_residential_house_1.jpg` - Modern residential house
- `Leonardo_Vision_XL_Construction_of_a_modern_residential_house_2.jpg` - Modern residential house
- `Leonardo_Vision_XL_Construction_of_a_modern_residential_house_3.jpg` - Modern residential house

#### Construction Equipment
- `Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_0.jpg` - Heavy machinery
- `Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_1.jpg` - Heavy machinery
- `Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_2.jpg` - Heavy machinery
- `Leonardo_Vision_XL_Closeup_of_construction_machinery_like_bull_3.jpg` - Heavy machinery

#### Construction Complexes
- `Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_0.jpg` - Construction complex
- `Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_1.jpg` - Construction complex
- `Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_2.jpg` - Construction complex
- `Leonardo_Vision_XL_Exterior_view_of_a_modern_construction_comp_3.jpg` - Construction complex

#### Foundation & Site Work
- `Leonardo_Vision_XL_Construction_site_overview_showing_foundati_0.jpg` - Foundation work
- `Leonardo_Vision_XL_Construction_site_overview_showing_foundati_1.jpg` - Foundation work
- `Leonardo_Vision_XL_Construction_site_overview_showing_foundati_2.jpg` - Foundation work
- `Leonardo_Vision_XL_Construction_site_overview_showing_foundati_3.jpg` - Foundation work

#### Office & Management
- `Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_0.jpg` - Construction office
- `Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_1.jpg` - Construction office
- `Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_2.jpg` - Construction office
- `Leonardo_Vision_XL_Modern_construction_office_interior_with_ar_3.jpg` - Construction office

#### Renovation Projects
- `Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_0.jpg` - Office renovation
- `Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_1.jpg` - Office renovation
- `Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_2.jpg` - Office renovation
- `Leonardo_Vision_XL_Renovation_project_inside_a_modern_office_c_3.jpg` - Office renovation

### Image Guidelines
- **Format**: JPG or PNG
- **Size**: 1200x800px minimum for backgrounds
- **Quality**: High resolution for best results
- **Naming**: Use descriptive names for easy identification

## 🎨 Color Customization

### Primary Colors
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

### Quick Color Changes
Search and replace these colors throughout the project:
- `orange-600` → Your primary color
- `orange-700` → Your darker primary color
- `orange-400` → Your lighter primary color

## 📝 Content Customization

### Homepage Content
Edit `src/app/page.tsx`:
- Update hero text and messaging
- Modify company introduction
- Change call-to-action buttons

### About Page Content
Edit `src/app/about/page.tsx`:
- Update company story
- Modify mission and values
- Change team information

### Service Descriptions
Each service page can be customized:
- Update service descriptions
- Change service images
- Modify pricing information

## 🔧 Technical Customization

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

## 🚀 Quick Start Checklist

- [ ] Update company information in `company.json`
- [ ] Replace all images in `public/images/`
- [ ] Customize services in `services.json`
- [ ] Add your projects to `projects.json`
- [ ] Update testimonials in `testimonials.json`
- [ ] Change colors in `tailwind.config.js`
- [ ] Test all pages and links
- [ ] Deploy to your hosting platform

## 📞 Support

For additional help:
1. Check the main README.md
2. Review Next.js documentation
3. Check Tailwind CSS documentation
4. Look at the code comments for guidance

---

**Happy Customizing!** 🎉
