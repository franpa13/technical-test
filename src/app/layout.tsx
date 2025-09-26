import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../components/theme/theme-provider';
import { ModeToggle } from "@/components/theme/mode-toggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rocket - Conecta con tus amigos",
    template: "%s | Rocket"
  },
  description: "Conecta con tus amigos y mira que hacen en su dia a dia.",
  keywords: ["instagramers", "influencers"],
  authors: [{ name: "Rocket Social" }],
  creator: "jujedev",
  publisher: "jujedev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techconnect-app.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Rocket',
    title: 'Rocket - Red Social',
    description: 'Conecta, comparte e interactua.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechConnect - Developer Social Platform',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icons/rocket-svg.svg', sizes: 'any' },
      { url: '/icons/rocket-svg.svg', type: 'image/svg+xml', sizes: '32x32' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}


        </ThemeProvider>


      </body>
    </html>
  );
}
