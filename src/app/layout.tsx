import type { Metadata } from "next";
import { StoreProvider } from "@/store/provider";
import { SessionOverlay } from "@/components/features/auth/session-overlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "Etan",
  description: "Etan — fashion, made for you.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
          <SessionOverlay />
        </StoreProvider>
      </body>
    </html>
  );
}