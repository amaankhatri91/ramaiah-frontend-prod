import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
// import Header1 from "@/componets/Header/Header1";
// import Header2 from "@/componets/Header/Header2";
import FooterWrapper from "@/componets/Footer/FooterWrapper";
import CopyRight from "@/componets/Footer/CopyRight";
import MainHeader from "@/componets/Header/MainHeader";
import { Providers } from "@/lib/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: {
    default: "Medical Center - Comprehensive Healthcare Services",
    template: "%s | Medical Center",
  },
  description:
    "Explore our comprehensive range of medical departments and specialties. Expert healthcare professionals dedicated to your well-being. Book appointments online.",
  keywords: [
    "medical center",
    "healthcare",
    "hospital",
    "medical departments",
    "specialists",
    "doctors",
    "appointments",
    "emergency care",
    "surgery",
    "cardiology",
    "neurology",
    "orthopedics",
  ],
  authors: [{ name: "Medical Center Team" }],
  creator: "Medical Center",
  publisher: "Medical Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://medical-center.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medical-center.com",
    siteName: "Medical Center",
    title: "Medical Center - Comprehensive Healthcare Services",
    description:
      "Explore our comprehensive range of medical departments and specialties. Expert healthcare professionals dedicated to your well-being.",
    images: [
      {
        url: "/assets/Footer.png",
        width: 1200,
        height: 630,
        alt: "Medical Center - Healthcare Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Center - Comprehensive Healthcare Services",
    description:
      "Explore our comprehensive range of medical departments and specialties.",
    images: ["/assets/Footer.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={manrope.variable}
        suppressHydrationWarning={true}
      >
        <Providers>
          {/* <div className="sticky top-0 z-50">
            <Header1 />
            <Header2 />
          </div> */}
          <MainHeader />
          {children}
          <div className="bg-[linear-gradient(90deg,#179BE4_0%,#D60F8C_100%),linear-gradient(180deg,rgba(60,4,34,0)_0%,#1F0011_100%)] min-[800px]:rounded-tl-[64px] min-[800px]:rounded-tr-[64px]">
            <FooterWrapper />
            <CopyRight />
          </div>
        </Providers>
      </body>
    </html>
  );
}
