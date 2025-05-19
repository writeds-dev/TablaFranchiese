"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";






const images = [
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1541701851966-739c62ec28a0?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1541701785007-42cf9104b53d?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1712247452719-29e606b9d665?w=600&auto=format&fit=crop&q=60",
];
const coreValues = [
  { title: 'Guest Friendliness', icon: '🤝', desc: 'We prioritize guests in every action and decision.' },
  { title: 'Hospitality', icon: '🏢', desc: 'We welcome everyone with warmth, care, and respect.' },
  { title: 'Integrity', icon: '🛡️', desc: 'We uphold ethical standards in all our operations.' },
  { title: 'Creativity', icon: '🎨', desc: 'Our chefs constantly innovate to delight with new flavors.' },
  { title: 'Commitment', icon: '📌', desc: 'We are dedicated to our mission and team.' },
  { title: 'Teamwork', icon: '🤝🏼', desc: 'Collaboration drives us to achieve excellence.' },
  { title: 'Authenticity', icon: '📜', desc: 'True to our roots and rich traditions.' },
  { title: 'Eco Friendliness', icon: '🌍', desc: 'We practice sustainability and care for the planet.' },
];
const focusItems = [
  {
    title: "Authentic & Fresh",
    desc: "Crafted with tradition and fresh ingredients.",
    image: "https://img.freepik.com/premium-photo/fresh-nourishing-organic-food-healthy-eating-wellness-background-food-image_985894-71.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    bg: "#0C2340",
    icon: "🥗",
    label: "Food Quality",
  },
  {
    title: "Consistent & Reliable",
    desc: "Excellence every time you visit.",
    image: "https://img.freepik.com/free-photo/medium-shot-man-cooking_23-2148723237.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    bg: "#1D3557",
    icon: "🛎️",
    label: "Service",
  },
  {
    title: "Value for Money",
    desc: "Premium quality at a great price.",
    image: "https://img.freepik.com/premium-photo/navratri-upwas-thali-fasting-food-platter-selective-focus_466689-70649.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    bg: "#003049",
    icon: "💰", 
    label: "Affordability",
  },
  {
    title: "Memorable Experiences",
    desc: "Feel the atmosphere like never before.",
    image: "https://images.unsplash.com/uploads/1412198485051133af17f/5049dacb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxyZXN0YXVyYW50fGVufDB8fDB8fHww",
    bg: "#14213D",
    icon: "🎉", 
    label: "Ambience",
  },
];


