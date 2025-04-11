'use client';

import { defaultPadding, games } from '../data';
import React from 'react';
import QuoteCard from './qoute_card';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FifthSection = () => {
    return (
        <section className={`${defaultPadding} max-w-[85rem]`}>
            <div className=" relative w-full">
                <Swiper
                    modules={[Pagination]}
                    observer={true}
                    spaceBetween={40}
                    pagination={{ clickable: true, }}
                    breakpoints={{
                        1024: { slidesPerView: 2 }, // Large screens
                        768: { slidesPerView: 1 }, // Tablets
                        0: { slidesPerView: 1 }, // Mobile view
                    }}
                    className="py-10"
                >
                    {games.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <QuoteCard
                                description={testimonial.description}
                                profilepicture={testimonial.profilePicture}
                                name={testimonial.name}
                                brand={testimonial.brand}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination must be outside Swiper */}
                <div className="swiper-pagination text-center mt-6"></div>
            </div>
        </section>
    );
};

export default FifthSection;
