import React from "react";
import { Helmet } from "react-helmet-async";

const defaultTitle = "Rent Ride Car | Self Drive Car Rentals in Bhubaneswar";
const defaultDescription =
  "Rent Ride Car offers the best self-drive car rental service in Bhubaneswar. Choose from hatchbacks, sedans, SUVs and bikes with affordable pricing, easy online booking, and premium customer support.";
const defaultKeywords =
  "car rental bhubaneswar, self drive car rental, rent car bhubaneswar, luxury car rental, hatchback rental, sedan rental, suv rental, bike rental, online car booking, car hire near me";
const defaultUrl = "https://rentridecar.com";
const defaultImage = "https://rentridecar.com/favicon.ico";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  canonical,
  children,
}) => {
  const seoTitle = title ? `${title} | Rent Ride Car` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoUrl = url || defaultUrl;
  const seoImage = image || defaultImage;
  const seoKeywords = keywords || defaultKeywords;
  const canonicalUrl = canonical || seoUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "Rent Ride Car",
    url: seoUrl,
    telephone: "+919658041110",
    description: seoDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    priceRange: "₹1399 - ₹2399",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Rent Ride Car" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Rent Ride Car" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      {children}
    </Helmet>
  );
};

export default SEO;