export default function FranchisePage() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

 const router = useRouter();
  const goToForm = () => {
    router.push("/contactUs");  
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20 py-10">
  <section className="relative overflow-hidden py-20 px-6 md:px-16">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 max-w-md space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold leading-tight text-[#7D0C0C]"
          >
            Tabla Franchise –{" "}
            <span className="underline decoration-yellow-400 decoration-4 text-white underline-offset-4">
              leads
            </span>{" "}
            <span className="text-white">A Proven Recipe for Success</span>
          </motion.h2>

          <motion.p variants={fadeUp} custom={0.2} className="text-gray-200 max-w-sm">
            Elevating Indian & South Asian Cuisines and creating convenient access in local communities.
          </motion.p>

          <motion.div variants={fadeUp} custom={0.3} className="flex items-center gap-4">
            <button onClick={goToForm} className="bg-[#7D0C0C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition flex items-center gap-2">
            Join Us<span>&rarr;</span>
            </button>
          </motion.div>

          <motion.hr variants={fadeUp} custom={0.4} className="border-gray-300" />

          <motion.p variants={fadeUp} custom={0.45} className="text-sm text-gray-300">
            Recognized and Awarded by
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="flex items-center gap-8 flex-wrap"
          >
            {[
              "image-4.webp",
              "image-3.webp",
              "image-2.webp",
              "image-4.webp",
              "image-2.webp",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://www.tablafranchise.com/_next/image?url=%2Fshared%2F${img}&w=256&q=75`}
                className="h-6 object-contain"
                alt={`Logo ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-1 max-w-xl flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="bg-white shadow-md rounded-xl p-6 relative flex items-center gap-6">
            <div className="bg-lime-400 rounded-full w-10 h-10 flex items-center justify-center text-black font-bold text-sm absolute -top-4 left-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17a4 4 0 100-8 4 4 0 000 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-900 mb-1">+25.5%</p>
              <h3 className="text-lg text-black font-semibold">Increase of the company's efficiency</h3>
              <p className="text-xs text-black mt-1">( +2.8% Month )</p>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div className="space-y-4">
            {[
              "https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205080.jpg",
              "https://img.freepik.com/premium-photo/cozy-luxury-interior-restaurant-comfortable-modern-dining-place-contemporary-design-background-3d-rendering_295714-3466.jpg",
            ].map((src, i) => (
              <motion.img
                key={i}
                variants={fadeUp}
                custom={0.1 * (i + 1)}
                src={src}
                alt={`Restaurant ${i + 1}`}
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    
{/* {focous} */}

<section className="relative py-20 px-6 md:px-20 font-sans overflow-hidden bg-gray-100">
  {/* Decorative Background Image */}
  <img
    src="/shared/leafe.png"
    alt="Decorative leaf background"
    className="absolute top-0 right-0 w-1/2 max-w-md opacity-80 pointer-events-none z-0"
  />

  {/* Main Content */}
  <div className="relative z-10">
    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
        Our <span className="text-yellow-500">Focus</span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Core priorities that define the experience.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {focusItems.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl"
        >
          {/* Card Image */}
          <div className="relative h-48">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow">
              {item.icon}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <p className="text-sm uppercase tracking-wide text-yellow-500 font-semibold mb-2">
              {item.label}
            </p>
            <h3 className="text-lg font-bold text-gray-900 mb-2 border-b-2 border-dashed border-gray-400 pb-1">
  {item.title}
</h3>

            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>






      {/* Core Values */}
  
  <section
  className="relative py-24 px-6 sm:px-12 md:px-20 text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/shared/main.png')",
  }}
>
 
  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0 pointer-events-none" />

  {/* Section Heading */}
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
      Our <span className="text-[#ffbcbc]">Core Values</span>
    </h2>
    <p className="text-gray-100 text-lg max-w-2xl mx-auto mt-4 drop-shadow">
      A foundation built on culture, creativity, and connection.
    </p>
  </div>

  {/* Timeline Style Grid */}
  <div className="relative z-10 max-w-5xl mx-auto space-y-12 border-l border-white/30 pl-6 md:pl-10">
    {coreValues.map((item, idx) => (
      <div
        key={idx}
        className="relative group hover:scale-[1.01] transition-transform duration-300"
      >
        {/* Dot */}
        <div className="absolute -left-4 md:-left-6 top-1.5 w-3 h-3 bg-[#ffbcbc] rounded-full shadow-md group-hover:scale-125 transition" />

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-md">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div className="text-3xl w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-[#ffaaaa] shadow-inner shadow-[#ffaaaa40]">
              {item.icon}
            </div>
            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-[#ffaaaa] transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* CTA Section */}
       <section className="relative bg-white text-black py-16 px-6 md:px-20 overflow-hidden border-t border-gray-200">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
    
    {/* Text Side */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#7D0C0C]">
        Join the <span className="">Tabla Franchise</span>
      </h2>
      <p className="text-base text-gray-700 max-w-md leading-relaxed">
        Be part of a growing brand that’s redefining Indian dining across the country. Partner with us and bring Tabla to your city.
      </p>
      <button onClick={goToForm} className="bg-[#7D0C0C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5c0808] transition">
        Become a Partner
      </button>
    </motion.div>

    {/* Video Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden border border-gray-200 shadow-sm"
    >
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://player.vimeo.com/video/951267091?h=a3aa651a1a&autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  </div>
</section>



    </div>
  );
}
