import "./index.scss";
import Image from "next/image";
import FranchiseForm from "@/shared/formWrapper";

export default function HeroBanner() {


  return (
    <>
      {/* Hero Section  */}
      <div id="apply-now"></div>
      <section id="home" className="hero-area relative  min-h-[100vh] flex items-center justify-center text-white">
        <div className="hero-bgimg">
          <Image
            className="object-cover"
            src={'/shared/banner.jpg'}
            fill
            priority
            alt={'Banner Image'}
          />

        </div>
        <div className="banner-content-area grid lg:grid-cols-2 lg:gap-20 gap-10 items-center max-w-6xl ml-0 lg:px-6 px-4">
          <div className="hero-content lg:py-10 pt-10 pb-0 rounded-lg mt-20 w-full">
            <span className="text-5xl font-semibold">Modern Indian
            </span>
            <h1 className="text-green text-[40px] my-4 font-bold leading-12">
              Restaurant Franchise

            </h1>
            <p className="mt-8 text-[28px] leading-8">
              For Franchise information,
            </p>
            <p className="mt-4 text-[25px] leading-8">
              Contact Us : <a href="tel:689-698-9212">689-698-9212</a>
            </p>

            <h2 className="mt-14 text-[25px] leading-8">
              Recognized and Awarded by

            </h2>

            <div className="certifiIn">
              <Image width={100}
                height={100} src="/shared/image-1.webp" alt="awarded by orlando" />
              <Image width={100}
                height={100} src="/shared/image-2.webp" alt="awarded by tripadvisor" />
              <Image width={100}
                height={100} src="/shared/image-3.webp" alt="awarded by yelp" />
              <Image width={100}
                height={100} src="/shared/image-4.webp" alt="awarded by orlado sentinel" />
              <Image width={100}
                height={100} src="/shared/image-5.webp" alt="awarded by orlando weekly" />
              <Image width={100}
                height={100} src="/shared/image-6.webp" alt="awarded by open table" />
            </div>

          </div>
          <FranchiseForm/>
        </div>
      </section>

    </>
  )
}