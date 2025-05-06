"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Alert } from "@heroui/alert";
import { AlertCircle, UserPlus, Mail, Lock, Flag, XCircle } from "lucide-react"; // Adjust the import path if necessary
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


const countryCodeData = {
  CA: { name: "Canada", flag: "🇨🇦" },
  US: { name: "United States", flag: "🇺🇸" },
  GB: { name: "United Kingdom", flag: "🇬🇧" },
  AU: { name: "Australia", flag: "🇦🇺" },
  DE: { name: "Germany", flag: "🇩🇪" },
  FR: { name: "France", flag: "🇫🇷" },
  JP: { name: "Japan", flag: "🇯🇵" },
  CN: { name: "China", flag: "🇨🇳" },
  IN: { name: "India", flag: "🇮🇳" },
  RU: { name: "Russia", flag: "🇷🇺" },
  BR: { name: "Brazil", flag: "🇧🇷" },
  MX: { name: "Mexico", flag: "🇲🇽" },
  KR: { name: "South Korea", flag: "🇰🇷" },
  ZA: { name: "South Africa", flag: "🇿🇦" },
  ID: { name: "Indonesia", flag: "🇮🇩" },
  NG: { name: "Nigeria", flag: "🇳🇬" },
  EG: { name: "Egypt", flag: "🇪🇬" },
  SA: { name: "Saudi Arabia", flag: "🇸🇦" },
  TR: { name: "Turkey", flag: "🇹🇷" },
  AR: { name: "Argentina", flag: "🇦🇷" },
};

const RestrictedSignupPage = () => {
  const [isRestricted, setIsRestricted] = useState(true); // Simulate restricted country.
  const [countryCode, setCountryCode] =
    useState<keyof typeof countryCodeData>("CA"); // Default to Canada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState({
    referralCode: "",
    newsletter: true,
    termsAgreed: false,
  });
  const [error, setError] = useState<string | null>(null);
   const router = useRouter();

  // Simulate fetching user's country code.
  useEffect(() => {
    // In a real app, you would use a geolocation service.
    // For this example, we'll just simulate a delay and set a default.
    const detectedCountryCode = "IN" as keyof typeof countryCodeData; // Simulate India
    setTimeout(() => {
      // Simulate that the user is from India
      setCountryCode(detectedCountryCode);
      setIsRestricted(detectedCountryCode !== "CA"); // Only allow Canada for this demo.
    }, 500);
  }, []);

  const handleInputChange = (
    field: keyof typeof additionalInfo,
    value: any
  ) => {
    setAdditionalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (!additionalInfo.termsAgreed) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    // In a real application, you would send the data to a server.
    console.log("Form submitted:", { email, password, additionalInfo });
    // For this example, we'll just show an alert.
    alert(`Registration data:
Email: ${email}
Referral Code: ${additionalInfo.referralCode}
Newsletter: ${additionalInfo.newsletter ? "Yes" : "No"}
Terms Agreed: ${additionalInfo.termsAgreed ? "Yes" : "No"}`);
  };

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Konnect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Connect globally. Discover opportunities.
          </motion.p>
        </div>

        <AnimatePresence>
          {isRestricted && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Alert
                variant="solid"
                className="border-red-500 bg-red-900/90 text-red-100 shadow-lg backdrop-blur-md"
              >
                <span className="flex items-center gap-2 font-bold">
                  <Flag className="h-5 w-5" />
                  Restricted Access
                </span>
                <div>
                  We are sorry, but registration is not currently available in
                  your country ({countryCodeData[countryCode].name}). We are
                  working to expand our services to more regions. Please check
                  back later.
                </div>
              </Alert>
              <Button
                variant="bordered"
                size="sm"
                className="mt-6 text-md text-red-200 hover:text-red-100 hover:bg-red-800/50 border-red-400/80"
                onClick={() => {
                  router.push("/"); // Redirect to the home page
                }}
              >
                <XCircle className="mr-2 h-4 w-4" />
                Dismiss
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isRestricted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 p-6 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
              <UserPlus className="h-6 w-6 text-blue-400" />
              Create an Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-default-400 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={cn(
                    "bg-black/20 text-white border-purple-500/30",
                    "focus:border-purple-400 focus:ring-purple-400",
                    "placeholder:text-gray-500"
                  )}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-gray-300 flex items-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={cn(
                      "bg-black/20 text-white border-purple-500/30",
                      "focus:border-purple-400 focus:ring-purple-400",
                      "placeholder:text-gray-500 pr-10" // Make space for the icon
                    )}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-300"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.56" />
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="referralCode" className="text-gray-300">
                  Referral Code (Optional)
                </label>
                <Input
                  id="referralCode"
                  type="text"
                  value={additionalInfo.referralCode}
                  onChange={(e) =>
                    handleInputChange("referralCode", e.target.value)
                  }
                  placeholder="Enter referral code"
                  className="bg-black/20 text-white border-purple-500/30 focus:border-purple-400 focus:ring-purple-400 placeholder:text-gray-500"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={additionalInfo.newsletter}
                  onChange={(e) =>
                    handleInputChange("newsletter", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 rounded border-purple-500/30 text-purple-400 focus:ring-purple-400"
                />
                <label htmlFor="newsletter" className="text-gray-300">
                  Subscribe to our newsletter
                </label>
              </div>
              <div>
                <input
                  id="termsAgreed"
                  type="checkbox"
                  checked={additionalInfo.termsAgreed}
                  onChange={(e) =>
                    handleInputChange("termsAgreed", e.target.checked)
                  }
                  className="mr-2 h-4 w-4 rounded border-purple-500/30 text-purple-400 focus:ring-purple-400"
                />
                <label htmlFor="termsAgreed" className="text-gray-300">
                  I agree to the{" "}
                  <a
                    href="/terms-and-conditions"
                    className="text-purple-300 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3
                                         hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2
                                         focus:ring-purple-400 focus:ring-opacity-75 transition-colors duration-300
                                         font-semibold rounded-full shadow-lg hover:shadow-xl"
              >
                Register
              </Button>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 bg-red-900/50 p-3 rounded-md border border-red-500/30 flex items-start gap-2"
                >
                  <AlertCircle className="h-4 w-4 mt-0.5" />
                  {error}
                </motion.div>
              )}
            </form>
            <div className="text-center text-gray-400 pt-4 border-t border-white/10">
              Already have an account?{" "}
              <a href="/signup" className="text-purple-300 hover:underline">
                Log in
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RestrictedSignupPage;
