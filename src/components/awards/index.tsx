import "./index.scss";
import Image from "next/image";

export default function Awards() {
  return (
    <section id="awards" className="relative py-16 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 leading-tight text-balance">
          Growth & <span className="text-red-900">Awards</span>
        </h2>

        <div className="relative w-full flex justify-center items-center">
          {/* Desktop Image */}
          <div className="hidden md:block max-w-6xl w-full">
            <Image
              src="/shared/franchise-timeline-desktop.webp"
              alt="Franchise timeline desktop"
              width={1200}
              height={400}
              className="rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden w-full">
            <Image
              src="/shared/franchise-timeline-mobile.webp"
              alt="Franchise timeline mobile"
              width={400}
              height={400}
              className="rounded-md shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
