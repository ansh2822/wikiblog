import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat_Subrayada } from "next/font/google";

const mont = Montserrat_Subrayada({
  weight: "700",
  preload: false,
});

export const metadata = {
  title: "MINI WIKI",
  description: "A wikipedia page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.className} bg-[#2c2c2c] text-white`}>
        <div className="flex flex-col h-screen m-10 ">
          <Navbar />
          <div className="pt-10 border-t " style={{ textDecoration: "none" }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
