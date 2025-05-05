import React from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Mail,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-default-500 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-default-500">About Us</h3>
            <p className="text-sm">
              Konnect is a platform dedicated to connecting people and resources
              globally. We strive to provide valuable information and
              opportunities to our users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-default-500">Contact</h3>
            {/* <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-400" />
              <span className="text-sm">
                123 Main Street, Anytown, CA 12345
              </span>
            </div> */}
            {/* <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-400" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div> */}
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <span className="text-sm">info@konnect.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  News
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm">
              Subscribe to our newsletter to receive the latest updates and
              news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="text-sm border-gray-700 text-white placeholder:text-gray-400 border-radius-md focus:ring-blue-500 focus:border-blue-500"
              />
              <Button
                variant="solid"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              By subscribing, you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-sm">
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
