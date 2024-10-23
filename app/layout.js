import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"], 
  variable: "--font-lexend",
  display: "swap", 
});

export const metadata = {
  title: "Pokemon Search App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
