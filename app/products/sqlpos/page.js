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

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <h3 className='text-emerald-900'>SQL POS</h3>
                            <div className='flex items-center justify-center py-6 text-3xl text-white'>
                                Scan - Checkout - Inventory
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-blue-500 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/ContactUs/formperma/9FALmGi4adC9sZdFQQoXYcPZvih6HlF7OJsJNPiEdxI'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white'>
                        <div className='text-center text-6xl py-6 text-emerald-950'>
                            SQL POS SYSTEM
                        </div>
                        <div className='text-left text-2xl'>
                            Seamless integration makes it easy to sell your products and accept multiple payments.
                            Inventory, orders and customer data are automatically updated. SQL Pos covers a wide range
                            of industries- Mini Markets, Book Stores, Hardware Stores, Pharmacies Medical Stores and
                            many more.
                        </div>

                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-emerald-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='#'
                                    target='_blank'>
                                    PRICING
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div>

                </div>

                <div className='container'>
                    <div className='flex flex-col items-center justify-center my-10'>
                        <div className='text-emerald-900 text-4xl'>
                            Data Verified and upload
                        </div>

                        <div>
                            <Image src='/img/cloud.png' alt='cloud' width={300} height={300}/>
                        </div>

                        <div className='grid md:grid-cols-4 gap-6 items-start justify-center'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-emerald-600'>
                                    Local Bank
                                </div>
                                <div className='text-center'>
                                    Make salary payments via electronic submissions. More than 25 Malaysia banks
                                    including
                                    Maybank, Hong Leong Bank, CIMB Bank, Public Bank can be used to perform bank giro on
                                    SQL
                                    Payroll Malaysia software.
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-emerald-600'>
                                    ASSIST
                                </div>
                                <div className='text-center'>
                                    SQL Payroll is ready with SOCSO Borang 8A and EIS Lampiran electronic submission to
                                    <Link href='https://www.perkeso.gov.my/' target='_blank' className='text-blue-400'>ASSIST
                                        portal</Link> or bank services to save your time!
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-emerald-600'>
                                    KWSP
                                </div>
                                <div className='text-center'>
                                    SQL Payroll is ready with KWSP Borang A electronic submission to <Link
                                    href='https://www.kwsp.gov.my/' className='text-blue-400' target='_blank'>KWSP
                                    portal</Link> or bank
                                    services to save your time!
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div className='text-2xl font-bold text-emerald-600'>
                                    LHDN
                                </div>
                                <div className='text-center'>
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
                            href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
                            target='_blank'
                            className='flex items-center justify-center bg-white text-emerald-900 w-full md:w-1/5 rounded-3xl p-5'>
                            <button>
                                Enquiry
                            </button>
                        </Link>
                    </div>

                </div>

                <Payroll_banner/>
                <Video_banner/>

                <div id='payroll_pricing'>
                    <PayrollPricing/>
                </div>
                <Call_us_banner/>

                <div className='flex flex-col items-center justify-center bg-white py-10 text-center'>
                    <div className='font-bold text-4xl text-emerald-900 py-10'>
                        Learn more about SQL Malaysia payroll system
                    </div>

                    <div className='grid md:grid-cols-3 items-center justify-center px-6'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_1.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-cyan-300 text-center'>
                                SQL Account Full Features
                            </div>
                            <div className='text-lg text-center'>
                                Check out the amazing full features of SQL Payroll; see how the system can help your
                                daily operation flow.
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_2.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-cyan-300 text-center'>
                                Knowledge Base
                            </div>
                            <div className='text-lg text-center'>
                                Sharing is caring; we care about our user, watch & learn new SQL Account / Malaysia
                                payroll system skills you can use today
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_3.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-cyan-300 text-center'>
                                Hands On Training
                            </div>
                            <div className='text-lg text-center'>
                                <strong>FREE</strong> Register to learn SQL Account & Payroll before purchase. Also, we
                                welcome non-SQL
                                product users to join the hands-on training class.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center py-10 md:gap-10 w-full'>
                        <div className='flex md:flex-row flex-col w-full items-center justify-center gap-10 py-6'>
                            <button className='bg-purple-700 rounded-2xl text-white p-3 md:w-1/5'><Link
                                href='/sqlpayroll-features'
                                target='_blank'>FULL FEATURES</Link></button>
                            <button className='bg-slate-200 rounded-2xl text-purple-400 p-3 md:w-1/5'><Link
                                href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
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
