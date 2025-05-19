import "./index.scss";
import Image from "next/image";
export default function Founders() {
    return (
        <>
            <div id="founders" className="founders relative">

                <div className="relative mb-10">
                    <div className="bg-green-800 h-60 w-full"></div>
                    <div className="founders-content">
                        {/* Profile Image  */}
                        <div className="max-w-5xl mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative space-y-4">
                                <Image width={500} height={500} src="/shared/AnshuJainImg.webp" alt="Anshu Jain" className="" />
                            </div>

                            {/* Text Content  */}
                            <div className="">
                                <h2 className="text-5xl font-bold text-white mb-20">Meet Our Founders</h2>
                                <p className="text-gray-700 text-[20px] mt-4">
                                Anshu Jain has been learning, innovating, and leading for over 25 years. As a co-founder of Stealth Management Group, Anshu owns and manages multiple hotels and businesses all over the country.


                                </p>
                                <p className="text-gray-700 text-[20px] mt-2">
                                Envisioning a nationwide presence for Tabla, Anshu began working with franchise development companies and regulators in 2023 to register as a nationwide franchisor.

</p>
{/* <div className="mt-6">
            <button
                className="bg-green-800 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-green-900">
                Know More
            </button>
        </div> */}

                            </div>
                        </div>
                    </div>

                </div>




                <div className="max-w-5xl mx-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Content  */}
                    <div className="founders-content second">
                        <p className="text-gray-700 text-[20px] mt-4">
                        Nora Jain is the Co-Founder and COO of Gourmet Chefs, LLC and Tabla Franchise LLC., and the visionary behind the Tabla Restaurant Brand. With a Master’s degree in Structural Engineering from Arizona State University, Nora combines her technical expertise with a deep passion for the culinary arts.
                       </p>
                        {/* <p className="text-gray-700 text-[20px] mt-2">
                            Envisioning a nationwide presence for Tabla, Nora began working with franchise development companies
                            and regulators in 2023 to register as a nationwide franchisor.

                        </p> */}

                        {/* Button  */}
                        <div className="mt-6">
            {/* <button
                className="bg-green-800 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-green-900">
                Know More
            </button> */}
        </div>
                    </div>

                    {/* Profile Image  */}
                    <div className="relative space-y-4 second-img">
                        <Image width={500} height={500} src="/shared/NooraJainImg.webp" alt="NooraJainImg" className="" />
                    </div>

                </div>

            </div>
        </>
    )
}