import Image from "next/image";

const WorkingProcess = () => {
    return (
        <div className="nicolas_sm_process mt-10">
            <div className="container">
                <div className="extra_container">
                    <div className="process_in">
                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                    <div className='flex items-center justify-center'><Image src='/img/home/bulb_emerald.png' alt={1} width={100}
                                                 height={100}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        KNOW YOUR BUSINESS
                                    </div>
                                    <p className='text-justify'>
                                        Running a business is not easy, so you definitely need a system to tell you
                                        about your business
                                    </p>
                                </div>
                            </div>


                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                        <div className='flex items-center justify-center'><Image src='/img/home/speedtest_emerald.png' alt={1} width={100}
                                                     height={100}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        EFFICIENCY
                                    </div>
                                    <div className='text-justify'>
                                        Possess the ability to do more with equal effort, doing things efficiently
                                        allows you to focus and increase your sales volume.
                                    </div>
                                </div>
                            </div>

                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                    <div className='flex items-center justify-center'><Image src='/img/home/settings_emerald.png' alt={1} width={100} height={100}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        PRODUCTIVITY
                                    </div>
                                    <p className='text-justify'>
                                        High productivity can lead to greater profits for businesses and greater
                                        income for individuals.
                                    </p>
                                </div>
                            </div>

                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                        <div className='flex items-center justify-center'><Image src='/img/home/circles_relation_emerald.png' alt={1} width={100}
                                                     height={100}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        ALL IN ONE
                                    </div>
                                    <p className='text-justify'>
                                        Many software are able to be integrated with SQL Business Suite, this means
                                        that you only need 1 system to measure your entire business.
                                    </p>
                                </div>
                            </div>

                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                        <div className='flex items-center justify-center'><Image src='/img/home/down_emerald.png' alt={1} width={100}
                                                     height={100}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        REDUCE HUMAN ERROR
                                    </div>
                                    <p className='text-justify'>
                                        Human error cannot be eliminated, but it can be greatly reduced if you are
                                        using a comprehensive user-friendly system solution.
                                    </p>
                                </div>
                            </div>

                            <div className="list_inner text-secondary-600">
                                <div className='grid grid-rows-3 items-center justify-center'>
                                    <div className='flex items-center justify-center'><Image src='/img/home/sun_emerald.png' alt={1} width={120}
                                                 height={120}/></div>
                                    <div className='text-center text-primary-900 font-bold text-xl'>
                                        BE ECO FRIENDLY
                                    </div>
                                    <div className='text-justify'>
                                        Be environment friendly, our software eliminates the need of paper as all
                                        data can be kept digitally.
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
export default WorkingProcess;
