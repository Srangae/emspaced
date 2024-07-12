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

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <h3 className='text-primary-900 font-bold'>SQL Cloud (SaaS)</h3>
                            <div className='flex items-center justify-center py-6 text-3xl text-justify text-secondary-800'>
                                SQL Software as a Service provides you with the flexibility of running SQL business suite on cloud. This gives you an edge with regards to anywhere, anytime with low hardware requirement and maximum data security.
                            </div>
                        </div>
                        <div className='flex items-center gap-10 justify-center md:mt-10 mt-20'>
                            <button className='bg-emerald-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/ContactUs/formperma/9FALmGi4adC9sZdFQQoXYcPZvih6HlF7OJsJNPiEdxI'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                            <button className='bg-emerald-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://connect.sql.com.my/'
                                    target='_blank'>
                                    Try Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full items-center justify-center bg-white py-6 gap-5'>
                    <div className='text-center text-4xl text-primary-900 font-bold'>
                        Why SaaS?
                    </div>

                    <div className='text-center text-2xl text-secondary-600'>
                    It comes as no surprise that the SaaS market is expanding rapidly
                    </div>

                    <div className='grid md:grid-cols-4 gap-4 px-10 text-left'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Access From Everywhere
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                Access and manage your account from your computer, laptop, or tablet anytime you choose.
                                Create access privileges so that your colleague or accountant can
                                login and work online.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Maintenance Free
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                Patching, upgrading and hardware monitoring can take up days of IT staff's time every
                                month, but with cloud none of this is necessary. That's because it's all handled in the
                                cloud.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Better Security
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                All of the data are protected by multi-level security without affecting the performance.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Uptime Guarantee
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                Our self-healing meshed network is the most robust and resilient transborder terrestrial
                                system ever built withstand any system crisis. The result: unsurpassable, 99.9% network
                                availability.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Ease Access
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                Enjoy the easiest remote access from any place where you have an Internet connection and
                                a standard browser.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Stay Up-To-Date
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                All the updates are automated and deployed by a SaaS provider. No download or install,
                                it gets done for you automatically.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    Backup
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                Your data is precious, hence we provide auto backup every single day to secure your
                                data.
                            </div>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center justify-center gap-4'>
                                <div>
                                    <Image src='/img/cloud.png' width={50} height={50}/>
                                </div>
                                <div className='text-2xl font-bold text-emerald-800'>
                                    System Support
                                </div>
                            </div>
                            <div className='text-md text-secondary-600'>
                                System support and maintenance are included, so you dont need to pay extra for it.
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='flex flex-col gap-4 p-6 bg-gradient-to-r from-emerald-500 to-emerald-900 justify-center items-center'>
                    <div className='text-4xl text-white font-bold'>
                        SQL CLOUD ACCOUNT
                    </div>

                    <div className='text-white text-2xl'>
                        Subscribe to own your accounting software just like a phone plan
                    </div>

                    <div className='flex md:flex-row flex-col w-full gap-5 py-6 items-start justify-center'>
                        <Link
                            href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                            target='_blank'
                            className='flex items-center justify-center bg-emerald-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                            <button>
                                Enquiry
                            </button>
                        </Link>

                        <Link
                            href='https://connect.sql.com.my/'
                            target='_blank'
                            className='flex items-center justify-center bg-white text-primary-900 w-full md:w-1/5 rounded-3xl p-5'>
                            <button>
                                Try Now
                            </button>
                        </Link>
                    </div>
                </div>

                <CloudPricing/>

                <div className='flex flex-col items-center justify-center w-full p-10 gap-10'>
                    <div className='md:text-6xl text-4xl text-primary-900 text-center font-bold'>
                        Compare S2O Plans
                    </div>

                    <table className='table-auto border w-full'>
                        <thead>
                        <tr className='text-primary-900 text-xl h-16 text-left'>
                            <th className='px-4'>
                                FEATURES
                            </th>
                            <th>
                                Basic
                            </th>
                            <th>
                                Plus
                            </th>
                        </tr>
                        </thead>
                        <tbody className='text-secondary-600 text-md border-2'>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                📚 General Ledger
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                💰 SST Malaysia
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                🔍 SQL CTOS Overview
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                💎 Customer
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                💼 Supplier
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                📤 Sales
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                📥 Purchase
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                📦 Basic Stock
                            </td>
                            <td>
                                ✅
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                <p>📦 Advance Stock</p>
                                <p>- Stock Adjustment, Transfer, Issue, and Received</p>
                                <p>- Stock Card, Balance, Reorder Advise, Aging, and more</p>

                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4 w-10/12'>
                                <p>📊 Advance Reports</p>
                                <p>- Profit & Loss by Document, Data Analysis, Back Order, Order Fullfillment,
                                    Outstanding Order, Advance Sales/Purchase Price History, and more</p>
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>
                        <tr className='h-12 border'>
                            <td className='px-4'>
                                <p>🎯 Pro-Package</p>
                                <p>
                                    - Foreign Currency (Billing), Multiple Pricing, Partial Delivery/Transfer, Advance
                                    Credit Control, Multi Document No., and more,
                                </p>
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                ✅
                            </td>
                        </tr>

                        </tbody>
                    </table>

                    <div className='flex flex-col items-center justify-center text-primary-900 text-2xl w-1/2'>
                        <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                        <p>
                            * Term and conditions applied
                        </p>
                        <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                    </div>

                    <div className='flex items-center gap-10 justify-center md:mt-10 mt-20'>
                        <button className='bg-emerald-900 text-white w-32 rounded-xl p-2'>
                            <Link
                                href='https://forms.zohopublic.com/golink/form/ContactUs/formperma/9FALmGi4adC9sZdFQQoXYcPZvih6HlF7OJsJNPiEdxI'
                                target='_blank'>
                                Enquiry
                            </Link>
                        </button>
                        <button className='bg-emerald-900 text-white w-32 rounded-xl p-2'>
                            <Link
                                href='https://connect.sql.com.my/'
                                target='_blank'>
                                Try Now
                            </Link>
                        </button>
                    </div>
                </div>

                <SQLCloudAccountBanner/>
            </div>
        </NikolasLayout>
    );
};
export default page;