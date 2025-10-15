// Utility function to generate static params from navigation data
export const generateStaticParamsFromNavigation = (navigationData) => {
  const params = [];
  
  if (!navigationData?.data?.[0]?.items) {
    return params;
  }

  const processItems = (items, parentSlug = '', parentChild = '') => {
    items.forEach(item => {
      const currentSlug = item.slug || item.page?.slug;
      
      if (currentSlug) {
        if (!parentSlug) {
          // Top-level items
          params.push({ slug: currentSlug });
        } else if (!parentChild) {
          // Second-level items
          params.push({ slug: parentSlug, child: currentSlug });
        } else {
          // Third-level items
          params.push({ slug: parentSlug, child: parentChild, grandchild: currentSlug });
        }

        // Process children recursively
        if (item.children && item.children.length > 0) {
          processItems(item.children, currentSlug, parentSlug);
        }
      }
    });
  };

  processItems(navigationData.data[0].items);
  return params;
};

// Helper function to get all possible routes from navigation data
export const getAllRoutesFromNavigation = (navigationData) => {
  const routes = [];
  
  if (!navigationData?.data?.[0]?.items) {
    return routes;
  }

  const processItems = (items, path = []) => {
    items.forEach(item => {
      const currentSlug = item.slug || item.page?.slug;
      
      if (currentSlug) {
        const newPath = [...path, currentSlug];
        routes.push({
          path: `/${newPath.join('/')}`,
          slug: newPath[0],
          child: newPath[1] || null,
          grandchild: newPath[2] || null,
          title: item.title,
          description: item.description
        });

        // Process children recursively
        if (item.children && item.children.length > 0) {
          processItems(item.children, newPath);
        }
      }
    });
  };

  processItems(navigationData.data[0].items);
  return routes;
};
