"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
  const icons = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/re.faaaa?igsh=a2ExbWFkaG9obXM4",
      color: "#E1306C", // pink khas Instagram
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/refarahmawati555699-pixel",
      color: "#171515", // hitam khas GitHub
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/Refarahmawati ",
      color: "#0077B5", // biru khas LinkedIn
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/6281930575897",
      color: "#25D366", // hijau khas WhatsApp
    },
  ];

  return (
    <div className="flex justify-center gap-8 mt-8 text-3xl">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="transition-all duration-300"
          style={{ color: "#555" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = item.color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
