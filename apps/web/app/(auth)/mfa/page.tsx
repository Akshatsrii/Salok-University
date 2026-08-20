"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, RefreshCw } from "lucide-react";
import { useState, useRef } from "react";

export default function MFAPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-reveal text-center">
      <div className="w-16 h-16 bg-blue-50 text-[#007bff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <ShieldCheck className="w-8 h-8" />
      </div>
      
      <h2 className="text-3xl font-extrabold text-[#1a2b4c] mb-2">Two-Factor Authentication</h2>
      <p className="text-gray-500 text-sm mb-8">
        We've sent a 6-digit security code to your registered email or device. Please enter it below.
      </p>

      <form className="space-y-6">
        <div className="flex justify-center gap-2 md:gap-3">
          {code.map((digit, idx) => (
            <input
              key={idx}
              ref={el => inputs.current[idx] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold bg-gray-50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-[#007bff] focus:ring-2 focus:ring-[#007bff]/20 transition-all text-gray-900"
            />
          ))}
        </div>

        <button type="button" className="w-full bg-[#1a2b4c] hover:bg-gray-800 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#1a2b4c]/20">
          Verify Identity
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-3 text-sm">
        <button className="text-gray-500 hover:text-[#007bff] font-semibold flex items-center justify-center gap-2 transition-colors">
          <RefreshCw className="w-4 h-4" />
          Resend Code
        </button>
        <Link href="/login" className="text-gray-400 hover:text-gray-600 transition-colors">
          Return to login
        </Link>
      </div>
    </div>
  );
}
