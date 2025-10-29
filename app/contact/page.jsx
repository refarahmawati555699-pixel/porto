"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <div className="flex justify-center gap-6 text-3xl">
        <a href= "https://www.instagram.com/re.faaaa?igsh=a2ExbWFkaG9obXM4" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-pink-500 hover:scale-110 
        transition-transform" /></a>

        <a
  href="https://www.linkedin.com/in/Refarahmawati"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
</a>

<a
  href="https://github.com/refarahmawati555699-pixel"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub className="text-gray-800 hover:scale-110 transition-transform"/>
</a>


        
      </div>
    </main>
  );
}


