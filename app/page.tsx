"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { TrendingUp, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center gap-8 py-8 md:py-10"
    >
      <div className="flex flex-col items-center gap-2 text-center select-none">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-default-700 drop-shadow-lg"
        >
          Konnect - Your Payment Partner
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-default-400 max-w-2xl"
        >
          Track your payments with ease and gain control over your finances.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl"
      >
        <motion.div
          variants={itemVariants}
          className={cn(
            "group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none",
            "transition-all duration-300 hover:scale-[1.04] hover:shadow-blue-700/50",
            "hover:bg-default-200"
          )}
        >
          <TrendingUp className="w-16 h-16 text-blue-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold text-2xl text-foreground mb-2 text-center">
            Effortless Tracking
          </h3>
          <p className="text-sm text-default-600 text-center">
            Track your payments with ease and gain control over your finances.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={cn(
            "group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none",
            "transition-all duration-300 hover:scale-[1.04] hover:shadow-blue-700/50",
            "hover:bg-default-200"
          )}
        >
          <Zap className="w-16 h-16 text-green-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold text-2xl text-foreground mb-2">
            Clear Insights
          </h3>
          <p className="text-sm text-default-600 text-center">
            Visualize transfers with intuitive charts and reports. Understand
            where your money is going.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={cn(
            "group flex flex-col items-center p-6 rounded-lg shadow-md bg-default-100 cursor-pointer select-none",
            "transition-all duration-300 hover:scale-[1.04] hover:shadow-blue-700/50",
            "hover:bg-default-200"
          )}
        >
          <ShieldCheck className="w-16 h-16 text-purple-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="font-semibold text-2xl text-foreground mb-2">
            Secure & Private
          </h3>
          <p className="text-sm text-default-600 text-center">
            Your financial data is encrypted and protected. We prioritize your
            privacy and security above all else.
          </p>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-center mt-6">
        <Button
          as={NextLink}
          href="/signup"
          size="lg"
          className={cn(
            "bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg",
            "transition-all duration-300 hover:scale-105 hover:shadow-blue-400/30",
            "font-semibold text-lg"
          )}
          variant="solid"
        >
          Get Started for Free
        </Button>
      </motion.div>
      <Footer/>
    </motion.section>
  );
}
