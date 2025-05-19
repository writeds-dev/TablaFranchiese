import "./index.scss";
import Image from "next/image";
export default function Requirements() {
    return (
      <>
        <div className="financial relative pb-10">
        <Image  width={200}
                                      height={200} src="/shared/grey-leaf.webp" className="grey-img" alt="" />
        {/* <Image  width={200}
                              height={200} src="/shared/green-leaf.webp" className="orange-img orange-two" alt="" /> */}
        <Image  width={200}
                              height={200} src="/shared/spoon.webp" className="orange-img orange-three" alt="" />
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                <span className="text-red-700">Financial</span> Requirements
            </h2>

            <div className="finance-area text-white p-6 mt-6 rounded-lg">
                <div className="grid gap-4">
                    <div className="flex flex-wrap items-center justify-between space-x-4">
                        <p className="font-semibold text-[22px]">Startup Investment</p>
                        <div>
                            <p className="text-lg mb-2">$185K to $400K for Fast Casual</p>
                            <p className="text-lg mb-2"> $324K to $629K for Fine Dining</p>
                        </div>
                    </div>  

                    <hr className="border-white my-2"></hr>
                    <div className="flex flex-wrap items-center justify-between space-x-4">
                        <p className="font-semibold text-[22px]">Initial Franchise Fees</p>
                        <div>
                            <p className="text-lg mb-2">$36K for Fast Casual</p>
                            <p className="text-lg mb-2"> $45K for Fine Dining</p>
                        </div>
                    </div>

                    <hr className="border-white my-2"></hr>
                    <div className="flex flex-wrap items-center justify-between space-x-4">
                        <p className="font-semibold text-[22px]">On Going Royalty</p>
                        <div>
                            <p className="text-lg mb-2">Payment of 6% of the Gross Sales for continued support and training</p>
                        </div>
                    </div>

                    <hr className="border-white my-2"></hr>
                    <div className="flex flex-wrap items-center justify-between space-x-4">
                        <p className="font-semibold text-[22px]">Brand Development Fund</p>
                        <div>
                            <p className="text-lg mb-2">Contributing 2% of Gross Sales</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        <div className="mt-2 text-center">
            <a href="#apply-now"
                className="bg-red-800 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-red-900">
                Get Started Today
            </a>
        </div>

    </div>
      </>
 )
}