'use client'
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import {IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandMeta} from "@tabler/icons-react";
import {useMetadata} from "@/context/MetadataContext";
import {useEffect} from "react";

const page = () => {
    const {setMetadata} = useMetadata()

    useEffect(() => {
        setMetadata({
            title: 'Contact Us for Professional Accounting Support - Emspaced ',
            description: "Have questions? Reach out to Emspaced Accounting! Our dedicated team is ready to assist you with any inquiries about our services and upcoming events. ",
        })
    }, [setMetadata])

    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="page_title_in">
                            <h3>Let's Connect, Get In Touch With Us</h3>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-500 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://wa.me/message/BTIUQPHTL6AKE1'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="nicolas_sm_footer mb-10">
                    <div className="container">
                        <div className="extra_container flex items-center justify-center w-full">
                            <div className="footer_in">
                                <div className="arrow_button anchor">
                                    <a href="#question">
                                        <img
                                            className="sm_svg"
                                            src="/img/svg/down_arrow.svg"
                                            alt={1}
                                        />
                                    </a>
                                </div>
                                <div className='md:flex md:gap-20'>
                                    <div className="border-2 bg-white rounded-lg p-10">
                                        <div className="title">
                                            <h3 className='text-green-900 font-bold text-2xl'>Selangor / Kuala
                                                Lumpur</h3>
                                        </div>
                                        <div className="contact">
                                            <ul>
                                                <li>
                                                    <span>Address</span>
                                                    <div className='font-bold text-2xl'>KL Sentral</div>
                                                    <div>Level 23A, Menara Allianz Sentral,</div>
                                                    <div>203, Jalan Tun Sambanthan</div>
                                                    <div>Brickfield, 50470 Kuala Lumpur</div>

                                                    <div className='py-5'>
                                                        <div className='font-bold text-2xl'>Mercu 3, KL Eco City</div>
                                                        <div className='text-secondary-600'>
                                                            <div>Unit 05-01 & 05-02,Level 5</div>
                                                            <div>Mercu 3, Jalan Bangsar</div>
                                                            <div>KL Eco City, 59200 Kuala Lumpur</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Phone</span>
                                                    <a href="tel:+60378900203">+60 3 789 00203</a>
                                                </li>
                                                <li>
                                                    <span>Email</span>
                                                    <a href="mailto:sales.sql@emspaced.com">sales.sql@emspaced.com</a>
                                                </li>
                                                <li>
                                                    <span>Working Hours</span>
                                                    <p>0900 - 1800 (Monday to Friday)</p>
                                                    <p>exclude region and state holiday</p>
                                                </li>

                                                <li>
                                                    <span>Social Links</span>
                                                    <div className='flex gap-2'>
                                                        <p><Link
                                                            href='https://www.instagram.com/emspacedmy/'><IconBrandMeta/></Link>
                                                        </p>
                                                        <p><Link
                                                            href='https://twitter.com/EmspacedMY'><IconBrandX/></Link>
                                                        </p>
                                                        <p><Link
                                                            href='https://www.linkedin.com/company/emspacedmy/'><IconBrandLinkedin/></Link>
                                                        </p>
                                                        <p><Link
                                                            href='>https://www.instagram.com/emspacedmy/'><IconBrandInstagram/></Link>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NikolasLayout>
    );
};
export default page;
