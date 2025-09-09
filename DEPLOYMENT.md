# Deployment Guide

This guide covers various deployment options for your construction website template.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
**Best for**: Next.js applications, automatic deployments

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings
   - SSL certificate auto-generated

### 2. Netlify
**Best for**: Static sites, form handling

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `out`

### 3. GitHub Pages
**Best for**: Free hosting, simple setup

1. **Update package.json**
   ```json
   {
     "scripts": {
       "export": "next build && next export"
     }
   }
   ```

2. **Create GitHub Actions workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### 4. AWS Amplify
**Best for**: AWS ecosystem, advanced features

1. **Connect repository**
   - Go to AWS Amplify console
   - Connect your GitHub repository
   - Configure build settings

2. **Build settings**
   - Build command: `npm run build`
   - Output directory: `out`

### 5. Traditional Web Hosting
**Best for**: Shared hosting, cPanel

1. **Build for static export**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `out` folder to your web server
   - Ensure `index.html` is in the root directory

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Update company information in `company.json`
- [ ] Replace all images in `public/images/`
- [ ] Update services, projects, and testimonials
- [ ] Test all pages and links
- [ ] Verify contact form functionality

### Technical Setup
- [ ] Update `next.config.ts` if needed
- [ ] Test build process: `npm run build`
- [ ] Check for TypeScript errors: `npm run lint`
- [ ] Verify responsive design on mobile
- [ ] Test page load speeds

### SEO Optimization
- [ ] Update page titles and meta descriptions
- [ ] Add Google Analytics (if desired)
- [ ] Submit sitemap to Google Search Console
- [ ] Test social media previews

## 📊 Performance Optimization

### Image Optimization
- Compress images before uploading
- Use WebP format when possible
- Optimize image sizes for different breakpoints

### Code Optimization
- Remove unused CSS
- Minimize JavaScript bundles
- Enable gzip compression on server

### CDN Setup
- Use a CDN for faster global delivery
- Configure caching headers
- Enable HTTP/2

## 🔒 Security Considerations

### HTTPS
- Ensure SSL certificate is active
- Redirect HTTP to HTTPS
- Use secure headers

### Form Security
- Implement CSRF protection
- Validate form inputs
- Use reCAPTCHA if needed

### Content Security
- Regular backups
- Keep dependencies updated
- Monitor for security vulnerabilities

## 📈 Analytics & Monitoring

### Google Analytics
Add to `src/app/layout.tsx`:
```jsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Performance Monitoring
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 🆘 Troubleshooting

### Common Issues

**Build Errors**
- Check TypeScript errors
- Verify all imports are correct
- Ensure all required files exist

**Image Loading Issues**
- Check image paths
- Verify file permissions
- Test with different browsers

**Styling Problems**
- Clear browser cache
- Check Tailwind CSS compilation
- Verify responsive breakpoints

**Form Issues**
- Test form validation
- Check form action URLs
- Verify email configuration

### Getting Help
1. Check the main README.md
2. Review Next.js documentation
3. Check browser console for errors
4. Test in different browsers

---

**Happy Deploying!** 🚀
