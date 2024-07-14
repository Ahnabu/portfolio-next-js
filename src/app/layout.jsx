import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";


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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
              </head>
      <body className={JetBrains.variable}>
        <Header></Header>
       
        <StairTransition></StairTransition>
        <PageTransition>
          {children}
          <Analytics />
          <SpeedInsights/>
        </PageTransition>
       {/* <Footer/> */}
      </body>
    </html>
  );
}
