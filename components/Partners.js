import Link from "next/link";
import Marquee from "react-fast-marquee";

const Partners = ({title = "Customers", sectionNumber = "06"}) => {
    return (
        <div className="nicolas_sm_section">
            <div className="nicolas_sm_partners">
                <div className="container">
                    <div className='flex flex-col items-center justify-center text-center'>
                        <div className='text-black text-4xl pb-4'>
                            Our Lovely Clients
                        </div>
                        <div className='text-slate-600 text-lg pb-4'>
                            They choose Emspaced, so what are you waiting for ...
                        </div>
                    </div>
                    <div className="line">
                        <div className="extra_container">
                            <Marquee className="partners_in marquee">
                                <div className="wrap">
                                    <ul>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="list_inner">
                                                <img src="/img/partners/walmart.jpeg" alt={5}/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Partners;
