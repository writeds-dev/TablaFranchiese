import "./index.scss";
import Image from "next/image";
export default function Join() {
    return (
        <>
            <div id="join-us" className="why-choose bg-red-800 relative py-8">
                <Image width={200}
                    height={200} src="/shared/spoon.webp" className="orange-img orange-three" alt="" />
                <Image width={300}
                    height={300} src="/shared/onion.webp" className="orange-img orange-four" alt="" />
                <Image
                    width={100}
                    height={100}
                    src="/shared/green-leaf.webp"
                    className="orange-img orange-two"
                    alt=""
                />
                <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Section  */}
                    <div className="relative">
                        <Image width={600}
                            height={300} src="/shared/map.webp" alt="Restaurant" className="w-full" />
                    </div>
                    {/* Right Section  */}
                    <div className="space-y-4 z-10">
                        {/* <span className="text-2xl font-semibold">Why Choose Us?</span> */}
                        <h2 className="text-5xl font-bold text-white mt-3 mb-6">We&apos;re Growing Quickly
                        </h2>
                        <h2 className="text-5xl font-bold text-white mt-3 mb-6">Ready to <span className="text-lime-500">Join Us?
                        </span>
                        </h2>
                        <h3 className="text-[24px] font-normal text-white">Fabulous opportunities available! We are aggressively expanding into USA.
                        </h3>


                        <div className="mt-8">
                            <a href="#apply-now"
                                className="bg-lime-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-lime-600">
                                Get Started Today
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}