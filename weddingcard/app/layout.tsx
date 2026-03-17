import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GsapProvider from "../components/GsapProvider";

const editorialNew = localFont({
  src: [
    {
      path: "../public/editorial-new-font-family/PPEditorialNew-Ultralight-BF644b21500d0c0.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/editorial-new-font-family/PPEditorialNew-Regular-BF644b214ff145f.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/editorial-new-font-family/PPEditorialNew-Italic-BF644b214fb0c0a.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/editorial-new-font-family/PPEditorialNew-Ultrabold-BF644b21500840c.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-editorial",
});

const suisse = localFont({
  src: [
    {
      path: "../public/suisse-font-family/SuisseIntlTrial-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/suisse-font-family/SuisseIntlTrial-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/suisse-font-family/SuisseIntlTrial-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/suisse-font-family/SuisseIntlTrial-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-suisse",
});

export const metadata: Metadata = {
  title: "Oliver & Nguyen | The Wedding",
  description: "Join us to celebrate the wedding of Oliver and Nguyen. A luxurious, elegant editorial experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${suisse.variable} ${editorialNew.variable} font-suisse antialiased bg-background text-foreground`}
      >
        <GsapProvider>
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
