import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import SQLAccountPricing from "@/components/SqlAccountPricing";
import Image from "next/image";
import SQLCloudAccountBanner from "@/components/SQLCloudAccountBanner";
import Call_us_banner from "@/components/call_us_banner";

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center">
                            <div className='font-bold text-6xl text-primary-900 text-center'>SQL ACCOUNT</div>
                            <div className='flex items-center justify-center py-6 text-2xl text-secondary-600'>Beyond an
                                accounting
                                software
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center bg-gradient-to-r from-emerald-400 to-cyan-400 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-secondary-600'>
                        <div className='text-center text-6xl py-6 font-bold text-primary-900'>
                            SQL Accounting Software
                        </div>
                        <div className='text-left'>
                            SQL Account is GST/SST certified accounting software made for our business. It allows you to
                            organize your finances & stock inventory intelligently all in one place. The beautiful thing
                            is
                            that as the best accounting software Malaysia, it is able to be customized to your business
                            requirements & operations.
                        </div>

                        <div className='text-left'>
                            SQL cloud accounting enhances workplace performance, reduce human error and maximize profit
                            through our stable, dependable, and developed software functionalities. Our system's wide
                            range
                            of functions includes data collection and analysis, accurate reporting formats, inventory
                            maintenance and SST processing. When you choose SQL accounting software, you will also
                            receive
                            an abundance of online resources to support your journey in using this system. Regardless if
                            it’s an on-premise or cloud accounting software, SQL Account offers the best accounting
                            software
                            Malaysia. If that's not enough, we conduct unlimited hands-on free accounting software SQL
                            training in our HQ.
                        </div>

                        <div className='flex md:flex-row flex-col w-full gap-5 py-6'>
                            <Link href='/sql-account-features'
                                  className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    FULL FEATURES
                                </button>
                            </Link>

                            <Link href='/sql-account-features#special_industry'
                                  className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    SPECIAL INDUSTRIES
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center p-10 text-center gap-10'>
                    <div className='text-4xl text-primary-900 font-bold'>
                        SQL Account Features
                    </div>

                    <div className='text-secondary-600 text-xl'>
                        SQL Account is suitable for small businesses to large organizations in both on-premise and
                        online accounting software. Choose what's best for the workflow of your accountant and
                        bookkeeper.
                    </div>

                    <div className='nicolas_sm_service_details'>
                        <div className="grid md:grid-cols-3 gap-5 items-start justify-center px-6">
                            <div className="list_inner p-10">
                                <span>01</span>
                                <h3 className='text-primary-900 font-bold'>General Ledger</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "Easy & accurate accounting"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        SQL financial accounting is one of the top of-the-line financial
                                        management tools that possesses in-depth turnkey features to handle core
                                        financial operations. Accounting being the heart of financial
                                        management, SQL cloud accounting enables you to perform the general
                                        accounting activities with great ease and reduced errors ensuring higher
                                        productivity and faster operations.
                                    </div>
                                </div>
                            </div>
                            <div className="list_inner p-10">
                                <span>02</span>
                                <h3 className='text-primary-900 font-bold'>Customer & Supplier</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "Strengthen your financial position with our excellent credit & debit
                                        management system"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Strengthen your financial position with our excellent credit & debit
                                        management system Receivable & Payable solutions contribute to building
                                        and maintaining a sustainable brand image for companies amongst their
                                        peers by putting in place a reliable collection and payment strategy.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>03</span>
                                <h3 className='text-primary-900 font-bold'>Sales Management</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "A SMART solution to drive sales & customer satisfaction"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        Effective sales management is essentially a key to success as it is
                                        sales that keep a business going. SQL Sales Management solution is a
                                        comprehensive tool which in addition to automating the sales cycle,
                                        draws significant insights about the market, products, and key accounts
                                        enabling businesses to carefully craft growth strategies.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>04</span>
                                <h3 className='text-primary-900 font-bold'>Purchase / Procurement</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "The simplest & most efficient procurement roadmap for your business"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        SQL Purchase solution is a simple and effective mechanism that helps
                                        purchase & finance managers to keep sight of their business spend and
                                        increase procurement efficiency by consolidating and automating all
                                        stages of the procure-to-pay process. By executing accounting software
                                        SQL Purchase solution, organizations will be able to effectively manage
                                        multiple vendors, exceed customer expectations by timely fulfilling
                                        orders and empower employees by implementing a well-defined process
                                        flow.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>05</span>
                                <h3 className='text-primary-900 font-bold'>Stock / Inventory</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "Increase your REVENUE not INVENTORY"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        It is not just sales that drive profits, but also controlled expenses.
                                        SQL Inventory Management solution is an unfailing mechanism to eliminate
                                        all unnecessary costs involved in managing inventory while at the same
                                        time increasing profits. No more stock-outs or stockpiles, ensure
                                        uninterrupted production & trading by maintaining optimal levels of
                                        inventory with SQL Inventory Management solution.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner p-10">
                                <span>06</span>
                                <h3 className='text-primary-900 font-bold'>Sales and Service Tax / GST</h3>
                                <div className="flex flex-col gap-10 py-5">
                                    <div className='text-center text-primary-900 font-bold text-xl italic'>
                                        "No matter how the rules change we always follow the rule to make
                                        everything simple and easy"
                                    </div>
                                    <div className='text-left text-secondary-800'>
                                        SQL SST/GST (Singapore) solution will automatically set sales and
                                        service taxed or GST (Singapore) in your invoice so that you never have
                                        to worry about forgetting to include tax in your invoice. Completed SST
                                        report compliant to government rules. All sales, purchase, exported
                                        sales, exemption for sales and purchase will be populated by the cloud
                                        accounting software system.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col items-center justify-center w-full gap-5 py-6'>
                            <Link href='/sql-account-features'
                                  className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    FULL FEATURES
                                </button>
                            </Link>

                            <Link href='/sql-account-features#special_industry'
                                  className='flex items-center justify-center bg-secondary-600 text-white w-full md:w-1/5 rounded-3xl p-5'>
                                <button>
                                    SPECIAL INDUSTRIES
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div
                        className='flex items-center justify-center bg-banner-50 w-full text-white'>
                        <div className='w-5/6 flex flex-col gap-5 py-6 '>
                            <div className='text-center text-5xl py-6 font-bold'>
                                SQL Account - Recommended Server Specification
                            </div>

                            <div className='flex flex-col gap-10 '>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl'>
                                        Processor
                                    </div>
                                    <div className='text-lg'>
                                        Intel Core i7 3.2 Ghz Processor – 8th Generation
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl'>
                                        Motherboard
                                    </div>
                                    <div className='text-lg'>
                                        Asus Prime B360 - Plus Mainboard or above
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl'>
                                        Memory
                                    </div>
                                    <div className='text-lg'>
                                        16 GB DD RAM 4 - PC 2133 – 1st grade - Kingston
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl'>
                                        O.S. Disk
                                    </div>
                                    <div className='text-lg'>
                                        250 GB Samsung NVMe Memory Storage Drive - 3200Mbps
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-2xl'>
                                        Operating System
                                    </div>
                                    <div className='text-lg'>
                                        Windows 10 Pro or above (64 bit)
                                    </div>
                                    <div className='text-lg'>
                                        Windows Server 2012/2016 (Highly NOT recommended)
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div id='sql_pricing'>
                    <SQLAccountPricing/>
                </div>
                <Call_us_banner/>

                <div className='flex flex-col items-center justify-center py-10 gap-5 text-center'>
                    <div className='font-bold text-4xl text-primary-900'>
                        Learn more about SQL Account
                    </div>
                    <div className='text-2xl text-secondary-800'>
                        Accounting software for small business
                    </div>

                    <div className='grid md:grid-cols-3 items-center justify-center px-6 text-secondary-600 text-left'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_1.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center font-bold'>
                                SQL Account Full Features
                            </div>
                            <div className='text-lg'>
                                Check out the amazing full features of SQL Account; see how the cloud accounting
                                software can help your daily operation flow.
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_2.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center font-bold'>
                                Knowledge Base
                            </div>
                            <div className='text-lg'>
                                Sharing is caring, we care about our user, watch & learn new SQL Account / Payroll
                                skills you can use today
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center gap-2'>
                            <Image src='/img/events/event_3.jpg' alt={1} width={400} height={300}/>
                            <div className='text-2xl text-primary-900 text-center font-bold'>
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
                                href='https://docs.google.com/forms/d/e/1FAIpQLSetF6DKhQpZZL2srdDtqkgiMnohGaBwIhWX1Fy-EoMlAqgG9Q/viewform'
                                target='_blank'>LEARN MORE</Link></button>
                            <button className='bg-secondary-600 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                                href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
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
