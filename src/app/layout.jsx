import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ParticleBackground from "@/components/ParticleBackground";

const JetBrains = JetBrains_Mono({
  subsets: ["latin"], weight: ['100', '200', '300', '400', '500','600','700','800'
  ],
variable:'--font-JetBrains'});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Syed Md Abu Horira.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={JetBrains.variable}>
        <Header></Header>
        <ParticleBackground/>
        <StairTransition></StairTransition>
        <PageTransition>
          {children}
        </PageTransition>
       
      </body>
    </html>
  );
}
