import Image from "next/image";
import Link from "next/link";

const HomeBanner_1 = () => {
    return (
        <div className='flex flex-col items-center justify-center payroll_banner_1 relative md:h-96'>
            <div className='z-0 flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center py-10 text-center'>
                    <div className='text-4xl font-bold text-white'>SQL ACCOUNT</div>
                </div>

                <div className='text-2xl w-10/12 text-center pb-10 text-white'>
                    <div className='text-3xl'>Trusted by MORE THAN 180,000 businesses to use in their daily
                        operation
                    </div>
                    <div className='text-xl py-10'>
                        Thank you for making SQL Account the top business software in South East Asia
                    </div>
                </div>

                <div className='flex items-center justify-center w-full pb-10'>
                    <button className='bg-primary-900 rounded-2xl text-white p-3 md:w-1/5'><Link
                        href='https://docs.google.com/forms/d/e/1FAIpQLSetF6DKhQpZZL2srdDtqkgiMnohGaBwIhWX1Fy-EoMlAqgG9Q/viewform'
                    >LEARN MORE</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner_1
