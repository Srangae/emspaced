import Link from "next/link";
import Marquee from "react-fast-marquee";

const Portfolio = ({noTitle = false}) => {
    return (
        <div className="nicolas_sm_section" id="portfolio">
            <div className="nicolas_sm_portfolio">
                <div className="nicolas_sm_extra_title">
                    {!noTitle && (
                        <div className="container">
                            <div className="projects">
                                <span>04 // let me show you</span>
                                <Link href="portfolio">(( project all ))</Link>
                            </div>
                        </div>
                    )}
                    <Marquee className="title marquee">
                        <div className="wrap">
                            <div>
                                <h3>Past Events</h3>
                            </div>
                            <div>
                                <h3 className="stroke_text_bolder">Past Events</h3>
                            </div>
                            <div>
                                <h3>Past Events</h3>
                            </div>
                            <div>
                                <h3 className="stroke_text_bolder">Past Events</h3>
                            </div>
                            <div>
                                <h3>Past Events</h3>
                            </div>
                            <div>
                                <h3 className="stroke_text_bolder">Past Events</h3>
                            </div>
                            <div>
                                <h3>Past Events</h3>
                            </div>
                            <div>
                                <h3 className="stroke_text_bolder">Past Events</h3>
                            </div>
                        </div>
                    </Marquee>
                </div>

                <div className="container">
                    <div className="portfolio_in">
                        <ul>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_1.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    Nationwide Budget 2020 Tax & Business Conference
                                                </Link>
                                            </h3>
                                            <p className='text-justify'>
                                                Budget 2020 have a strong focus on supporting Malaysian SME.
                                                Government initiated different software grants and funding
                                                opportunities with easy approval process. Seize the opportunities to
                                                learn how to get the grant. Various tax incentives & amendments will
                                                also be share in-depth. This event is FREE and sponsored by SQL
                                                Account.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_2.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    突破业绩瓶颈, 创造团队精英
                                                </Link>
                                            </h3>
                                            <p className='text-justify'>
                                                How can teamwork contribute to the success of a business? What is Fair
                                                Reward System? This preview educates Small Medium Enterprises (SME) in
                                                transferring from a traditional business management to a modern and
                                                systematic business model.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_3.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    Sales & Service Tax 2018
                                                </Link>
                                            </h3>
                                            <p className='text-justify'>
                                                Transition to SST & Implication of GST Repeal in 120 days.
                                            </p>
                                            <p className='text-justify py-6'>
                                                Businesses, what you should do?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_4.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    Malaysia's Foremost Tax Expert
                                                </Link>
                                            </h3>
                                            <p className='text-justify'>
                                                Income tax audit convergence with GST audit & GST to SST transition by Dr. Chong Kwai Fatt.
                                            </p>
                                            <p className='text-justify py-6'>
                                                Full day seminar with ACCA Attendance Cert, HRDF claimable & lunch provided.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_5.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    Are you ready for GST 6% to 0% and GST 0% to SST2.0?
                                                </Link>
                                            </h3>
                                            <p className="text-justify">
                                                4 hours of quality time to learn "GST 6% &gt; GST 0% &gt; SST2.0" with
                                                Mr. Song Liew and Tax Expert
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className="image">
                                        <img src="/img/events/past_event_6.jpg" alt={1}/>
                                    </div>
                                    <div className="title_holder">
                                        <div className="left">
                                            <h3>
                                                <Link href="" className='pointer-events-none'
                                                      aria-disabled='pointer-events-none'>
                                                    Latest GST updates and employer tax with Dr. Choong Kwai Fatt
                                                </Link>
                                            </h3>
                                            <p className='text-justify'>
                                                This events are organized and sponsored by SQL Account
                                                <span> <Link href='https://www.sql.com.my/'>(E Stream Software Sdn Bhd)</Link></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Portfolio;
