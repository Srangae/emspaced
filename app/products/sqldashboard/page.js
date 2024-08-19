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
                            <h3 className='text-primary-900 font-bold'>SQL BI Dashboard</h3>
                            <h2 className='flex items-center justify-center py-4 text-4xl text-secondary-600'>Cloud
                                Reporting
                                Dashboard</h2>
                            <div
                                className='flex items-center justify-center py-6 text-3xl text-justify text-secondary-800'>
                                We are the first to provide industry-leading business analytics and intelligence to SQL
                                Account users. Our dashboard and intuitive reports will help you to monitor, forecast
                                and plan your next best action to bring profits and success to your business.
                            </div>
                        </div>
                        <div className='flex items-center gap-10 justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://wa.me/message/BTIUQPHTL6AKE1'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://bi.sql.com.my/#/account'
                                    target='_blank'>
                                    Try Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white'>
                        <div className='text-center text-6xl py-6 font-bold'>
                            What is SQL BI Dashboard?
                        </div>
                        <div className='text-left'>
                            SQL BI Dashboard is a business intelligence cloud reporting tool designed for SME business
                            owners to view their business report/ performance in a visualized way. Owners and
                            accountants can now easily analyse the firm’s revenue performance and trends to evaluate the
                            firm’s financial health.
                            With the combination of business analytics and intelligence, SQL BI Dashboard aims to help
                            businesses in making better and informed decisions.
                        </div>

                        <div className='text-left'>
                            Take your <Link href='/products/sqlaccount' target='_blank' className='text-blue-400'>SQL
                            Account</Link> to the next level with our latest product, SQL BI Dashboard. Stay
                            ahead of the competition and own your success.
                        </div>

                        <div className='flex md:flex-row flex-col w-full items-center justify-center gap-5 py-6'>
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

                <div className='grid md:grid-cols-3 gap-6 p-5 bg-white items-start justify-center'>
                    <div className='flex flex-col gap-5 rounded-xl shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                        <div>
                            <Image src='/img/data.jpg' width={400} height={300}/>
                        </div>
                        <div className='text-primary-900 font-bold text-2xl'>
                            ☝ DATA
                        </div>
                        <div className='text-left text-teal-600 text-lg'>
                            SQL BI Dashboard extracts data from various business management software (eg. accounting,
                            POS software, etc.) and transform them into intuitive analytical charts that display key
                            KPIs relevant to your business goals.
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 rounded-xl shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                        <div className='flex justify-center'>
                            <Image src='/img/idea.jpg' width={250} height={250}/>
                        </div>
                        <div className='text-primary-900 font-bold text-2xl'>
                            ✌ IDEAS
                        </div>
                        <div className='text-left text-teal-600 text-lg'>
                            From our carefully curated analytics, your team will be able to understand your overall
                            business performance with greater clarity. This improves focus which facilitates better
                            ideas on areas of improvement.
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 rounded-xl shadow-xl p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-slate-200 duration-300'>
                        <div>
                            <Image src='/img/profit.jpg' width={400} height={300}/>
                        </div>
                        <div className='text-primary-900 font-bold text-2xl'>
                            🎯 PROFITS
                        </div>
                        <div className='text-left text-teal-600 text-lg'>
                            Implement continuous improvement in your corporate culture and stay ahead of the
                            competition. Take action on your ideas and reap its rewards.
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center p-10 bg-white'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-4xl '>
                            1
                        </div>
                        <div className='text-4xl text-primary-900 font-bold'>
                            View Your Reports With Visualization in a Simpler Way
                        </div>
                        <div className='text-teal-600 text-xl'>
                            Understand your business performance better through well-presented charts
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-5 py-10'>
                        <div className='text-4xl '>
                            2
                        </div>
                        <div className='text-4xl text-primary-900 font-bold'>
                            No Extra Work Or IT Background
                        </div>
                        <div className='text-teal-600 text-xl'>
                            There is NO additional import/export work, all data is 100% encrypted and automatically
                            synchronized.
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='text-4xl '>
                            3
                        </div>
                        <div className='text-4xl text-primary-900 font-bold'>
                            Access Any Time/Place/Device
                        </div>
                        <div className='text-teal-600 text-xl'>
                            Access Any Time/Place/Device
                        </div>
                    </div>
                </div>

                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white items-center justify-center'>
                        <div className='text-center text-6xl py-6 font-bold'>
                            When SQL Account met dashboard ...
                        </div>

                        <div>
                            ✔️ Cloud dashboard
                        </div>

                        <div>
                            ✔️ Beautiful & friendly user interface
                        </div>

                        <div>
                            ✔️ Real-time mobile reporting
                        </div>

                        <div>
                            ✔️ Visual charts with forecasting
                        </div>

                        <div>
                            ✔️ Financial performance and ratios
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center bg-white p-10'>
                    <div className='text-4xl font-bold text-primary-900'>
                        Type of Reporting Features
                    </div>

                    <div
                        className='grid md:grid-cols-3 border-2 rounded-2xl items-center justify-center w-5/6 my-5 shadow-md'>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                Dashboard
                            </div>
                            <div className='text-lg text-teal-600'>
                                Summary for Daily, Sales, Stock, General ledger.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                General Ledger
                            </div>
                            <div className='text-lg text-teal-600'>
                                Assets/Liabilities position, P/L, Expenses, etc.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                Financial Ratio
                            </div>
                            <div className='text-lg text-teal-600'>
                                Current ratio, Working capital to total assets, Receivables turnover, etc.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                Daily
                            </div>
                            <div className='text-lg text-teal-600'>
                                Daily sales, Daily agent sales ranking, Daily customer sales ranking, etc.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                Sales
                            </div>
                            <div className='text-lg text-teal-600'>
                                Sales trend, Agent sales, Sales conversion, etc.
                            </div>
                        </div>
                        <div className='flex flex-col p-10 gap-4'>
                            <div className='text-2xl font-bold text-primary-900'>
                                Stock
                            </div>
                            <div className='text-lg text-teal-600'>
                                Sales trend, Agent sales, Sales conversion, etc.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='nicolas_sm_awards bg-white'>
                    <div className="container">
                        <div className='flex items-center justify-center py-6 text-3xl text-primary-900 font-bold'>
                            SQL BI Dashboard
                        </div>

                        <div className='flex items-center justify-center text-xl text-teal-600'>
                            A Cloud Dashboard for SQL Account That Makes Your Life Easier.
                        </div>
                        <div className="extra_container">
                            <div className="awards_in">
                                <div className="image_box">
                                    <img src="/img/events/event_5.jpg" alt={2}/>
                                </div>
                                <div className="awards_box text-secondary-600">
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='text-lg text-primary-900 font-bold w-1/2 text-center'>
                                            <p>1. Ready Reports For You</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Whether you need SQL BI Dashboard to check your daily sales, gather for
                                            weekly discussions or convincing your investors, you can be sure your
                                            reports beautifully displayed in charts and figures, accessible anywhere on
                                            any device.
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='text-lg text-primary-900 font-bold w-1/2 text-center'>
                                            <p>2. Seamless Data Synchronize</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Your reports are always up to date as SQL BI Dashboard automatically
                                            synchronize with your SQL Account in a time period set by the user.
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='text-lg text-primary-900 font-bold w-1/2 text-center'>
                                            <p>3. 100% Data Encrypted</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Protecting your data is our priority, your data is safely processed in our
                                            servers with the latest encryption systems.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <DashboardVideo/>

                <DashboardPricing/>

                <SQLCloudAccountBanner/>
            </div>
        </NikolasLayout>
    );
};
export default page;
