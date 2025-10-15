# Dynamic Routing System - Our Specialist Focus

This document explains the dynamic routing system implemented specifically for the Our Specialist section of the Ramaiah Memorial Hospital website.

## Overview

The system creates dynamic routes that handle only the `our-specialist` pages, allowing for flexible specialist content management without affecting other routes.

## File Structure

```
app/
├── [slug]/page.js                    # Top-level dynamic routes
├── [slug]/[child]/page.js            # Second-level dynamic routes  
├── [slug]/[child]/[grandchild]/page.js # Third-level dynamic routes
components/
└── DynamicPageRenderer.jsx           # Main component that renders content
lib/
└── generateStaticParams.js           # Utility functions for generating static params
```

## How It Works

### 1. Dynamic Route Structure (Our Specialist Only)

- **`[slug]`**: Main our-specialist page (e.g., `/our-specialist`)
- **`[slug]/[child]`**: Specific specialist categories (e.g., `/our-specialist/cardiologist`)
- **`[slug]/[child]/[grandchild]`**: Deep specialist subcategories (e.g., `/our-specialist/cardiologist/interventional-cardiology`)

### 2. DynamicPageRenderer Component

The `DynamicPageRenderer` component:
- Only handles `our-specialist` routes
- Fetches navigation data from Redux store
- Renders the OurSpecialistPage component with appropriate parameters
- Returns "Page Not Found" for all other routes
- Handles loading states and error cases

### 3. Static Generation

Each dynamic route includes `generateStaticParams()` that:
- Only generates parameters for `our-specialist` routes
- Pre-builds specialist pages at build time for better performance
- Can be extended with specific specialist routes as needed

## Route Examples

### Our Specialist Routes Only
- `/our-specialist` → OurSpecialistPage component
- `/our-specialist/cardiologist` → OurSpecialistPage component (with cardiologist params)
- `/our-specialist/oncologist` → OurSpecialistPage component (with oncologist params)
- `/our-specialist/cardiologist/interventional-cardiology` → OurSpecialistPage component (with deep params)

### Other Routes
- All other routes (like `/about`, `/specialities`, etc.) will show "Page Not Found" message

## Navigation Integration

The system integrates with the existing navigation system:

1. **Header2.jsx** generates nested URLs using `generateNestedUrl()`
2. **Dynamic routes** automatically handle these URLs
3. **Components** are rendered based on the navigation hierarchy

## Benefits

1. **Focused Management**: Only handles our-specialist routes without affecting other pages
2. **SEO Optimized**: Each specialist route has proper metadata and static generation
3. **Performance**: Specialist pages are pre-generated at build time
4. **Maintainable**: Centralized specialist routing logic
5. **Isolated**: Doesn't interfere with existing route structure

## Adding New Specialist Routes

To add new specialist routes:

1. **Update generateStaticParams** in the appropriate route file
2. **Add specific specialist routes** as needed
3. **OurSpecialistPage component** handles the rendering logic
4. **Routes are automatically generated** based on the added parameters

## Error Handling

The system includes comprehensive error handling:
- Loading states while fetching navigation data
- Fallback routes if API is unavailable
- 404 pages for non-existent routes
- Graceful degradation for missing components

## Performance Considerations

- Static generation for all routes at build time
- Cached navigation data fetching
- Optimized component loading
- SEO-friendly metadata generation
