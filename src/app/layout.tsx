import type { Metadata } from "next";
import { StoreProvider } from "@/store/provider";
import { SessionOverlay } from "@/components/features/auth/session-overlay";
import "./globals.css";
import { ToastHost } from "@/components/shared/toast/ToastHost";
import { GoogleTagManager } from "@next/third-parties/google";


export const metadata: Metadata = {
  title: "ETAAN - ইতাণ",
  description: "ইতাণ — fashion, made for you.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "ETAAN - ইতাণ",
    description: "ইতাণ — fashion, made for you.",
    images: ["/MetaIcon.png"],
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5CKW54PB" />
      <body>
        <StoreProvider>
          {children}
          <SessionOverlay />
          <ToastHost />
        </StoreProvider>
      </body>
    </html>
  );
}