const DashboardVideo = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6 bg-white'>
            <div className='grid md:grid-cols-2 gap-10 w-full py-6 items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='text-4xl font-bold text-emerald-900'>
                        Simple, Easy, On the go
                    </div>
                    <div className='text-teal-600 text-xl text-left'>
                        Still waiting on your reports coming from someone else? Now you can have a better way to review
                        your business performance from the comfort of your personal computer or mobile phone.
                    </div>
                </div>

                <div className=''>
                    <div className='md:w-full md:h-80'>
                        <iframe className="w-full h-full"
                                src="https://www.youtube.com/embed/bv8ghe3AuBM?si=y_Oe1d-muAV_89Cr"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-10 w-full py-6 items-center justify-center'>

                <div className=''>
                    <div className='md:w-full md:h-80'>
                        <iframe className="w-full h-full"
                                src="https://www.youtube.com/embed/d40VgmJ-jjA?si=JiZ-lGsT8tsUlyTf"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='text-4xl font-bold text-emerald-900'>
                        Why SQL BI Dashboard?
                    </div>
                    <div className='text-teal-600 text-xl text-left'>
                        Our intuitive and interactive charts are crafted by data-savvy developers and accountants,
                        providing you information you actually need. Even if you do not come from a finance or
                        accounting background, SQL BI Dashboard is easy to use and understand.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardVideo
