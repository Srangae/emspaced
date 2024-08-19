import Link from "next/link";
import Image from "next/image";

const PosPricing = () => {
    return (
        <div className="nicolas_sm_section py-6">
            <div className='flex flex-col gap-5 items-center justify-center text-center'>
                <div className='text-6xl font-bold text-primary-900'>
                    Pricing
                </div>
            </div>
            <div className="nicolas_sm_pricing">
                <div className="container">
                    <div className="extra_container text-center text-secondary-600">
                        <div className='pricing_in grid md:grid-cols-2 items-start justify-center gap-4'>
                            <div className="list_inner">
                                <div className="info_box">
                                    <div className="info text-center">
                                        <h3 className="plan text-secondary-800">POS Basic</h3>
                                        <div>RM</div>
                                        <h3 className="price font-bold text-primary-900">
                                            1,500
                                        </h3>
                                    </div>
                                    <div className="features">
                                        <ul>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Link with SQL Account
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Unlimited Products
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Unlimited Transactions
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Tax Ready
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Direct Email Daily
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-center border-b pb-2'>
                                                Report
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                <p>1 Company</p>
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                <p>1 Concurrent User</p>
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                👷 1 Session Training (within Klang Valley)
                                            </li>

                                            <li className='text-center'>
                                                💪 1st Year Support & Maintenance (Off-site)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="button">
                                    <span>Enquiry Now</span>
                                    <a className="nicolas_sm_full_link"
                                       href="https://wa.me/message/BTIUQPHTL6AKE1"
                                       target='_blank'/>
                                </div>
                            </div>

                            <div className="list_inner">
                                <div className="info_box">
                                    <div className="info text-center">
                                        <h3 className="plan text-secondary-800">POS Advance</h3>
                                        <div>RM</div>
                                        <h3 className="price font-bold text-primary-900">
                                            2,100
                                        </h3>
                                    </div>
                                    <div className="features">
                                        <ul>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Link with SQL Account
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Unlimited Products
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Unlimited Transactions
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Tax Ready
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Direct Email Daily
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Report
                                                </div>
                                            </li>
                                            <li>
                                                <div className='flex items-center justify-center'>
                                                    Serial Number Control
                                                </div>
                                            </li>
                                            <li className='flex items-center justify-center border-b pb-2'>
                                                Currency Module
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                <p>1 Company</p>
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                <p>1 Concurrent User</p>
                                            </li>

                                            <li className='text-center border-b pb-2'>
                                                👷 1 Session Training (within Klang Valley)
                                            </li>

                                            <li className='text-center'>
                                                💪 1st Year Support & Maintenance (Off-site)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="button">
                                    <span>Enquiry Now</span>
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
export default PosPricing;
