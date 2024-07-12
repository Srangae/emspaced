import Image from "next/image";
import Link from "next/link";

const SQLLeave_special = () => {
    return (
        <div
            className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-emerald-400 to-cyan-400 gap-10'>
            <div className='flex flex-col items-center justify-center text-white md:w-1/3 px-6'>
                <div className='text-5xl py-10 text-center font-bold text-primary-900'>
                    SQL E LEAVE MOBILE APP
                </div>
                <div className='text-2xl text-secondary-600 pb-6 text-center md:text-justify'>
                    Designed for those who choose the right payroll software - <strong>SQL Payroll</strong>
                </div>

                <div className='flex flex-col md:flex-row w-full gap-10 py-10'>
                    <button className='w-full'>
                        <Link className='flex gap-4 items-center justify-center bg-primary-900 rounded-3xl p-5'
                              href='https://play.google.com/store/apps/details?id=my.com.sql.app.eleave&pli=1'
                              target='_blank'>
                            <Image src='/img/home/brand-google-play.png' width={30} height={30}/>
                            Google Play
                        </Link>
                    </button>
                    <button className='w-full'>
                        <Link className='flex gap-4 items-center justify-center rounded-3xl p-5 border-2 border-white'
                              href='https://play.google.com/store/apps/details?id=my.com.sql.app.eleave&pli=1'
                              target='_blank'>
                            <Image src='/img/home/brand-apple.png' width={30} height={30}/>
                            App Store
                        </Link>
                    </button>
                </div>

            </div>
            <div className='pb-10 px-3 md:px-0 md:pb-0'>
                <div className='md:w-96 md:h-80'>
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/bv8ghe3AuBM?si=y_Oe1d-muAV_89Cr"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                </div>
            </div>
        </div>
    )
}

export default SQLLeave_special
