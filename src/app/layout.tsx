
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Kaisei_Decol } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kaiseiDecol = Kaisei_Decol({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-kaisei-decol',
});

export const metadata: Metadata = {
  title: "ひらり生活の稟議 Official WEB Site",
  description: "東京都を中心に活動するロックバンド「ひらり生活の稟議」の公式WEBサイトです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} ${kaiseiDecol.variable} antialiased font-kaisei`}>
        {/* 背景画像とオーバーレイ */}
        <div className="fixed inset-0 z-[-1]">
          <div 
            className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center bg-fixed"
            style={{ opacity: '0.1' }}  // 透過度を調整
          />
          <div className="absolute inset-0 bg-white/640" />  {/* オーバーレイ */}
        </div>

        {/* メインコンテンツ */}
        <div className="flex flex-col min-h-screen">
          <PageTransition>
            <Navigation />
            {children}
            <Footer />
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
