import { Roboto } from "next/font/google";
import Header from "@/components/Header";

import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import CustomFooter from "@/components/CustomFooter";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  
})






export const metadata = {
  title: "Novi Početak",
  description: "Selidbe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-customGreen  transition-all duration-1000 text-white  antialiased `}
      >
        <Header/>

        {children}
        <SpeedInsights/>
        <CustomFooter/>
      </body>
    </html>
  );
}
