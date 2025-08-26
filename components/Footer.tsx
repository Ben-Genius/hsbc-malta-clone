import {
  ChevronRight,
  Info,
  LucideGlobe,
  MapPinIcon,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white font-['HSBC_Univers_Next','HSBC_Neue_Helvetica',sans-serif]">
      <div className="bg-[#404040] py-8">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Help and support */}
            <div className="py-5 md:py-0 md:px-10 flex flex-col">
              <div className="flex items-center gap-2">
                <Phone className=" text-[#a7a7a7]" />
                <h3 className="text-white text-md font-semibold mb-4">
                  Help and support
                </h3>
              </div>
              <p className="text-gray-200 text-sm mt-1 hover:underline">
                Find answers to your queries or contact us for further help{" "}
                <ChevronRight className="inline-block w-4 h-4 align-[-2px]" />
              </p>
            </div>

            {/* Find a branch */}
            <div className="py-5 md:py-0 md:px-10 flex flex-col">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-[#a7a7a7]" />
                <h3 className="text-white text-md font-semibold pb-3">
                  Find a branch
                </h3>
              </div>
              <p className="text-gray-200 text-sm mt-1 hover:underline">
                And your nearest Express Banking location{" "}
                <ChevronRight className="inline-block w-4 h-4 align-[-2px]" />
              </p>
            </div>

            {/* HSBC Careers */}
            <div className="py-5 md:py-0 md:px-10 flex flex-col">
              <div className="flex items-center gap-2">
                <Info className="w-6 h-6 text-[#a7a7a7]" />
                <h3 className="text-white text-md font-semibold pb-3">
                  HSBC Careers
                </h3>
              </div>
              <p className="text-gray-200 text-sm mt-1 hover:underline">
                Achieve your ambitions{" "}
                <ChevronRight className="inline-block w-4 h-4 align-[-2px]" />
              </p>
            </div>

            {/* About HSBC */}
            <div className="py-5 md:py-0 md:px-10 flex flex-col">
              <div className="flex items-center gap-2">
                <LucideGlobe className="w-6 h-6 text-[#a7a7a7]" />
                <h3 className="text-white text-md font-semibold mb-3">
                  About HSBC
                </h3>
              </div>
              <p className="text-gray-200 text-sm mt-1 hover:underline">
                Media, investor and corporate information{" "}
                <ChevronRight className="inline-block w-4 h-4 align-[-2px]" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-sm overflow-auto">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-4 text-white text-sm">
          {/* Links section on the left */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="hover:underline">
              Hyperlink policy
            </a>
            <a href="#" className="hover:underline">
              Privacy notice
            </a>
            <a href="#" className="hover:underline">
              Cookie notice
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
            <a href="#" className="hover:underline">
              Site terms
            </a>
          </div>

          {/* Copyright and legal links section on the right */}
          <div className="flex flex-wrap justify-center md:justify-end text-[#d7d8d6] md:text-right max-w-lg ">
            <div className="flex items-center space-x-1 whitespace-nowrap">
              <a href="#" className="hover:underline">
                Investor relations
              </a>
              <span className="mx-1">|</span>
              <a href="#" className="hover:underline">
                HSBC Group
              </a>
              <span className="mx-1">| © HSBC Bank Malta 2025. All rights</span>
            </div>
            <div className="mt-2 md:mt-0 md:pl-2 text-center md:text-right">
              reserved. This website is designed for use in Malta. Cross-border
              banking.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
