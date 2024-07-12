import Image from "next/image";

const WorkingProcess = () => {
    return (
        <div className="nicolas_sm_process">
            <div className="container">
                <div className="nicolas_sm_main_title">
                    <div className="left">
                    </div>
                    <div className="center">
                        <h3 className='text-center text-4xl text-emerald-900 font-bold'>SYSTEMIZE YOUR BUSINESS</h3>
                        <div className='text-center text-xl py-6 text-teal-600'>
                            Over a decade of experience in interactive design and working with
                            some of the most talented people in the business
                        </div>
                    </div>
                    <div className="right">
                        <span/>
                    </div>
                </div>
                <div className="extra_container">
                    <div className="process_in">
                        <ul>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/bulb.png' alt={1} width={100} height={100}/></span>
                                        <h3 className='text-center'>
                                            KNOW YOUR BUSINESS
                                        </h3>
                                        <p className='text-justify'>
                                            Running a business is not easy, so you definitely need a system to tell you
                                            about your business
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/brand-speedtest.png' alt={1} width={100}
                                                     height={100}/></span>
                                        <h3 className='text-center'>
                                            EFFICIENCY
                                        </h3>
                                        <p className='text-justify'>
                                            Possess the ability to do more with equal effort, doing things efficiently
                                            allows you to focus and increase your sales volume.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/settings-cog.png' alt={1} width={100} height={100}/></span>
                                        <h3 className='text-center'>
                                            PRODUCTIVITY
                                        </h3>
                                        <p className='text-justify'>
                                            High productivity can lead to greater profits for businesses and greater
                                            income for individuals.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/circles-relation.png' alt={1} width={100}
                                                     height={100}/></span>
                                        <h3 className='text-center'>
                                            ALL IN ONE
                                        </h3>
                                        <p className='text-justify'>
                                            Many software are able to be integrated with SQL Business Suite, this means
                                            that you only need 1 system to measure your entire business.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/arrow-down.png' alt={1} width={100}
                                                     height={100}/></span>
                                        <h3 className='text-center'>
                                            REDUCE HUMAN ERROR
                                        </h3>
                                        <p className='text-justify'>
                                            Human error cannot be eliminated, but it can be greatly reduced if you are
                                            using a comprehensive user-friendly system solution.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="list_inner">
                                    <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/sun.png' alt={1} width={100} height={100}/></span>
                                        <h3 className='text-center'>
                                            BE ECO FRIENDLY
                                        </h3>
                                        <p className='text-justify'>
                                            Be environment friendly, our software eliminates the need of paper as all
                                            data can be kept digitally.
                                        </p>
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
export default WorkingProcess;
