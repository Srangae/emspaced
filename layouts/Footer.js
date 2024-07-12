import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="nicolas_sm_section" id="contact">
            <div className="nicolas_sm_footer">
                <div className="container">
                    <div className="extra_container">
                        <div className="footer_in">
                            <div className="left">
                                <Image src='/img/logo/company_logo_white.jpeg' alt='company_logo' width={400} height={400} />
                            </div>
                            <div className="right">
                                <div className='text-white'>
                                    <h1 className='text-2xl my-6'>Links</h1>
                                    <div>
                                        <Link href='/'>
                                            About Us
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href='/products/sqlaccount'>SQL Account</Link>
                                    </div>
                                    <div>
                                        <Link href='/products/sqlpayroll'>SQL Payroll</Link>
                                    </div>
                                    <div><Link href='/products/sqlpos'>SQL POS</Link></div>
                                    <div><Link href='/products/sqlcloud'>SQL Cloud (SaaS)</Link></div>
                                    <div>
                                        <Link href='/products/sqldashboard'>SQL Dashboard by GOBI</Link>
                                    </div>
                                    <div>
                                        <Link href='/event'>Event</Link>
                                    </div>
                                    <div>
                                        <Link href='/blog'>Blogs</Link>
                                    </div>
                                    <div>
                                        <Link href='/contact'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='text-white'>
                                    <h1 className='text-2xl my-6'>Contacts</h1>
                                    <div>
                                        <div className='font-bold text-primary-900'>Email:</div>
                                        <Link href='#'>info@golink.com.my</Link>
                                    </div>
                                    <h3 className='font-bold text-primary-900'>Selangor / Kuala Lumpur</h3>
                                    <div>
                                        <div className='font-bold text-primary-900'>Whatsapp:</div>
                                        <Link href='https://wa.link/3chr1y'>+60 3 789 00203</Link>
                                    </div>
                                    <h3 className='font-bold text-primary-900'>Sabah</h3>
                                    <div>
                                        <div className='font-bold text-primary-900'>Whatsapp:</div>
                                        <Link href='https://wa.link/3chr1y'>+60 3 789 00203</Link>
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
export default Footer;
