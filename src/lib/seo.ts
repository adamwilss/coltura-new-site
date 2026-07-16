import type { Metadata } from 'next';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  robots?: string;
}

export function generateMetadata(config: SeoConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      type: 'website',
      images: config.ogImage
        ? [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: config.ogTitle || config.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
    robots: config.robots,
    alternates: {
      canonical: config.canonical,
    },
  };
}

export interface JsonLdConfig {
  type: string;
  data: Record<string, unknown>;
}

export function generateLocalBusinessSchema(
  name: string = 'Coltura',
  url: string = 'https://coltura.uk',
  telephone: string = '+447958394808',
  areaServed: string = 'Cheshire, Greater Manchester, and surrounding areas'
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    areaServed,
    priceRange: '££',
    serviceType: 'Website Design and Development',
    description:
      'Modern websites for local businesses. Built in 7 days, maintained monthly.',
  };
  if (telephone) schema.telephone = telephone;
  return schema;
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  datePublished?: string,
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.speakable'],
    },
  };
}

export function generateFAQPageSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string,
  provider: string = 'Coltura'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: provider,
    },
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified?: string,
  author?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    ...(dateModified && { dateModified }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
    publisher: {
      '@type': 'Organization',
      name: 'Coltura',
    },
  };
}

export function generateReviewSchema(
  reviewBody: string,
  author: string,
  rating?: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody,
    author: {
      '@type': 'Person',
      name: author,
    },
    ...(rating && {
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 5,
      },
    }),
  };
}
