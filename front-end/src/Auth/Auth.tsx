import { useState } from "react";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";

export function AuthDialog({ startOn = "signup" }: { startOn?: "login" | "signup" }) {
  // true => show signup, false => show login
  const [showSignup, setShowSignup] = useState(startOn === "signup");

  return (
    <div className="relative w-[360px] h-[480px] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          showSignup ? "rotate-y-180" : ""
        }`}
      >
        {/* Front face — Login */}
        <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
          <LogIn onSwitch={() => setShowSignup(true)} />
        </div>

        {/* Back face — Signup */}
        <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] flex items-center justify-center">
          <SignUp onSwitch={() => setShowSignup(false)} />
        </div>
      </div>
    </div>
  );
}
