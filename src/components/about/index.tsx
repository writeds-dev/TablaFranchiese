import "./index.scss";
import Image from "next/image";

export default function About() {
    return (
      <>
       <div className="why-choose relative pt-8">
        <Image  width={80}
                height={42}
                src="/shared/grass.png"
                 className="grass-img" alt="" />
                     <h2 className="text-4xl font-bold text-center text-gray-900 mt-3 mb-4"> <span className="text-red-800"> Key </span> Features
                     </h2>
        <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    

        <div className="flex flex-col items-center">
            <Image width={62}
                height={62}
                src="/shared/revenue.svg" alt="" />
            <p className="mt-2 font-normal text-lg">Higher <br></br>  Revenue</p>
        </div>
        <div className="flex flex-col items-center">
        <Image width={62}
                height={62}
                src="/shared/training.svg" alt="" />
            <p className="mt-2 font-normal text-lg">Expert Training &<br></br> Support Structure</p>
        </div>
        <div className="flex flex-col items-center">
        <Image width={62}
                height={62}
                src="/shared/record.svg" alt="" />
            <p className="mt-2 font-normal text-lg">Proven Track<br></br> Record</p>
        </div>
        <div className="flex flex-col items-center">
            <Image width={62}
                height={62}
                src="/shared/partners.svg" alt="" />
            <p className="mt-2 font-normal text-lg">Trusted Vendor<br></br> Partners</p>
        </div>
          </div>
          </div>
      </>
 )
}
