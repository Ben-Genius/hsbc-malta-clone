"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight, Globe } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/hsbc-logo.svg";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className="bg-white fixed w-full top-0 z-50 "
      style={{
        fontFamily:
          '"HSBC Univers Next", "HSBC Neue Helvetica", "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif',
      }}
    >
      {/* Top black bar */}
      <div className="bg-black text-white pr-12">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-9 text-xs">
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="hover:underline py-2 px-0 text-white font-normal"
              >
                Personal
              </Link>
              <Link
                href="#"
                className="hover:underline py-2 px-0 text-white font-normal"
              >
                Small business
              </Link>
              <Link
                href="#"
                className="hover:underline py-2 px-0 text-white font-normal"
              >
                Business
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center hover:underline py-2 px-0 text-white font-normal">
                <Globe className="w-3 h-3 mr-1" />
                English
              </button>
              <Link
                href="#"
                className="hover:underline flex items-center py-2 px-0 text-white font-normal"
              >
                Register for online banking
                <ChevronRight className="w-3 h-3 ml-1" />
              </Link>
              <Link
                href="/security"
                className="bg-[#DB0011] hover:bg-[#b8000e] px-6 py-1 h-9 text-center flex items-center justify-center text-white font-normal text-xs"
              >
                Log on
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with navigation */}
      <div className="bg-white border-b border-gray-200 pt-1">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-12 py-4">
              <Image
                src={logo}
                alt="HSBC LOGO"
                width={130}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex items-center space-x-8 flex-1">
              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group"
                onMouseEnter={() => handleMouseEnter("everyday")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>
                <button className="flex items-center py-6 group">
                  <div className="text-left">
                    <div className="font-normal text-[18px] leading-tight text-[#333]">
                      Everyday banking
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Accounts & services
                    </div>
                  </div>
                </button>

                {/* Everyday banking dropdown */}
                {activeDropdown === "everyday" && (
                  <div
                    // full-width mega menu centered under the header
                    className="absolute left-[27rem] top-full -translate-x-1/2 max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2"
                  >
                    <div className="mx-auto max-w-[85rem] px-10 py-4 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[90%] w-px bg-[#cacaca] group-last:hidden"></span>

                        <h3 className="text-[#111] font-medium mb-4 text-md hover:underline">
                          Accounts
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Premier
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Advance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Advance for Graduates
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Student
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Current Account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Basic Bank Account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Switching service
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Savings accounts
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Savings Account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Online Savings Account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Term Deposit Account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[95%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm ">
                          Debit cards
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Premier Debit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Advance Debit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Student Debit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              International Debit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          International
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Open an account
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Money Management
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Financial Support
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Foreign Exchange
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Global View & Global Transfers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              International Transactions
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              International currency accounts
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Banking services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Change your address
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Home loan drawings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Personal banking guarantees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Payments & Transfers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              IBAN
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              ATM banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Close an account
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Help and support
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Become an HSBC Customer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Branch locator
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Ways to bank
                            </Link>
                          </li>
                        </ul>

                        <h3 className="font-medium mt-6 mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group"
                onMouseEnter={() => handleMouseEnter("digital")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>

                <button className="flex items-center text-gray-900 hover:text-gray-600 py-6">
                  <div className="text-left">
                    <div className="font-normal text-[18px]  text-[#333] leading-tight">
                      Digital banking
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Alternative ways to bank
                    </div>
                  </div>
                </button>
                {/* Digital banking dropdown */}
                {activeDropdown === "digital" && (
                  <div className="absolute left-[17rem] top-full -translate-x-1/2 max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2">
                    <div className="mx-auto max-w-[85rem] px-10 py-8 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-25 -translate-y-1/2 h-[37%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Digital banking
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Online banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mobile banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Phone banking
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-25 -translate-y-1/2 h-[37%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Digital services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              ATM banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mobile alerts
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mobile top-ups
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Digital help
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Online banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mobile banking app
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Move Money guide
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Secure Key
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Create a password
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Help and support
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Become an HSBC Customer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Branch locator
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Ways to bank
                            </Link>
                          </li>
                        </ul>

                        <h3 className="font-medium mt-6 mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group"
                onMouseEnter={() => handleMouseEnter("borrowing")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>
                <button className="flex items-center text-gray-900 hover:text-gray-600 py-6">
                  <div className="text-left">
                    <div className="font-normal text-[18px] text-[#333] leading-tight">
                      Borrowing
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Loans & home loans
                    </div>
                  </div>
                </button>

                {/* Borrowing dropdown */}
                {activeDropdown === "borrowing" && (
                  <div className="absolute left-[7rem] top-full -translate-x-1/2 max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2">
                    <div className="mx-auto max-w-[85rem] px-10 py-8 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[45%] -translate-y-1/2 h-[90%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Loans
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Personal Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Car Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Home Improvements Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Student Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Energy Efficiency Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Overdraft
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[45%] -translate-y-1/2 h-[90%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Home loans
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Classic Home Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Buy-to-let Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HomeOwner Loan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Credit cards
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Premier Credit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Advance Credit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mastercard Credit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Visa Credit Card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Supplementary credit card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Compare credit cards
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Banking services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Home loan drawings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Personal banking guarantees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Payments & Transfers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              IBAN
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Help and support
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Become an HSBC Customer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Branch locator
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Ways to bank
                            </Link>
                          </li>
                        </ul>

                        <h3 className="font-medium mt-6 mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group"
                onMouseEnter={() => handleMouseEnter("investing")}
                onMouseLeave={handleMouseLeave}
              >
                {" "}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>
                <button className="flex items-center text-[#333] hover:text-gray-600 py-6">
                  <div className="text-left">
                    <div className="font-normal text-[18px] text-[#333] leading-tight">
                      Investing
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Products & planning
                    </div>
                  </div>
                </button>
                {/* Investing dropdown */}
                {activeDropdown === "investing" && (
                  <div className="absolute left-0 top-full -translate-x-[60%] max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2">
                    <div className="mx-auto max-w-[85rem] px-10 py-8 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[48%] -translate-y-1/2 h-[94%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Wealth management services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Financial advice & wealth management
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Remote financial planning
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Risk tolerance questionnaire
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Sustainable investing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Wealth dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Savings calculators
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              How to grow your savings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              How much should I be saving for my retirement?
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              What will it cost to fund my child's education?
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[48%] -translate-y-1/2 h-[94%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Investment products
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Unit-linked investments
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Key information documents
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Responsible Investment Funds
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              World Selection portfolios
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Select fund range
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Euro Fixed Term Bond 2028
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Locally managed funds
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Malta Government Bond Fund
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Malta Bond Fund
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Maltese Assets Funds
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              International Bond Fund
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Equity Growth Fund
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Planning for retirement
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Workplace Pension Plans
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Retirement pension plan
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Investment insights
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              How to take control of your financial wellbeing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              The importance of staying invested
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              A guide to responsible investing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Help and support
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Become an HSBC Customer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Branch locator
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Ways to bank
                            </Link>
                          </li>
                        </ul>

                        <h3 className="font-medium mt-6 mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group"
                onMouseEnter={() => handleMouseEnter("insurance")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>

                <button className="flex items-center text-gray-900 hover:text-gray-600 py-6">
                  <div className="text-left">
                    <div className="font-normal text-[18px] text-[#333] leading-tight">
                      Insurance
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Life & family
                    </div>
                  </div>
                </button>
                {/* Insurance dropdown */}
                {activeDropdown === "insurance" && (
                  <div className="absolute left-0 top-full -translate-x-[70%] max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2">
                    <div className="mx-auto max-w-[85rem] px-10 py-8 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[45%] -translate-y-1/2 h-[90%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Wealth management services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Financial advice & wealth management
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Risk tolerance questionnaire
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Sustainable investing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Wealth dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              View all
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Savings calculators
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              How to grow your savings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              How much should I be saving for my retirement?
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              What will it cost to fund my child's education?
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div className="relative group">
                        <span className="absolute right-0 top-[45%] -translate-y-1/2 h-[90%] w-px bg-[#cacaca] group-last:hidden"></span>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Insurance
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Life insurance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Additional life cover options
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Key FIVE Critical Illness Cover
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Loan insurance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Travel insurance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Premier Purchase Protection
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          More about life insurance
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Making a claim
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Managing your policy
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Insurance insights
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Why critical illness cover could be right for you
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Life insurance case studies
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Protecting against the unexpected
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Facing the challenges of critical illness
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Help and support
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Become an HSBC Customer
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Branch locator
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Security
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Ways to bank
                            </Link>
                          </li>
                        </ul>

                        <h3 className="font-medium mt-6 mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative px-3 hover:bg-[#ededed] hover:mt-1  group "
                onMouseEnter={() => handleMouseEnter("help")}
                onMouseLeave={handleMouseLeave}
              >
                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-px bg-[#ededed] group-last:hidden"></span>

                <button className="flex items-center text-gray-900 hover:text-gray-600 py-6">
                  <div className="text-left">
                    <div className="font-normal text-[18px] text-[#333] leading-tight">
                      Help
                    </div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">
                      Support & security
                    </div>
                  </div>
                </button>
                {/* Help dropdown */}
                {activeDropdown === "help" && (
                  <div className="absolute left-0 top-full -translate-x-[80%] max-w-[90vw] w-[80vw] bg-[#ededed] border-t border-[#e5e5e5] z-50 -mt-2">
                    <div className="mx-auto max-w-[85rem] px-10 py-8 grid gap-10 [grid-template-columns:repeat(3,minmax(0,1fr))_340px]">
                      {/* col 1 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Banking services
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Change your address
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Home loan drawings
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Personal banking guarantees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Payments & Transfers
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              IBAN
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              ATM banking
                            </Link>
                          </li>
                        </ul>

                        <h3 className="text-[#111] font-medium mt-6 mb-4 text-sm">
                          Security centre
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Protecting yourself online
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 2 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Digital banking
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Online banking
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Mobile banking app
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Secure Key
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Create a password
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* col 3 */}
                      <div>
                        <h3 className="text-[#111] font-medium mb-4 text-sm hover:underline">
                          Help and Support
                        </h3>
                        <ul className="space-y-1.5 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Branch Finder
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Contact us
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Feedback and complaints
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Report a lost or stolen card
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Card Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="text-[#666] hover:underline  block py-1 "
                            >
                              Report a transaction
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* right rail */}
                      <div className="bg-[#5a5a5a] text-white p-8">
                        <h3 className="font-medium mb-4 text-sm">
                          Important information
                        </h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Rates and tariffs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Safeguard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Payment Services Directive
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Statement of Fees
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Fund centre
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              Insurance forms
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="hover:underline block py-0.5"
                            >
                              HSBC Depositor Compensation Scheme (PDF, 70KB)
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
