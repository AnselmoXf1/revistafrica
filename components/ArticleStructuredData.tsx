import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Magazine } from '../types';

interface ArticleStructuredDataProps {
  article: Magazine;
}

const ArticleStructuredData: React.FC<ArticleStructuredDataProps> = ({ article }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": article.title,
    "name": article.title,
    "description": article.description,
    "abstract": article.description,
    "image": article.coverUrl,
    "datePublished": new Date(article.uploadDate).toISOString(),
    "dateModified": new Date(article.uploadDate).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "RevistaAfrica"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RevistaAfrica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://revistafrica.com/logo.svg"
      }
    },
    "isPartOf": {
      "@type": "Periodical",
      "name": "RevistaAfrica",
      "issn": "XXXX-XXXX"
    },
    "volumeNumber": article.edition.toString(),
    "inLanguage": "pt",
    "url": `https://revistafrica.com/#/artigo/${article._id || article.id}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://revistafrica.com/#/artigo/${article._id || article.id}`
    },
    "about": {
      "@type": "Thing",
      "name": article.category
    },
    "encoding": {
      "@type": "MediaObject",
      "contentUrl": article.pdfUrl,
      "encodingFormat": "application/pdf"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ArticleStructuredData;
