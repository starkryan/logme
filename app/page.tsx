"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9fafb] text-gray-900 flex flex-col font-sans">
      <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-gray-800 font-bold text-2xl">Rohit Rayaan</div>

          <button
            className="md:hidden block text-gray-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6 transition-transform transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8 absolute md:static top-16 left-0 right-0 md:top-auto md:left-auto md:right-auto bg-white md:bg-transparent transition-all duration-300 ease-in-out z-50`}
          >
            <ul className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0 w-full md:w-auto text-center">
              {["About", "Projects", "Technologies", "Contact"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-600 block py-2 md:py-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex flex-col justify-center items-center flex-grow text-center p-8">
        <Image
          src="/profile.png"
          alt="Rohit Rayaan"
          className="w-48 h-48 rounded-full mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Hello, I'm Rohit Rayaan</h1>
        <h2 className="text-xl text-gray-600 mb-6 font-bold">
          <Typewriter
            words={["UX/UI Designer", "Linux Enthusiast", "Web Developer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        <a
          href="#contact"
          className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </a>

        <section id="technologies" className="mt-12 w-full max-w-4xl">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Technologies I Work With</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "React Native", imgSrc: "/react.png" },
              { name: "Linux", imgSrc: "/linux.png" },
              { name: "Android", imgSrc: "/android.png" },
            ].map((tech) => (
              <div className="flex flex-col items-center" key={tech.name}>
                <Image src={tech.imgSrc} alt={tech.name} className="w-50 h-50 mb-4" />
                <p className="text-lg font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section id="about" className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <Image
                src="/profile.png"
                alt="Rohit Rayaan"
                className="w-48 h-48 rounded-full mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3 md:pl-12 text-center md:text-left font-bold">
              <p className="text-lg text-gray-600 mb-6">
                Hello! I'm Rohit Rayaan, a passionate UX/UI Designer, Linux Enthusiast, and Web Developer...
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-4 text-center text-sm text-gray-400 shadow-md">
        <p>© 2024 Rohit Rayaan. All rights reserved.</p>
        <p>Contact Us</p>
        <a href="mailto:info@hexageeky.com" className="text-gray-400 hover:text-gray-300 transition-colors">
          info@hexageeky.com
        </a>
      </footer>
    </div>
  );
}
