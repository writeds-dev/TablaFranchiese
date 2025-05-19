'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightCircle } from 'lucide-react';

const images = [
  '/shared/aboutus01.jpeg',
  '/shared/aboutus02.jpeg',
  '/shared/aboutus03.jpeg',
  '/shared/aboutus04.jpeg',
  '/shared/aboutus05.jpeg',
];

const locations = ['Winter Park', 'Lake Nona', 'Oviedo', 'Orlando', 'Fort Worth'];

export default function TablaFranchisePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#111] text-white py-28 px-6 md:px-20 overflow-hidden shadow-2xl min-h-screen">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80"
          alt="Tabla Ambience"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Get to Know Tabla Franchise
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Committed to delivering an unparalleled dining experience and memorable moments
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
            >
              <ArrowRightCircle className="w-5 h-5" />
              Get Started
            </a>
          </motion.div>

          {/* Carousel Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[420px] h-[440px] flex items-center justify-center mb-6">
              {images.map((src, i) => {
                const diff = (i - index + images.length) % images.length;
                const isActive = diff === 0;
                const transformClass = {
                  0: 'z-30 scale-100',
                  1: 'translate-x-28 z-20 scale-90 opacity-60',
                  [images.length - 1]: '-translate-x-28 z-20 scale-90 opacity-60',
                }[diff] || 'opacity-0 scale-90 z-10';

                return (
                  <motion.img
                    key={i}
                    src={src}
                    alt={`Slide ${i}`}
                    className={`absolute transition-all duration-700 ease-in-out rounded-2xl shadow-xl object-cover ${transformClass}`}
                    style={{
                      width: isActive ? '360px' : '260px',
                      height: isActive ? '400px' : '280px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                  />
                );
              })}
            </div>

            {/* Animated location text */}
           <AnimatePresence mode="wait" initial={false}>
  <motion.h3
    key={index}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.6 }}
    className="mt-4 text-4xl font-semibold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
  >
    {locations[index]}
  </motion.h3>
</AnimatePresence>

          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative bg-gradient-to-br from-[#ecf0f3] to-[#f9fafb] py-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1697350671122-4ffda28f5a85?w=1200&auto=format&fit=crop&q=80"
            alt="Tabla Restaurant Interior"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="relative max-w-5xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-l-4 border-[#b91c1c] pl-4">
              Our Story
            </h2>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                We started Tabla in 2008 with a vision to bring authentic and good quality Indian food to our hometown, Orlando.
              </p>
              <p>
                What began as a local restaurant quickly became a community favorite. Later, we added a ballroom to allow guests a welcoming space to meet, celebrate, and create memories over delicious food.
              </p>
            </div>
            <blockquote className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2c2c2c] to-[#1a1a1a] text-gray-100 p-10 rounded-3xl shadow-xl max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              <svg
                className="absolute top-6 left-6 w-10 h-10 text-yellow-400 opacity-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.994 5.994 0 0 0 2 12c0 3.31 2.69 6 6 6v-2a4 4 0 0 1 0-8h1V6H7.17zm10 0A5.994 5.994 0 0 0 12 12c0 3.31 2.69 6 6 6v-2a4 4 0 0 1 0-8h1V6h-1.83z" />
              </svg>
              <p className="mt-4 pl-12">
                “The passion and drive to take <span className="text-yellow-400 font-semibold">Tabla</span> to the next step—closer to the dream of becoming a franchise and evolving as a company. What started as a way to serve a city is now a mission to serve the nation.”
              </p>
            </blockquote>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-3xl rounded-2xl shadow-lg overflow-hidden"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/951267091?h=a3aa651a1a&autoplay=1&muted=1"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
     <section className="px-6 md:px-12 py-28 space-y-36 bg-white text-black">
  {[
    {
      name: 'Anshu Jain',
      role: 'Founder & CEO',
      title: 'grow the Tabla franchise with bold vision',
      image: 'shared/AnshuJain.jpg',
      bio: `Anshu Jain has been learning, innovating, and leading for over 25 years. 
      As a co-founder of Stealth Management Group, Anshu owns and manages multiple hotels and businesses all over the country.
      Envisioning a nationwide presence for Tabla, Nora began working with franchise development companies and regulators in 2023 to register as a nationwide franchisor.`,
    },
    {
      name: 'Nora Jain',
      role: 'Co-Founder & President',
      title: 'shape the future of Tabla’s identity',
      image: 'shared/NoraJain.jpg',
      bio: `Nora Jain is the Co-Founder and COO of Gourmet Chefs, LLC and Tabla Franchise LLC., 
      and the visionary behind the Tabla Restaurant Brand. With a master's degree in Structural Engineering 
      from Arizona State University, Nora combines her technical expertise with a deep passion for the culinary arts.`,
    },
  ].map((founder, i) => (
    <div
      key={founder.name}
      className={`flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto ${
        i % 2 !== 0 ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 space-y-8"
      >
        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-red-600 bg-red-100 px-3 py-4 rounded-full">
          Founder Insight
        </span>

        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          I’m <span className="underline decoration-red-600">{founder.name}</span>, and I’m here to{' '}
          {founder.title}
        </h2>

        <div className="bg-white border-l-4 border-[#7D0C0C] rounded-xl p-6 md:p-8 shadow-lg relative">
          <div className="absolute top-4 left-6 text-4xl text-[#7D0C0C] opacity-30 select-none">
            &ldquo;
          </div>
          <p className="text-gray-800 text-lg leading-loose font-serif italic pl-8 relative z-10">
            {founder.bio}
          </p>
        </div>

        <button className="group mt-6 inline-flex items-center gap-2 bg-blue-400 hover:bg-red-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-300">
          Learn More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

      {/* Image Block with PREMIUM Role Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex-1 w-full max-w-md overflow-hidden rounded-2xl shadow-xl"
      >
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div
  className="
    absolute bottom-6 right-6
    bg-white
    ring-1 ring-red-100
    shadow-lg
    p-4
    rounded-2xl
    flex flex-col items-start
  "
>
  <h4 className="text-black text-xl font-extrabold uppercase tracking-wide mb-1">
    {founder.name}
  </h4>
  <p className="text-red-500 text-sm uppercase tracking-wide">
    {founder.role}
  </p>
</div>

      </motion.div>
    </div>
  ))}
</section>


      {/* Our Vision Section */}
      <section className="bg-gradient-to-b from-[#fff9ec] via-[#fffdfa] to-white py-24 px-6 sm:px-12 md:px-24 text-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative border-l-[6px] border-[#F4D58D] pl-8 md:pl-12 space-y-6 bg-white rounded-xl shadow-lg p-10"
          >
            {/* Decorative Top Icon */}
            <div className="absolute -top-5 left-6 bg-[#F4D58D] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#7f1d1d]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 4v16m8-8H4" />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold font-serif text-gray-900">
              Our Vision
            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-[#F4D58D] via-[#f0c254] to-[#cba02e] rounded-full" />

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
              To be the catalyst that propels the revolution of Indian food and
              provide a profitable enterprise for our franchises where they can
              maximize their ROI.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
