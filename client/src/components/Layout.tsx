import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold/30 selection:text-gold-light">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <a className="font-serif text-2xl tracking-widest text-white hover:text-gold-light transition-colors">
              LABIRINT
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center text-sm tracking-wider uppercase text-white/80">
            <Link href="/"><a className="hover:text-gold-light transition-colors">Home</a></Link>
            <Link href="/menu"><a className="hover:text-gold-light transition-colors">Menu</a></Link>
            <a href="/#events" className="hover:text-gold-light transition-colors">Private Events</a>
            <a href="/#gallery" className="hover:text-gold-light transition-colors">Gallery</a>
            <a href="/#contact" className="px-5 py-2 border-gold-gradient text-white hover-bg-gold-gradient transition-all duration-300">
              Reservations
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 text-xl font-serif text-center">
              <Link href="/"><a className="text-white hover:text-gold-light">Home</a></Link>
              <Link href="/menu"><a className="text-white hover:text-gold-light">Menu</a></Link>
              <a href="/#events" className="text-white hover:text-gold-light" onClick={() => setIsMobileMenuOpen(false)}>Private Events</a>
              <a href="/#gallery" className="text-white hover:text-gold-light" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="/#contact" className="text-gold-light mt-4" onClick={() => setIsMobileMenuOpen(false)}>Reservations</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gold-gradient"></div>
        <div className="container mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-serif text-3xl tracking-widest text-white/90">LABIRINT</h2>
          <p className="text-white/50 text-sm tracking-widest uppercase">Premium Nightlife Experience</p>
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-white/50 hover:text-gold-light transition-colors">Instagram</a>
            <a href="#" className="text-white/50 hover:text-gold-light transition-colors">WhatsApp</a>
            <a href="#" className="text-white/50 hover:text-gold-light transition-colors">Contact</a>
          </div>
          <p className="text-white/30 text-xs mt-12 tracking-widest">
            © 2026 LABIRINT Gentlemen’s Club – 18+ Only
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/40768526104?text=Hello%2C%20I%20want%20to%20book%20a%20table%20at%20LABIRINT%20Gentlemen%27s%20Club%20for%20__%20persons"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors hover:scale-110 duration-300 flex items-center gap-3 font-semibold tracking-wide text-sm uppercase"
        aria-label="Book Table on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>Book Table</span>
      </a>
    </div>
  );
}
