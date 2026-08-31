import React from "react";
import { Helmet } from "react-helmet-async";

const defaultTitle = "Rent Ride Car | Self Drive Car Rentals in Bhubaneswar";
const defaultDescription =
  "Rent Ride Car offers the best self-drive car rental service in Bhubaneswar. Choose from hatchbacks, sedans, SUVs and bikes with affordable pricing, easy online booking, and premium customer support.";
const defaultKeywords =
  "car rental bhubaneswar, self drive car rental, rent car bhubaneswar, luxury car rental, hatchback rental, sedan rental, suv rental, bike rental, online car booking, car hire near me";
const defaultUrl = "https://rentridecar.com";
const defaultImage = "https://rentridecar.com/og-image.jpg";

const SEO = ({
  title,
  description,
  keywords,
  url,
  image,
  canonical,
  children,
  schemaType = "homepage",
}) => {
  const seoTitle = title
    ? title.includes("Rent Ride Car")
      ? title
      : `${title} | Rent Ride Car`
    : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoUrl = url || defaultUrl;
  const seoImage = image || defaultImage;
  const seoKeywords = keywords || defaultKeywords;
  const canonicalUrl = canonical || seoUrl;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRental"],
    "@id": "https://rentridecar.com/#business",
    name: "Rent Ride Car",
    url: "https://rentridecar.com",
    logo: "https://rentridecar.com/brand.webp",
    image: seoImage,
    description:
      "Professional self-drive car rentals in Bhubaneswar. Hatchbacks, sedans, SUVs and premium vehicles with transparent pricing and 24/7 support.",
    telephone: "+91-9658041110",
    email: "info@rentridecar.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhubaneswar",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751024",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.2961",
      longitude: "85.8245",
    },
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
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Bhubaneswar" },
      { "@type": "Place", name: "Bhubaneswar Airport" },
      { "@type": "Place", name: "KIIT University" },
      { "@type": "Place", name: "Patia" },
    ],
    sameAs: [
      "https://www.facebook.com/rentridecar",
      "https://www.instagram.com/rentridecar",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rentridecar.com/#website",
    url: "https://rentridecar.com",
    name: "Rent Ride Car",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rentridecar.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const graphSchema = {
    "@context": "https://schema.org",
    "@graph": [businessSchema, websiteSchema],
  };

  const pageSchema =
    schemaType === "homepage" ? graphSchema : businessSchema;

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

      <script type="application/ld+json">
        {JSON.stringify(pageSchema)}
      </script>
      {children}
    </Helmet>
  );
};

export default SEO;
