import React, { useEffect } from 'react';

const Head = () => {
  useEffect(() => {
    // Set document title
    document.title = 'JCM - Import Export Hub';
    
    // Set meta tags
    const setMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Set charset
    let charset = document.querySelector('meta[charset]');
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'utf-8');
      document.head.appendChild(charset);
    }
    
    // Set viewport
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Set keywords and description
    setMetaTag('keywords', 'import export services, global trade, international shipping, customs clearance, logistics solutions, export documentation, import regulations, trade consulting, supply chain management, freight forwarding, JCM Import Export, cross-border trade');
    setMetaTag('description', 'JCM Import Export Hub provides comprehensive global trade solutions including import services, export services, logistics, customs clearance, and international trade consulting for businesses worldwide.');
    
    // Set favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      favicon.setAttribute('type', 'image/png');
      favicon.setAttribute('href', '/favicon.png');
      document.head.appendChild(favicon);
    }
    
    // Add Google Fonts preconnect
    const addLink = (rel, href, crossorigin = false) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.setAttribute('rel', rel);
        link.setAttribute('href', href);
        if (crossorigin) link.setAttribute('crossorigin', '');
        document.head.appendChild(link);
      }
    };
    
    addLink('preconnect', 'https://fonts.googleapis.com');
    addLink('preconnect', 'https://fonts.gstatic.com', true);
    addLink('stylesheet', 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:wght@400;500;700&display=swap');
    addLink('stylesheet', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css');
    
  }, []);

  return null; // This component doesn't render anything visible
};

export default Head;