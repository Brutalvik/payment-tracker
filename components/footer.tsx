"use client";

import React, { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Mail, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";
import { emailTemplate } from "@/app/templates/Subscribe/template"

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async () => {
    setIsSubscribing(true);

    if (!email) {
      toast.error("Please enter a valid email address.");
      setIsSubscribing(false);
      return;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubscribing(false);
      return;
    }

    try {
      console.log("Sending email to:", email); // Debugging line

      // Prepare the email body using the template
      const emailBody = emailTemplate
        .replace("${email}", email) // Use the email the user entered
        .replace("${subscriptionDate}", new Date().toLocaleDateString()) // Example dynamic data
        .replace("${currentYear}", new Date().getFullYear().toString());

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "New Subscription",
          body: emailBody, // Use the templated emailBody here
        }),
      });

      // **Important:** Check the content type before parsing as JSON
      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // If it's not JSON, assume it's HTML (or some other text format) and handle accordingly
        const text = await response.text();
        console.error("Unexpected response type.  Expected JSON, got:", text);
        toast.error(
          "Failed to subscribe.  Server returned an unexpected response."
        );
        setIsSubscribing(false);
        return; // IMPORTANT:  Exit the function to prevent further errors
      }

      if (response.ok) {
        toast.success(
          "Successfully subscribed! Check your email for confirmation."
        );
        setEmail("");
      } else {
        toast.error(`Failed to subscribe: ${data.message || "Unknown error"}`);
      }
    } catch (error: any) {
      console.error("Error subscribing:", error);
      toast.error(`Failed to subscribe: ${error.message || "Unknown error"}`);
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="text-default-500 py-12 md:py-16">
      <ToastContainer />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm text-gray-400">
              Konnect is a platform dedicated to connecting people and resources
              globally. We strive to provide valuable information and
              opportunities to our users.
            </p>
            <div className="flex space-x-4">
              <a href="/" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="/" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">info@konnect.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 text-gray-400"
                >
                  <ChevronRight className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 text-gray-400"
                >
                  <ChevronRight className="h-4 w-4" />
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2 text-gray-400"
                >
                  <ChevronRight className="h-4 w-4" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter to receive the latest updates and
              news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
                disabled={isSubscribing}
              />
              <Button
                variant="solid"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm w-full sm:w-auto"
                onClick={handleSubscribe}
                disabled={isSubscribing}
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="underline text-gray-400 hover:text-blue-400"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Konnect. All rights reserved. |{" "}
          <Link
            href="/terms-and-conditions"
            className="underline hover:text-blue-400 transition-colors"
          >
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
