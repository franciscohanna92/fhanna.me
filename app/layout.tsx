import type {Metadata} from "next";
import {Chakra_Petch} from "next/font/google";
import "./globals.css";

const inter = Chakra_Petch({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Francisco Hanna",
  description: "Product-focused Software Engineer",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-stone-100 print:bg-stone-50">
      <body className={`px-6 py-16 sm:px-16 print:p-8 prose bg-stone-50 border-x border-stone-200 max-w-4xl mx-auto ${inter.className}`}>
        {children}
        {/* <footer>
          <p className="text-sm border-t border-stone-200 pt-8 text-stone-500 mt-10 mb-0">{new Date().getFullYear()}</p>
        </footer> */}
      </body>
    </html>
  );
}
