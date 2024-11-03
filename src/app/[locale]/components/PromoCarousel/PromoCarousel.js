"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./PromoCarousel.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const PromoCarousel = () => {
    const [promoData, setPromoData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPromoData = async () => {
            try {
                const response = await fetch("/data/promoData.json");
                const data = await response.json();
                setPromoData(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка загрузки данных промо:", error);
                setIsLoading(false);
            }
        };

        fetchPromoData();
    }, []);

    if (isLoading) {
        return <p>Загрузка...</p>;
    }
    return (
        <div className="promo-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                modules={[Pagination, Navigation, Autoplay]}
                className="promo-swiper"
            >
                {promoData.slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="promo-swiper-slide swiper-slide">
                            <div className="promo-content">
                                {slide.promoDate && (
                                    <p className="promo-date">
                                        {slide.promoDate}
                                    </p>
                                )}
                                <h2 className="promo-title">
                                    {slide.promoTitle}{" "}
                                    {slide.promoTitleSpan && (
                                        <span className="promo-title-span">
                                            {slide.promoTitleSpan}
                                        </span>
                                    )}
                                </h2>
                                {slide.promoDescriptor && (
                                    <p className="promo-description">
                                        {slide.promoDescriptor}
                                    </p>
                                )}
                                {slide.promoButton && (
                                    <button
                                        className="promo-button"
                                        onClick={() =>
                                            console.log("Кнопка нажата!")
                                        }
                                    >
                                        {slide.promoButton}
                                    </button>
                                )}
                            </div>
                            <Image
                                className="promo-slider-image"
                                src={slide.imageSrc}
                                alt={slide.title}
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PromoCarousel;