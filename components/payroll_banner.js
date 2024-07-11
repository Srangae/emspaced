import Image from "next/image";
import Link from "next/link";

const HomeBanner_1 = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 p-10 gap-10'>
            <div className='text-4xl text-emerald-950'>
                SQL E LEAVE MOBILE APPLICATION
            </div>

            <div className='text-xl text-white text-center'>
                A good product will keep innovating and now SQL Payroll transformed existing technology without
                disrupting existing users, reducing your paper work. Now SQL E Leave mobile application is here for you.
            </div>

            <div className='flex flex-col md:flex-row w-full gap-10 py-10 items-start justify-center'>
                <button className='w-full md:w-1/5'>
                    <Link className='flex gap-4 items-center justify-center bg-emerald-900 text-white rounded-3xl p-5'
                          href='https://play.google.com/store/apps/details?id=my.com.sql.app.eleave'
                          target='_blank'>
                        <Image src='/img/home/brand-google-play.png' width={30} height={30}/>
                        Google Play
                    </Link>
                </button>
                <button className='w-full md:w-1/5'>
                    <Link className='flex gap-4 items-center justify-center rounded-3xl p-5 text-emerald-900 border-2 border-white'
                          href='https://apps.apple.com/my/app/e-leave/id1445517208'
                          target='_blank'>
                        <Image src='/img/home/brand-apple.png' width={30} height={30}/>
                        App Store
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default HomeBanner_1
