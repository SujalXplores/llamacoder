import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

const title = "Llama Coder – AI Code Generator";
const description = "Generate your next app with Llama 3.1 405B";
const url = "https://llamacoder.io/";
const ogImage = "https://llamacoder.io/og-image.png";
const siteName = "llamacoder.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogImage],
    title,
    description,
    url,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="llamacoder.io" />
      </head>

      {children}
    </html>
  );
}
