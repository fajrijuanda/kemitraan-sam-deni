"use client";

import Image from "next/image";

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat opacity-5 pointer-events-none" style={{ backgroundSize: '150px' }} />

            <div className="relative z-10 w-full md:max-w-4xl mx-auto shadow-2xl">
                <Image
                    src="/images/testimoni.png"
                    alt="Testimoni Mitra"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );

}
