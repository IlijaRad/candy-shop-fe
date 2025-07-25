"use client";

import { ChangeEvent, ClipboardEvent, KeyboardEvent, useState } from "react";
import Input from "./input";

export default function OtpForm() {
  const [otp, setOtp] = useState<string[]>(Array(8).fill(""));

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`code_${index + 1}`)?.focus();
      }

      if (newOtp.every((digit) => digit !== "")) {
        handleSubmit(newOtp);
      }
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`code_${index - 1}`)?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
    const pasteData = e.clipboardData.getData("Text");
    const numericData = pasteData.replace(/\D/g, "");

    if (numericData) {
      const newOtp = [...otp];
      let pasteIndex = 0;

      for (let i = 0; i < otp.length; i++) {
        if (pasteIndex < numericData.length) {
          newOtp[i] = numericData[pasteIndex];
          pasteIndex++;
        } else {
          newOtp[i] = "";
        }
      }

      setOtp(newOtp);

      if (newOtp.every((digit) => digit !== "")) {
        handleSubmit(newOtp);
      }

      const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
      document
        .getElementById(
          `code_${nextEmptyIndex !== -1 ? nextEmptyIndex : otp.length - 1}`,
        )
        ?.focus();
    }

    e.preventDefault();
  };

  const handleSubmit = (newOtp: string[]): void => {
    const otpValue = newOtp.join("");
    console.log("OTP Submitted: ", otpValue);
  };

  return (
    <form className="mt-4">
      <div className="flex gap-x-0.5">
        {otp.map((digit, index) => (
          <Input
            key={index}
            id={`code_${index}`}
            type="text"
            className="h-16 px-0.5 text-center"
            required
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            onPaste={(e) => handlePaste(e)}
            aria-label={`Character ${index + 1} of ${otp.length}`}
          />
        ))}
      </div>

      {false && (
        <p className="mt-0.5 line-clamp-1 text-xs text-rose-600">
          Pogrešan OTP kod
        </p>
      )}

      <button
        type="submit"
        className="text-medium mt-6 h-9 w-full cursor-pointer rounded-md bg-gray-900 px-3.5 text-sm text-white"
      >
        Potvrdi
      </button>
    </form>
  );
}
