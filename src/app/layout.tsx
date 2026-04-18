import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Figtree } from "next/font/google";



export const metadata: Metadata = {
  title: 'Nexus Luxe | Premium Electronics & Lifestyle Store',
  description: 'Nexus Luxe offers a curated selection of high-end electronics and lifestyle accessories for the modern trendsetter. Discover innovation and elegance today.',
  openGraph: {
    "title": "Nexus Luxe | Premium Electronics & Lifestyle Store",
    "description": "Experience the blend of cutting-edge technology and luxury lifestyle goods.",
    "siteName": "Nexus Luxe"
  },
};

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${figtree.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
