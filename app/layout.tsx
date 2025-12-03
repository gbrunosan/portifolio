import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IFMS Portfólio - Gerson",
  description: "Portfólio para a matéria de Eletiva",
};

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative flex items-center min-h-screen flex-col">
            <SiteHeader />
            <div className="flex justify-center items-center w-full">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
