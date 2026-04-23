import "./globals.css"; 
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
return (
  <html>
    <body>
      <main>
        <Navbar />
        <div className="content-wrapper">
          {children} 
        </div>
        <Footer />
      </main>
    </body>
  </html>
);
}