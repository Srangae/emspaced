"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import TestimonialSlider from "@/components/TestimonialSlider";
import NikolasLayout from "@/layouts/NikolasLayout";
import WorkingProcess from "@/components/WorkingProcess";
import HomeBanner_1 from "@/components/HomeBanner_1";
import SQLAccountSpecial from "@/components/SQLAccountSpecial";
import CreditCard from "@/components/CreditCard";
import SQLPaySpecial from "@/components/SQLPaySpecial";
import SQLLeave_special from "@/components/SQLLeave_special";
import {Elsie} from "next/dist/compiled/@next/font/dist/google";
import ELeave_special from "@/components/ELeave_special";
import Reviews from "@/components/Reviews";

const page = () => {
    return (
        <NikolasLayout>
            {/* Hero */}
            <Hero/>
            {/* /Hero */}
            {/* About */}
            <WorkingProcess/>
            {/* /About */}
            {/* Service */}
            {/*<Service />*/}
            <HomeBanner_1/>
            {/* /Service */}
            <SQLAccountSpecial/>
            <CreditCard/>
            <SQLPaySpecial/>
            <SQLLeave_special/>
            <ELeave_special/>
                <Reviews/>
            {/* Portfolio */}
            {/*<Portfolio/>*/}
            {/* /Portfolio */}
            {/* Testimonials */}
            {/*<TestimonialSlider/>*/}
            {/* /Testimonials */}
            {/* Partners */}
            <Partners/>
            {/* /Partners */}
            {/* Pricing */}
            {/*<Pricing/>*/}
            {/* /Pricing */}
            {/* Blog */}
            {/*<Blog/>*/}
            {/* /Blog */}
        </NikolasLayout>
    );
};
export default page;
