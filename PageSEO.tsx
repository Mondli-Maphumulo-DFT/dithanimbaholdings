import React, { useEffect } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

const PageSEO: React.FC<PageSEOProps> = ({ title, description, canonicalPath }) => {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Dithanimba Holdings`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://dithanimba.co.za${canonicalPath || ''}`);

  }, [title, description, canonicalPath]);

  return null;
};

export default PageSEO;