import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const banglaMN = localFont({
  src: "../../public/fonts/Bangla_MN.ttf",
  variable: "--font-bangla",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deepblue Capital Partners",
    template: "%s | Deepblue Capital Partners",
  },
  description:
    "A forward-thinking private equity firm dedicated to strategic real estate investments.",
  metadataBase: new URL("https://deepbluepartners.co"),
  openGraph: {
    siteName: "Deepblue Capital Partners",
    type: "website",
    locale: "en_US",
    description:
      "A forward-thinking private equity firm dedicated to strategic real estate investments.",
  },
};

// Render at device width on phones (otherwise mobile Safari assumes a ~980px
// desktop viewport and scales the whole page down). Pinch-zoom left enabled
// for accessibility — no maximumScale / userScalable.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${banglaMN.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
