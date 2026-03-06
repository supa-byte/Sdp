import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export function SEOMeta({ title, description, keywords, canonicalUrl, ogImage }: SEOMetaProps) {
  const siteUrl = import.meta.env.VITE_APP_URL || 'https://supandesai.com';
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Supan Desai",
    "url": siteUrl,
    "jobTitle": "AI Developer & Digital Marketer",
    "sameAs": [
      "https://share.google/UthaSzpJMn2OHl9eC",
      "https://www.fiverr.com/s/8z32qPE"
    ],
    "description": "Multi-disciplinary digital professional with expertise in Digital marketing with generative AI, Web development, App development, Automation systems, and AI chatbot development."
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}
