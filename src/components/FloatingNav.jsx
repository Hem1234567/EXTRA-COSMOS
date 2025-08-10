import React from "react";
import { FaHome, FaUser, FaEnvelope, FaGlobe } from "react-icons/fa";

const FloatingNav = ({ navItems }) => {
  return (
    <div className="fixed inset-x-0 bottom-10 z-50 mx-auto flex w-max items-center justify-center gap-4 rounded-full border border-gray-200 bg-white/80 px-8 py-2 shadow-lg backdrop-blur-sm dark:border-white/20 dark:bg-black/80">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium ${
            item.highlight
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "text-neutral-600 hover:bg-gray-200/40 dark:text-white dark:hover:bg-white/20"
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

const ProblemStatement = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
     
    </div>
  );
};

export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "/LaptopZoomSection",
      icon: <FaUser className="h-4 w-4" />,
    },
    {
      name: "Domain",
      link: "/StackingCards",
      icon: <FaGlobe className="h-4 w-4" />,
      
    },
    {
      name: "Contact",
      link: "/ContactSection",
      icon: <FaEnvelope className="h-4 w-4" />,
    },
  ];

  return (
    <div className="relative w-full">
      <ProblemStatement />
      <FloatingNav navItems={navItems} />
    </div>
  );
}
