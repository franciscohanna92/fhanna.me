import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";

const inter = DM_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Francisco Hanna",
  description: "Product-focused Software Engineer",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-stone-100 print:bg-stone-50">
      <body className={`p-16 print:p-8 prose bg-stone-50 border-x border-stone-200 max-w-4xl mx-auto ${inter.className}`}>
        {children}
        {/* <footer>
          <p className="text-sm border-t border-stone-200 pt-8 text-stone-500 mt-10 mb-0">{new Date().getFullYear()}</p>
        </footer> */}
      </body>
    </html>
  );
}
