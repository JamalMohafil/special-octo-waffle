import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cairo = localFont({
  src: [
    {
      path: "./fonts/Cairo-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Cairo-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} overflow-x-hidden font-cairo antialiased`} dir="rtl">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
