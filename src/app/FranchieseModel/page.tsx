"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Feature {
  title: string;
  icon: string;
  desc: string;
  featured?: boolean;
}
const features: Feature[] = [
  {
    title: "Comprehensive Training",
    icon: "🎓",
    desc: "Get intensive startup training, ongoing guidance, and full operational support."
  },
  {
    title: "Elite Brand Identity",
    icon: "🌟",
    desc: "Tabla’s luxury branding and ambiance set the stage for unmatched dining.",
    featured: true
  },
  {
    title: "Diverse Global Menu",
    icon: "🍛",
    desc: "Enjoy a menu curated with flavors from around the world—crafted to impress."
  },
  {
    title: "Events & Celebrations",
    icon: "🎉",
    desc: "Host memorable events with our customizable fine-dining settings."
  },
  
];
const packages = [
  {
    title: "Full-Service Dining",
    image: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluZSUyMGRpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    description:"Comfortable seating arrangement for in-house fine dining with seating for 90 to150 guests."
  },
  {
    title: "Expansive Menu",
    image: "https://img.freepik.com/free-photo/homemade-food-menu-recipe-recommended-restaurant_53876-14196.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    description:"Indian, Chinese, and Thai cuisine with authentic flavors and fusion dishes. "
  },
  {
    title: "Full Bar",
    image: "https://img.freepik.com/free-photo/cocktails-shaker-arrangement-night-club_23-2149093603.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    description:" Enhance the dining experience with alcoholic (optional) and non-alcoholic beverages"
  },
  {
    title: " Events",
    image: "https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
    description:"Host special occasions and celebrations at your location. "
  }
]

const backgrounds = [
  "https://img.freepik.com/free-photo/high-angle-table-arrangement-with-delicious-food_23-2149617138.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-photo/luxury-dining-candlelit-table-elegant-decor-exquisite-food-wine-generated-by-artificial-intelligence_188544-127348.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-photo/table-served-christmas-dinner_73492-487.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=7402",
  "https://img.freepik.com/free-photo/dishes-with-golden-caviar-top-different-plates_181624-7047.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
];


export default function FineDiningPage() {

   const router = useRouter();

  // Handler for navigation to form page
  const goToForm = () => {
    router.push("/")  
  };
  const [currentBg, setCurrentBg] = useState(0);

  // Change background every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
 <section className="relative py-28 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-xl">
  {/* Background Slider */}
  <div className="absolute inset-0 z-0">
    <AnimatePresence initial={false}>
      <motion.div
        key={currentBg}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* Dark overlay with warm tint */}
        <div className="absolute inset-0 bg-black/60">
          <div className="absolute inset-0 bg-[#7D0C0C]/40 mix-blend-multiply" />
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Content Container */}
  <div className="relative z-10 grid md:grid-cols-12 items-center gap-16 min-h-[400px]">
    {/* Left Text Column */}
    <motion.div
      className="md:col-span-6 space-y-6"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="mx-auto max-w-3xl text-center md:text-left space-y-4">
  {/* Line 1 */}
  <span
    className="
      block
      text-5xl sm:text-6xl md:text-7xl
      font-[Playfair Display],serif font-extrabold
      leading-snug tracking-tight
      text-transparent bg-clip-text
      bg-gradient-to-r from-[#F4D58D] via-[#f0c254] to-[#cba02e]
      drop-shadow-2xl
    "
  >
    Fine{' '}
    <span
      className="
        inline-block  
      text-white px-4 py-1 rounded-full shadow-md
      "
    >
      Dining
    </span>
  </span>

  {/* Line 2 */}
  <span
    className="
      block
      text-5xl sm:text-6xl md:text-7xl
      font-[Playfair Display],serif font-extrabold
      leading-snug tracking-tight
      text-transparent bg-clip-text
      bg-gradient-to-r from-[#F4D58D] via-[#f0c254] to-[#cba02e]
      drop-shadow-2xl
    "
  >
    Experience
  </span>
</h1>


      <p className="text-lg text-gray-200 max-w-xl">
        Indulge in a symphony of flavors at Tabla’s exclusive fine dining. Where
        culinary mastery meets elegant ambience — every meal is a masterpiece.
      </p>

      <div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#7D0C0C] hover:bg-[#600808]
            transition-all duration-300
            text-white px-6 py-3
            rounded-full font-semibold shadow-lg
          "
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>

    {/* Right Placeholder Column */}
    <motion.div
      className="md:col-span-6 flex justify-center"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Put your image, card, etc. here */}
    </motion.div>
  </div>
</section>





      {/* Feature Highlights Section */}
  <section className="bg-white text-gray-900 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Must <em className="italic font-serif text-[#7D0C0C]">experience</em> FineDine
            </h2>
          </div>
          <p className="text-gray-600 mt-4 md:mt-0 max-w-md text-lg ">
            Indulge in our carefully crafted packages to immerse you in the most captivating and transformative food adventures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={400}
                height={300}
                className="w-full h-[300px] object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Title Always Visible */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                  {pkg.title}
                </h3>
              </div>

              {/* Description on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-md text-white bg-black/60 p-4 rounded-xl">
                  {pkg.description}
                </p>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#7D0C0C] group-hover:shadow-[0_0_15px_2px_#7D0C0C] rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>



{/* {section unique features} */}

<section
  className="relative text-gray-900 py-24 px-6 md:px-20 overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/shared/leafe.png')",
  }}
