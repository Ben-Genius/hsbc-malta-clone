"use client";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import student from "@/public/student.jpeg";
import facebook from "@/public/facebook.svg";
import x from "@/public/twitter.svg";
import youtube from "@/public/youtube.svg";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section - Student Offer */}
        <section
          className="relative"
          style={{
            fontFamily:
              '"HSBC Univers Next", "HSBC Neue Helvetica", "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif',
          }}
        >
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="space-y-6 max-w-[26rem] mx-auto">
                <h1 className="text-5xl  text-gray-900 leading-tight">
                  Student offer
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Get €70 cashback if you open an HSBC Student Account by 31
                  October 2025 and credit your stipend with us.
                </p>
                <p className="text-sm text-gray-500">
                  Terms and conditions apply.
                </p>
                <button className="bg-[#DB0011] hover:bg-[#b8000e] text-white px-6 py-3 font-medium transition-colors">
                  Find out more
                </button>
              </div>
              <div className="w-full">
                <Image
                  src={student}
                  alt="Happy students taking a selfie"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Loans Sections */}
        <section
          className="w-full z-20 absolute right-0 left-0 bottom-36 "
          style={{
            fontFamily:
              '"HSBC Univers Next", "HSBC Neue Helvetica", "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif',
          }}
        >
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row w-full gap-4 items-center justify-between">
              <div className="bg-white border-[.0625rem] border-[#ededed] border-b-[#d7d8d6] w-full p-5">
                <h2 className="text-[1.75rem]  font-normal text-gray-900 mb-2">
                  Personal Loans
                </h2>
                <p className="text-gray-600 mb-3">
                  Turn your plans into reality.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center  hover:underline font-medium"
                >
                  Find out more{" "}
                  <ChevronRight className=" ml-1 text-red-400 font-normal" />
                </Link>
              </div>
              <div className="bg-white border-[.0625rem] border-[#ededed] border-b-[#d7d8d6] max-w-full w-full mr-5 mx-auto p-5">
                <h2 className="text-[1.75rem] font-normal text-gray-900 mb-2">
                  Home Loans
                </h2>
                <p className="text-gray-600 mb-3">
                  Find the perfect forever home with HSBC.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center  hover:underline font-medium"
                >
                  Find out more <ChevronRight className=" text-red-400" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Cards Grid */}
        <section className="py-12 mt-[8rem]">
          <div className="max-w-[85rem] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Security centre */}
              <div className="bg-white border border-gray-200  overflow-hidden  ">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/security-vLYA2ZV3erO1HhoLm1aXRjGOfYozuo.jpeg"
                  alt="Father and child using tablet"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[1.7rem] font-light text-gray-900 mb-7 flex items-center leading-tight ">
                    Security centre{" "}
                    <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
                  </h3>
                  <p className="text-gray-600 text-sm text-[15px]">
                    From avoiding fraud to disputing unrecognised transactions,
                    our new online security centre provides all the information
                    you need.
                  </p>
                </div>
              </div>

              {/* Become an HSBC customer */}
              <div className="bg-white border border-gray-200  overflow-hidden  ">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/become%20hsbc%20customer-0wsENJ2gReHqcTklRSg8XUKdmuKQ1m.jpeg"
                  alt="Woman in striped apron writing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[1.7rem] font-light text-gray-900 mb-8 flex items-center leading-8 ">
                    Become an HSBC customer{" "}
                    <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
                  </h3>
                  <p className="text-gray-600 text-sm text-[15px]">
                    To get started, simply apply online.
                  </p>
                </div>
              </div>

              {/* Career opportunities */}
              <div className="bg-white border border-gray-200  overflow-hidden  ">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/career%20opportunities-p755Y66kJRlmh8gIhvSNHC8lwJHB7a.jpeg"
                  alt="Professional woman presenting"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-[1.75rem] font-light text-gray-900 mb-6 flex items-center">
                    Career opportunities{" "}
                    <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
                  </h3>
                  <p className="text-gray-600  text-[15px]">
                    To learn more about our current vacancies and how you can
                    apply, please review our careers page.
                  </p>
                </div>
              </div>

              {/* Regulations, Rules and Directives */}
              <div className="bg-white border border-gray-200  p-6  ">
                <h3 className="text-[1.75rem] font-light text-gray-900 mb-3 flex items-center hover:underline">
                  Regulations, Rules and Directives{" "}
                  <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
                </h3>
                <p className="text-gray-600 text-sm text-[15px]">
                  Get regulatory information relating to our products and
                  services.
                </p>
              </div>

              {/* Rates and tariffs */}
              <div className="bg-white border border-gray-200  p-6  ">
                <h3 className="text-[1.75rem] font-light text-gray-900 mb-3 flex items-center hover:underline">
                  Rates and tariffs{" "}
                  <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
                </h3>
                <p className="text-gray-600 text-sm text-[15px]">
                  Find information relating to our services, rates and other
                  updates.
                </p>
              </div>

              {/* Sustainable Finance Disclosure Regulation */}
              <div className="bg-white border border-gray-200  p-6  ">
                <h3 className="text-[1.75rem] font-light text-gray-900 mb-3 flex items-center hover:underline transition-all duration-300">
                  Sustainable Finance Disclosure Regulation{" "}
                  <ChevronRight size={40} className=" ml-2 text-[#DB0011]" />
                </h3>
                <p className="text-gray-600 text-sm text-[15px]">
                  EU regulation on disclosing whether and how we integrate
                  sustainability risks in our investment advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to top */}
        <section className="py-8">
          <div className="max-w-[83rem] mx-auto gap-2 flex items-center text-black ">
            <button className="flex items-center text-gray-900 hover:text-gray-900 hover:underline hover:cursor-pointer">
              Back to top
            </button>
            <span className="pt-1"> ↑ </span>
          </div>
        </section>

        {/* Connect with us */}
        <section className="py-8 border-t border-gray-200">
          <div className="max-w-[85rem] mx-auto px-4">
            <h2 className="text-[24px] font-light text-gray-900 mb-2 flex items-center">
              Connect with us{" "}
              <ChevronRight className="w-5 h-5 ml-2 text-[#DB0011]" />
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Listening to what you have to say about our services matters to
              us.
            </p>
            <div className="flex space-x-4 items-end justify-end">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 -full flex items-center justify-center rounded-full"
              >
                <Image src={facebook} alt="Facebook" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-black -full flex items-center justify-center rounded-full"
              >
                <Image src={x} alt="Facebook" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 -full flex items-center justify-center rounded-full"
              >
                <Image src={youtube} alt="Facebook" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
