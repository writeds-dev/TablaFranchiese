import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      <AppRouterCacheProvider options={{ key: 'css' }}>
        <main>{children}</main>
      </AppRouterCacheProvider>
      <Footer />
    </div>
  );
}
