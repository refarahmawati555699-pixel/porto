"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-4 bg-blue-200 text-gray-800 shadow-md sticky top-0 z-50">
      <Link
        href="/"
        className="hover:text-blue-700 transition-colors font-semibold"
      >
        Home
      </Link>
      <Link
        href="/contact"
        className="hover:text-blue-700 transition-colors font-semibold"
      >
        Contact
      </Link>
      <Link
        href="/Experience"
        className="hover:text-blue-700 transition-colors font-semibold"
      >
        Experience
      </Link>
    </nav>
  );
}

