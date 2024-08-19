import Image from "next/image";
import Link from "next/link";

const HomeBanner_1 = () => {
    return (
        <div className='w-full relative h-80 md:h-96'>
            <Image src='/img/home/homepage_banner.jpg' alt="Banner" layout='fill' objectFit='cover'/>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className='flex items-center justify-center py-4 md:py-10 text-center'>
                    <div className='text-2xl md:text-4xl font-bold text-white'>SQL ACCOUNT</div>
                </div>
                <div className='w-11/12 md:w-10/12 text-center pb-4 md:pb-10 text-white'>
                    <div className='text-lg md:text-3xl'>
                        Trusted by MORE THAN 180,000 businesses to use in their daily operation
                    </div>
                    <div className='text-sm md:text-xl py-4 md:py-10'>
                        Thank you for making SQL Account the top business software in South East Asia
                    </div>
                </div>
                <div className='flex items-center justify-center w-full pb-4 md:pb-10'>
                    <button className='bg-primary-500 rounded-2xl text-white px-4 py-2 md:px-6 md:py-3'>
                        <Link
                            href='https://wa.me/message/BTIUQPHTL6AKE1'>
                            LEARN MORE
                        </Link>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default HomeBanner_1
