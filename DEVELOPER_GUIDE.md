# 🛠️ Developer Guide

This guide provides comprehensive information for developers working with the All-Around Construction Website Template.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── testimonials/      # Testimonials page
│   ├── team/              # Equipment Fleet page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── index.ts          # Component exports
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section component
│   ├── About.tsx         # About section component
│   ├── Services.tsx      # Services section component
│   ├── Projects.tsx      # Projects section component
│   ├── Testimonials.tsx  # Testimonials section component
│   └── Contact.tsx       # Contact section component
├── data/                 # JSON data files
│   ├── company.json      # Company information
│   ├── services.json     # Services data
│   ├── projects.json     # Projects data
│   └── testimonials.json # Testimonials data
└── types/                # TypeScript type definitions
    └── index.ts          # All type definitions
```

## 🎯 Code Organization Principles

### 1. **Consistent File Extensions**
- All React components use `.tsx` extension
- All TypeScript files use `.ts` extension
- All pages use `.tsx` extension

### 2. **TypeScript First**
- All components are fully typed
- Type definitions in `/src/types/index.ts`
- Proper interfaces for all data structures
- Type safety throughout the application

### 3. **Component Structure**
```tsx
import React from 'react';
import { ComponentProps } from '../types';

/**
 * Component Description
 * 
 * Detailed description of what the component does,
 * its props, and any important implementation details.
 * 
 * @param props - Component props
 * @returns JSX element
 */
const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### 4. **Import Organization**
- Use centralized imports from `/src/components/index.ts`
- Group imports: React, types, data, components
- Alphabetical ordering within groups

### 5. **Naming Conventions**
- **Components**: PascalCase (e.g., `Navigation`, `Hero`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase with descriptive names

## 🔧 Development Workflow

### 1. **Adding New Components**
```bash
# Create new component file
touch src/components/NewComponent.tsx

# Add to index.ts
echo "export { default as NewComponent } from './NewComponent';" >> src/components/index.ts
```

### 2. **Adding New Pages**
```bash
# Create new page directory
mkdir src/app/new-page

# Create page.tsx
touch src/app/new-page/page.tsx
```

### 3. **Adding New Types**
```typescript
// Add to src/types/index.ts
export interface NewType {
  id: number;
  name: string;
  // ... other properties
}
```

## 📝 Component Guidelines

### 1. **Props Interface**
Always define a props interface for each component:
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}
```

### 2. **Default Props**
Use default parameters instead of defaultProps:
```typescript
const Component: React.FC<ComponentProps> = ({ 
  title, 
  description = "Default description",
  className = "" 
}) => {
  // Component logic
};
```

### 3. **Event Handlers**
Type all event handlers properly:
```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  // Handler logic
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  // Handler logic
};
```

### 4. **State Management**
Use proper typing for state:
```typescript
const [formData, setFormData] = useState<ContactFormData>({
  name: '',
  email: '',
  message: ''
});
```

## 🎨 Styling Guidelines

### 1. **Tailwind CSS Classes**
- Use Tailwind utility classes
- Group related classes together
- Use responsive prefixes consistently
- Prefer Tailwind over custom CSS

### 2. **Component Styling**
```tsx
<div className={`
  flex items-center justify-center
  bg-white rounded-lg shadow-lg
  hover:shadow-xl transition-shadow duration-300
  ${className}
`}>
```

### 3. **Responsive Design**
```tsx
<div className="
  grid grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-4 md:gap-6 lg:gap-8
">
```

## 📊 Data Management

### 1. **JSON Data Files**
- Keep data in `/src/data/` directory
- Use consistent structure across files
- Type all data with TypeScript interfaces

### 2. **Data Validation**
```typescript
// Validate data on import
const companyData = company as CompanyInfo;
const servicesData = services as Service[];
```

### 3. **Adding New Data**
1. Add to appropriate JSON file
2. Update TypeScript interface
3. Use in components with proper typing

## 🚀 Performance Optimization

### 1. **Image Optimization**
- Use Next.js Image component
- Provide proper alt text
- Use appropriate sizes

### 2. **Code Splitting**
- Use dynamic imports for heavy components
- Lazy load non-critical components

### 3. **Bundle Optimization**
- Import only needed functions from libraries
- Use tree shaking effectively

## 🧪 Testing Guidelines

### 1. **Component Testing**
```typescript
import { render, screen } from '@testing-library/react';
import { Navigation } from '../components';

describe('Navigation', () => {
  it('renders company name', () => {
    render(<Navigation />);
    expect(screen.getByText('Company Name')).toBeInTheDocument();
  });
});
```

### 2. **Type Testing**
- Ensure all components have proper TypeScript types
- Test type safety with strict TypeScript configuration

## 🔍 Code Quality

### 1. **ESLint Configuration**
- Follow Next.js recommended ESLint rules
- Use TypeScript ESLint rules
- Fix all linting errors before committing

### 2. **Prettier Configuration**
- Use consistent code formatting
- Configure Prettier for TypeScript/JSX

### 3. **Code Review Checklist**
- [ ] TypeScript types are correct
- [ ] Components are properly documented
- [ ] No console.log statements in production code
- [ ] All imports are used
- [ ] Responsive design is implemented
- [ ] Accessibility attributes are present

## 🐛 Debugging

### 1. **Common Issues**
- **Type errors**: Check TypeScript interfaces
- **Import errors**: Verify file paths and exports
- **Styling issues**: Check Tailwind class names
- **Build errors**: Check for missing dependencies

### 2. **Debug Tools**
- Use React Developer Tools
- Check browser console for errors
- Use TypeScript compiler for type checking

## 📚 Resources

### 1. **Documentation**
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### 2. **Best Practices**
- Follow React best practices
- Use TypeScript strict mode
- Implement proper error boundaries
- Use semantic HTML elements

## 🤝 Contributing

### 1. **Before Making Changes**
- Read this guide thoroughly
- Understand the existing code structure
- Check for existing issues or discussions

### 2. **Making Changes**
- Create feature branches
- Follow naming conventions
- Write descriptive commit messages
- Test changes thoroughly

### 3. **Pull Request Process**
- Provide clear description of changes
- Include screenshots if UI changes
- Ensure all tests pass
- Request review from team members

---

**Happy Coding!** 🚀

For questions or clarifications, refer to the main README.md or create an issue in the repository.
