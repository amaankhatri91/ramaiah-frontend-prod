/**
 * SEO Utilities for Dynamic Page Rendering
 * Provides centralized SEO metadata generation for dynamic pages
 */

// Helper function to fetch navigation data for SEO
export async function fetchNavigationData() {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBaseUrl) return null;
    
    const response = await fetch(`${apiBaseUrl}/navigation`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache', // Cache for better performance
    });
    
    if (!response.ok) return null;
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching navigation data for SEO:', error);
    return null;
  }
}

// Helper function to find page data in navigation
export function findPageDataInNavigation(navigationData, targetSlug, targetChild = null, targetGrandchild = null) {
  if (!navigationData?.data?.[0]?.items) return null;
  
  const findPageData = (items, slug, child = null, grandchild = null) => {
    for (const item of items) {
      if (item.slug === slug || item.page?.slug === slug) {
        if (!child) return item;
        
        if (item.children) {
          for (const childItem of item.children) {
            if (childItem.slug === child || childItem.page?.slug === child) {
              if (!grandchild) return { ...childItem, parent: item };
              
              if (childItem.children) {
                for (const grandchildItem of childItem.children) {
                  if (grandchildItem.slug === grandchild || grandchildItem.page?.slug === grandchild) {
                    return { ...grandchildItem, parent: childItem, grandparent: item };
                  }
                }
              }
            }
          }
        }
      }
    }
    return null;
  };

  // Search through main navigation items
  let data = findPageData(navigationData.data[0].items, targetSlug, targetChild, targetGrandchild);
  
  // If not found in main items, search in children of index 2 (specialties)
  if (!data && navigationData.data[0].items[2]?.children) {
    for (const navItem of navigationData.data[0].items[2].children) {
      if (navItem.children) {
        data = findPageData(navItem.children, targetSlug, targetChild, targetGrandchild);
        if (data) break;
      }
    }
  }
  
  return data;
}

