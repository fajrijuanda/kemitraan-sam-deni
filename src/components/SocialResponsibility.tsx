"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SocialResponsibility() {
    return (
        <section id="social" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-maroon font-poppins">
                        Tanggung Jawab Sosial
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        Kami percaya bahwa berbagi adalah kunci keberkahan. Sebagian dari keuntungan kami disishkan untuk mendukung anak-anak panti asuhan.
                    </p>

                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/panti_asuhan.png"
                            alt="Kegiatan Sosial di Panti Asuhan"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
