
import { Manrope } from "next/font/google";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import Header from "@/app/ui/Layout/Header/Header";
import Footer from "@/app/ui/Layout/Footer/Footer";
import StoreProvider from "@/app/StoreProvider";


const manrope = Manrope({ subsets: ["latin"] });


export const metadata = {
  title: "Audiophile",
  description: "Best gears for your music experience.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body className={manrope.className}>
    <Header/>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    <Footer/>
      </body>
    </html>
    </StoreProvider>
  );
}
