import Link from "next/link";
import Image from "next/image";

const DashboardPricing = () => {
    return (
        <div className="nicolas_sm_section py-6 bg-white">
            <div className='flex flex-col gap-5 items-center justify-center text-center'>
                <div className='text-6xl font-bold text-emerald-900'>
                    Be One Of Us Now!
                </div>
            </div>
            <div className="nicolas_sm_pricing">
                <div className="container">
                    <div className="extra_container text-center">
                        <div className='pricing_in grid items-center justify-center w-full'>
                            <div className='flex md:mx-auto md:w-1/3 border-2'>
                                <div className="list_inner text-secondary-600">
                                    <div className="info_box">
                                        <div className="info">
                                            <h3 className="plan text-emerald-900">Premium</h3>
                                            <div>RM</div>
                                            <h3 className="price text-teal-600 font-bold">
                                                800
                                            </h3>
                                            <h3 className='plan text-teal-600'>Yearly</h3>
                                        </div>
                                        <div className="features">
                                            <ul>
                                                <li className='flex items-center justify-center pb-2 '>
                                                    2 user Access
                                                </li>

                                                <li className='flex items-center justify-center border-b pb-2 '>
                                                    Support Windows/ Mac/ Linux/ iOS/ Android
                                                </li>

                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Dashboard Overview
                                                </li>

                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Daily
                                                </li>

                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Sales
                                                </li>

                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Stock
                                                </li>
                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Customer
                                                </li>
                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Supplier
                                                </li>
                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ General Ledger
                                                </li>
                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ Business Performance
                                                </li>
                                                <li className='flex items-center justify-center pb-2'>
                                                    ✔️ More ...
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <span className='text-teal-600'>Subscribe Now</span>
                                        <a className="nicolas_sm_full_link"
                                           href="https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE"
                                           target='_blank'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DashboardPricing;
