"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button, cn } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Legalitas", href: "#legal" },
    { name: "Sosial", href: "#social" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Paket", href: "#packages" },

    { name: "Menu", href: "#menu" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container md:max-w-4xl mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="#" className="flex items-center gap-2">
                    {/* Placeholder for Logo - In real implementation, use Image component */}
                    <div className="flex flex-col">
                        <span className={cn("text-2xl font-bold font-poppins leading-none", isScrolled ? "text-brand-maroon" : "text-white")}>
                            SAM DENI
                        </span>
                        <span className={cn("text-xs font-medium tracking-wider", isScrolled ? "text-gray-600" : "text-white/80")}>
                            HOMEMADE
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-brand-gold",
                                isScrolled ? "text-gray-800" : "text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="#contact">
                        <Button variant="secondary" size="sm" className="hidden lg:inline-flex">
                            Gabung Mitra
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-current"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-gray-900" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b shadow-lg absolute top-full left-0 right-0 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-800 font-medium py-2 border-b border-gray-100 hover:text-brand-maroon"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full">Hubungi Kami</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
