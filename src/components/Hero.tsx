"use client";

import Image from "next/image";


export function Hero() {
    return (
        <section className="w-full bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat opacity-5 pointer-events-none" style={{ backgroundSize: '150px' }} />

            <div className="relative z-10 w-full md:max-w-4xl mx-auto shadow-2xl">
                <Image
                    src="/images/hero.png"
                    alt="Sam Deni Booth"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                    priority
                />
            </div>
        </section>
    );
}