>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 z-10">
    {/* Left Text Section */}
    <motion.div
      className="space-y-10 flex flex-col"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <h2 className="text-5xl font-serif font-semibold text-white leading-tight">
          Our true <span className="italic bg-white text-[#7D0C0C]">beliefs</span><br />
          for <span className="italic">your</span> benefits
        </h2>
        <p className="text-lg text-white max-w-xl">
          Our beliefs aren't just words; they are the foundation of every adventure we offer.
          With high commitment to sustainability, authenticity, and customer-centricity, we ensure
          that every trip you take with us is valuable.
        </p>
      </div>
    </motion.div>

    {/* Right Belief Cards */}
    <motion.div
      className="grid gap-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {[
         {
          title: "Initial training ",
          icon: "🙎‍♂️",
          desc: "Onsite support to set you up for success.",
          highlight: true,
        },
        {
          title: "Premium Brand",
          icon: "👤",
          desc: "Recognized for excellence in modern Indian fine dining.",
          highlight: false,
        },
        {
          title: "Authentic & Fusion Dishes",
          icon: "🌿",
          desc: "A menu that offers diverse flavors and culinary traditions.",
          highlight: true,
        },
        {
          title: "Memorable Experiences",
          icon: "✈️",
          desc: "Be a part of your guests’ moments and memories",
          highlight: false,
        },
        {
          title: "Proven Success",
          icon: "⭐",
          desc: "A model that’s already thriving in four different locations with an average net profit of 35%.",
          highlight: true,
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`flex items-start gap-4 p-6 rounded-3xl transition-all duration-300 ${
            item.highlight
              ? "bg-[#7D0C0C] text-white shadow-xl"
              : "bg-white border border-gray-300"
          }`}
        >
          <div className="text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-black">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm mt-1 opacity-90">{item.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Why Choose Tabla Section */}
 <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"> 
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <img
            src="shared/winter02.jpeg"
            alt="Tabla Chef"
            className="rounded-3xl shadow-lg w-full object-cover h-96"
          />
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Discover the <span className="text-[#7D0C0C]">Tabla Difference</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-lg">
            Where authentic flavors meet modern elegance. Tabla redefines culinary excellence with handcrafted experiences and heartfelt hospitality.
          </p>
        </motion.div>

        {/* Right: Feature Cards */}
       <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
>
  {features.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden p-6 rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-[#B04F4F]/10 text-[#B04F4F] text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        {item.icon}
      </div>

      {/* Title */}
      <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-[#B04F4F]">
        {item.title}
      </h4>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
        {item.desc}
      </p>

      {/* Glow background effect */}
      <div className="absolute inset-0 rounded-3xl bg-[#B04F4F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>

      {/* CTA Section */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-16"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1723744910476-19987e2bc32c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3R1cmFudHxlbnwwfHwwfHx8MA%3D%3D')",
  }}
>
  {/* Dark red overlay for mood and contrast */}
  <div className="absolute inset-0 bg-[#5f0f0f]/80"></div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
    {/* Left: Text Content */}
    <div>
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-snug">
        Grab Your Opportunity <br />
      </h2>
      <p className="text-gray-200 text-lg mb-6">
        Bring the joy of fine dining to your area and create a legacy of unforgettable experiences. 

        Ready to elevate dining in your area? Schedule a call or visit us today!
      </p>
      <p className="text-gray-300">
        Are you ready to start your own Tabla franchise and create memorable dining moments? <br />
        Let’s get in touch!
      </p>
    </div>

    {/* Right: App UI Card */}
    <div className="relative py-12 px-4">
  <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md mx-auto z-10 overflow-hidden">
    
    {/* Top Left Decorative Element */}
    <div className="absolute top-4 left-4 w-6 h-6 bg-black rounded-md shadow-sm"></div>

    {/* Video Embed */}
    <div className="overflow-hidden rounded-xl mb-6 aspect-video shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/V3cKLFpBamI?si=C3F1Y6t34JVOpbVP"
        title="Tabla Franchise Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>

    {/* Title */}
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
      Tabla Franchise
    </h3>

    {/* CTA Button */}
    <button
      onClick={goToForm}
      className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300 shadow-md"
    >
      Contact Us
    </button>

    {/* Bottom Right Success Icon */}
    <div className="absolute bottom-4 right-4 bg-green-500 rounded-full p-1 shadow-md">
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
</div>
</div>
</section>
    </div>

  );
}