"use client";

import Image from "next/image";


export function WhyUs() {
    return (
        <section id="about" className="w-full">
            <div className="w-full">
                <Image
                    src="/images/keuntungan.png"
                    alt="Keuntungan Kemitraan"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
