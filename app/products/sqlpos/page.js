import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import Image from "next/image";
import SQLCloudAccountBanner from "@/components/SQLCloudAccountBanner";
import Call_us_banner from "@/components/call_us_banner";
import PosPricing from "@/components/sqlpos/pos_pricing";


export async function generateMetadata() {
    return {
        title: 'SQL POS: Your Ultimate Point of Sale Solution - Emspaced',
        description: "Boost retail efficiency with SQL POS by Emspaced. Experience smooth sales processing and real-time inventory management to optimize your business operations.",
    };
}

export default function page() {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <h3 className='text-primary-900 font-bold'>SQL POS</h3>
                            <div className='flex items-center justify-center py-6 text-3xl text-secondary-800'>
                                Scan - Checkout - Inventory
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
                        <div className='text-center text-6xl py-6 text-white font-bold'>
                            SQL POS SYSTEM
                        </div>
                        <div className='text-left text-2xl'>
                            Seamless integration makes it easy to sell your products and accept multiple payments.
                            Inventory, orders and customer data are automatically updated. SQL Pos covers a wide range
                            of industries- Mini Markets, Book Stores, Hardware Stores, Pharmacies Medical Stores and
                            many more.
                        </div>

                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button
                                className='bg-emerald-900 text-white w-32 rounded-xl p-2 outline outline-white outline-2'>
                                <Link
                                    href='#pos_pricing'>
                                    PRICING
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='nicolas_sm_awards'>
                    <div className="container">
                        <div className='flex items-center justify-center py-6 text-3xl text-primary-900 font-bold'>
                            Retail POS System
                        </div>

                        <div className='flex items-center justify-center text-xl text-secondary-600'>
                            Track and maintain your entire business inventory effectively
                        </div>
                        <div className="extra_container">
                            <div className="awards_in">
                                <div className="image_box">
                                    <img src="/img/pos.jpg" alt={2}/>
                                </div>
                                <div className="awards_box text-secondary-600">
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>1. Unlimited Product & Sales</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Mobirise give you the freedom to develop as many websites as you like.
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>2. Unlimited Customer</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Choose from the large selection of latest pre-made blocks.
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>3. Inventories Control</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            One of Bootstrap's big point is responsiveness
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>4. No Yearly License Fee</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Mobirise make it easy for you to use Google fonts on your website easily and
                                            freely.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center pb-6'>
                        <button className='bg-emerald-900 text-white w-2/12 rounded-xl p-2'>
                            <Link
                                href='https://wa.me/message/BTIUQPHTL6AKE1'
                                target='_blank'>
                                Enquiry
                            </Link>
                        </button>
                    </div>

                    <div className="container">
                        <div className='flex items-center justify-center py-6 text-3xl text-primary-900 font-bold'>
                            Seamless Integration Of SQL Account
                        </div>
                        <div className="extra_container">
                            <div className="awards_in text-secondary-600">
                                <div className="image_box">
                                    <img src="/img/integration.jpg" alt={2}/>
                                </div>
                                <div className="awards_box">
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>1. Live Time Sync</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Prompt Inventory synchronization to help you manage your stock better
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>2. Centralized Stock</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Simplify operations with centralized inventory
                                        </div>
                                    </div>

                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>3. Multiple Item Type</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Support multiple warehouse, serial number, batch expiry date control,
                                            unlimited multiple pricing
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className='flex items-center justify-center py-6 text-3xl text-primary-900 font-bold'>
                            Improve Customer Convenience With Multiple Payment Methods
                        </div>
                        <div className="extra_container">
                            <div className="awards_in text-secondary-600">
                                <div className="image_box">
                                    <img src="/img/payment.jpg" alt={2}/>
                                </div>
                                <div className="awards_box">
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>4. Partial Payment</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Allow you to accept partial payment in store as well as multiple forms of
                                            payment
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>5. Hold Bills</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Allowed unlimited on-hold bills to help you increase your business
                                            efficiency
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className='flex items-center justify-center py-6 text-3xl text-primary-900 font-bold'>
                            Fast, Responsive, & Easy To Use
                        </div>
                        <div className="extra_container">
                            <div className="awards_in text-secondary-600">
                                <div className="image_box">
                                    <img src="/img/friendly.jpg" alt={2}/>
                                </div>
                                <div className="awards_box">
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>6. Optimize</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Maintain working speed even during the busiest hours
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>7. User Friendly</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Fully Touch Screen, keyboard friendly
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-center items-center border-b pb-2">
                                        <div className='font-bold text-lg text-white w-1/2 text-center'>
                                            <p className='text-primary-900'>8. Online/ Offline</p>
                                        </div>
                                        <div className='text-sm w-1/2 text-left'>
                                            Support both online and offline mode
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='pos_pricing'>
                    <PosPricing/>
                </div>
                <Call_us_banner/>

                <div className='flex flex-col items-center justify-center py-10 text-center'>
                    <div className='font-bold text-4xl text-primary-900 py-10'>
                        Learn more about SQL Malaysia payroll system
                    </div>

                    <div
                        className='grid md:grid-cols-3 gap-2 items-center justify-center px-6 text-left text-secondary-600'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_1.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 font-bold text-center'>
                                SQL Account Full Features
                            </div>
                            <div className='text-lg'>
                                Check out the amazing full features of SQL Payroll; see how the system can help your
                                daily operation flow.
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_2.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 font-bold text-center'>
                                Knowledge Base
                            </div>
                            <div className='text-lg'>
                                Sharing is caring; we care about our user, watch & learn new SQL Account / Malaysia
                                payroll system skills you can use today
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_3.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 font-bold text-center'>
                                Hands On Training
                            </div>
                            <div className='text-lg'>
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
