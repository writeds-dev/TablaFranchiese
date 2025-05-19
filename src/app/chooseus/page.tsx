"use client"

import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { Mail } from 'lucide-react';

import {
  FaUtensils,
  FaPepperHot,
  FaStar,
  FaStoreAlt,
  FaHandsHelping,
  FaChartLine,
} from 'react-icons/fa';

const features = [
  {
    icon: <FaUtensils className="text-red-500 text-3xl mb-4" />, 
    title: 'Chef-Independent Operations',
    desc: 'Simplified, standardized recipes ensure consistent quality without relying on a head chef.',
    image: "https://img.freepik.com/premium-photo/male-chef-creates-culinary-masterpieces-bustling-kitchen_731930-132374.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  },
  {
    icon: <FaPepperHot className="text-red-500 text-3xl mb-4" />,
    title: 'Authentic Indian Cuisine',
    desc: 'A menu crafted with genuine Indian spices and flavors, offering a true taste of India.',
    image: "https://img.freepik.com/free-photo/gourmet-beef-curry-taco-with-fresh-guacamole-generated-by-ai_188544-41147.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  },
  {
    icon: <FaStar className="text-red-500 text-3xl mb-4" />,
    title: 'Established Brand',
    desc: 'A trusted name in Indian cuisine with a track record of successful locations.',
    image: "https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  },
  {
    icon: <FaStoreAlt className="text-red-500 text-3xl mb-4" />,
    title: 'Diverse Ownership Models',
    desc: 'Choose between full-service Fine Dining or Fast Casual to match your market and vision.',
    image: "https://plus.unsplash.com/premium_photo-1674730949471-1fc2ce88d26b?w=600&auto=format&fit=crop&q=60",
  },
  {
    icon: <FaHandsHelping className="text-red-500 text-3xl mb-4" />,
    title: 'Comprehensive Support System',
    desc: 'Assistance in training, operations, marketing, and management for your success.',
    image: "https://img.freepik.com/premium-photo/fast-food-worker-preparing-order_1040433-11606.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740",
  },
  {
    icon: <FaChartLine className="text-red-500 text-3xl mb-4" />,
    title: 'Proven Business Model',
    desc: 'A track record of successful restaurants across multiple locations in Orlando and Texas.',
    image: "https://images.unsplash.com/photo-1590098563686-06ab8778a6a7?w=600&auto=format&fit=crop&q=60",
  },
];

export default function Home() {
  const router = useRouter();
  const goToForm = () => {
    router.push("/contactUs");  
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">
  {/* Background Image with Gradient Overlay */}
  <div className="absolute inset-0">
    <Image
      src="https://img.freepik.com/premium-photo/restaurant-dark-carpet_87720-243729.jpg?uid=P153934864&ga=GA1.1.122125592.1722148753&semt=ais_hybrid&w=740"
      alt="Dining Background"
      fill
      className="object-cover object-center brightness-75"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-16 py-24">
    
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        A Proven Recipe for Success
        <br />
      </h1>

     <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  viewport={{ once: true }}
  className="text-white text-2xl md:text-3xl font-medium mt-8 max-w-2xl leading-relaxed tracking-wide"
>
  Thrive in the restaurant business by joining a brand with{" "}
  <span className="text-yellow-400 font-semibold underline ">proven success</span>!
</motion.p>

      <div className="mt-8">
        <button
          onClick={goToForm}
          className="flex items-center gap-3 bg-[#7D0C0C] hover:bg-[#5a0909] text-white px-12 py-4 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </button>
      </div>
    </motion.div>

    {/* Right 3D Tilt Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative flex justify-center items-center"
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.02}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="rounded-full"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-[6px] border-white/10">
          <Image
            src="/shared/chooseus.jpeg"
            alt="Restaurant Interior"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </Tilt>

      {/* Floating Thumbnail - Top Right */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl"
      >
        <Image
          src="/shared/winter01.jpeg"
          alt="Food 1"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Floating Thumbnail - Bottom Left */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl"
      >
        <Image
          src="/shared/winter02.jpeg"
          alt="Food 2"
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Why Choose Tabla */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        {/* Logo and Heading Section */}
        <div className="relative text-center py-20 px-4 bg-white">
          {/* Soft glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-yellow-50 opacity-60 blur-2xl -z-10"></div>

          {/* Main Title */}
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Experience the <span className="text-[#7D0C0C]">Tabla</span> Advantage
            </h2>
            <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-36 h-1.5 bg-red-500 rounded-full shadow-lg" />
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Join a legacy of excellence where <span className="text-black font-semibold">flavor</span>,
            <span className="text-[#7D0C0C] font-semibold"> culture</span>, and 
            <span className="text-green-600 font-semibold"> innovation</span> come together to deliver a world-class franchise experience.
          </p>

          {/* Decorative dots or shapes */}
          <div className="absolute top-12 left-10 w-6 h-6 bg-red-100 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-12 w-10 h-10 bg-yellow-100 rounded-full blur-2xl opacity-70"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((item, i) => (
            <Tilt
              key={i}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ff0000"
              glarePosition="all"
              className="rounded-2xl"
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 group border border-gray-200"
                whileHover={{ scale: 1.04 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image Section */}
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

{/* {e2 visa section} */}
   <motion.section
  className="relative overflow-hidden py-28 px-6 md:px-20 bg-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Clear Background Image Layer */}
  <div className="absolute inset-0 z-0">
    <img
      src="shared/watercolor.png"
      alt="Background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">

    {/* Text Block */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="space-y-8"
    >
      <h2 className="text-5xl font-bold text-gray-900 leading-tight">
        <span className="bg-white p-3 ">Franchise with</span> <span className="text-red-600">Tabla</span><br />
        & Unlock Your <span className="text-yellow-500">E2 Visa</span> Path
      </h2>
      <p className="text-lg text-gray-800 leading-relaxed max-w-lg">
        Invest in more than a restaurant — invest in your future. Tabla offers
        a powerful platform for qualified investors to pursue the{" "}
        <span className="text-red-600 font-semibold">E2 Visa</span>,
        helping you and your family build a life in the U.S. through a proven
        business model.
      </p>

      <button
        onClick={goToForm}
        className="inline-flex items-center gap-2 bg-[#7D0C0C] hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
      >
        Explore Franchise   </button>
    </motion.div>

    {/* Image Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200"
    >
      <img
        src="shared/flight.jpg"
        alt="Tabla Franchise Opportunity"
        className="w-full h-[450px] object-cover rounded-3xl"
      />
    </motion.div>
  </div>
</motion.section>



      {/* Final CTA */}
      <motion.section
  className="relative bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#2b2b2b] py-28 px-6 text-white overflow-hidden font-sans"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Soft Glowing Background Circles */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-yellow-500 opacity-10 blur-[150px] rounded-full"></div>
  <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-red-600 opacity-10 blur-[140px] rounded-full"></div>

  {/* Main Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">
    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
      Take the Leap with <span className="text-yellow-400 drop-shadow-lg">Tabla</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
      Partner with a brand that's redefining dining across America. Join our journey and bring Tabla's signature experience to your city.
    </p>
    <button
      onClick={goToForm}
      className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-base md:text-lg py-4 px-10 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0l-4-4m4 4l-4 4" />
      </svg>
      Become a Franchise Partner
    </button>
  </div>
</motion.section>

    </main>
  );
}
