import Image from "next/image";
import Link from "next/link";

const SQLCloudAccountBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-5 pb-10">
      <div className="flex flex-col items-center justify-center px-6">
        <div className="text-xl py-10 text-center md:text-justify">
          With SQL cloud accounting software, now you have access anywhere,
          anytime
        </div>
        <div className="text-4xl font-bold pb-6 text-center md:text-justify">
          SQL Cloud Account?
        </div>
      </div>
      <div className="pb-10 md:pb-0">
        <button className="flex items-center justify-center text-white gap-2 bg-secondary-600 rounded-3xl py-3 px-6 md:w-full">
          <Image src="/img/cloud_white.png" alt={2} width={20} height={20} />
          <Link href="#">LEARN MORE</Link>
        </button>
      </div>
    </div>
  );
};

export default SQLCloudAccountBanner;
