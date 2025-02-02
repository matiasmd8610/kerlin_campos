import { Montserrat } from 'next/font/google';
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
  title: "Kerlin Campos",
  description: "Pensamos Proyectos productivos a medida de nuestros cliente",
  keywords: "comercialización de campos",
  icons: {
    icon: "/images/favicon.png"
  },
};

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <GoogleAnalytics />
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
