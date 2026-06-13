import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

const siteUrl = "https://mhrecruiter.com";
const brandFull  = "Mughal House Manpower Consultancy";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandFull} (MH Recruiter) — Govt-Licensed Overseas Recruitment, West Bengal to the world`,
    template: `%s | ${brandFull} · MH Recruiter`,
  },
  description:
    `${brandFull} (MH Recruiter) — a government-licensed (RAS838225) overseas recruitment agency in Pandua, West Bengal. 10,000+ skilled Indian workers placed across Malaysia's manufacturing, plantation, construction and hospitality sectors since 2023.`,
  applicationName: brandFull,
  keywords: [
    "MH Recruiter",
    "MH Recruiter India",
    "MH Recruiter West Bengal",
    "MH Manpower",
    "Mughal House",
    "Mughal House Recruiter",
    "Mughal House Manpower Consultancy",
    "Mughal House Pandua",
    "manpower consultancy West Bengal",
    "manpower consultancy Hooghly",
    "overseas recruitment India to Malaysia",
    "Indian workers for Malaysia",
    "skilled worker recruitment Malaysia",
    "plantation workers Malaysia recruitment",
    "construction workers Malaysia recruitment",
    "factory workers Malaysia recruitment",
    "government licensed manpower agency India",
    "RAS838225",
    "ethical overseas recruitment",
    "visa processing Malaysia",
    "pre-departure orientation",
    "manpower clearance India",
  ],
  authors: [{ name: brandFull }],
  creator: brandFull,
  publisher: brandFull,
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
    locale: "en_IN",
    alternateLocale: ["en_MY"],
    url: siteUrl,
    siteName: brandFull,
    title: `${brandFull} (MH Recruiter) — Govt-Licensed Overseas Recruitment`,
    description:
      "10,000+ skilled Indian workers placed across the world. Government-licensed (RAS838225), zero worker-side fees, ethical recruitment since 2023.",
    // og:image is generated dynamically by src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandFull} (MH Recruiter)`,
    description:
      "Government-licensed overseas recruitment agency in Pandua, West Bengal. 10,000+ workers placed across the world since 2023.",
  },
  alternates: {
    canonical: siteUrl,
  },
  // Explicit icon hints — Next.js will also auto-detect icon.tsx /
  // apple-icon.tsx, but listing them here guarantees Google sees a
  // canonical <link rel="icon"> in the head when it indexes mhrecruiter.com.
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "192x192" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/icon",
    apple: { url: "/apple-icon", sizes: "180x180", type: "image/png" },
  },
  // Replace this verification value once you've added the domain to
  // Google Search Console (Settings → Ownership verification → HTML tag).
  // verification: { google: "your-google-verification-code" },
  other: {
    "geo.region":     "IN-WB",
    "geo.placename":  "Pandua, Hooghly, West Bengal, India",
    "geo.position":   "23.0779;88.2870",
    "ICBM":           "23.0779, 88.2870",
    "business:contact_data:street_address": "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road",
    "business:contact_data:locality":       "Pandua",
    "business:contact_data:region":         "West Bengal",
    "business:contact_data:postal_code":    "712149",
    "business:contact_data:country_name":   "India",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e4f9c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road",
  addressLocality: "Pandua",
  addressRegion: "West Bengal",
  postalCode: "712149",
  addressCountry: "IN",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Mughal House Manpower Consultancy",
  alternateName: ["MH Recruiter", "MH Manpower", "Mughal House", "Mughal House Recruiter"],
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  image: `${siteUrl}/images/team/mughal-house-exterior.jpg`,
  description:
    "Government-licensed overseas recruitment consultancy (license RAS838225) based in Pandua, West Bengal. Places skilled Indian workers across Malaysia's manufacturing, plantation, construction and hospitality sectors. Established 2023.",
  foundingDate: "2023",
  founders: [
    { "@type": "Person", name: "S. Ahamed (Raju)", jobTitle: "Chairman & Founder" },
    { "@type": "Person", name: "Hemraj Dahal",     jobTitle: "Director — Overseas Business" },
    { "@type": "Person", name: "Firoz Ahamed",     jobTitle: "Director — India Operations" },
  ],
  address: postalAddress,
  areaServed: ["Malaysia", "India", "South Asia", "Southeast Asia"],
  serviceType: [
    "Overseas Recruitment",
    "Manpower Consultancy",
    "Visa Processing",
    "Pre-departure Orientation",
    "Medical Examination",
    "Passport Documentation",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-7811-965514",
      email: "mhmc023@gmail.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Bengali", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Chairman",
      telephone: "+60-14-835-0321",
      areaServed: "MY",
      availableLanguage: ["English", "Malay", "Urdu"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Director",
      telephone: "+60-12-360-2080",
      areaServed: "MY",
      availableLanguage: ["English", "Malay", "Urdu"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/mughalhouse",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Mughal House Manpower Consultancy",
  alternateName: "MH Recruiter",
  description:
    "Government-licensed overseas recruitment agency in Pandua, West Bengal. Places skilled Indian workers across Malaysian manufacturing, plantation, construction and hospitality.",
  url: siteUrl,
  image: `${siteUrl}/images/team/mughal-house-exterior.jpg`,
  telephone: "+91-7811-965514",
  email: "mhmc023@gmail.com",
  priceRange: "$$",
  address: postalAddress,
  geo: { "@type": "GeoCoordinates", latitude: 23.0779, longitude: 88.287 },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MH Recruiter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MH Recruiter is the short name for Mughal House Manpower Consultancy, a government-licensed (RAS838225) overseas recruitment agency based in Pandua, West Bengal, India. We place skilled and semi-skilled Indian workers into Malaysian manufacturing, plantation, construction and hospitality roles.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mughal House (MH Recruiter) government licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mughal House Manpower Consultancy is registered with the Government of India under license number RAS838225 and complies with all Malaysian recruitment regulations.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the Mughal House office located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ahmed Plaza, Pandua Mukul Cinematala G.T. Road, Po & PS Pandua, Dist – Hooghly, Pin – 712149, West Bengal, India.",
      },
    },
    {
      "@type": "Question",
      name: "Do workers pay any fees to MH Recruiter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We follow a zero-fee policy for workers. All recruitment costs are borne by the employer, with transparent written contracts on both sides.",
      },
    },
    {
      "@type": "Question",
      name: "Which sectors does Mughal House recruit for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recruit for plantation, construction, agriculture, poultry farming, cleaning services, housekeeping, food & beverage, bar & hospitality, general manufacturing, specialised manufacturing and textile & apparel across Malaysia.",
      },
    },
    {
      "@type": "Question",
      name: "How many workers has Mughal House placed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mughal House Manpower Consultancy has placed over 10,000 skilled workers from India into Malaysian industries since the company was officially registered in 2023.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${siteUrl}/#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: `${siteUrl}/`             },
    { "@type": "ListItem", position: 2, name: "About",    item: `${siteUrl}/#about`       },
    { "@type": "ListItem", position: 3, name: "Services", item: `${siteUrl}/#services`    },
    { "@type": "ListItem", position: 4, name: "Process",  item: `${siteUrl}/#process`     },
    { "@type": "ListItem", position: 5, name: "Team",     item: `${siteUrl}/#team`        },
    { "@type": "ListItem", position: 6, name: "Contact",  item: `${siteUrl}/#contact`     },
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
