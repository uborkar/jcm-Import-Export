import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>JCM - Import Export Hub</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="keywords" content="import export services, global trade, international shipping, customs clearance, logistics solutions, export documentation, import regulations, trade consulting, supply chain management, freight forwarding, JCM Import Export, cross-border trade" />
      <meta name="description" content="JCM Import Export Hub provides comprehensive global trade solutions including import services, export services, logistics, customs clearance, and international trade consulting for businesses worldwide." />

      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Bootstrap Icons */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
    </Helmet>
  );
};

export default Head;