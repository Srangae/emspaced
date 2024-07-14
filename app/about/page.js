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

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <h3 className='text-primary-900 font-bold'>About Us</h3>
                            <h2 className='flex items-center justify-center py-4 text-4xl text-center text-secondary-600'>
                                Miow, A happy working environment creates a better tomorrow
                            </h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white p-10'>

                    <div className='flex flex-col gap-6 items-center justify-center text-center'>
                        <div className='text-4xl font-bold text-primary-900'>
                            Hey there, we are GOLINK
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
                    <div>
                        Founder and Executive Director, Kok Yoong Jien (JK) is an Accountant, Business Consultant and
                        Entrepreneur. Back in 2014, JK and a few partners ventured into software businesses and started
                        specialising in GST and software development.
                    </div>

                    <div>
                        As the pace of software and database development increase, audit and compliance become even more
                        important. Companies and organizations need to ensure that they follow stringent regulatory
                        requirements such as the Goods and Services Tax Act 2014 (GST), all whilst remaining
                        competitive.
                    </div>

                    <div>
                        Therefore, GOLINK was born, keeping in view, the phenomenal rise in customer base of customized
                        software solutions. GOLINK is formed with the sole purpose of empowering traders, merchants &
                        business into higher levels of efficiency & profitability. With a rare mix of software,
                        technology & accounting experts, we bring the most complete team to bear on projects which
                        include SQL Account and Payroll Systems to diverse industry ranging from retail and supply chain
                        to food and beverage industry.
                    </div>

                    <div>
                        In 2016, we commenced trainings in studying internal programming in order to provide
                        customization for reports and system functionalities. Our vision is to lead our fellow customers
                        on the digital path, helping them stay competitive and thrive with success.
                    </div>

                    <div>
                        With our presence in West Malaysia, we aim to set our journey to East Malaysia with our strong
                        sales and marketing presence across social media that gives us the ability to strengthen
                        existing relationships, build new networks & enter new markets.
                    </div>

                </div>

                <div className='flex flex-col items-center justify-center p-10 text-center gap-10 bg-banner-50'>
                    <div className='text-4xl text-primary-900 font-bold'>
                        The way we grow
                    </div>

                    <div className='nicolas_sm_service_details'>
                        <div className="grid md:grid-cols-3 gap-5 items-start justify-center px-6">
                            <div className="list_inner p-10">
                                <span>2019</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "GEOGRAPHICAL ADVANCEMENT"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Our vision has been realized where we have set up our company in East Malaysia,
                                        looking forward to provide our services with a more holistic and advanced
                                        approach.
                                    </div>
                                </div>
                            </div>
                            <div className="list_inner p-10">
                                <span>2018</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "TRANSITION"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Ever since our business has grown, so does our clientele as we uphold our
                                        mission and values. Therefore, we have designated teams for premium support for
                                        our project based clients to enhance better and faster-pace service experience.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>2017</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "TECHNOLOGY ADVANCEMENT"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Started our own GoCloud SQL Solution with a vision to lead our client on a
                                        digital path.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>2016</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "DEVELOPMENT"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        We enhanced our services to provide customization of our existing system and
                                        ensure that our clients stay connected through Whatsapp for instant support.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>2015</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "CONVERGE"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Our goal was to gather expertise and knowledge to create possibilities and hone
                                        our services in both technology and accounting. We tested out various prototypes
                                        for diverse industries.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>2014</span>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "INCEPTION"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        A year of inspiration, led to the inception of the software business. We aimed
                                        to explore all possibilities, regardless of how realistic, feasible or viable
                                        they may or may not be.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 md:p-20 items-center justify-center'>
                    <div className='text-primary-900 text-6xl font-bold'>
                        CHANNEL PARTNERS
                    </div>
                    <div className='text-secondary-600 text-2xl'>
                        not just about system but the business
                    </div>

                    <div className='grid md:grid-cols-2 gap-4 md:py-10'>
                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <div>
                                <Image src='/img/company/bispoint-366x389.png' width={200} height={200}/>
                            </div>
                            <div className='md:w-2/3 text-center'>
                                Bispoint Group provides comprehensive business and financial solutions for small &
                                medium-sized enterprises (SMEs) as well as multinational foreign companies (MNCs).
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <div className='font-bold'>
                                    Bispoint
                                </div>
                                <div>
                                    Group of Accountants
                                </div>
                            </div>

                        </div>

                        <div className='flex flex-col gap-4 items-center justify-center'>
                            <div>
                                <Image src='/img/company/bispoint-366x389.png' width={200} height={200}/>
                            </div>
                            <div className='md:w-2/3 text-center'>
                                Bispoint Group provides comprehensive business and financial solutions for small &
                                medium-sized enterprises (SMEs) as well as multinational foreign companies (MNCs).
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <div className='font-bold'>
                                    Bispoint
                                </div>
                                <div>
                                    Group of Accountants
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </NikolasLayout>
    );
};
export default page;
