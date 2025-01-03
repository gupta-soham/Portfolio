import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import ActiveHeaderContextProvider from "@/context/ActiveHeaderContextProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sohamgupta.co/"),
  title: {
    default: "Soham Gupta | Personal Portfolio",
    template: `%s | Soham Gupta`,
  },
  description:
    "Soham is a full-stack developer currently pursuing his Bachelor's degree and is proficient in full stack development.",
  openGraph: {
    description:
      "Soham is a full-stack developer currently pursuing his Bachelor's degree and is proficient in full stack development.",
    images: ["/og.png"],
    url: "https://sohamgupta.co/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Gupta | Personal Portfolio",
    description:
      "Soham is a full-stack developer currently pursuing his Bachelor's degree and is proficient in full stack development.",
    creator: "@sohamgpt",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]  sm:w-[68.75rem"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveHeaderContextProvider>
          <Header />
          {children}

          <Toaster position="bottom-center" reverseOrder={true} />
          <Footer />
        </ActiveHeaderContextProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
