import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "RBK Events",
    template: "%s | RBK Events",
  },
  description:
    "RBK Events is a premium event company organising ceremonies, receptions, engagements, birthday functions, private celebrations, select corporate functions, decor, and event media.",
  keywords: [
    "RBK Events",
    "event organiser Bengaluru",
    "function organiser Bangalore",
    "Indian celebration planner",
    "reception event planner",
    "engagement event planner",
    "haldi mehendi event planner",
    "birthday party planner Bengaluru",
    "corporate event organiser Bengaluru",
    "event decor Bengaluru",
  ],
  metadataBase: new URL("https://rbk-events.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "RBK Events",
    title: "RBK Events",
    description:
      "Premium celebration, birthday party, and corporate event organisation with decor, stage, guest flow, photo, and video coverage.",
    images: [
      {
        url: "/rbk/rbk-events-logo.svg",
        width: 1200,
        height: 630,
        alt: "RBK Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RBK Events",
    description: "Premium celebration, birthday party, and corporate event organisation.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
