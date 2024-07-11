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
                                <div>
                                    <h1 className='text-2xl my-6'>Links</h1>
                                    <div>
                                        About Us
                                    </div>
                                    <div>SQL Account</div>
                                    <div>SQL Payroll</div>
                                    <div>SQL POS</div>
                                    <div>SQL Cloud (SaaS)</div>
                                    <div>SQL Dashboard by GOBI</div>
                                    <div>Event</div>
                                    <div>Blogs</div>
                                    <div>Contact Us</div>
                                </div>
                            </div>
                            <div className='right'>
                                <div>
                                    <h1 className='text-2xl my-6'>Contacts</h1>
                                    <div>Email: <Link href='#'>info@golink.com.my</Link></div>
                                    <h3>Selangor / Kuala Lumpur</h3>
                                    <div>
                                        Whatsapp: <Link href='https://wa.link/3chr1y'>+60 3 789 00203</Link>
                                    </div>
                                    <h3>Sabah</h3>
                                    <div>
                                        Whatsapp: <Link href='https://wa.link/3chr1y'>+60 3 789 00203</Link>
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
