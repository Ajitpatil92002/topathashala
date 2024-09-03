import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TopaThashala",
  description:
    "TopaThashala is an innovative SaaS software designed to streamline educational management and enhance the learning experience. Our platform offers a comprehensive suite of tools to manage classrooms, track progress, and engage students effectively.",
  keywords: [
    "TopaThashala",
    "education SaaS",
    "school management software",
    "classroom management",
    "student engagement",
    "learning platform",
  ],
  authors: [
    {
      name: "TopaThashala Team",
      url: "https://topathashala.app",
    },
  ],
  creator: "TopaThashala",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://topathashala.app",
    title: "TopaThashala",
    description:
      "TopaThashala is an innovative SaaS software designed to streamline educational management and enhance the learning experience.",
    siteName: "TopaThashala",
    images: [
      {
        url: `/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "TopaThashala SaaS Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TopaThashala",
    description:
      "TopaThashala is an innovative SaaS software designed to streamline educational management and enhance the learning experience.",
    images: [`/opengraph-image.png`],
    creator: "@TopaThashala",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
