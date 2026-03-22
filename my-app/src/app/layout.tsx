import "./globals.css"; 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <Navbar />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}