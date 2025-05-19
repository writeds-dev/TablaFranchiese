import "./index.scss";
import Image from "next/image";

export default function Invest() {
    return (
      <>
        <div className="invest relative py-8 bg-green-900">
        <Image  width={250}
                                height={250} src="/shared/onion.webp" className="onion-img" alt="" />
        <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Section  */}
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Are you ready to <span
                        className="text-orange-600">invest?</span>
                </h2>
                <h3 className="text-xl font-normal text-white">Tabla is recognised as a premium restaurant brand in
                    Central Florida area. Now we offer this opportunity to franchise owners in new markets. We offer
                    fresh, flavorful and authentic Indian Fusion Cuisine to guests with two ownership models for
                    franchise owners: Full Service Fine Dining & Fast Casual with a limited menu
                </h3>
                <div className="mt-8">
                    <a href="#apply-now"
                        className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-orange-700">
                        Get Started Today
                    </a>
                </div>

            </div>
            {/* Right Section  */}
            <div className="relative">
                <Image  width={400}
                        height={300} src="/shared/invest.webp" alt="Invest" className="w-full" />
            </div>


        </div>
    </div>

      </>
 )
}