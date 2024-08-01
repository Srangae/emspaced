import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import SQLAccountPricing from "@/components/SqlAccountPricing";
import Image from "next/image";
import SQLCloudAccountBanner from "@/components/SQLCloudAccountBanner";
import Call_us_banner from "@/components/call_us_banner";
import HomeBanner_1 from "@/components/HomeBanner_1";
import Payroll_banner from "@/components/payroll_banner";
import Video_banner from "@/components/sqlpayroll/video_banner";
import PayrollPricing from "@/components/sqlpayroll/Pricing";
import Pos_feature from "@/components/sqlpos/pos_feature";
import PosPricing from "@/components/sqlpos/pos_pricing";
import CloudPricing from "@/components/sqlcloud/cloud_pricing";
import DashboardVideo from "@/components/sqldashboard/dashboard_video";
import DashboardPricing from "@/components/sqldashboard/dashboard_pricing";
import {IconHandClick, IconHeartHandshake, IconSettingsCode} from "@tabler/icons-react";

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="mt-20 md:mt-40 border-2">
                    <div className='flex flex-col items-center justify-center py-10 relative h-60 md:h-72'>
                        <Image src='/img/home/homepage_banner.jpg' alt="Banner" fill
                               className='bg-opacity-50'/>
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div
                            className='absolute inset-0 flex flex-col items-center justify-center gap-4 text-white animate-slidein'>
                            <div className=' font-bold text-4xl'>About Us</div>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white p-10'>

                    <div className='flex flex-col gap-6 items-center justify-center text-center'>
                        <div className='text-4xl font-bold text-primary-900'>
                            Hey there, we are EMSPACED
                        </div>
                        <div className='text-2xl w-3/4'>
                            We are group of consultants that specialize in deploying SQL business software. We have
                            assisted more than 500 customers in their business using our solution.
                        </div>
                    </div>

                    <div
                        className='grid md:grid-cols-3 border-2 rounded-2xl items-start justify-center w-5/6 my-5 shadow-md'>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                1. Requirement Analysis
                            </div>
                            <div className='text-lg text-teal-600'>
                                To understand client's expectation and requirement on the software - Perform the
                                Requirement/ Gap Analysis to ensure we are able to close the gap.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                2. Report Analysis & Brainstorming
                            </div>
                            <div className='text-lg text-teal-600'>
                                During the report analysis phase, our experts will determine what report suit your
                                entity the best, and if the templates needed to be customized.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                3. Test Planning & Customization
                            </div>
                            <div className='text-lg text-teal-600'>
                                Test strategy and test plans
                                (when required).
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                4. Setting Up Test Procedures
                            </div>
                            <div className='text-lg text-teal-600'>
                                Setting up test procedures, test scenarios and simulate in testing database to ensure
                                the clients requirements and satisfaction are met.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                5. Training & Implementation
                            </div>
                            <div className='text-lg text-teal-600'>
                                Customize and arrange training workflow according to the nature of business, and prepare
                                guidelines for documentation when required.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900 text-center'>
                                6. Support & Maintenance
                            </div>
                            <div className='text-lg text-teal-600'>
                                Customize and arrange training workflow according to the nature of business, and prepare
                                guidelines for documentation when required.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 text-6xl font-bold text-center flex flex-col gap-5 py-20 text-white'>
                        ROOTS OF THE COMPANY
                    </div>
                </div>

                <div className='flex flex-col p-10 text-left gap-4 items-center justify-center'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-bold'>
                            Who Are We?
                        </div>
                        <div className='flex flex-col gap-4'>
                            Human Resource Management System(HRMS), IT Solutions, Accounting Services
                        </div>

                    </div>

                    {/*<div className='flex flex-col gap-4'>*/}
                    {/*    <div className='text-2xl font-bold'>*/}
                    {/*        Our Vision*/}
                    {/*    </div>*/}
                    {/*    <div className=''>*/}
                    {/*        Our vision is to lead the change in collaborative workspaces, making them places where*/}
                    {/*        support,*/}
                    {/*        innovation, and*/}
                    {/*        growth are part of everyday life. We want to help businesses and individuals achieve their*/}
                    {/*        best,*/}
                    {/*        creating a future*/}
                    {/*        where success and well-being are for everyone.*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-bold'>
                            Our Mission
                        </div>
                        <div>
                            Human Resource Management System(HRMS), IT Solutions, Accounting Services
                        </div>
                    </div>


                </div>

                <div className='flex flex-col items-center justify-center p-10 text-center gap-10 bg-banner-50'>
                    <div className='text-4xl text-primary-900 font-bold'>
                        Why Emspaced?
                    </div>

                    <div className='nicolas_sm_service_details'>
                        <div className='flex p-10 text-white'>
                            <div className='grid md:grid-cols-2 items-center justify-center md:mx-auto md:w-3/4'>
                                <div className='flex justify-center'>
                                    <IconSettingsCode size={200}/>
                                </div>
                                <div className='flex flex-col gap-4 text-left'>
                                    <div className='text-xl font-bold'>
                                        Integrated Space and Solution Provider
                                    </div>

                                    <div className=''>
                                        Our co-working space offers flexible, inspiring work environments and
                                        comprehensive
                                        business process outsourcing, from HR to accounting. Leveraging our founders’
                                        start-up tech expertise, we emphasise productivity, creativity, and
                                        collaboration,
                                        fostering a vibrant community that prioritises employee well-being.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex p-10 text-white'>
                            <div className='grid md:grid-cols-2 items-center justify-center md:mx-auto md:w-3/4'>
                                <div className='flex justify-center'>
                                    <IconHandClick size={200}/>
                                </div>
                                <div className='flex flex-col gap-4 text-left'>
                                    <div className='text-xl font-bold'>
                                        Empowering Partnership Programs
                                    </div>

                                    <div className=''>
                                        As your committed partner, we offer essential resources, support, and
                                        opportunities for unlocking potential and sustainable success. Our bespoke
                                        programmes, mentorships, and expansive networks are designed to elevate your
                                        performance and ensure you thrive in a community-focused, growth-oriented
                                        environment.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex p-10 text-white'>
                            <div className='grid md:grid-cols-2 items-center justify-center md:mx-auto md:w-3/4'>
                                <div className='flex justify-center'>
                                    <IconHeartHandshake size={200}/>
                                </div>
                                <div className='flex flex-col gap-4 text-left'>
                                    <div className='text-xl font-bold'>
                                        Exceptional Support for Customer Success
                                    </div>

                                    <div className=''>
                                        At Emspaced, our purpose is to empower success, measuring our achievements
                                        through our clients’ triumphs. We focus on understanding unique goals and offer
                                        comprehensive business solutions to manage your administrative tasks, freeing
                                        time to for you to focus on your growth and desired outcomes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className='flex flex-col gap-4 p-20 items-center justify-center'>*/}
                {/*    <div className='text-primary-900 text-6xl font-bold'>*/}
                {/*        CHANNEL PARTNERS*/}
                {/*    </div>*/}
                {/*    <div className='text-secondary-600 text-2xl'>*/}
                {/*        not just about system but the business*/}
                {/*    </div>*/}

                {/*    <div className='grid md:grid-cols-2 gap-4 md:py-10'>*/}
                {/*        <div className='flex flex-col gap-4 items-center justify-center'>*/}
                {/*            <div>*/}
                {/*                <Image src='/img/company/bispoint-366x389.png' width={200} height={200}/>*/}
                {/*            </div>*/}
                {/*            <div className='md:w-2/3 text-center'>*/}
                {/*                Bispoint Group provides comprehensive business and financial solutions for small &*/}
                {/*                medium-sized enterprises (SMEs) as well as multinational foreign companies (MNCs).*/}
                {/*            </div>*/}

                {/*            <div className='flex flex-col items-center justify-center'>*/}
                {/*                <div className='font-bold'>*/}
                {/*                    Bispoint*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    Group of Accountants*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*        <div className='flex flex-col gap-4 items-center justify-center'>*/}
                {/*            <div>*/}
                {/*                <Image src='/img/company/bispoint-366x389.png' width={200} height={200}/>*/}
                {/*            </div>*/}
                {/*            <div className='md:w-2/3 text-center'>*/}
                {/*                Bispoint Group provides comprehensive business and financial solutions for small &*/}
                {/*                medium-sized enterprises (SMEs) as well as multinational foreign companies (MNCs).*/}
                {/*            </div>*/}

                {/*            <div className='flex flex-col items-center justify-center'>*/}
                {/*                <div className='font-bold'>*/}
                {/*                    Bispoint*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    Group of Accountants*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </NikolasLayout>
    );
};
export default page;
