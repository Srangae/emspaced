import Image from "next/image";
import Link from "next/link";

const SQLAccountSpecial = () => {
    return (
        <div className="nicolas_sm_section" id="home">
            <div className="nicolas_sm_hero">
                <div className="container">
                    <div className="overlay_el">
                        <div className="overlay_bg"/>
                        <div className="overlay_content">
                            <div className="hero_info_area">
                                <div className="left">
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/cloud_blue.png' alt={1} width={50} height={50}/>
                                            <h3 className='text-primary-900 font-bold'>Access Anywhere</h3>
                                            <p className='text-white'>
                                                No matter when or where, get your job done and monitor your business
                                                anytime
                                                anywhere.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/report.png' alt={1} width={50} height={50}/>
                                            <h3 className='text-primary-900 font-bold'>Intelligence Reports</h3>
                                            <p className='text-white'>
                                                Up to 500 comprehensive reports are ready in SQL Account so you know
                                                your
                                                business well.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className='flex items-center justify-center md:my-52'>
                                        <Image src="/img/home/sqlaccount_logo.png" alt={1} width={300} height={300}/>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/layout-grid-add.png' alt={1} width={50} height={50}/>
                                            <h3 className='text-primary-900 font-bold'>Special Industries</h3>
                                            <p className='text-white'>
                                                Accountant set, shipping and forwarding, joint management body,
                                                construction, photocopier & more.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info_list">
                                        <div className='flex flex-col items-center justify-center text-center'>
                                            <Image src='/img/home/brand-windows.png' alt={1} width={50} height={50}/>
                                            <h3 className='text-primary-900 font-bold'>Customizable</h3>
                                            <p className='text-white'>
                                                Your software should be as flexible as your business.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center py-10 md:gap-10 text-secondary-600'>
                        <div className='text-4xl text-primary-900 font-bold'>Additionally ...</div>

                        <div className='grid md:grid-cols-3 md:gap-10'>
                            <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/circles-relation.png' alt={1} width={100}
                                                     height={100}/></span>
                                <h3 className='text-center text-2xl py-6 font-bold text-primary-900'>
                                    Integration
                                </h3>
                                <p className='text-left text-lg'>
                                    Possess the ability to do more with equal effort, doing things efficiently
                                    allows you to focus and increase your sales volume.
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/brand-whatsapp_blue.png' alt={1} width={100}
                                                     height={100}/></span>
                                <h3 className='text-center text-2xl py-6 font-bold text-primary-900'>
                                    Whatsapp
                                </h3>
                                <p className='text-left text-lg'>
                                    Share your delivery location with your customer/ supplier in just a few clicks from
                                    your SQL Account
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                        <span><Image src='/img/home/settings-cog.png' alt={1} width={100}
                                                     height={100}/></span>
                                <h3 className='text-center text-2xl py-6 font-bold text-primary-900'>
                                    CTOS
                                </h3>
                                <p className='text-left text-lg'>
                                    SQL Account is the 1st accounting software integrated with CTOS credits.
                                </p>
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full items-center justify-center gap-10 py-6'>
                            <button className='bg-primary-900 rounded-2xl text-white p-3 md:w-1/5'><Link
                                href='https://docs.google.com/forms/d/e/1FAIpQLSetF6DKhQpZZL2srdDtqkgiMnohGaBwIhWX1Fy-EoMlAqgG9Q/viewform'
                                target='_blank'>LEARN MORE</Link></button>
                            <button className='bg-secondary-600 rounded-2xl text-white p-3 md:w-1/5'><Link
                                href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                                target='_blank'>ENQUIRY</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SQLAccountSpecial;
