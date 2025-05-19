"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "Fresh & Flavorful",
    description: "Chef-driven menu with a modern twist on traditional recipes.",
    icon: "https://images.unsplash.com/photo-1660652378682-ee2b4f1440df?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Diverse Influences",
    description: "A menu that celebrates flavors from across India and beyond.",
    icon: "https://images.unsplash.com/photo-1707531288680-e8ce8fbbd0f2?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Live Cooking Experience",
    description: "Guests enjoy watching their meals prepared in a vibrant, open kitchen.",
    icon: "https://images.unsplash.com/photo-1659468550823-3fc043085f40?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Efficient Model",
    description:
      "Streamlined operations with lower startup costs and high profitability potential.",
    icon: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&auto=format&fit=crop&q=60",
  },
];

export default function TablaFranchisePage() {
  const router = useRouter();

  const goToForm = useCallback(() => {
    router.push("/contactUs");
  }, [router]);

  const fadeUpVariants = useMemo(() => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }), []);

  const floatingLetters = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${index}`}
      className="inline-block"
      initial={{ y: 0 }}
      animate={{ y: [-10, 0, -10] }} 
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        delay: index * 0.15, 
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};
  return (
    
    <main className="min-h-screen bg-neutral-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <header
        aria-label="Hero section showcasing Tabla Franchise"
        className="relative flex items-center justify-center py-6 md:py-16 px-4 md:px-16 bg-neutral-950 text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705743244501-a88b02c524fb?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10"
        />
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-5xl md:text-5xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F4D58D] via-[#f0c254] to-[#cba02e] leading-tight tracking-tight drop-shadow-2xl">
              Modern Indian Fine Dining Franchise <br />
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-lg max-w-3xl mx-auto md:mx-0 font-light leading-relaxed tracking-wide opacity-90">
              Offer a Casual Venue in Your Area for Indian and Asian Food Lovers.
              Tabla is offering fast casual franchising opportunities to offer
              fresh, flavorful, and authentic Indian Cuisine to entrepreneurs.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4 ">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToForm}
                className="bg-gradient-to-r from-[#ff3c3c] to-[#7D0C0C] hover:from-[#e63333] hover:to-[#5b0909] text-md sm:text-xl px-8 py-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#7D0C0C] transition-all duration-300 ease-in-out"
                aria-label="Contact us about Tabla Franchise"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: true }}
  className="flex justify-center md:justify-end"
>
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut"
    }}
    className="inline-block"
  >
    <Image
      src="/shared/burger.png"
      alt="Tabla signature dish - Burger Element"
      width={360}
      height={340}
      priority
      className="object-contain drop-shadow-2xl translate-x-5 transition-transform hover:scale-105"
      loading="eager"
      placeholder="blur"
      blurDataURL="/shared/burger-blur.png"
    />
  </motion.div>
</motion.div>

        </div>
      </header>
       {/* Why Choose Tabla Section */}
      <section
        className="bg-black px-6 md:px-20 py-20"
        aria-labelledby="why-choose-tabla"
      >
        <h2
          id="why-choose-tabla"
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-wide"
        >
          Why Choose Tabla Fast Casual?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {features.map((item, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative bg-gradient-to-tl from-[#ff3c3c] to-[#7D0C0C] rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl cursor-pointer"
              tabIndex={0}
              aria-label={item.title}
            >
              <div
                className="w-full h-72 bg-cover bg-center group-hover:scale-105 transition-all duration-300"
                style={{ backgroundImage: `url(${item.icon})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
              <div className="relative z-10 p-6 bg-black/60 text-center rounded-b-2xl">
                <h3 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>


      {/* Fast Casual Features Section */}
      <section
        aria-labelledby="fast-casual-heading"
        className="px-4 sm:px-6 lg:px-20 py-16 sm:py-20 bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/shared/gold-border.png')" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Sticky Aside */}
          <aside
            className="lg:sticky top-20 h-fit bg-gradient-to-br from-white to-[#F0FDF9] text-[#134E4A] rounded-3xl p-6 shadow-xl border border-[#D1F0E9] flex flex-col gap-6 w-full max-w-md"
            aria-label="Fast casual dining description"
          >
            <div className="flex items-start gap-4">
              <div
                className="bg-[#2B7B77] text-white p-3 rounded-full shadow-lg text-lg"
                aria-hidden="true"
              >
                🌿
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Fast Casual Dining
                </h2>
                <p className="text-sm text-[#35736E] font-medium mt-1">You Can Expect</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              Savor handcrafted meals made fast — a perfect blend of comfort, speed,
              and quality for your daily rhythm.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm font-medium text-[#134E4A]">
              <div className="flex items-center gap-2">🥗 <span>Wholesome</span></div>
              <div className="flex items-center gap-2">⏱️ <span>Time-saving</span></div>
              <div className="flex items-center gap-2">🛋️ <span>Cozy spaces</span></div>
              <div className="flex items-center gap-2">📲 <span>App ready</span></div>
            </div>

            <button
              onClick={goToForm}
              className="mt-4 py-3 px-6 rounded-xl bg-[#7D0C0C] text-white font-semibold text-base shadow-md transition-transform transform hover:scale-105 active:scale-95 w-full"
              aria-label="Discover fast casual dining"
              type="button"
            >
              Discover Fast Casual
            </button>
          </aside>

          {/* Feature Cards */}
          <div
            className="flex flex-col gap-6"
            aria-label="Fast casual dining features"
          >
            {[
              {
                title: "Fast Casual Dining",
                description: "Quick service with a sit-down atmosphere.",
                img: "/shared/aboutus02.jpeg",
              },
              {
                title: "Focused Menu",
                description: "Simple, high-quality dishes centered on Indian cuisine.",
                img: "/shared/menu.jpg",
              },
              {
                title: "Pre-Order Trays",
                description: "Ideal for offices, parties, and group events.",
                img: "/shared/lunch.jpg",
              },
              {
                title: "Future Events",
                description: "Space and flexibility to host your next event.",
                img: "https://img.freepik.com/free-photo/photorealistic-wedding-venue-with-intricate-decor-ornaments_23-2151481485.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="rounded-3xl overflow-hidden shadow-lg bg-white transition-all hover:shadow-xl"
                tabIndex={0}
                aria-label={item.title}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-56 sm:h-60 object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 600px"
                  placeholder="blur"
                  blurDataURL="/shared/blur-placeholder.png"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-extrabold text-[#7D0C0C] mb-1 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

     
      {/* Special Foods Section */}
      <section
        className="relative bg-[#0f0f0f] text-white py-24 px-6 md:px-16 overflow-hidden"
        aria-label="Special foods promotion"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full opacity-10 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/shared/dark-pattern.png')] bg-cover bg-center opacity-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
      {floatingLetters("SPECIAL FOODS")} <br />
      {floatingLetters("FOR YOUR EATING")}
    </h1>
            <h2 className="text-3xl font-bold text-orange-400 tracking-wide">CRISPY</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Bold Indian flavors reimagined for the modern rush. Freshly made
              biryanis, curries, and street-style bites – served quick, without
              cutting corners. Real taste. Real fast. Always Tabla.
            </p>
          </div>

          <div className="flex justify-center items-center relative">
            <Image
              src="/shared/burgernew.png"
              alt="Crispy Burger"
              width={500}
              height={400}
              className="object-contain rounded-2xl"
              priority
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-60 h-6 bg-orange-500 blur-2xl opacity-40 rounded-full" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden px-6 md:px-20 py-24 text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1705743244501-a88b02c524fb?w=1600&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Call to action to contact Tabla franchise"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40 backdrop-blur-sm z-0" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7D0C0C] opacity-20 blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7D0C0C] opacity-20 blur-3xl z-0" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            Get in Touch!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-10 text-gray-200 text-lg md:text-xl font-light leading-relaxed"
          >
            Bring the vibrant flavors of modern Indian cuisine to your community
            with{" "}
            <span className="font-semibold text-white">
              Tabla’s Fast Casual Franchising
            </span>{" "}
            opportunity. Contact us today to get started!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={goToForm}
              type="button"
              className="bg-[#7D0C0C] hover:bg-[#5c0808] text-white text-lg md:text-xl font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#7D0C0C]"
              aria-label="Contact Tabla franchise now"
            >
              Contact Us Now!
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
