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
import Counter from "@/components/Counter";

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center">
                            <div className='font-bold text-6xl text-primary-900 text-center'>CTOS</div>
                            <div
                                className='flex items-center justify-center py-6 text-2xl text-secondary-600'>Malaysia's
                                No.1 credit management solution
                            </div>
                        </div>
                        <div className='flex items-center gap-10 justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/ContactUs/formperma/9FALmGi4adC9sZdFQQoXYcPZvih6HlF7OJsJNPiEdxI'
                                    target='_blank'>
                                    Subscribe
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white text-left'>
                        <div className='text-center text-6xl py-6 font-bold'>
                            CTOS Credit Manager
                        </div>
                        <div className=''>
                            Established in 1990, CTOS is Malaysia’s leading Credit Reporting Agency (CRA) under the
                            ambit of the Credit Reporting Agencies Act 2010. At CTOS, we facilitate credit extensions by
                            empowering individuals and businesses with access to crucial information at greater ease and
                            speed.
                        </div>

                        <div className=''>
                            According to World Bank’s Doing Business Report 2014, Malaysia is deemed the easiest country
                            to get credit in the world (out of 189 countries). We are proud to have contributed to that.
                            By providing information to credit grantors and creating transparency, we inspire greater
                            confidence in them to transact with parties they would otherwise know little or nothing
                            about. Hence, our mantra, “Knowledge creates confidence”. However, we do not evaluate or
                            make recommendations on credit applications. Lending involves many factors. Ultimately, an
                            applicant must meet a credit providers’ risk appetites, business policies and strategies.
                        </div>

                        <div className=''>
                            Credit is not a right. Needless to say, we must be prudent and responsible in our financial
                            dealings which will have an impact in our search for credit. Given this, individuals and
                            companies are urged to check their CTOS credit report regularly. This is to ensure accuracy
                            and updates for quick and efficient processing of their applications.
                        </div>

                        <div className=''>
                            CRAs are poised to further develop under the CRA Act 2010 to benefit the people, businesses
                            and ultimately, the nation.
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white flex flex-col items-center justify-center gap-5 py-6 '>
                <div className='text-emerald-900 text-6xl font-bold'>
                    CTOS Business
                </div>

                <div className='text-teal-600 text-2xl '>
                    Be credit safe with CTOS Credit Manager
                </div>

                <div className='grid grid-cols-2 gap-2 items-center justify-center px-10 text-secondary-600'>
                    <div className='flex items-center justify-center'>
                        <Image src='/img/home/credit_card.jpg' alt='credit_card' width={500} height={300}/>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <div className='text-emerald-900 font-bold text-4xl'>
                            What is CTOS SME Score?
                        </div>
                        <div className='text-left'>
                            The CTOS SME Score quickly and accurately assesses risk, making it possible for credit
                            grantors to expand their small business loan portfolio and control risk with confidence. It
                            can help make the loan process faster, fairer, more accurate and more consistent, helping
                            more small businesses access the capital they need easily.
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center p-10 text-secondary-600'>
                    <div className='flex flex-col items-center justify-center gap-4 w-3/4'>
                        <div className='text-emerald-900 text-3xl font-bold'>
                            Evaluate your new client/vendor before you start the trade
                        </div>
                        <div className='text-left'>
                            Not all customers/vendors are worth doing business with. Check the credit worthiness of new
                            customers/vendors before you engage in business with them, CTOS can help you evaluate your
                            client’s business risk involved & make informed decision.
                        </div>
                        <div>
                            <div className='text-2xl font-bold text-emerald-900'>
                                What you Will Get?
                            </div>

                            <div>
                                ✅ Get all customer insight in one convenient report for fast, easy analysis
                            </div>

                            <div>
                                ✅ Make better decisions, manage risk and improve cash flow
                            </div>

                            <div>
                                ✅ Search, store, monitor and manage all customer information via one dynamic platform

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nicolas_sm_counter" id="counter">
                <div className="container">
                    <div className="extra_container">
                        <div className="counter_in">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"/>
                                        <div className="box">
                                            <div className="title text-2xl font-bold">
                                                <span>Excellent</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={56}
                              data-speed={1500}
                          >
                            <Counter end={56}/>
                          </span>
                                                    %
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"></div>
                                        <div className="box">
                                            <div className="title text-2xl font-bold">
                                                <span>Good</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={93}
                              data-speed={1500}
                          >
                            <Counter end={93}/>
                          </span>
                                                    %
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"></div>
                                        <div className="box">
                                            <div className="title text-2xl font-bold">
                                                <span>Fair</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={38}
                              data-speed={1500}
                          >
                            <Counter end={38}/>
                          </span>
                                                    %
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="space"></div>
                                        <div className="box">
                                            <div className="title text-2xl font-bold">
                                                <span>Low</span>
                                                <h3>
                          <span
                              className="sm_counter"
                              data-from={0}
                              data-to={10}
                              data-speed={1500}
                          >
                            <Counter end={10}/>
                          </span>
                                                    %
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </NikolasLayout>
    );
};
export default page;
