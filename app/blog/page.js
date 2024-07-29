"use client";
import NikolasLayout from "@/layouts/NikolasLayout";
import {nicolasUtility} from "@/utility";
import {useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";

const page = () => {
    useEffect(() => {
        nicolasUtility.dataImage();
    }, []);

    return (
        <NikolasLayout>
            {/* Page_title */}
            <div className="nicolas_sm_page_title">
                <div className="container">
                    <div className="page_title_in">
                        <h3>
              <span className="underline">
                Blog <br/>
              </span>
                            <span className="stroke_text">Let's Read, </span>
                            <span className="underline">Know More About Us</span>
                        </h3>
                    </div>
                </div>
            </div>
            {/* /Page_title */}
            {/* Blog */}
            <div className="nicolas_sm_blog no_padding blogpage">
                <div className="container">
                    <div className="extra_container">
                        <div className='grid md:grid-cols-3 gap-4 items-center justify-center'>
                            <div
                                className='flex flex-col gap-4 border-2 rounded-xl p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                                <Link href="blog_details/1">
                                    <Image src='/img/blog/blog_1.jpg' width={400} height={400}/>
                                    <div className='font-bold text-primary-900'>
                                        The Ultimate Guide on HR Software System Malaysia
                                    </div>
                                    <div className='text-sm text-secondary-600'>
                                        19 February, 2022
                                    </div>
                                </Link>
                            </div>

                            <div
                                className='flex flex-col border-2 gap-4 rounded-xl p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                                <Link href="blog_details/2">
                                    <Image src='/img/blog/blog_2.jpg' width={400} height={400}/>
                                    <div className='font-bold text-primary-900'>
                                        How to Choose Accounting Software for Small Business
                                    </div>
                                    <div className='text-sm text-secondary-600'>
                                        16 February, 2022
                                    </div>
                                </Link>
                            </div>

                            <div
                                className='flex flex-col border-2 gap-4 rounded-xl p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                                <Link href="blog_details/3">
                                    <Image src='/img/blog/blog_3.jpg' width={400} height={400}/>
                                    <div className='font-bold text-primary-900'>
                                        Benefits of Using Accounting Software for Business
                                    </div>
                                    <div className='text-sm text-secondary-600'>
                                        11 December 2021
                                    </div>
                                </Link>
                            </div>

                            <div
                                className='flex flex-col border-2 gap-4 rounded-xl p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                                <Link href="blog_details/4">
                                    <Image src='/img/blog/blog_4.jpg' width={400} height={400}/>
                                    <div className='font-bold text-primary-900'>
                                        What Features Your Business Payroll System Should Have?
                                    </div>
                                    <div className='text-sm text-secondary-600'>
                                        10 December 2021
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* /Blog */}
        </NikolasLayout>
    );
};
export default page;
