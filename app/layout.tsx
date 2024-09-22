import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rohit Rayaan Portfolio",
  description: "Made by By Rohit Rayaan with the help of human brain and AI",
  keywords: "UX/UI Designer, Web Developer, Linux Enthusiast, Next.js, React, Portfolio",
  openGraph: {
    title: "Rohit Rayaan - Portfolio",
    description: "Welcome to my portfolio! I'm a UX/UI Designer and Web Developer.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    // image: "/path/to/preview-image.jpg", // Replace with the actual path to your preview image
    siteName: "Rohit Rayaan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Rayaan - Portfolio",
    description: "Welcome to my portfolio! I'm a UX/UI Designer and Web Developer.",
    // image: "/path/to/preview-image.jpg", // Replace with the actual path to your preview image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
