'use client'
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
import {
    IconFileInfo,
    IconRouteAltLeft,
    IconCards,
    IconPrinter,
    IconReport,
    IconDeviceLaptop, IconLayout, IconLayoutCollage, IconTax
} from "@tabler/icons-react";
import {useMetadata} from "@/context/MetadataContext";
import {useEffect} from "react";

const page = () => {
    const {setMetadata} = useMetadata()

    useEffect(() => {
        setMetadata({
            title: 'SQL Payroll: User-Friendly Payroll System - Emspaced',
            description: "Manage payroll effortlessly with SQL Payroll from Emspaced. Enjoy accurate calculations and intuitive tools designed to streamline your team's processes.",
        })
    }, [setMetadata])

    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <div className="flex flex-col items-center justify-center">
                                <div className='font-bold text-6xl text-primary-900 text-center'>SQL PAYROLL</div>
                                <div
                                    className='flex items-center justify-center py-6 text-2xl text-secondary-600'>The
                                    most user friendly payroll system
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://wa.me/message/BTIUQPHTL6AKE1'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='flex items-center justify-center bg-banner-50 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white'>
                        <div className='text-center text-6xl py-6 text-primary-900 font-bold'>
                            SQL Payroll Software
                        </div>
                        <div className='text-left'>
                            SQL Payroll software is built from ground up around Payroll Process. You can easily process
                            and print from one to hundreds of employee’s pay slip with just a few mouse click. What’s
                            more is that you can virtually keep unlimited payroll history and have your data safe and
                            sound with strong security and data protection. A well-maintained human resource is a
                            well-maintained business. You do not need to be an expert for contribution and taxes when
                            you have SQL Payroll software Malaysia on hand. Let the software relieve you from the
                            complicated work.
                        </div>

                        <div className='text-left'>
                            When you choose SQL Payroll software, you will also receive an abundance of online resources
                            to support your journey in using this system. If that's not enough, we conduct unlimited
                            hands-on free payroll software training in our HQ.
                        </div>

                        <div className='flex md:flex-row flex-col w-full gap-5 py-6'>
                            <Link href='/sqlpayroll-features'
                                  className='flex items-center justify-center bg-primary-900 w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    FULL FEATURES
                                </button>
                            </Link>

                            <Link href='#'
                                  className='flex items-center justify-center bg-primary-900 w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    SPECIAL INDUSTRIES
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center p-10 text-center gap-10'>
                    <div className='text-4xl text-primary-900 font-bold'>
                        As simple as 1-2-3
                    </div>

                    <div className='container'>
                        <div className='grid md:grid-cols-3 gap-10 items-start justify-center text-left text-secondary-600'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconFileInfo size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    Employee Information
                                </div>

                                <div>
                                    Employee's information is important for system to automate all the calculation, auto
                                    detect employee ages for contribution and different entitlement.
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconCards size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    Payroll Process
                                </div>

                                <div>
                                    Your monthly payroll process in just a few clicks no matter ad-hoc, half-month or
                                    final process, SQL Payroll will calculate the final figure for you.
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconRouteAltLeft size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    Leave Management
                                </div>

                                <div>
                                    Automated calculate leave entitlement based on employee's serviced year. Employee
                                    are able to self-apply leave and check leave info via <Link href='#'
                                                                                                className='text-blue-400'>SQL
                                    E Leave mobile app.</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconPrinter size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    Print/Email Payslip
                                </div>

                                <div>
                                    Securely send the payslips to every single employee's registered email with password
                                    encryption similar your bank statement. <Link href='#' className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconReport size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    Payroll Report
                                </div>

                                <div>
                                    Generate the monthly payroll report by department, staff category, branch and up to
                                    9 levels of different grouping manageable from SQL Payroll. <Link href='#'
                                                                                                      className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconFileInfo size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    EIS/SIP
                                </div>

                                <div>
                                    Employment Insurance System will automatic calculate based on EIS table also will
                                    auto detect when employee reach the requirement of contribution. <Link href='#'
                                                                                                           className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconDeviceLaptop size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    SOCSO/Employment Injury Scheme
                                </div>

                                <div>
                                    No matter for local employees (SOCSO) or foreign employees (Employment Injury
                                    Scheme) SQL Payroll will always stay up-to-date for you. <Link href='#'
                                                                                                   className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconLayoutCollage size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    EPF/KWSP
                                </div>

                                <div>
                                    The contribution rate by default is set to the standard auto EPF rate or it can be
                                    set to user-defined EPF rate. The system will intelligently detect the rate to apply
                                    based on the employee's age/wages. <Link href='#'
                                                                             className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <IconTax size={150} stroke={0.5}/>
                                <div className='font-bold text-primary-900 text-3xl text-center'>
                                    CP39/LHDN
                                </div>

                                <div>
                                    Monthly tax deduction for the employee is compulsory if he/she meets a certain
                                    requirement. Our system will handle this task along with CP38. <Link href='#'
                                                                                                         className='text-blue-400'>
                                    Learn more ...</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='container'>
                    <div className='flex flex-col items-center justify-center my-10'>
                        <div className='text-primary-900 text-4xl font-bold'>
                            Data Verified and upload
                        </div>

                        <div>
                            <Image src='/img/cloud.png' alt='cloud' width={300} height={300}/>
                        </div>

                        <div className='grid md:grid-cols-4 gap-6 items-start justify-center text-left'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-primary-900 text-center'>
                                    Local Bank
                                </div>
                                <div className='text-secondary-600'>
                                    Make salary payments via electronic submissions. More than 25 Malaysia banks
                                    including
                                    Maybank, Hong Leong Bank, CIMB Bank, Public Bank can be used to perform bank giro on
                                    SQL
                                    Payroll Malaysia software.
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-primary-900 text-center'>
                                    ASSIST
                                </div>
                                <div className='text-left text-secondary-600'>
                                    SQL Payroll is ready with SOCSO Borang 8A and EIS Lampiran electronic submission to
                                    <Link href='https://www.perkeso.gov.my/' target='_blank' className='text-blue-400'> ASSIST
                                        portal</Link> or bank services to save your time!
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-primary-900 text-center'>
                                    KWSP
                                </div>
                                <div className='text-left text-secondary-600'>
                                    SQL Payroll is ready with KWSP Borang A electronic submission to <Link
                                    href='https://www.kwsp.gov.my/' className='text-blue-400' target='_blank'>KWSP
                                    portal</Link> or bank
                                    services to save your time!
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-primary-900 text-center'>
                                    LHDN
                                </div>
                                <div className='text-left text-secondary-600'>
                                    SQL Payroll software Malaysia also comes with proper formatted documents that are
                                    ready to use when it comes to performing e-submissions for Income tax. Documents
                                    that are ready for <Link href='https://eapps.hasil.gov.my/'
                                                             className='text-blue-400' target='_blank'>e-Data
                                    PCB</Link> are CP 39, CP 39 A, CP 38, Income tax Lampiran B (PCB
                                    Audit).
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col w-full gap-5 py-6 items-start justify-center'>
                        <Link href='/sqlpayroll-features'
                              className='flex items-center justify-center bg-emerald-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                            <button>
                                FULL FEATURES
                            </button>
                        </Link>

                        <Link
                            href='https://wa.me/message/BTIUQPHTL6AKE1'
                            target='_blank'
                            className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                            <button>
                                Enquiry
                            </button>
                        </Link>
                    </div>

                </div>

                <div className='py-10'>
                    <Payroll_banner/>
                </div>

                <Video_banner/>

                <div id='payroll_pricing'>
                    <PayrollPricing/>
                </div>
                <Call_us_banner/>

                <div className='flex flex-col items-center justify-center bg-white py-10 text-left'>
                    <div className='font-bold text-4xl text-primary-900 py-10'>
                        Learn more about SQL Malaysia payroll system
                    </div>

                    <div className='grid md:grid-cols-3 items-center justify-center px-6'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_1.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center'>
                                SQL Account Full Features
                            </div>
                            <div className='text-lg text-secondary-600'>
                                Check out the amazing full features of SQL Payroll; see how the system can help your
                                daily operation flow.
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_2.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center'>
                                Knowledge Base
                            </div>
                            <div className='text-lg text-secondary-600'>
                                Sharing is caring; we care about our user, watch & learn new SQL Account / Malaysia
                                payroll system skills you can use today
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_3.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center'>
                                Hands On Training
                            </div>
                            <div className='text-lg text-secondary-600'>
                                <strong>FREE</strong> Register to learn SQL Account & Payroll before purchase. Also, we
                                welcome non-SQL
                                product users to join the hands-on training class.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center py-10 md:gap-10 w-full'>
                        <div className='flex md:flex-row flex-col w-full items-center justify-center gap-10 py-6'>
                            <button className='bg-primary-900 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                                href='/sqlpayroll-features'
                                target='_blank'>FULL FEATURES</Link></button>
                            <button className='bg-secondary-800 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                                href='https://wa.me/message/BTIUQPHTL6AKE1'
                                target='_blank'>ENQUIRY</Link></button>
                        </div>
                    </div>
                </div>
                <SQLCloudAccountBanner/>
            </div>
        </NikolasLayout>
    );
};
export default page;
