import Link from "next/link";
import Image from "next/image";

const CloudPricing = () => {
    return (
        <div className="nicolas_sm_section py-6 bg-white">
            <div className='flex flex-col gap-5 items-center justify-center text-center'>
                <div className='text-6xl font-bold text-emerald-900'>
                    Pricing
                </div>

                <div className='text-3xl text-teal-600'>
                    All plans come with identical features.
                </div>
            </div>
            <div className="nicolas_sm_pricing">
                <div className="container">
                    <div className="extra_container text-center">
                        <div className='pricing_in'>
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <div className="info_box">
                                            <div className="info">
                                                <h3 className="plan text-emerald-900">S2O - Basic</h3>
                                                <h3 className="price text-teal-600 font-bold">
                                                    RM79
                                                </h3>
                                                <h3 className='plan text-teal-600'> per month</h3>
                                            </div>
                                            <div className="features">
                                                <ul>
                                                    <li className='flex items-center justify-center border-b pb-2 font-bold'>
                                                        24 MONTHS PLAN
                                                    </li>

                                                    <li className='flex items-center justify-center border-b pb-2'>
                                                        24/7/365 Access
                                                    </li>

                                                    <li className='text-center border-b pb-2'>
                                                        <p>1 User Access</p>
                                                    </li>
                                                    <li className='text-center border-b pb-2'>
                                                        <p>➕ Additional User
                                                            RM 50 per month
                                                        </p>
                                                    </li>
                                                    <li className='text-center border-b pb-2'>
                                                        <p>
                                                            The software license is yours to keep at the end of the 24th
                                                            month.
                                                        </p>
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
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <div className="info_box">
                                            <div className="info">
                                                <h3 className="plan text-emerald-900">S2O - Plus</h3>
                                                <h3 className="price text-teal-600 font-bold">
                                                    RM109
                                                </h3>
                                                <h3 className='plan text-teal-600'> per month</h3>
                                            </div>
                                            <div className="features">
                                                <ul>
                                                    <li className='flex items-center justify-center border-b pb-2 font-bold'>
                                                        24 MONTHS PLAN
                                                    </li>

                                                    <li className='flex items-center justify-center border-b pb-2'>
                                                        24/7/365 Access
                                                    </li>

                                                    <li className='text-center border-b pb-2'>
                                                        <p>1 User Access</p>
                                                    </li>
                                                    <li className='text-center border-b pb-2'>
                                                        <p>➕ Additional User
                                                            RM 50 per month
                                                        </p>
                                                    </li>
                                                    <li className='text-center border-b pb-2'>
                                                        <p>
                                                            The software license is yours to keep at the end of the 24th
                                                            month.
                                                        </p>
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
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CloudPricing;
