'use client'
import {sliderProps} from "@/utility/sliderProps";
import {Swiper, SwiperSlide} from "swiper/react";

export default function EventSwipper() {
    return (
        <Swiper
            {...sliderProps.nicolas_sm_portfolio_slider}
            className="swiper-container"
        >
            <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_1.jpg" alt={1}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_2.jpg" alt={2}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_3.jpg" alt={3}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_4.jpg" alt={4}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_5.jpg" alt={1}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="list_inner">
                        <img src="/img/events/event_6.jpg" alt={2}/>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    )
}
