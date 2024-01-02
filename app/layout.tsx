import type {Metadata} from "next";
import {Chakra_Petch} from "next/font/google";

import {GithubIcon, LucideLinkedin, TwitterIcon} from "lucide-react";

import "./globals.css";

const inter = Chakra_Petch({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Francisco Hanna",
  description: "Product-focused Software Engineer",
};

const social = [
  {
    name: "GitHub",
    href: "https://github.com/franciscohanna92",
    icon: GithubIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/fhanna92",
    icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fhanna92",
    icon: LucideLinkedin,
  },
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-stone-100 print:bg-stone-50 mx-auto">
      <body
        className={`px-6 py-16 sm:px-16 print:p-8 bg-stone-50 border-x border-stone-200 max-w-4xl print:max-w-full mx-auto prose ${inter.className}`}
      >
        {children}
        {/* <footer>
          <p className="text-sm border-t border-stone-200 pt-8 text-stone-500 mt-10 mb-0">{new Date().getFullYear()}</p>
        </footer> */}

        {/* Social links */}
        <footer className="text-center space-y-8 print:hidden border-t pt-8 mt-8 text-stone-800">
          <div className="flex items-center gap-4 justify-center">
            {social.map((item) => (
              <a
                title={item.name}
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-content-center p-4 h-8 w-8 opacity-100 hover:opacity-60 cursor-pointer transition"
              >
                <item.icon />
              </a>
            ))}
          </div>
          <p className="text-sm">{new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
