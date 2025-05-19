import { FaCheck } from "react-icons/fa";
import "./index.scss";
import Image from "next/image";
export default function ModernIndian() {
  return (
    <>
      <div className="background-area pt-6">
        {/* Modern  */}

        <div className="modern relative">
          <Image
            width={500}
            height={800}
            src="/shared/grey-img.webp"
            className="grey-img"
            alt=""
          />
          <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section  */}
            <div className="space-y-4">
              <span className="text-2xl font-semibold">Modern Indian</span>
              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                <span className="text-green-800">Fast Casual </span>
                Franchise     
              </h2>
              <h3 className="text-xl font-semibold text-gray-800">
              Leading Indian Restaurant & Catering Brand Since
                <span className="text-green-800"> 2008</span>
              </h3>
              <h3 className="text-xl font-semibold text-gray-800">
              As a part of our pre-opening support, we provide onboarding and training to prepare you to open.
              </h3>

              <ul className="space-y-2">
                <li className="flex items-start space-x-2 relative ps-10 mb-5">
                  <span className="tick-icon">
                    <FaCheck />
                  </span>
                  <p>Join us for 2 weeks of initial training</p>
                </li>
                <li className="flex items-start space-x-2 relative ps-10 mb-5">
                  <span className="tick-icon">
                    <FaCheck />
                  </span>
                  <p>
                  Then, onsite support in your Tabla as you get ready to open your restaurant
                  </p>
                </li>
              </ul>

            {/* <div className="mt-6">
                <button className="bg-green-800 text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-900">
                  View More
                </button>
              </div>  */}
            </div>
            {/* Right Section  */}
            <div className="relative flex items-center justify-center">
              <Image
                width={400}
                height={400}
                src="/shared/tabla-tx.webp"
                alt="Invest"
                className="chef-image rounded-[2vw]"
              />
            </div>
          </div>
        </div>
        {/* Our Commitment to Excellence  */}

        <div id="commitment" className="our-commitment md:mt-10">
          <div className="max-w-6xl mx-auto bg-orange-600 text-white rounded-lg px-8 py-16 mb-14 relative">
            <Image
              width={300}
              height={400}
              src="/shared/orange-1.webp"
              className="orange-img orange-one"
              alt=""
            />
            <Image
              width={80}
              height={42}
              src="/shared/orange-2.webp"
              className="orange-img orange-two"
              alt=""
            />
            <Image
              width={100}
              height={100}
              src="/shared/orange-3.webp"
              className="orange-img orange-three"
              alt=""
            />
            <Image
              width={200}
              height={200}
              src="/shared/orange-4.webp"
              className="orange-img orange-four"
              alt=""
            />
            <div className="flex flex-col md:flex-row items-center relative commitment-inner gap-8">
              {/* Left Section - Image  */}
              <div className="md:w-1/2 commit-img">
                <Image
                  width={460}
                  height={450}
                  src="/shared/excellenceImg.webp"
                  alt="Food"
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Right Section - Content  */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h2 className="text-4xl font-bold">
                  Our Commitment to
                  <span className="text-white"> Excellence</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {/* Focus Section  */}
                  <div className="bg-white text-gray-800 p-6 rounded-lg shadow">
                    <div className="font-bold text-xl flex items-center">
                      <Image
                        width={28}
                        height={28}
                        src="/shared/focus.svg"
                        className="me-2"
                        alt=""
                      />
                     Our Focus
                    </div>
                    <ul className="mt-4 text-sm">
                      <li className="pb-1 text-[16px]">Authentic & Fresh</li>
                      <li className="pb-1 text-[16px]">Consistent & Reliable</li>
                      <li className="pb-1 text-[16px]">Value for Money</li>
                      <li className="pb-1 text-[16px]">Memorable Experience</li>
                    </ul>
                  </div>

                  {/* Core Values  */}
                  <div className="bg-white text-gray-800 p-6 rounded-lg shadow">
                    <div className="font-bold text-xl flex items-center">
                      <Image
                        width={28}
                        height={28}
                        src="/shared/values.svg"
                        className="me-2"
                        alt=""
                      />
                      Core Values
                    </div>
                    <ul className="mt-4 text-sm values-area">
                      <li className="pb-1 text-[16px]">Guest Friendly</li>
                      <li className="pb-1 text-[16px]">Integrity</li>
                      <li className="pb-1 text-[16px]">Committed</li>
                      <li className="pb-1 text-[16px]">Authenticity</li>
                      <li className="pb-1 text-[16px]">Hospitality</li>
                      <li className="pb-1 text-[16px]">Creative</li>
                      <li className="pb-1 text-[16px]">Team Work</li>
                      <li className="pb-1 text-[16px]">Eco Friendly</li>
                    </ul>
                  </div>

                  {/* Mission  */}
                  <div className="bg-white text-gray-800 p-6 rounded-lg shadow">
                    <div className="font-bold text-xl flex items-center">
                      <Image
                        width={28}
                        height={28}
                        src="/shared/mission.svg"
                        className="me-2"
                        alt=""
                      />
                      Mission
                    </div>
                    <p className="text-sm mt-4 text-[16px]">
                    Elevating Indian & South Asian Cuisines and creating convenient access in local communities
                    </p>
                  </div>

                  {/* Vision  */}
                  <div className="bg-white text-gray-800 p-6 rounded-lg shadow">
                    <div className="font-bold text-xl flex items-center">
                      <Image
                        width={28}
                        height={28}
                        src="/shared/vision.svg"
                        className="me-2"
                        alt=""
                      />
                      Vision
                    </div>
                    <p className="text-sm mt-4 text-[16px]">
                    To be the catalyst that propels the revolution of Indian food and provide a profitable enterprise for our franchises where they can maximize their ROI.
                    </p>
                  </div>
                </div>

                {/* Button  */}
                <div className="mt-6 text-center">
                  <a href="#apply-now" className="bg-green-800 text-white px-6 py-2 rounded-lg text-lg shadow-md hover:bg-green-800">
                    Own a Tabla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
