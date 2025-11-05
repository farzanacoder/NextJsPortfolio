import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/app/layouts/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import ReasponsiveNav from "./Navber/ResponsiveNav";


export const metadata: Metadata = {
  title: "farzanacoder",
  description: "I’m Farzana Islam, a Front-End developer specializing in React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReasponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
