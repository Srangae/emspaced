import Link from "next/link";
import Image from "next/image";

const CloudPricing = () => {
    return (
        <div className="nicolas_sm_section py-10 bg-white">
            <div className='flex flex-col gap-5 items-center justify-center text-center'>
                <div className='text-6xl font-bold text-primary-900'>
                    Pricing
                </div>

                <div className='text-3xl text-secondary-600'>
                    All plans come with identical features.
                </div>
            </div>
            <div className="nicolas_sm_pricing">
                <div className="container">
                    <div className="extra_container text-center">
                        <div className='pricing_in grid md:grid-cols-2 gap-4 items-center justify-center'>
                            <div className="list_inner text-secondary-600">
                                <div className="info_box">
                                    <div className="info">
                                        <h3 className="plan text-primary-900">S2O - Basic</h3>
                                        <div>RM</div>
                                        <h3 className="price text-secondary-600 font-bold">
                                            79
                                        </h3>
                                        <h3 className='plan text-secondary-600'> per month</h3>
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
                                    <span className='text-secondary-600'>Subscribe Now</span>
                                    <a className="nicolas_sm_full_link"
                                       href="https://wa.me/message/BTIUQPHTL6AKE1"
                                       target='_blank'/>
                                </div>
                            </div>

                            <div className="list_inner">
                                <div className="info_box text-secondary-600">
                                    <div className="info">
                                        <h3 className="plan text-primary-900">S2O - Plus</h3>
                                        <div>RM</div>
                                        <h3 className="price text-secondary-600 font-bold">
                                            109
                                        </h3>
                                        <h3 className='plan text-secondary-600'> per month</h3>
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
                                    <span className='text-secondary-600'>Subscribe Now</span>
                                    <a className="nicolas_sm_full_link"
                                       href="https://wa.me/message/BTIUQPHTL6AKE1"
                                       target='_blank'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CloudPricing;
