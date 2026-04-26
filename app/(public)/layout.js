import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsappFloat from "@/components/WhatsappFloat";

export default function PublicLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
