"use client";
import Portfolio from "@/components/Portfolio";
import WorkingProcess from "@/components/WorkingProcess";
import NikolasLayout from "@/layouts/NikolasLayout";
import {sliderProps} from "@/utility/sliderProps";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SQLCloudAccountBanner from "@/components/SQLCloudAccountBanner";
import {useMetadata} from "@/context/MetadataContext";
import {useEffect} from "react";

const page = () => {

    const {setMetadata} = useMetadata()

    useEffect(() => {
        setMetadata({
            title: 'Join Upcoming Events to Elevate Your Business - Emspaced',
            description: "Join Emspaced Accounting for our exciting upcoming events! Stay updated on workshops and networking opportunities to enhance your financial expertise.",
        })
    }, [setMetadata])
    return (
        <NikolasLayout>
            {" "}
            {/* Page_title */}
            <div className="nicolas_sm_page_title">
                <div className="container">
                    <div className="page_title_in">
                        <h3>
                            <span className="underline">Events </span>
                            <br/>
                            <span className="stroke_text">In appreciation of your continuous support, we offer </span>
                            <span className="underline">EMSPACED </span>
                            <span className="stroke_text">customers to attend all events for </span>
                            <span className="underline">FREE </span>
                            <span className="stroke_text"> just because we care about you! </span>
                        </h3>
                    </div>
                </div>
            </div>
            {/* /Page_title */}
            {/* Slider */}
            <div className="nicolas_sm_portfolio_slider swiper-section">
                <div className="slider_in">
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
                </div>
                <div className="nicolas_sm_swiper_progress fill">
                    <div className="my_pagination_in">
                        <span className="pagination_progress">
                          <span className="all">
                            <span className="all_span"/>
                          </span>
                        </span>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <div className='my-6 w-10/12 grid grid-cols-2 md:grid-cols-4 gap-2'>
                        <div className='border-2'>
                            <Image src="/img/events/event_1.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_2.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_3.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_4.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_5.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_6.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_1.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_2.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_3.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_4.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_5.jpg" alt={1} width={300} height={300}/>
                        </div>
                        <div className='border-2'>
                            <Image src="/img/events/event_6.jpg" alt={1} width={300} height={300}/>
                        </div>
                    </div>
                </div>

            </div>
            {/* /Slider */}

            <div className='flex flex-col items-center justify-center bg-white'>
                <div className='flex items-center justify-center py-10 text-center'>
                    <Image src='/img/calendar.png' alt={2} width={50} height={50}/>
                    <div className='text-black text-4xl'>SQL Account & Payroll Hands On Training</div>
                </div>

                <div className='text-2xl w-10/12 text-center pb-10'>
                    <span className='font-bold text-black'>FREE </span>
                    <span className='font-light text-black'>Register to learn SQL Account & Payroll before purchase. ALso we welcome non-SQL product users to join the hands on training class</span>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center gap-10 w-full md:w-7/12 pb-10'>
                    <button className='bg-primary-500 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                        href='https://wa.me/message/BTIUQPHTL6AKE1'
                        target='_blank'>SQL Account</Link></button>
                    <button className='bg-red-500 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                        href='https://wa.me/message/BTIUQPHTL6AKE1'
                        target='_blank'>SQL Payroll</Link></button>
                </div>
            </div>
            {/* Portfolio */}
            <Portfolio noTitle={true}/>
            {/* /Portfolio */}
            {/* Process */}
            <SQLCloudAccountBanner/>
            {/* /Process */}
        </NikolasLayout>
    );
};
export default page;
