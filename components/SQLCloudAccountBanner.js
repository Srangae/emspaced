import Image from "next/image";
import Link from "next/link";

const SQLCloudAccountBanner = () => {

    return (
        <div
            className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 gap-10'>
            <div className='flex flex-col items-center justify-center text-white md:w-1/3 px-6'>
                <div className='text-xl py-10 text-center md:text-justify'>
                    With SQL cloud accounting software, now you have access anywhere, anytime
                </div>
                <div className='text-4xl text-slate-800 font-bold pb-6 text-center md:text-justify'>
                    SQL Cloud Account?
                </div>
            </div>
            <div className='pb-10 md:pb-0'>
                <button
                    className='flex items-center justify-center text-white gap-2 bg-cyan-400 rounded-3xl p-3 md:w-full'>
                    <Image src='/img/cloud.png' alt={2} width={20} height={20}/>
                    <Link href='#'>LEARN MORE</Link>
                </button>
            </div>
        </div>
    )

}

export default SQLCloudAccountBanner
