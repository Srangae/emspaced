import Image from "next/image";
import Link from "next/link";

const CreditCard = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-primary-900'>
            <div className='z-0 flex flex-col items-center justify-center'>
                <div className='flex items-center justify-center py-10 text-center'>
                    <div className='text-6xl font-bold text-white'>SQL PAYROLL</div>
                </div>

                <div className='text-2xl w-10/12 text-center pb-10'>
                    <div className='text-white text-3xl'>Payroll software not just for big businesses
                    </div>
                    <div className='text-white text-xl py-10'>
                        Your monthly payroll process never that easy
                    </div>
                </div>

                <div className='flex items-center justify-center w-full pb-10'>
                    <button className='bg-primary-400 rounded-2xl text-white p-3 md:w-2/5'><Link
                        href='https://wa.me/message/BTIUQPHTL6AKE1'
                    >LEARN MORE</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CreditCard
