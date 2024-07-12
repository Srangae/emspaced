const VideoBanner = () => {
    return (
        <div className='flex flex-col items-center justify-center my-6 px-6'>
            <div className='text-4xl text-primary-900 font-bold'>
                Introduction
            </div>

            <div className='grid md:grid-cols-2 gap-10 w-full py-6 items-center justify-center'>
                <div className='text-right text-secondary-800'>
                    SQL E Leave is a mobile application that integrates with SQL Payroll for employee to apply leave,
                    check their monthly pay sheet, yearly EA form, and it also allows employees to calculate their
                    income tax. SQL E Leave comes with 2 dashboards, one for the employee and manager, so
                    self-department employee leave application requests and approval can be done.
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

            <div className='text-4xl text-primary-900 font-bold'>
                Mobile EA Form
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
                
                <div className='text-left text-secondary-800'>
                    SQL E Leave is a mobile application that integrates with SQL Payroll for employee to apply leave,
                    check their monthly pay sheet, yearly EA form, and it also allows employees to calculate their
                    income tax. SQL E Leave comes with 2 dashboards, one for the employee and manager, so
                    self-department employee leave application requests and approval can be done.
                </div>
            </div>
        </div>
    )
}

export default VideoBanner
