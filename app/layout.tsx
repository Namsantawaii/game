import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "타이어트랙 양재점 - 슈퍼카 전문 타이어 정비소 | 서울 양재",
  description: "슈퍼카 전문 작업, 3D 휠얼라인먼트, 타이어 지참 장착 OK. 서울 서초구 양재동 위치. 정품 타이어 합리적 가격. 전화: 0507-1351-6657",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingButtons />
        </div>
      </body>
    </html>
  );
}
