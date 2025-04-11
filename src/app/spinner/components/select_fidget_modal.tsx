import React, { useRef, useState } from 'react';
import CustomModal from './modal';
import { defaultPadding } from '@/data';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ButtonWithBackground from './button_with_background';

const images = [
    { name: "red reaper", src: "/images/fidgets/blade_fidget.png", },
    { name: "Death Mask", src: "/images/fidgets/bat_fidget.png", },
    { name: "Death Mask", src: "/images/fidgets/fiery_eye_fidget.png" },
    { name: "pistol spinner", src: "/images/fidgets/gun_fidget.png" },
    { name: "space explorer", src: "/images/fidgets/plate_fidget.png" },
];

const SelectFidgetModal = ({
    onClose,
    isOpen,
    onSelect,
    currentImage
}: {
    onClose: () => void;
    currentImage: string,
    isOpen: boolean;
    onSelect: (selectedImage: string) => void;
}) => {
    const [selectedImage, setSelectedImage] = useState<string>(currentImage);

    const swiperRef = useRef<any>(null);

    const handleLeftClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleRightClick = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handleSelect = () => {
        onSelect(selectedImage);
        onClose(); // Optionally close modal after selection
    };

    return (
        <CustomModal isOpen={isOpen} onClose={onClose}>
            <div className={`flex flex-col ${defaultPadding} !pb-4 py-0 !gap-0 overflow-hidden `}>
                <h2
                    className="text-2xl lg:text-3xl font-medium text-black uppercase text-center mb-16 py-2  sm:py-0"
                    style={{
                        fontFamily: 'var(--font-comfortaa)',
                    }}
                >
                    Select your spinner
                </h2>

                <Swiper
                    observer={true}
                    spaceBetween={40}

                    modules={[Pagination, Navigation]}
                    ref={swiperRef}
                    slidesPerView={6}
                    centeredSlides={true}
                    loop={true}
                >
                    {images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className={`!w-1/4 !m-0 h-full flex items-center flex-col transition-all duration-300 ${selectedImage === image.src ? 'border-[5px] border-[#F2F2F230] rounded-[10px]' : 'border-[5px] border-transparent rounded-[10px]'
                                }`}
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <p style={{
                                fontFamily: 'var(--font-comix-loud)',
                            }}
                                className='uppercase text-wrap text-black text-center mt-3 break-words px-5 mb-1 '>
                                {image.name}
                            </p>
                            <img
                                src={image.src}
                                alt="Fidget Spinner"
                                className={`aspect-square h-[152px] md:h-[256px] object-contain cursor-pointer relative z-20 transition-all duration-300 `}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-4 mt-4 p-2 mb-5">
                    <button
                        style={{
                            fontFamily: 'var(--font-hammersmith-one)',
                        }}
                        className="w-6 h-6.5 text-center text-black font-bold  bg-[#FF842A] flex justify-center items-center rounded-[10px]"
                        onClick={handleLeftClick}
                    >
                        &lt;
                    </button>
                    <button
                        style={{
                            fontFamily: 'var(--font-hammersmith-one)',
                        }}
                        className="w-6 h-6.5 text-center text-black bg-[#FF842A] font-bold  flex justify-center items-center rounded-[10px]"
                        onClick={handleRightClick}
                    >
                        &gt;
                    </button>
                </div>

                <div className="self-center">
                    <ButtonWithBackground text="SELECT" width="218" onClick={handleSelect} />
                </div>
            </div>
        </CustomModal>
    );
};

export default SelectFidgetModal;
