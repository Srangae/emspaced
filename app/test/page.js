import NikolasLayout from "@/layouts/NikolasLayout";

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="nicolas_sm_breadcrumbs">
              <span>
                <a href="#">Home</a>
              </span>
                            <span>Contact Us</span>
                        </div>
                        <div className="page_title_in">
                            <h3>Let's Connect, Get In Touch With Us</h3>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-blue-500 text-white w-32 rounded-xl p-2'>Enquiry</button>
                        </div>
                    </div>
                </div>
                <div className="nicolas_sm_footer">
                    <div className="container">
                        <div className="extra_container">
                            <div className="footer_in">
                                <div className="arrow_button anchor">
                                    <a href="#question">
                                        <img
                                            className="sm_svg"
                                            src="img/svg/down_arrow.svg"
                                            alt={1}
                                        />
                                    </a>
                                </div>
                                <div className='md:flex md:gap-20'>
                                    <div className="left">
                                        <div className="title">
                                            <h3 className='text-green-700 font-bold text-2xl'>Selangor / Kuala
                                                Lumpur</h3>
                                        </div>
                                        <div className="contact">
                                            <ul>
                                                <li>
                                                    <span>Address</span>
                                                    <p>Block A, Level 2, Unit A-2F-12, Sunway Nexis</p>
                                                    <p>No. 1, Jalan PJU 5/1, Kota Damansara</p>
                                                    <p>47810 Petaling Jaya, Selangor</p>
                                                </li>
                                                <li>
                                                    <span>Phone</span>
                                                    <a href="#">(+60) 3 6432 9961</a>
                                                    <a href="#">(+60) 10 920 5819</a>
                                                </li>
                                                <li>
                                                    <span>Email</span>
                                                    <a href="#">info@golink.com.my</a>
                                                </li>
                                                <li>
                                                    <span>Working Hours</span>
                                                    <p>0900 - 1800 (Monday to Friday)</p>
                                                    <p>exclude region and state holiday</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="left">
                                        {/*<ContactForm/>*/}
                                        <div className="title">
                                            <h3 className='text-green-700 font-bold text-2xl'>Sabah</h3>
                                        </div>
                                        <div className="contact">
                                            <ul>
                                                <li>
                                                    <span>Covered Area</span>
                                                    <p>- Kota Kinabalu (KK)</p>
                                                    <p>- Sandakan</p>
                                                    <p>- Tawau</p>
                                                </li>
                                                <li>
                                                    <span>Phone</span>
                                                    <a href="#">(+60) 8 827 9056</a>
                                                    <a href="#">(+60) 11 3456 0033</a>
                                                </li>
                                                <li>
                                                    <span>Email</span>
                                                    <a href="#">info@golink.com.my</a>
                                                </li>
                                                <li>
                                                    <span>Working Hours</span>
                                                    <p>0800 - 1800 (Monday to Friday)</p>
                                                    <p>0800 - 1200 (Saturday)</p>
                                                    <p>exclude region and state holiday</p>
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
