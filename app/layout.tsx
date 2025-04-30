import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brat标注工具站 | Brat Tag Gen",
  description: "免费Brat专辑封面制作器｜模仿Charli XCX标志性美学，输入文字自动生成荧光绿+小写字体设计，支持PNG/SVG格式导出，适用于Instagram/TikTok视觉包装，设计师与粉丝必备的在线图片工具",
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
