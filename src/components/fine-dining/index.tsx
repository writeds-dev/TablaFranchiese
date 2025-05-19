import { FaCheck } from "react-icons/fa";
import "./index.scss";
import Image from "next/image";
export default function FineDining() {
    return (
      <>
          <div className="why-choose relative py-8">
               {/* <Image  width={300}
                              height={250} src="/shared/spoon.webp" className="spoon-img" alt="" /> */}
              <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
                   {/* Left Section  */}
                  <div className="space-y-4">
                      <span className="text-2xl font-semibold">Modern Indian
                      </span>
                      <h2 className="text-5xl font-bold text-gray-900 mt-3 mb-6"> <span className="text-red-800">Fine Dining</span> Franchise
                      </h2>
                      <h3 className="text-[18px] font-semibold text-gray-600">Leading Indian Restaurant & Catering Brand Since 2008
                      </h3>
                      <h3 className="text-[18px] font-semibold text-gray-600 mb-6">As a part of our pre-opening support, we provide onboarding and training to prepare you to open.
                      </h3>
      
                      <ul className="space-y-2">
                          <li className="flex items-start space-x-2 relative ps-10 mb-6">
                              <span className="tick-icon">
                                <FaCheck />
                              </span>
                              <p className="text-[18px]">Join us for 3 weeks of initial training</p>
                          </li>
                          <li className="flex items-start space-x-2 relative ps-10 mb-6">
                              <span className="tick-icon">
                                <FaCheck />
                              </span>
                              <p className="text-[18px]">Then, onsite support in your Tabla as you get ready to open your restaurant
</p>
                          </li>
                      </ul>
                      <div className="mt-8">
                   {/* <button
                        className="bg-red-800 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-red-900">
                      View More
                    </button>  */}
                </div>
                  </div>
                   {/* Right Section  */}
                  <div className="relative ps-10">
                       <Image  width={600}
                      height={350} src="/shared/Fine-Dining-Franchise.webp" alt="Restaurant" className="" />
               </div>
      
              </div>
          </div>
      </>
 )
}