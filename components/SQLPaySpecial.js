import Image from "next/image";
import Link from "next/link";

const SQLPaySpecial = () => {
    return (
        <div className="nicolas_sm_section" id="home">
            <div className="nicolas_sm_hero">
                <div className="container">
                    <div className="overlay_el">
                        <div className="overlay_bg"/>
                        <div className="overlay_content">
                            <div className="hero_info_area">
                                <div className="left">
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/shield-check.png' alt={1} width={50} height={50}/>
                                            <h3 className='font-bold text-primary-900'>Certified by Statutory Bodies</h3>
                                            <p className='text-white text-left'>
                                                Compliant with local employment requirements KWSP Form A, SOCSO Form 8A,
                                                SOCSO EIS, Income Tax CP39, Form E and HRDF ready.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/search.png' alt={1} width={50} height={50}/>
                                            <h3 className='font-bold text-primary-900'>Unlimited Year Records</h3>
                                            <p className='text-white text-left'>
                                                There is no limit to store all your employee records, no need for
                                                year-end processes, so you can view/ export all the data anytime.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className='flex items-center justify-center md:my-64'>
                                        <Image src="/img/home/sqlpay_special.png" alt={1} width={300} height={300}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/circles-relation.png' alt={1} width={50} height={50}/>
                                            <h3 className='font-bold text-primary-900'>E-Submission & E-Payment</h3>
                                            <p className='text-white text-left'>
                                                SQL Payroll build-in up-to-date e-payment format for all banks in
                                                Malaysia and monthly contribution e-submission file format to save your
                                                time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/mail.png' alt={1} width={50} height={50}/>
                                            <h3 className='font-bold text-primary-900'>Batch Email Payslip</h3>
                                            <p className='text-white text-left'>
                                                Securely send the payslips to every single employee's registered email
                                                with password encrytion just like your bank statement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center py-10 md:gap-10'>
                        <div className='flex md:flex-row flex-col w-full items-center justify-center gap-10 py-6'>
                            <button className='bg-primary-900 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                                href='https://wa.me/message/BTIUQPHTL6AKE1'
                                target='_blank'>LEARN MORE</Link></button>
                            <button className='bg-secondary-600 rounded-2xl text-white p-3 w-1/2 md:w-1/5'><Link
                                href='https://wa.me/message/BTIUQPHTL6AKE1'
                                target='_blank'>ENQUIRY</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SQLPaySpecial;
