import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const siteUrl = "https://mughalhouse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mughal House Manpower Consultancy | Government Licensed Overseas Recruitment",
    template: "%s | Mughal House Manpower Consultancy",
  },
  description:
    "Mughal House Manpower Consultancy — Malaysia's trusted government-licensed overseas recruitment agency. 10,000+ workers deployed across manufacturing, plantation, construction, and hospitality sectors. Ethical, efficient, reliable.",
  keywords: [
    "manpower consultancy",
    "overseas recruitment Malaysia",
    "foreign worker recruitment",
    "plantation workers Malaysia",
    "factory operators recruitment",
    "construction workers overseas",
    "government licensed recruitment agency",
    "Malaysia manpower agency",
    "Mughal House",
    "ethical recruitment",
    "overseas employment",
    "labor export",
    "visa processing",
    "pre-departure orientation",
    "manpower clearance",
  ],
  authors: [{ name: "Mughal House Manpower Consultancy" }],
  creator: "Mughal House Manpower Consultancy",
  publisher: "Mughal House Manpower Consultancy",
  category: "Business",
  classification: "Recruitment & Staffing",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: siteUrl,
    siteName: "Mughal House Manpower Consultancy",
    title: "Mughal House Manpower Consultancy | Trusted Overseas Recruitment Since 2023",
    description:
      "9,000+ workers deployed. Government-licensed. Ethical recruitment for Malaysia's manufacturing, plantation, and construction sectors.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mughal House Manpower Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mughal House Manpower Consultancy",
    description:
      "Government-licensed overseas recruitment agency. 10,000+ workers deployed since 2023.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "geo.region": "MY",
    "geo.placename": "Malaysia",
    "business:contact_data:locality": "Malaysia",
    "business:contact_data:country_name": "Malaysia",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Mughal House Manpower Consultancy",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Government-licensed overseas manpower recruitment consultancy established in 2023, specializing in connecting Malaysian employers with qualified overseas workers across manufacturing, plantation, construction, and hospitality sectors.",
  foundingDate: "2023",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 50,
  },
  areaServed: ["Malaysia", "South Asia", "Southeast Asia"],
  serviceType: [
    "Overseas Recruitment",
    "Manpower Consultancy",
    "Visa Processing",
    "Pre-departure Orientation",
    "Medical Examination",
    "Passport Documentation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Malay", "Urdu"],
  },
  sameAs: [
    "https://www.facebook.com/mughalhouse",
    "https://www.linkedin.com/company/mughalhouse",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Mughal House Manpower Consultancy",
  description:
    "Government-licensed overseas recruitment agency in Malaysia specializing in manpower supply for manufacturing, plantation, and construction industries.",
  url: siteUrl,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
      description: "By appointment only",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Mughal House Manpower Consultancy",
  description: "Government-licensed overseas recruitment agency in Malaysia",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/opportunities?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
