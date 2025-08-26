"use client";
import { Info, X } from "lucide-react";
import { useState } from "react";

export default function OnlineBankingLogon() {
  const [username, setUsername] = useState("");
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notRecognised, setNotRecognised] = useState(false);

  const isEmptyError = submitted && username.trim() === "" && !focused;

  function handleContinue() {
    setSubmitted(true);
    // Simulate server check: if there is text but it's “wrong”, show “not recognised”
    if (username.trim() === "") {
      setNotRecognised(false);
      return;
    }
    // demo only: anything not equal to "demo" will show the top error
    setNotRecognised(username.trim().toLowerCase() !== "demo");
  }

  return (
    <section className="min-h-screen w-full bg-[#f5f5f5] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[940px] px-4">
        <div className="mx-auto w-full sm:max-w-[540px] rounded bg-white shadow">
          {/* Header */}
          <div className="px-8 pt-10 pb-4">
            <h1
              className="text-[28px] leading-[1.2] font-light tracking-[0] text-[#1f2937]"
              style={{
                fontFamily:
                  '"HSBC Sans","Helvetica Neue",Helvetica,Arial,ui-sans-serif,system-ui,-apple-system,"Segoe UI","Noto Sans","Liberation Sans",sans-serif',
              }}
            >
              Log on
            </h1>
          </div>

          {/* Notice */}
          <div className="px-8">
            <div className="relative rounded border border-[#e5e7eb] bg-[#e9eef2] p-5 text-[14px] leading-[1.5] text-[#374151]">
              <div className="mb-2 flex items-start gap-3">
                <span className="mt-[1px] inline-flex  items-center justify-center rounded-full bg-[#0b3a75] text-white">
                  <Info size={16} />
                </span>
                <p className="m-0">
                  <b className="font-semibold">Do not</b> run software that
                  allows others to remotely access your device whilst you are
                  logged into Online Banking. Customers have reported receiving
                  a phone call appearing to be from ‘authorities’ offering
                  assistance to transfer money out of their account. Please{" "}
                  <b className="font-semibold">beware</b>. Authorities do not
                  call to assist in the transferring of funds out of customer
                  accounts. Please be vigilant. You can check our{" "}
                  <a
                    href="#"
                    className="underline text-[#1f2937] hover:text-black"
                  >
                    information page
                  </a>{" "}
                  for more details. If you believe that you have been the victim
                  of a Fraud Attack, please call us on +356 2148 3809.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                className="absolute right-3 top-4 cursor-pointer"
              >
                <X size={16} className="text-[#6b7280]" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="px-8 pt-7 pb-8" onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="username"
              className="mb-2 inline-flex items-center gap-1 text-[14px] font-medium text-[#374151]"
            >
              Please enter your username
            </label>
            <div
              aria-hidden
              className="ml-1 inline-flex float-right h-4 w-4 items-center justify-center bg-black rounded-full text-[11px] leading-none text-white mr-2.5"
              title="Help"
            >
              ?
            </div>

            {/* Top error: NOT RECOGNISED */}
            {notRecognised && (
              <div className="mt-1 mb-3 flex items-start gap-3 text-[16px] leading-6 text-[#7a0c10]">
                {/* red warning triangle (inline SVG to avoid extra imports) */}
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="mt-1 shrink-0"
                  fill="#7a0c10"
                >
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                </svg>
                <p className="m-0 text-sm font-normal">
                  Your username was not recognised. Please check your details
                  and try again.
                </p>
              </div>
            )}

            {/* INPUT */}
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => {
                setFocused(true);
                setNotRecognised(false);
              }}
              onBlur={() => setFocused(false)}
              className={[
                "mt-2 block w-full px-3 py-3 text-sm text-[#111827]",
                "border outline-0 transition-shadow",
                focused ? "border-0 ring-2 ring-[#3b82f6]" : "ring-0",
                isEmptyError
                  ? "border-[#7a0c10] bg-[#f9f2f2]"
                  : "bg-white border-[#d1d5db]",
              ].join(" ")}
            />

            {/* Inline error: EMPTY */}
            {isEmptyError && (
              <div className="mt-2 flex items-center gap-2 text-[16px] text-[#7a0c10]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#7a0c10] text-[12px] leading-none">
                  ×
                </span>
                <p className="m-0 text-sm ">You must provide your username.</p>
              </div>
            )}

            {/* Remember me */}
            <div className="mt-5 flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-[#d1d5db]"
              />
              <label
                htmlFor="remember"
                className="text-[14px] text-[#374151] select-none"
              >
                Remember me
              </label>
            </div>

            {/* Actions */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                disabled={username.length === 0}
                onClick={handleContinue}
                className={`bg-[#db0011] px-6 py-3 text-[16px] font-normal text-white transition-opacity hover:cursor-pointer focus:outline-none  focus:ring-[#db0011] ${
                  username.length === 0 && "opacity-30"
                } ${isEmptyError && "opacity-30 disabled"}`}
              >
                Continue
              </button>
            </div>
          </form>

          {/* Footer link */}
          <div className="border-t border-[#f3f4f6] px-8 py-5">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#374151] hover:text-black"
            >
              Not registered for online banking?
              <span className="transition-transform group-hover:translate-x-0.5">
                ›
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