// Helper function to generate SEO-friendly metadata
export function generateSEOMetadata(pageData, slug, child = null, grandchild = null) {
  const baseTitle = "Ramaiah Memorial Hospital";
  const baseUrl = "https://msrmh.com";
  
  // Generate title based on hierarchy
  let title = baseTitle;
  let description = "Experience world-class healthcare at Ramaiah Memorial Hospital, Bangalore's premier medical institution.";
  let keywords = ["Ramaiah Memorial Hospital", "hospital bangalore", "medical care", "healthcare"];
  
  if (pageData) {
    // Use page title if available
    if (pageData.title) {
      title = `${pageData.title} | ${baseTitle}`;
    } else if (pageData.page?.title) {
      title = `${pageData.page.title} | ${baseTitle}`;
    }
    
    // Generate description
    if (pageData.page?.description) {
      description = pageData.page.description;
    } else if (pageData.description) {
      description = pageData.description;
    } else {
      // Generate description based on slug
      const slugText = slug.replace(/-/g, ' ');
      const childText = child ? ` - ${child.replace(/-/g, ' ')}` : '';
      const grandchildText = grandchild ? ` - ${grandchild.replace(/-/g, ' ')}` : '';
      description = `Explore ${slugText}${childText}${grandchildText} services at Ramaiah Memorial Hospital. Expert medical care and specialized treatments in Bangalore.`;
    }
    
    // Add relevant keywords
    const slugKeywords = slug.split('-');
    keywords = [...keywords, ...slugKeywords, "bangalore", "medical services", "specialized care"];
    
    if (child) {
      const childKeywords = child.split('-');
      keywords = [...keywords, ...childKeywords];
    }
    
    if (grandchild) {
      const grandchildKeywords = grandchild.split('-');
      keywords = [...keywords, ...grandchildKeywords];
    }
  } else {
    // Fallback metadata
    const slugText = slug.replace(/-/g, ' ');
    const childText = child ? ` - ${child.replace(/-/g, ' ')}` : '';
    const grandchildText = grandchild ? ` - ${grandchild.replace(/-/g, ' ')}` : '';
    
    title = `${slugText}${childText}${grandchildText} | ${baseTitle}`;
    description = `Learn more about ${slugText}${childText}${grandchildText} at Ramaiah Memorial Hospital. Expert medical care and specialized treatments.`;
  }
  
  // Generate canonical URL
  let canonical = `/${slug}`;
  if (child) canonical += `/${child}`;
  if (grandchild) canonical += `/${grandchild}`;
  
  return {
    title,
    description,
    keywords: [...new Set(keywords)], // Remove duplicates
    alternates: {
      canonical: `${baseUrl}${canonical}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${canonical}`,
      siteName: baseTitle,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/assets/Footer.png',
          width: 1200,
          height: 630,
          alt: `${title} - Ramaiah Memorial Hospital`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/Footer.png'],
      site: '@MSRMHOfficial',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Specialized SEO metadata for different page types
export function generateSpecializedSEOMetadata(pageData, slug, child = null, grandchild = null, pageType = 'general') {
  const baseMetadata = generateSEOMetadata(pageData, slug, child, grandchild);
  
  switch (pageType) {
    case 'our-specialist':
      return {
        ...baseMetadata,
        title: baseMetadata.title.replace('Ramaiah Memorial Hospital', 'Our Specialists | Ramaiah Memorial Hospital'),
        description: `Meet our expert medical specialists at Ramaiah Memorial Hospital. World-class doctors providing specialized care in Bangalore.`,
        keywords: [...baseMetadata.keywords, 'specialists', 'doctors', 'medical experts', 'consultation'],
      };
      
    case 'centers-of-excellence':
      return {
        ...baseMetadata,
        title: baseMetadata.title.replace('Ramaiah Memorial Hospital', 'Centers of Excellence | Ramaiah Memorial Hospital'),
        description: `Discover our Centers of Excellence at Ramaiah Memorial Hospital. Advanced medical facilities and specialized treatments.`,
        keywords: [...baseMetadata.keywords, 'centers of excellence', 'specialized treatment', 'advanced medical care'],
      };
      
    case 'international-patient-care':
      return {
        ...baseMetadata,
        title: baseMetadata.title.replace('Ramaiah Memorial Hospital', 'International Patient Care | Ramaiah Memorial Hospital'),
        description: `International patient care services at Ramaiah Memorial Hospital. Comprehensive healthcare for patients from around the world.`,
        keywords: [...baseMetadata.keywords, 'international patients', 'medical tourism', 'global healthcare'],
      };
      
    case 'institute':
      return {
        ...baseMetadata,
        title: baseMetadata.title.replace('Ramaiah Memorial Hospital', 'Medical Institute | Ramaiah Memorial Hospital'),
        description: `Advanced medical institute services at Ramaiah Memorial Hospital. Cutting-edge research and specialized medical education.`,
        keywords: [...baseMetadata.keywords, 'medical institute', 'medical education', 'research', 'training'],
      };
      
    default:
      return baseMetadata;
  }
}

// Helper function to determine page type based on slug
export function getPageType(slug, child = null) {
  if (slug === 'our-specialist') return 'our-specialist';
  if (slug === 'centers-of-excellence') return 'centers-of-excellence';
  if (slug === 'international-patient-care') return 'international-patient-care';
  if (slug.includes('institute')) return 'institute';
  return 'general';
}

// Main function to generate complete SEO metadata
export async function generateDynamicSEOMetadata(slug, child = null, grandchild = null) {
  try {
    // Fetch navigation data
    const navigationData = await fetchNavigationData();
    
    // Find page data
    const pageData = findPageDataInNavigation(navigationData, slug, child, grandchild);
    
    // Determine page type
    const pageType = getPageType(slug, child);
    
    // Generate specialized SEO metadata
    return generateSpecializedSEOMetadata(pageData, slug, child, grandchild, pageType);
  } catch (error) {
    console.error('Error generating dynamic SEO metadata:', error);
    // Fallback metadata
    const pageType = getPageType(slug, child);
    return generateSpecializedSEOMetadata(null, slug, child, grandchild, pageType);
  }
}

