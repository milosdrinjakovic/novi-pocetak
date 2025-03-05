import { Roboto } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
