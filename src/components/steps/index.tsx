import "./index.scss";
import Image from "next/image";
export default function Steps() {
    return (
        <>
            <div className="own-tabla bg-green-900 relative overflow-hidden">
                <Image
                    width={1920}
                    height={400} src="/shared/steps-bg.webp" alt="Chef2" className="bg-image" />
                <div className="max-w-6xl mx-auto text-white rounded-lg py-10 px-6 relative">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        {/* Left Section - Steps  */}
                        <div className="md:col-span-7 col-span-12 pb-8">
                            <h2 className="text-5xl font-bold mb-10">Steps to <span className="text-orange-600">own a Tabla</span></h2>
                            <div className="mt-6 space-y-4 own-tabla-area">
                                {/* Step 1  */}
                                <div className="flex items-start space-x-4 own-tabla-items">
                                    <div
                                        className="bg-white text-orange-600 font-bold w-8 h-8 flex items-center justify-center rounded-full couting">
                                        1</div>
                                    <div className="content-tabla">
                                        <h3 className="font-semibold text-xl">Chat</h3>
                                        <p className="text-gray-300 text-md">Chat with us on a phone call.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 2  */}
                                <div className="flex items-start space-x-4 own-tabla-items">
                                    <div
                                        className="bg-white text-orange-600 font-bold w-8 h-8 flex items-center justify-center rounded-full couting">
                                        2</div>
                                    <div className="content-tabla">
                                        <h3 className="font-semibold text-xl">Receive</h3>
                                        <p className="text-gray-300 text-md">
                                        Complete confidential questionnaire to receive our FDD (Franchise Disclosure Document)
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3  */}
                                <div className="flex items-start space-x-4 own-tabla-items">
                                    <div
                                        className="bg-white text-orange-600 font-bold w-8 h-8 flex items-center justify-center rounded-full couting">
                                        3</div>
                                    <div className="content-tabla">
                                        <h3 className="font-semibold text-xl">Visit Us</h3>
                                        <p className="text-gray-300 text-md">
                                        Visit us to discover more about ownership and meet the team at Tabla

                                        </p>
                                    </div>
                                </div>

                                {/* Step 4  */}
                                <div className="flex items-start space-x-4 own-tabla-items">
                                    <div
                                        className="bg-white text-orange-600 font-bold w-8 h-8 flex items-center justify-center rounded-full couting">
                                        4</div>
                                    <div className="content-tabla">
                                        <h3 className="font-semibold text-xl">Approval
                                        </h3>
                                        <p className="text-gray-300 text-md">
                                        Final review with our leadership team, qualified candidate will become approved to join Tabla

                                        </p>
                                    </div>
                                </div>

                                {/* Step 5  */}
                                <div className="flex items-start space-x-4 own-tabla-items">
                                    <div
                                        className="bg-white text-orange-600 font-bold w-8 h-8 flex items-center justify-center rounded-full couting">
                                        5</div>
                                    <div>
                                        <h3 className="font-semibold text-xl">Onboarding</h3>
                                        <p className="text-gray-300 text-md">Start the onboarding process
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <a href="#apply-now"
                                    className="bg-orange-600 text-white px-6 py-2 rounded-lg text-lg font-normal shadow-md hover:bg-orange-700">
                                    Get Started
                                </a>
                            </div>
                        </div>

                        {/* Right Section - Image  */}
                        <div className="relative flex justify-center md:col-span-5 col-span-12">
                            <div className="relative">
                                <Image
                                    width={400}
                                    height={400} src="/shared/chef2.webp" alt="Chef2" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}