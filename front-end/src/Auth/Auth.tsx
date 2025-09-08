import { useState } from "react";
import { LogIn } from "./Login";
import { SignUp } from "./SignUp";
import { OtpInput } from "./Otp";

type AuthView = "login" | "signup" | "otp";

export function AuthDialog({ startOn = "signup" }: { startOn?: AuthView }) {
  const [currentView, setCurrentView] = useState<AuthView>(startOn);

  return (
    <div className="relative w-[360px] h-[480px] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          currentView === "signup" || currentView === "otp" ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden] flex items-center justify-center">
          <LogIn onSwitch={() => setCurrentView("signup")} />
        </div>
        <div className="absolute inset-0 rotate-y-180 [backface-visibility:hidden] flex items-center justify-center">
          {currentView === "signup" ? (
            <SignUp onSwitch={() => setCurrentView("login")} onSuccess={() => setCurrentView("otp")} />
          ) : (
            <OtpInput onSwitch={() => setCurrentView("signup")} />
          )}
        </div>
      </div>
    </div>
  );
}