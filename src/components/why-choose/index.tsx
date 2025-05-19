import { FaCheck } from "react-icons/fa";
import "./index.scss";
import Image from "next/image";

export default function WhyChoose() {
    return (
      <>
      
      <div id="about" className="why-choose relative py-8">
         <Image  width={150}
                        height={150} src="/shared/lines.webp" className="choose-line" alt="" />
        <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

             {/* Left Section  */}
            <div className="relative">
                 <Image  width={300}
                height={300} src="/shared/whyfranchiseimg.webp" alt="Restaurant" className="w-full" />
         </div>
             {/* Right Section  */}
            <div className="space-y-4">
                <span className="text-2xl font-semibold">Why Choose Us?
                </span>
                <h2 className="text-5xl font-bold text-gray-900 mt-3 mb-6">Why Become a <span className="text-red-800">Franchise?</span>
                </h2>
                <h3 className="text-[24px] font-semibold text-gray-600">According to the &quot;open for opportunity&quot; market research
                    on franchised business:</h3>

                <ul className="space-y-2">
                    <li className="flex items-start space-x-2 relative ps-10">
                        <span className="tick-icon">
                          <FaCheck />
                        </span>
                        <p className="text-[18px]">Drive 1.8 times higher sales than comparable non-franchise establishments.</p>
                    </li>
                    <li className="flex items-start space-x-2 relative ps-10">
                        <span className="tick-icon">
                          <FaCheck />
                        </span>
                        <p className="text-[18px]">Provide 2.3 times as many jobs than their non-franchise counterparts.

</p>
                    </li>
                    <li className="flex items-start space-x-2 relative ps-10">
                        <span className="tick-icon">
                          <FaCheck />
                        </span>
                        <p className="text-[18px]">Pass their success on to employees in the form of higher wages and benefits and greater opportunity for advancement.

</p>
                    </li>
                </ul>

                <p className="text-[24px] font-semibold text-gray-700">Becoming a <span className="text-red-800 font-bold">franchise
                        owner</span> with <span className="text-red-800 font-bold">Tabla</span> gives you access to this and
                    so much more.</p>
            </div>

        </div>
    </div>
      
      </>
    )

}