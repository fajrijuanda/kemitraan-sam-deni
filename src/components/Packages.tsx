"use client";

import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { cn } from "@/lib/utils"

const packages = [
    {
        id: 1,
        name: "Paket Ekonomis",
        price: "9.8 Juta",
        images: ["/images/paket_ekonomis.png", "/images/keuntungan.png"],
        message: "Halo, saya tertarik dengan Paket Kemitraan Ekonomis (9.8 Juta)."
    },
    {
        id: 2,
        name: "Paket Eksekutif",
        price: "30 Juta",
        images: ["/images/paket_eksekutif.png", "/images/paket_eksekutif_2.png"],
        message: "Halo, saya tertarik dengan Paket Kemitraan Eksekutif (30 Juta)."
    },
    {
        id: 3,
        name: "Paket Eksklusif",
        price: "50 Juta",
        images: ["/images/paket_eksklusif.png", "/images/paket_ekslusif_2.png"],
        message: "Halo, saya tertarik dengan Paket Kemitraan Eksklusif (50 Juta)."
    },
]

export function Packages() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' })
    const [modalState, setModalState] = useState<{ images: string[], index: number } | null>(null)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (modalState) {
            setModalState({
                ...modalState,
                index: (modalState.index + 1) % modalState.images.length
            })
        }
    }

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        if (modalState) {
            setModalState({
                ...modalState,
                index: (modalState.index - 1 + modalState.images.length) % modalState.images.length
            })
        }
    }

    return (
        <section id="packages" className="py-10 bg-brand-maroon text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Carousel */}
                <div className="relative max-w-5xl mx-auto">
                    <div className="overflow-visible" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {packages.map((pkg) => (
                                <div key={pkg.id} className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-6">
                                    <PackageCard
                                        pkg={pkg}
                                        onImageClick={(index) => setModalState({ images: pkg.images, index })}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-brand-maroon p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-brand-maroon p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-20"
                        onClick={scrollNext}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {modalState && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setModalState(null)}
                >
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full h-[85vh]">
                            <Image
                                src={modalState.images[modalState.index]}
                                alt={`View ${modalState.index + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Modal Navigation Buttons */}
                        {modalState.images.length > 1 && (
                            <>
                                <button
                                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-50"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft size={32} />
                                </button>
                                <button
                                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors z-50"
                                    onClick={nextImage}
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}

                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 md:-top-10 md:-right-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-50"
                            onClick={() => setModalState(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* Indicators */}
                        {modalState.images.length > 1 && (
                            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
                                {modalState.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setModalState({ ...modalState, index: idx })}
                                        className={cn(
                                            "w-2 h-2 md:w-3 md:h-3 rounded-full transition-all",
                                            idx === modalState.index ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                                        )}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

function PackageCard({ pkg, onImageClick }: { pkg: typeof packages[0], onImageClick: (index: number) => void }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <div className="bg-transparent rounded-3xl overflow-hidden shadow-2xl h-[600px] flex flex-col transform transition-transform hover:scale-[1.02] relative group">
            {/* Image Area with Simple Pagination */}
            <div className="relative flex-grow w-full cursor-zoom-in" onClick={() => onImageClick(currentImageIndex)}>
                {pkg.images.map((img, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-opacity duration-500",
                            index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`${pkg.name} - View ${index + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}

                {/* Pagination Dots */}
                {pkg.images.length > 1 && (
                    <div
                        className="absolute bottom-20 left-0 right-0 z-20 flex justify-center gap-2"
                        onClick={(e) => e.stopPropagation()} // Prevent modal open when clicking dots
                    >
                        {pkg.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={cn(
                                    "w-3 h-3 rounded-full transition-all shadow-md",
                                    index === currentImageIndex
                                        ? "bg-brand-gold w-6"
                                        : "bg-white/70 hover:bg-white"
                                )}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-4 bg-transparent text-center -mt-12 relative z-10 pointer-events-none">
                <div className="pointer-events-auto">
                    <LinkWrapper message={pkg.message}>
                        <Button className="w-full text-lg font-bold bg-green-600 hover:bg-green-700 h-12 rounded-full shadow-lg border-2 border-white">
                            Pilih Paket Ini
                        </Button>
                    </LinkWrapper>
                </div>
            </div>
        </div>
    );
}

function LinkWrapper({ message, children }: { message: string, children: React.ReactNode }) {
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/6285117784817?text=${encodedMessage}`;

    return (
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full">
            {children}
        </a>
    )
}
