import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

export const metadata: Metadata = {
  title: "Sparsh Shankhdhar | AI Engineer & Developer",
  description: "Portfolio of Sparsh Shankhdhar, an aspiring AI Generalist, Vibe Coder, and Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NoiseOverlay />
        <CustomCursor />
        <ThreeCanvas />
        <Navbar />
        <main style={{position: "relative", zIndex: 10}}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
