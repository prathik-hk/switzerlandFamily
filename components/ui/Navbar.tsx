"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Get Featured", href: "/get-featured" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] md:max-w-4xl lg:max-w-3xl rounded-3xl px-6 py-3 flex items-center justify-between border",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-xl"
            : "bg-white/80 backdrop-blur-sm border-slate-200"
        )}
      >
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Switzerland Familye" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm transition-colors font-medium group",
                pathname === link.href ? "text-slate-900 font-bold" : "text-slate-600 hover:text-slate-900"
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out",
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/get-featured">
            <Button className="h-10 px-6 text-sm rounded-full bg-primary hover:bg-primary/90 text-white hover:text-white capitalize font-medium tracking-normal border-none shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Featured
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-700 hover:text-slate-900 py-1 flex items-center justify-center shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 z-40 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-4 text-base border-b border-slate-100 last:border-0",
                pathname === link.href ? "text-slate-900 font-bold" : "text-slate-600"
              )}
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo(0, 0);
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/get-featured" className="mt-8" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-medium border-none h-12">
              Get Featured
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
