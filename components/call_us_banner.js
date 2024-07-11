import Image from "next/image";
import Link from "next/link";

const Call_us_banner = () => {
  return (
      <div
          className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900 gap-10'>
          <div className='flex flex-col items-center justify-center text-white md:w-1/3 px-6'>
              <div className='text-4xl text-slate-800 font-bold pb-6 text-center py-10'>
                  Couldn't find something suitable for your business?
              </div>
              <div className='text-xl py-10 text-center md:text-justify'>
                  Don't worry, let our friendly consultants assist you.
              </div>

          </div>
          <div className='pb-10 md:pb-0'>
              <button
                  className='flex items-center justify-center text-white gap-2 bg-purple-600 rounded-3xl p-3 md:w-full'>
                  <Image src='/img/phone.png' alt={2} width={20} height={20}/>
                  <Link href='tel:+60376294207'>CALL US</Link>
              </button>
          </div>
      </div>
  )
}

export default Call_us_banner;
