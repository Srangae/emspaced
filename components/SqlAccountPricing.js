import Link from "next/link";
import Image from "next/image";

const SQLAccountPricing = () => {
    return (
        <div className="nicolas_sm_section">
            <div className='flex flex-col gap-5 items-center justify-center text-center'>
                <div className='text-6xl font-bold text-primary-900'>
                    Pricing
                </div>
                <div className='text-3xl text-secondary-800'>
                    All plans come with identical features.
                </div>
                <div className='text-3xl text-secondary-800'>
                    Choose a plan that matches your business size
                </div>

            </div>
            <div className="nicolas_sm_pricing">
                <div className="container">
                    <div className="extra_container">
                        <div className="pricing_in">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <div className="info_box">
                                            <div className="info">
                                                <h3 className="plan text-secondary-800">Lite</h3>
                                                <h3 className="price text-primary-900 font-bold">
                                                    RM1,599
                                                </h3>
                                                <p className='text-secondary-600'>For experienced with the software user</p>
                                            </div>
                                            <div className="features text-secondary-600">
                                                <ul>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/books.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                General Ledger
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/diamond.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Customer
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/briefcase.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Supplier
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-up.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Sales
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-down.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Purchase
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/box.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Basic Stock
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <strong className='text-slate-600'>FREE </strong>SST
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Company</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Concurrent User</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <strong className='text-slate-600'>NO </strong>Training Provided
                                                    </li>

                                                    <li>
                                                        <strong className='text-slate-600'>NO </strong>Support &
                                                        Maintenance
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <span>Enquiry Now</span>
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
                                                <h3 className="plan text-secondary-800">Basic</h3>
                                                <h3 className="price text-primary-900 font-bold">
                                                    RM1,999
                                                </h3>
                                                <p className='text-secondary-600'>For starting a new business without stock</p>
                                            </div>
                                            <div className="features text-secondary-600">
                                                <ul>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/books.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                General Ledger
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/diamond.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Customer
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/briefcase.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Supplier
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-up.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Sales
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-down.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Purchase
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/box.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Basic Stock
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <strong className='text-slate-600'>FREE </strong>SST
                                                    </li>
                                                    <li className='border-b pb-2'>
                                                        <strong className='text-slate-600'>FREE </strong>SQL CTOS
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Company</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Concurrent User</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <div>
                                                            👷 1 Session Training (within Klang Valley)
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div>
                                                            💪 1st Year Support & Maintenance (Off-site)
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <span>Enquiry Now</span>
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
                                                <h3 className="plan text-secondary-800">Professional</h3>
                                                <h3 className="price font-bold text-primary-900">
                                                    RM3,099
                                                </h3>
                                                <p className='text-secondary-600'>For a new business with stock control & advance features</p>
                                            </div>
                                            <div className="features text-secondary-600">
                                                <ul>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/books.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                General Ledger
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/diamond.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Customer
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/briefcase.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Supplier
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-up.png' width={25} height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Sales
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/mail-down.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                Purchase
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='flex items-center justify-center gap-1'>
                                                            <Image src='/img/Pricing/box.png' width={25}
                                                                   height={25}
                                                                   alt={1}/>
                                                            <div>
                                                                <strong
                                                                    className='text-slate-600'>Advance</strong> Stock
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            📊 Advance Reports
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div>
                                                            🎯 Pro-Package
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <strong className='text-slate-600'>FREE </strong>SST
                                                    </li>
                                                    <li className='border-b pb-2'>
                                                        <strong className='text-slate-600'>FREE </strong>SQL CTOS
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Company</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <p>1 Concurrent User</p>
                                                    </li>

                                                    <li className='border-b pb-2'>
                                                        <div>
                                                            👷 1 Session Training (within Klang Valley)
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div>
                                                            💪 1st Year Support & Maintenance (Off-site)
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <span>Enquiry Now</span>
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
                                                <h3 className="plan text-secondary-800">Concurrent User</h3>
                                                <h3 className="price font-bold text-primary-900">
                                                    RM700<span>/ user</span>
                                                </h3>
                                                <p className='text-secondary-600'>User that login to system at the same time</p>
                                            </div>
                                            <div className="features text-secondary-600">
                                                <ul>
                                                    <li className='pb-2 border-b'>
                                                        ➕ Additional 1 Concurrent User License
                                                    </li>
                                                    <li>
                                                        Full Access Rights / User Self Define Rights
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="button">
                                            <span>Enquiry Now</span>
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
export default SQLAccountPricing;
