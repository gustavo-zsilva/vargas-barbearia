import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vargas Barbearia | Sua barbearia de confiança",
  description: "A Barbearia Vargas é a melhor barbearia da região, com atendimento especializado, ambiente agradável e satisfação garantida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth motion-reduce:scroll-auto">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
