import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildRootMetadata, buildStructuredData } from "@/lib/seo";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata = buildRootMetadata();

export default function RootLayout({ children }) {
  const structuredData = buildStructuredData();

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var x=t||(d?'dark':'light');document.documentElement.setAttribute('data-theme',x);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <AmbientBackground />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
