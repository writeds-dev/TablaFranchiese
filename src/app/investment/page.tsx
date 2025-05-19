'use client';


import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function InfoItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        {label && <p className="text-lg font-semibold text-gray-800">{label}</p>}
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </div>
  );
}

const inclusions = [
  {
    icon: '🏗️',
    title: 'Construction and Leasehold Improvements',
    subtitle: 'Building and Renovations',
    description: 'Costs related to building construction, remodeling, or upgrades to leased spaces.',
    img: 'https://images.unsplash.com/photo-1655045850845-1663631c2580?w=600&auto=format&fit=crop&q=60',
  },
  {
    icon: '🪑',
    title: 'Furniture, Fixtures, and Equipment',
    subtitle: 'Office and Store Setup',
    description: 'Purchase of furniture, fixtures, and essential equipment to furnish your space.',
    img: 'shared/furniture.jpg',
  },
  {
    icon: '📦',
    title: 'Initial Inventory',
    subtitle: 'Stock and Supplies',
    description: 'The first batch of goods and supplies necessary for daily business operations.',
    img: 'https://images.unsplash.com/photo-1624927637280-f033784c1279?w=600&auto=format&fit=crop&q=60',
  },
  {
    icon: '🎉',
    title: 'Grand Opening Marketing',
    subtitle: 'Launch Campaign',
    description: 'Marketing and promotional activities to attract customers during your grand opening.',
    img: 'shared/grand.jpg',
  },
  {
    icon: '💰',
    title: 'Initial Working Capital',
    subtitle: 'Operational Funds',
    description: 'Funds set aside to cover day-to-day expenses during the initial period of business.',
    img: 'https://images.unsplash.com/photo-1592656314010-5e9f78e1dbb5?w=600&auto=format&fit=crop&q=60',
  },
  {
    icon: '🚩',
    title: 'Signage',
    subtitle: 'Brand Visibility',
    description: 'Design, production, and installation of signs to promote your business.',
    img: 'shared/Signage.jpg',
  },
  {
    icon: '💻',
    title: 'Computer/Software',
    subtitle: 'Technology Setup',
    description: 'Purchase of computers, software licenses, and tech tools needed for operations.',
    img: 'https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740',
  },
];

const cards = [
  {
    icon: '💰',
    title: 'Royalty',
    subtitle: '6% of Gross Sales/Week',
    desc: 'We utilize the royalty funds to ensure your success by providing continued support and training.',
  },
  {
    icon: '📣',
    title: 'Brand Development Fund',
    subtitle: '2% of Gross Revenue/Week',
    desc: 'We run constant brand awareness campaigns and business development initiatives across all outlets.',
  },
  {
    icon: '📍',
    title: 'Local Advertising',
    subtitle: '2% of Gross Revenue/Month',
    desc: 'Used for hyper-local marketing efforts to drive traffic and boost community presence.',
  },
  {
    icon: '🧠',
    title: 'Technology Fee',
    subtitle: '$500/month (Fast Casual) | $750/month (Fine Dining)',
    desc: 'Covers advanced systems to improve operations and elevate the customer experience.',
  },
  {
    icon: '🖥️',
    title: 'Software Fee',
    subtitle: '$125/month',
    desc: 'For efficient daily management of billing, reservations, tracking, and more.',
    fullSpan: true,
  },
];
const headings = [
  { title: 'Own Your Future', subtitle: 'Become a Tabla Franchisee Today' },
  { title: 'Serve Excellence', subtitle: 'Join the Tabla Legacy' },
  { title: 'A Taste of Success', subtitle: 'Launch Your Tabla Franchise' },
  { title: 'Craft Your Legacy', subtitle: 'Partner with Tabla Today' },
  { title: 'Elevate Dining', subtitle: 'Embark on Your Tabla Journey' },
  { title: 'Lead the Table', subtitle: 'Franchise with Tabla' },
];

