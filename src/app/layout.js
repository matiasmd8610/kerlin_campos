import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kerlin Campos",
  description: "Pensamos Proyectos productivos a medida de nuestros cliente",
  keywords: "comercialización de campos",
  icons: {
    icon: "/images/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
