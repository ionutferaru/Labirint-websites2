import { motion } from "framer-motion";
import { Link } from "wouter";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const MenuSection = ({ title, items, delay }: { title: string; items: any[]; delay: number }) => (
  <FadeIn delay={delay}>
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-serif text-gold-gradient mb-10 text-center">{title}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold-light/30 transition-all duration-300">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-serif text-white group-hover:text-gold-light transition-colors">{item.name}</h3>
              <span className="text-white/30 text-sm tracking-widest">ASK</span>
            </div>
            {item.desc && (
              <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </FadeIn>
);

export default function Menu() {
  const menuData = [
    {
      title: "Premium Drinks",
      items: [
        { name: "Johnnie Walker Blue Label", desc: "Premium blended scotch whisky." },
        { name: "Macallan 18 Years", desc: "Single malt scotch whisky." },
        { name: "Hennessy X.O", desc: "Extra old cognac." },
        { name: "Don Julio 1942", desc: "Premium tequila añejo." },
      ]
    },
    {
      title: "Champagne",
      items: [
        { name: "Dom Pérignon", desc: "Vintage champagne." },
        { name: "Louis Roederer Cristal", desc: "Exceptional vintage champagne." },
        { name: "Armand de Brignac", desc: "Prestige cuvée champagne." },
        { name: "Moët & Chandon Rosé", desc: "Imperial rosé champagne." },
      ]
    },
    {
      title: "Signature Cocktails",
      items: [
        { name: "The Labirint", desc: "Premium vodka, blackberry liqueur, gold flakes." },
        { name: "Midnight Kiss", desc: "Gin, elderflower, fresh lime, prosecco top." },
        { name: "Velvet Old Fashioned", desc: "Bourbon, dark cherry syrup, angostura bitters." },
        { name: "Gold Rush", desc: "Tequila, honey syrup, fresh lemon juice." },
      ]
    },
    {
      title: "Soft Drinks",
      items: [
        { name: "Premium Still Water", desc: "Voss or Acqua Panna." },
        { name: "Sparkling Water", desc: "San Pellegrino." },
        { name: "Craft Sodas", desc: "Assorted flavors." },
        { name: "Energy Drinks", desc: "Red Bull, Sugar-Free." },
      ]
    }
  ];

  return (
    <div className="w-full pt-32 pb-20 px-6 min-h-screen relative">
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black"></div>
      
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Menu</h1>
            <div className="w-16 h-[1px] bg-gold-gradient mx-auto mb-8"></div>
            <p className="text-white/60 tracking-widest uppercase text-sm">Curated Selection</p>
          </div>
        </FadeIn>

        <div className="space-y-10">
          {menuData.map((section, index) => (
            <MenuSection 
              key={index} 
              title={section.title} 
              items={section.items} 
              delay={0.2 + (index * 0.1)} 
            />
          ))}
        </div>

        <FadeIn delay={0.8}>
          <div className="mt-20 text-center">
            <Link href="/">
              <a className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
                <span className="text-gold-light">←</span> Back to Home
              </a>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