export default function FranchiseDetails() {
  const [index, setIndex] = useState(0);
   const router = useRouter();
    const goToForm = () => {
      router.push("/contactUs");  
    };

    useEffect(() => {
    const iv = setInterval(() => {
      setIndex((i) => (i + 1) % headings.length);
    }, 5000);
    return () => clearInterval(iv);
  }, []);
  return (
    
    <div className="font-sans text-gray-800">
      {/* Franchise Header */}
      <section className="relative text-white py-32 px-6 md:px-20 overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black opacity-30">
          <img
            src="/shared/aboutus01.jpeg"
            alt="Tabla Franchise"
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-pattern opacity-10" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
          <div className="space-y-8 text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold font-serif leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              <span className="text-[#7D0C0C] p-2 shadow-white">Tabla Franchise</span>
              <br />
              A Chance to be a Part of Tabla’s Legacy!
            </h1>
            <p className="text-lg leading-relaxed opacity-95 font-light drop-shadow-[0_1px_3px_rgba(0,0,0,0.3)]">
              Join a brand that blends tradition, innovation, and community. Choose your option - A cozy Fast Casual place or an elegant Fine Dining experience.
            </p>
            <button
  onClick={goToForm}
  className="relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-[#892430] bg-white rounded-full shadow-lg cursor-pointer overflow-hidden group transition-all duration-300
    hover:text-white hover:bg-gradient-to-r hover:from-[#b54e3c] hover:to-[#892430]"
>
  <span
    className="absolute inset-0 bg-gradient-to-r from-[#b54e3c] to-[#892430] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
  />
  <span className="relative z-10">Contact Now</span>
  <span
    className="absolute rounded-full bg-white opacity-20 w-0 h-0 group-hover:w-40 group-hover:h-40 transition-all duration-500 ease-out"
    style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
  />
</button>

          </div>
          <div className="relative group perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ rotateX: 8, rotateY: 0, scale: 1.05 }}
          className="
            absolute -bottom-10 left-1/2 
            transform -translate-x-1/2 
            bg-white text-[#892430] 
            w-72 p-5 
            rounded-2xl shadow-xl 
            border border-orange-200 
            backdrop-blur-sm cursor-pointer
          "
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h4 className="font-bold text-2xl mb-1">
            {headings[index].title}
          </h4>
          <p className="text-sm opacity-80">
            {headings[index].subtitle}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-orange-50 to-orange-100">
  <motion.h2
    className="text-5xl font-extrabold mb-20 text-center text-gray-900"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    Investment Breakdown
  </motion.h2>

  <div className="max-w-6xl mx-auto space-y-24 relative">
    {/* Vertical line */}
    <div className="hidden md:block absolute top-16 bottom-0 left-1/2 w-1 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full translate-x-[-50%]" />

    {/* FAST CASUAL */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-16 md:odd:flex-row-reverse"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 rounded-3xl shadow-lg overflow-hidden border border-yellow-300 transform hover:scale-105 transition duration-300 cursor-pointer">
        <img
          src="https://img.freepik.com/free-photo/close-up-delicious-food_23-2149304396.jpg"
          alt="Fast Casual"
          className="w-full h-[360px] object-cover"
        />
      </div>

      {/* Content Card */}
      <div className="relative w-full md:w-1/2 bg-white rounded-3xl shadow-xl p-10 border border-yellow-300">
        {/* Floating Icon */}
        <div className="absolute -left-12 top-10 bg-gradient-to-tr from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white shadow-lg ring-4 ring-white">
          🍽️
        </div>

        <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Fast Casual Restaurant</h3>
        <div className="space-y-5 text-gray-700 text-base">
          <InfoItem icon="💰" label="Startup Investment" value="$185,000 to $400,000" />
          <InfoItem icon="📄" label="Franchise Fee" value="$36,000" />
          <InfoItem icon="💻" label="Tech Fee" value="$500/month" />
          <InfoItem
            icon="⭐"
            label="Description"
            value="Ideal for entrepreneurs looking for a streamlined and profitable model with lower startup costs."
          />
        </div>
      </div>
    </motion.div>

    {/* FINE DINING */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-16 md:odd:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 rounded-3xl shadow-lg overflow-hidden border border-red-400 transform hover:scale-105 transition duration-300 cursor-pointer">
        <img
          src="/shared/aboutus01.jpeg"
          alt="Fine Dining"
          className="w-full h-[360px] object-cover"
        />
      </div>

      {/* Content Card */}
      <div className="relative w-full md:w-1/2 bg-white rounded-3xl shadow-xl p-10 border border-red-400">
        {/* Floating Icon */}
        <div className="absolute -right-12 top-10 bg-gradient-to-tr from-red-400 to-yellow-400 w-20 h-20 rounded-full flex items-center justify-center text-4xl text-white shadow-lg ring-4 ring-white">
          🍷
        </div>

        <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Fine Dining Restaurant</h3>
        <div className="space-y-5 text-gray-700 text-base">
          <InfoItem icon="💰" label="Startup Investment" value="$324,000 to $691,000" />
          <InfoItem icon="📄" label="Franchise Fee" value="$45,000" />
          <InfoItem icon="💻" label="Tech Fee" value="$750/month" />
          <InfoItem
            icon="⭐"
            label="Description"
            value="Perfect for owners seeking to provide a premium dining experience with higher revenue potential."
          />
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* Ongoing Investment Structure */}
      <section
        className="py-24 px-6 md:px-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/shared/palm.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: 'contain',
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          ><motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="max-w-xl mx-auto text-center md:text-left"
>
  <h2
    className="text-5xl font-extrabold mb-6 leading-tight
      bg-gradient-to-r from-[#b54e3c] via-[#892430] to-[#b54e3c]
      bg-clip-text text-transparent
      drop-shadow-lg
      animate-fadeInUp"
  >
    Ongoing Investment
  </h2>
  <p className="text-black text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
    Our ongoing investment model is designed to support your success from day one. You’ll benefit from industry-leading tools, marketing support, and hands-on guidance.
  </p>
</motion.div>

            <div className="flex gap-4">
              <button onClick={goToForm} className="bg-[#7D0C0C] cursor-pointer text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition hover:scale-105 hover:bg-[#a51111] duration-300">
                Join Tabla Franchise
              </button>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className={`bg-white shadow-lg rounded-2xl p-6 transform transition duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 ${
                  card.fullSpan ? 'col-span-1 sm:col-span-2' : ''
                }`}
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                <p className="text-sm text-gray-600 font-medium mb-1">{card.subtitle}</p>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Inclusions */}
  <section className="bg-[#0f121a] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-left mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Your Initial Startup Investment: What’s Included?
        </h2>
      </div>

      <div className="relative overflow-hidden hidden md:block">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {[...inclusions, ...inclusions].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col bg-[#1f2735] border border-gray-700 rounded-xl shadow-md min-w-[300px] p-6"
            >
              {/* Image / Icon container */}
              <div className="mb-6 w-full h-40 rounded-lg overflow-hidden bg-gradient-to-br from-[#b54e3c] to-[#892430] shadow-xl">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-white text-6xl drop-shadow-lg">
                    {item.icon}
                  </div>
                )}
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-semibold text-white mb-2 font-sans">
                {item.title}
              </h3>
              {item.subtitle && (
                <h4 className="text-lg font-medium text-[#b54e3c] mb-2">
                  {item.subtitle}
                </h4>
              )}
              {item.description && (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="flex flex-col space-y-8 md:hidden">
        {inclusions.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-[#1f2735] border border-gray-700 rounded-xl shadow-md p-6"
          >
            {/* Image / Icon container */}
            <div className="mb-6 w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-[#b54e3c] to-[#892430] shadow-xl">
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-white text-7xl drop-shadow-lg">
                  {item.icon}
                </div>
              )}
            </div>

            {/* Text content */}
            <h3 className="text-2xl font-semibold text-white mb-2 font-sans">
              {item.title}
            </h3>
            {item.subtitle && (
              <h4 className="text-lg font-medium text-[#b54e3c] mb-2">
                {item.subtitle}
              </h4>
            )}
            {item.description && (
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>



      {/* Call To Action */}
     <section className="relative bg-black text-white py-12 overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80"
      alt="Tabla Ambience"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-[#892430]/80 mix-blend-multiply" />
  </div>

  <div className="relative z-10 text-center px-6 md:px-16 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
      Join a brand that values authenticity and unforgettable guest experiences.
    </h2>
    <p className="text-lg opacity-90 mb-6">
      Ready to take the first step? Contact us today to schedule a consultation and start your Tabla journey!
    </p>
    <button
      onClick={goToForm}
      className="bg-white text-[#892430] px-8 py-3 rounded-full font-semibold hover:bg-yellow-100 transition hover:scale-105"
    >
      Contact Now
    </button>
  </div>
</section>

    </div>
  );
}
