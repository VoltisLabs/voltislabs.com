"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaYoutube } from "react-icons/fa";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg",
  "/slider6.jpg",
];

const Footer = () => {
  const scrollRefs = Array.from({ length: 6 }, () => useRef<HTMLDivElement>(null));

  useEffect(() => {
    let animationFrameId: number;
    const scrollSpeed = 1.5; // Adjust speed as needed

    const animate = () => {
      scrollRefs.forEach((scrollRef) => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += scrollSpeed;

          if (
            scrollRef.current.scrollTop >=
            scrollRef.current.scrollHeight - scrollRef.current.clientHeight
          ) {
            scrollRef.current.scrollTop = 0;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);


  return (
    <footer className="bg-black text-gray-200 py-10 px-8">
      <div className="container mx-auto grid grid-cols-5 md:grid-cols-5 gap-8 mt-9">
        {/* Studio Section */}
        <div>
          <h3 className="text-xl font-semibold text-white flex items-center">
            BG Remover<span className="ml-1 text-lg">✨</span>
          </h3>
          <p className="mt-2 text-sm">
            Creative Fabrica is created in Amsterdam, one of the most inspirational cities in the world. We bring the best possible tools for improving your creativity and productivity.
          </p>
          <div className="mt-4">
            <Link href="#" className="block text-sm text-white hover:underline">
              More about Creative Fabrica
            </Link>

            <Link href="#" className="flex items-center mt-2 text-sm text-gray-200 hover:underline">
              Careers
              <span className="ml-2 bg-purple-100 text-black text-xs font-semibold px-2 py-1 rounded-full">
                Hiring
              </span>
            </Link>

            <Link href="#" className="block mt-2 text-sm text-gray-200 hover:underline">
              Blog - The Artistry
            </Link>
          </div>
        </div>

        {/* Learn Section */}
        <div>
          <h4 className="text-gray-200 font-semibold">Learn</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {[
              "Studio for Crafters",
              "Studio Workspace Guide",
              "Studio for Print on Demand",
              "Graphic Design Guide",
              "Studio for Marketing",
              "AI Art Guide",
              "Etsy Guide",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-gray-200 font-semibold">Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {[
              "Help Center",
              "Print on Demand (POD)",
              "Studio License",
              "All Access",
              "Terms of Service",
              "Privacy Policy",
              "Affiliate Terms & Conditions",
              "Cancellation Policy",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h4 className="text-gray-200 font-semibold">Tools</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {[
              "Features",
              "Background remover",
              "AI Enhancer",
              "SVG File Converter",
              "Resize PNG",
              "Convert PNG to SVG",
              "Crop Image",
              "AI Inpainting Tools",
              "Free Templates",
            ].map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Secure Checkout */}
        <div>
          <h4 className="text-white font-semibold">Contact</h4>

          <p className="text-sm text-gray-200 hover:underline cursor-pointer">hi@creativefabrica.com</p>
          <p className="mt-2 text-sm">Find us at:</p>
          <p className="text-sm">Westerstraat 187, 1015 MA Amsterdam, The Netherlands</p>
          <p className="text-sm mt-2">Chamber of Commerce: 70114412</p>
          <p className="text-sm">VAT: NL858147877B01</p>

          <h4 className="mt-6 text-gray-200 font-semibold">Secure Checkout</h4>
          <p className="text-sm">Your data is securely handled by our partners</p>

          <div className="mt-2 mr-9 grid grid-cols-3 gap-3">
          {[
          ["/stripe.svg", "Stripe"],
          ["/paypal.svg", "PayPal"],
          ["/mastercard.svg", "MasterCard"],
          ["/discover.svg", "Discover"],
          ["/visa.svg", "Visa"],
          ["/amex.svg", "Amex"],
          ].map(([src, alt], index) => (
          <Image key={index} src={src} alt={alt} width={40} height={30} />
          ))}
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t pt-6 flex items-center justify-between text-sm text-gray-200">
        <p>© Creative Fabrica 2025 - Crafted with love and coffee in Amsterdam.</p>
        <div className="flex space-x-4 text-white">
          <FaFacebookF size={20} />
          <FaLinkedinIn size={20} />
          <FaPinterestP size={20} />
          <FaYoutube size={20} />
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full mt-20 rounded-4xl overflow-hidden h-[20rem] bg-[#865cff] py-4">
              <div className="flex justify-center gap-8">
                {scrollRefs.map((scrollRef, columnIndex) => (
                  <div
                    key={columnIndex}
                    ref={scrollRef}
                    className="h-[400px] w-[280px] overflow-y-hidden scroll-smooth transform rotate-[-10deg]"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {[...Array(6)].map((_, rowIndex) => (
                      <div key={rowIndex} className="mb-2">
                        <Image
                          src={images[rowIndex % images.length]}
                          alt={`Carousel ${rowIndex}`}
                          width={350}
                          height={100}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
      
              {/* Overlay Text + Button */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white py-2 px-6 rounded-full flex items-center gap-4">
                <span className="text-lg font-bold">Go beyond ordinary</span>
      
                <button className="bg-white h-[40px] text-black p-9 px-4 py-1 rounded-lg">
                  Create for free
                </button>
              </div>
            </div>
    </footer>
  );
};

export default Footer;
