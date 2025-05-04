"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Rocket,
  BookOpen,
  Users,
  Award,
  Zap,
} from "lucide-react";

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

// Dummy data for features
const features = [
  {
    title: "Mission",
    description:
      "To revolutionize the shipping industry with transparency, efficiency, and cutting-edge technology.",
    icon: Rocket,
  },
  {
    title: "Vision",
    description:
      "To be the most trusted and innovative shipping partner globally.",
    icon: BookOpen,
  },
  {
    title: "Values",
    description:
      "Customer-centricity, Innovation, Integrity, Collaboration, and Excellence.",
    icon: Users,
  },
];

const AboutPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // Consider it desktop if width is >= 1024
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <div
      className="min-h-screen" // Changed to black
    >
      <header className="py-12 text-center" style={{ userSelect: "none" }}>
        {" "}
        {/* Added userSelect */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-default-600 "
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="text-default-600 text-lg sm:text-xl mt-4 max-w-2xl mx-auto"
        >
          We are a team of passionate individuals dedicated to transforming the
          way the world ships.
        </motion.p>
      </header>

      {/* Features Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ userSelect: "none" }}
      >
        {" "}
        {/* Added userSelect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-0 auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={cn(
                  "bg-default-100 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-default-100/10  hover:bg-default-200",
                  "transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 cursor-pointer", // Added cursor-pointer
                  "flex flex-col items-start gap-4"
                )}
              >
                <Icon className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold text-default-600">
                  {feature.title}
                </h3>
                <p className="text-default-500">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Our Achievements Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ userSelect: "none" }}
      >
        {" "}
        {/* Added userSelect */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-default-600 mb-8">
            Our Achievements
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div
              className={cn(
                "bg-default-100 backdrop-blur-lg rounded-xl p-10 shadow-lg border border-default-100/10  hover:bg-default-200",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 cursor-pointer text-center", // Added cursor-pointer
              )}
            >
              {/* Added cursor-pointer */}
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-default-600">10+</h3>
              <p className="text-default-400">Awards Won</p>
            </div>
            <div
              className={cn(
                "bg-default-100 backdrop-blur-lg rounded-xl p-10 shadow-lg border border-default-100/10  hover:bg-default-200",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 cursor-pointer text-center", // Added cursor-pointer
              )}
            >
              {/* Added cursor-pointer */}
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-default-600">
                100,000+
              </h3>
              <p className="text-default-400">Happy Customers</p>
            </div>
            <div
              className={cn(
                "bg-default-100 backdrop-blur-lg rounded-xl p-10 shadow-lg border border-default-100/10 hover:bg-default-200",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-700 cursor-pointer text-center",
              )}
            >
              {/* Added cursor-pointer */}
              <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-default-600">99.9%</h3>
              <p className="text-default-400">On-Time Delivery</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        className="py-12 text-center text-gray-400"
        style={{ userSelect: "none" }}
      >
        {" "}
        {/* Added userSelect */}
        <p>&copy; {new Date().getFullYear()} Konnect. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
