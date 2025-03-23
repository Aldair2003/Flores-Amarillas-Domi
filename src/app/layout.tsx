// Metadata estática
export const metadata = {
  title: "Para mi Domi 💛",
  description: "Con todo mi amor para Domi",
};

import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen relative overflow-hidden">
          <AnimatedBackground />
          {/* Contenido principal */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
