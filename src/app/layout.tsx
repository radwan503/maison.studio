import type { Metadata } from "next";
import "./globals.css";
import "@/styles/index.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "@/components/_common/Navbar";
import Footer from "@/components/_common/Footer";

export const metadata: Metadata = {
  title: "Furniture World – Modern Furniture & Interior Design",
  description:
    "Discover premium furniture and modern interior design solutions for your home. Create stylish, comfortable, and elegant living spaces with Furniture World.",
  keywords: [
    "Furniture",
    "Interior Design",
    "Modern Furniture",
    "Home Decor",
    "Living Room Design",
    "Bedroom Furniture",
    "Next.js Furniture Website",
    "React Furniture UI",
  ],
  authors: [
    { name: "Radwan Anik", url: "https://radwananik.netlify.app/" },
  ],
  creator: "Radwan Anik",
  publisher: "Furniture World",

  openGraph: {
    title: "Furniture World – Modern Furniture & Interior Design",
    description:
      "Explore modern furniture collections and elegant interior design ideas for your dream home.",
    url: "https://yourdomain.com", // replace with your domain
    siteName: "Furniture World",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Furniture World Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Furniture World – Modern Furniture & Interior Design",
    description:
      "Premium furniture and beautiful interior design inspiration for modern homes.",
    creator: "@yourhandle", // replace with your Twitter handle
    images: ["https://yourdomain.com/og-image.png"], // replace with your OG image
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Navbar />
          {children}
          <Footer />
          </AntdRegistry>
      </body>
    </html>
  );
}