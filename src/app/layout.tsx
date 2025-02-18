import type { Metadata } from "next";
import "./globals.css";
import RequestProvider from "../context/request_context";
import SEOContent from "@/components/seo_content";

export const viewport = {
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  themeColor: "#6b6ea5",
}

export const metadata: Metadata = {
  title: "Mother of Invention – Find the Perfect Name!",
  description: "Find the perfect name for your baby with our AI-powered name generator. Discover unique, meaningful, and trending baby names based on your preferences.",
  keywords: "baby names, name generator, unique baby names, AI baby names, name inspiration, baby name ideas, boy names, girl names, unisex names, baby name meanings",
  authors: [{ name: "Mother of Invention", url: "https://babynames.motherofinvention.com/" }],
  icons: [
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon_moi.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon_moi.png" }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Mother of Invention – Find the Perfect Name!",
    description: "Discover unique and meaningful baby names with our AI-powered name generator. Get inspired with personalized name suggestions based on your preferences.",
    url: "https://babynames.motherofinvention.com/",
    type: "website",
    images: [
      {
        url: "https://babynames.motherofinvention.com/favicon_moi.png",
        width: 1200,
        height: 630,
        alt: "Mother of Invention – AI-powered baby name generator",
      },
    ],
    siteName: "Mother of Invention",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mother of Invention – Find the Perfect Name!",
    description: "Find the perfect baby name with our AI-powered name generator.",
    images: "https://babynames.motherofinvention.com/HorizontalLogo_moi.png"
  },
  alternates: {
    canonical: "https://babynames.motherofinvention.com/",
  },
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "twitter:image:alt": "Mother of Invention – AI-powered baby name generator",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <SEOContent />
        <RequestProvider>
          {children}
        </RequestProvider>
      </body>
    </html>
  );
}
