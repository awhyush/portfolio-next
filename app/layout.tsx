import type { Metadata } from "next";
import localFont from "next/font/local";
import Background from "@/components/Background";
import Dock from "@/components/Dock";
import ResumeOverlay from "@/components/ResumeOverlay";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { profile } from "@/lib/data";
import { siteUrl, siteName } from "@/lib/site";
import "./globals.css";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  style: "normal",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    profile.name,
    "Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Java Spring Boot",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description: profile.tagline,
    siteName,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: profile.location,
  },
  sameAs: [profile.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${satoshi.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans selection-red relative overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
          >
            Skip to content
          </a>
          <Background />
          <div className="gradient-blur" aria-hidden="true" />
          <ResumeOverlay />
          <div className="relative z-10 flex min-h-full flex-1 flex-col pb-28">
            {children}
          </div>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
