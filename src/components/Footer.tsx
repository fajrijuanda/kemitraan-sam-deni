import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Footer() {
    // Encoded message for WhatsApp
    const message = "Halo Admin, saya tertarik untuk kemitraan Sam Deni Homemade.";
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/6285117784817?text=${encodedMessage}`;

    return (
        <footer id="contact" className="w-full bg-gray-50">
            {/* Dedicated Chat Button Section */}
            <div className="w-full py-8 md:py-12 px-4 flex justify-center items-center">
                <div className="w-full max-w-4xl">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 md:py-6 px-8 rounded-full shadow-xl transition-transform hover:scale-105 w-full"
                    >
                        <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
                        <span className="text-xl md:text-3xl">Chat Official</span>
                    </a>
                </div>
            </div>

            <div className="w-full relative bg-gray-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/images/logo.png')] bg-repeat opacity-5 pointer-events-none" style={{ backgroundSize: '150px' }} />

                <div className="relative z-10 w-full md:max-w-4xl mx-auto shadow-2xl">
                    <Image
                        src="/images/contact.png"
                        alt="Hubungi Kami"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </footer>
    );
}
