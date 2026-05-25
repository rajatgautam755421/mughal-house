import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorEffect from "@/components/CursorEffect";

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
  themeColor: "#1e52b8",
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
      <body className="font-sans antialiased text-dark-50 selection:bg-gold-500 selection:text-dark-900" suppressHydrationWarning>

        {/* ── Fixed atmospheric canvas ── */}
        <div
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}
        >
          {/* Midnight base */}
          <div style={{ position: "absolute", inset: 0, background: "#070c14" }} />

          {/* Orb 1 — dominant royal-blue, upper-right */}
          <div style={{
            position: "absolute",
            top: "-20%", right: "-14%",
            width: "80vw", height: "80vw",
            maxWidth: "1000px", maxHeight: "1000px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,79,156,0.38) 0%, rgba(30,79,156,0.14) 42%, transparent 68%)",
            filter: "blur(100px)",
          }} />

          {/* Orb 2 — deep indigo, center-left */}
          <div style={{
            position: "absolute",
            top: "25%", left: "-20%",
            width: "70vw", height: "70vw",
            maxWidth: "840px", maxHeight: "840px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,48,128,0.26) 0%, rgba(20,48,128,0.08) 45%, transparent 70%)",
            filter: "blur(110px)",
          }} />

          {/* Orb 3 — center viewport — fills the mid-screen */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw", height: "60vw",
            maxWidth: "720px", maxHeight: "720px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,40,100,0.14) 0%, rgba(14,40,100,0.04) 50%, transparent 70%)",
            filter: "blur(120px)",
          }} />

          {/* Orb 4 — secondary royal-blue, lower-right */}
          <div style={{
            position: "absolute",
            bottom: "10%", right: "-10%",
            width: "52vw", height: "52vw",
            maxWidth: "620px", maxHeight: "620px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(58,100,184,0.20) 0%, rgba(58,100,184,0.06) 50%, transparent 70%)",
            filter: "blur(90px)",
          }} />

          {/* Orb 5 — warm gold, bottom-left */}
          <div style={{
            position: "absolute",
            bottom: "-10%", left: "12%",
            width: "44vw", height: "44vw",
            maxWidth: "520px", maxHeight: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,67,0.10) 0%, rgba(201,168,67,0.03) 50%, transparent 70%)",
            filter: "blur(85px)",
          }} />

          {/* Edge vignette — softly darkens corners */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(3,5,12,0.55) 100%)",
          }} />

          {/* Noise grain texture */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundSize: "250px 250px",
            opacity: 0.042,
            mixBlendMode: "overlay",
          }} />
        </div>

        {/* ── Cursor enhancement (desktop only) ── */}
        <CursorEffect />

        {/* ── Page content (above canvas) ── */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
