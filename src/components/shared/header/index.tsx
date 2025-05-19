'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="header-area rounded-b-lg tracking-wide z-50 md:absolute relative top-0 inset-x-0 max-w-5xl mx-auto bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-3 relative header-inner">
        {/* Mobile Logo */}
        <Link className="cursor-pointer lg:hidden" href="/">
          <Image
            width={150}
            height={62}
            src="/shared/tablafranchiseWhiteLogo.webp"
            alt="Logo"
            layout="intrinsic"
            priority
          />
        </Link>

        <a
          href="https://www.tablacuisine.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer lg:hidden text-center uppercase rounded text-[12px] bg-red-800 hover:bg-red-900 px-3 py-3 text-white inline-block"
        >
          Visit Tablacuisine
        </a>

        {/* Menu Section */}
        <div
          id="collapseMenu"
          className="w-full lg:block max-lg:hidden max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 block"
        >
          <div className="lg:flex max-lg:space-y-2 justify-center items-center">
            {/* Left Nav Items */}
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2 relative">
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/investment"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                >
                  Investments
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>

              {/* Franchise Model Dropdown */}
              <li className="relative max-lg:border-b max-lg:py-3 group">
                <button
                  className="flex items-center font-bold nav-link header-text gap-1 relative group text-black"
                  aria-haspopup="true"
                  type="button"
                >
                  Franchise Model
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </button>

                <ul
                  className="
                    absolute left-1/2 top-full mt-2 -translate-x-1/2
                    z-50 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/10
                    py-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transform scale-95 group-hover:scale-100
                    transition-all duration-200 origin-top
                  "
                >
                  <li>
                    <Link
                      href="/FranchieseModel"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        hover:bg-gray-100 hover:text-gray-900
                        transition-colors duration-150
                        rounded-t-xl
                      "
                    >
                      Fine Dine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/FranchieseModel/Fastcasual"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        hover:bg-gray-100 hover:text-gray-900
                        transition-colors duration-150
                        rounded-b-xl
                      "
                    >
                      Fast Casual
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/blogs"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                >
                  Blog
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
            </ul>

            {/* Center Logo */}
            <Link
              href="/"
              className="cursor-pointer mx-16 block w-[100px] sm:w-[110px] md:w-[120px]"
            >
              <Image
                src="/shared/tablafranchiseWhiteLogo.webp"
                alt="Logo"
                width={120}
                height={50}
                className="h-auto w-full"
                priority
              />
            </Link>

            {/* Right Nav Items */}
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              {/* About Dropdown */}
              <li className="relative max-lg:border-b max-lg:py-3 group">
                <button
                  className="flex items-center font-bold nav-link header-text gap-1 relative group text-black"
                  aria-haspopup="true"
                  type="button"
                >
                  About
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </button>
                <ul
                  className="
                    absolute left-1/2 top-full mt-2 -translate-x-1/2
                    z-50 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black/10
                    py-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transform scale-95 group-hover:scale-100
                    transition-all duration-200 origin-top
                  "
                >
                  <li>
                    <Link
                      href="/about"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        hover:bg-gray-100 hover:text-gray-900
                        transition-colors duration-150
                        rounded-t-xl
                      "
                    >
                      About Tabla
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/Mission"
                      className="
                        block px-4 py-2 text-sm text-gray-700 font-semibold
                        hover:bg-gray-100 hover:text-gray-900
                        transition-colors duration-150
                        rounded-b-xl
                      "
                    >
                      Our Mission
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/chooseus"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                >
                  Why Choose Us
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  href="/contactUs"
                  className="header-text cursor-pointer font-bold block nav-link relative group text-black"
                >
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[2px] bg-[#7D0C0C] transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
