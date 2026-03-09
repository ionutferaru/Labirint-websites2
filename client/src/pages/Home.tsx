import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero.png";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="LABIRINT Club Interior" 
            className="w-full h-full object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 mt-20">
          <motion.p 
            initial={{ opacity: 0, tracking: "0em" }}
            animate={{ opacity: 1, tracking: "0.2em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-gold-light text-sm md:text-base uppercase mb-4"
          >
            Premium Nightlife Experience
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 tracking-wider drop-shadow-2xl"
          >
            LABIRINT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 font-light tracking-wide mb-12 max-w-xl mx-auto"
          >
            Luxury Gentlemen’s Club in [CITY]
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gold-gradient text-black font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-300"
            >
              Reserve Now
            </a>
            <Link href="/menu">
              <a className="px-8 py-4 border border-white/30 text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-300">
                View Menu
              </a>
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-light to-transparent opacity-50"></div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 bg-black relative">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-gold-gradient mb-8">About LABIRINT</h2>
            <div className="w-12 h-[1px] bg-gold-gradient mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
              “LABIRINT is an exclusive gentlemen’s club offering a premium nightlife experience in [CITY]. 
              Enjoy signature drinks, elegant atmosphere and unforgettable nights.”
            </p>
            <p className="mt-8 text-gold-light/60 tracking-widest uppercase text-sm font-semibold">
              18+ Only
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PRIVATE EVENTS SECTION */}
      <section id="events" className="py-32 px-6 relative bg-[#0a0a0a] border-y border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/5 via-black to-black pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Private Events & Bachelor Parties</h2>
                <ul className="space-y-6 mb-10">
                  {['Bachelor Parties', 'Private Events', 'Birthday Celebrations', 'VIP Group Nights'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/70 text-lg">
                      <span className="w-2 h-2 rounded-full bg-gold-light"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/60 italic text-lg mb-10">
                  "Full venue rental available. Custom packages on request."
                </p>
                <a href="#contact" className="inline-block px-8 py-4 border-gold-gradient text-white hover-bg-gold-gradient transition-all duration-300 tracking-widest uppercase text-sm">
                  Inquire Now
                </a>
              </div>
              <div className="relative aspect-square md:aspect-[4/5]">
                <img src={gallery2} alt="VIP Lounge" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 border border-gold-light/20 scale-[0.95]"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif text-center text-white mb-16">The Experience</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative aspect-square overflow-hidden cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  <img 
                    src={img} 
                    alt={`Gallery ${i+1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </FadeIn>
            ))}
            
            {/* Additional placeholder spots to complete the grid */}
            <FadeIn delay={0.4}>
              <div className="group relative aspect-square overflow-hidden bg-white/5 flex items-center justify-center">
                 <p className="text-white/30 font-serif tracking-widest uppercase">More Coming Soon</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-[#050505]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Location */}
            <FadeIn>
              <h2 className="text-4xl font-serif text-white mb-8">Find Us</h2>
              <div className="w-12 h-[1px] bg-gold-gradient mb-8"></div>
              <p className="text-white/70 mb-8 text-lg">
                Located in the heart of [CITY].<br/>
                <span className="text-white/40 italic">Address coming soon.</span>
              </p>
              <div className="w-full aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-white/30 tracking-widest uppercase text-sm">Google Maps Placeholder</p>
              </div>
            </FadeIn>

            {/* Contact */}
            <FadeIn delay={0.2}>
              <h2 className="text-4xl font-serif text-white mb-8">Reservations</h2>
              <div className="w-12 h-[1px] bg-gold-gradient mb-8"></div>
              <p className="text-white/70 mb-12 text-lg">
                For reservations and private bookings contact us:
              </p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Phone</p>
                  <a href="tel:+" className="text-2xl text-white hover:text-gold-light transition-colors">+1 (555) 123-4567</a>
                </div>
                <div>
                  <p className="text-white/40 text-sm tracking-widest uppercase mb-2">WhatsApp</p>
                  <a href="#" className="text-2xl text-white hover:text-gold-light transition-colors">+1 (555) 123-4567</a>
                </div>
                <div>
                  <p className="text-white/40 text-sm tracking-widest uppercase mb-2">Instagram</p>
                  <a href="#" className="text-2xl text-white hover:text-gold-light transition-colors">@labirint_club</a>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </section>
    </div>
  );
}
