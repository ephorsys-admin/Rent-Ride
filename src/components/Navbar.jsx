import React, { memo, useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

/* -------------------- DATA -------------------- */

const DEFAULT_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Cars", href: "/cars" },
  { name: "Bikes", href: "/bike" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact", isButton: true },
];

const DEFAULT_SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    ariaLabel: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    ariaLabel: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM17.4 6.6a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
      </svg>
    ),
  },
];

/* -------------------- FRAMER VARIANTS -------------------- */

const menuContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const menuItem = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const desktopMenuContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const desktopMenuItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

/* -------------------- COMPONENTS -------------------- */

const DesktopNavItem = memo(({ item }) => (
  <NavLink to={item.href} end={item.href === "/"}>
    {({ isActive }) => (
      <motion.span
        variants={desktopMenuItem}
        className={`group relative inline-block px-5 py-3 rounded-full text-md font-medium transition-all duration-300
        ${
          item.isButton
            ? isActive
              ? "text-[#FF0000] border-2 border-[#FF0000]"
              : "text-white border-2 border-[#FF0000] hover:text-[#FF0000]"
            : isActive
            ? "text-[#FF0000] font-extrabold"
            : "text-white hover:text-[#FF0000]"
        }`}
      >
        {item.name}
        {!item.isButton && (
          <span
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-[#FF0000] rounded-full transition-all duration-300
            ${isActive ? "w-3/5" : "w-0 group-hover:w-3/5"}`}
          />
        )}
      </motion.span>
    )}
  </NavLink>
));

const MobileNavItem = memo(({ item, onClick }) => (
  <NavLink to={item.href} end={item.href === "/"} onClick={onClick}>
    {({ isActive }) => (
      <motion.div variants={menuItem} className={item.isButton ? "pt-4" : ""}>
        <span
          className={`block px-6 py-4 rounded-2xl text-base font-medium transition-colors
          ${
            item.isButton
              ? isActive
                ? "text-[#FF0000] border-2 border-[#FF0000] shadow-lg shadow-[#FF0000]/30"
                : "text-white border-2 border-[#FF0000] hover:text-[#FF0000]"
              : isActive
              ? "text-[#FF0000] bg-white/5"
              : "text-gray-300 hover:text-[#FF0000] hover:bg-white/5"
          }`}
        >
          {item.name}
        </span>
      </motion.div>
    )}
  </NavLink>
));

const SocialItem = memo(({ link }) => (
  <a
    href={link.href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={link.ariaLabel}
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 text-gray-400 hover:text-white hover:bg-[#FF0000] transition-all duration-300"
  >
    {link.icon}
  </a>
));

/* -------------------- NAVBAR -------------------- */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false); // 🔑 FIX

  const navItems = useMemo(() => DEFAULT_NAV_ITEMS, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (window.scrollY === 0) {
        setCanAnimate(true);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
        ${isScrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/80"}`}
      >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex justify-between items-center">
  <Link to="/" className="flex items-center gap-2 sm:gap-3">
    <img
      src={logo}
      alt="logo"
      className="
        h-12 w-12
        sm:h-15 sm:w-15
        md:h-16 md:w-16
        lg:h-20 lg:w-20
        object-contain
      "
    />
  </Link>


          {/* ✅ DESKTOP MENU – FIXED */}
          <motion.div
            className="hidden lg:flex gap-2"
            variants={desktopMenuContainer}
            initial={false}
            animate={canAnimate ? "visible" : false}
          >
            {navItems.map((item) => (
              <DesktopNavItem key={item.name} item={item} />
            ))}
          </motion.div>

          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/80 z-40 lg:hidden transition-opacity
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-black z-50 transition-transform duration-500
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-12 w-12" />
       
          </Link>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-white" />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="p-4 space-y-2"
              variants={menuContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-white mb-3">Connect With Us</p>
          <div className="flex gap-3">
            {DEFAULT_SOCIAL_LINKS.map((link) => (
              <SocialItem key={link.name} link={link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
