import React from "react";

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/avanish633/",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "GitHub",
    url: "https://github.com/itsmeavanish",
    icon: "/icons/github.svg",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/theycallmeavanish",
    icon: "/icons/instagram.svg",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0f0f20] text-white py-6 px-4 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Avanish Upadhyay. All rights reserved.
        </p>

        <div className="flex gap-5 pointer-events-auto z-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <img
                src={link.icon}
                alt={link.name}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
