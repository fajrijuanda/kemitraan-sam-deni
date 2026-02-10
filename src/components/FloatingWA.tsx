"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWA() {
    return (
        <motion.a
            href="https://wa.me/6285117784817?text=Halo%2C%20saya%20tertarik%20dengan%20Kemitraan%20Sam%20Deni%20Homemade."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
        >
            <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 hidden md:block group-hover:block transition-all transform origin-right">
                <span className="font-bold text-gray-800 text-sm">Chat Official</span>
            </div>
            <div className="w-14 h-14 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
                <MessageCircle size={32} />
            </div>
        </motion.a>
    );
}
