import Link from "next/link";
import Image from "next/image";

const Specialindustry = () => {
    return (
        <div className='py-6 bg-banner-50'>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <div className='text-4xl font-bold text-primary-900'>
                    Special Industries
                </div>
                <div className='text-3xl text-white'>
                    We love and we think for every industry
                </div>
                <div className='text-center text-xl text-white'>
                    Sceptical on the availability of system options for your industry? Let us share our experience with
                    you.
                </div>

                <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-6'>
                    <Link
                        href='https://wa.me/message/BTIUQPHTL6AKE1'
                        target='_blank'
                        className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            ENQUIRY
                        </button>
                    </Link>

                    <Link href='tel:+630376294207' passHref
                          className='flex items-center justify-center bg-white text-primary-900 w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            Call Us
                        </button>
                    </Link>
                </div>
            </div>

            <div className='grid md:grid-cols-4 items-start justify-center gap-2 px-4 text-left'>
                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/solution.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Accountant Set
                    </div>
                    <div className='text-slate-500'>
                        Growing your customer base? Still using excel? Let's give you UNLIMITED company solution and
                        fast entry to make the job easier.
                    </div>
                </div>
                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/migrate.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 font-bold text-center text-2xl'>
                        SQL Shipping & Forwarding
                    </div>
                    <div className='text-slate-500'>
                        Still using excel to create booking confirmation, invoice, POL, POD, ETA, desc. of goods and a
                        ton of detail? Let's handle it.
                    </div>
                </div>
                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/insurance.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL J.M.B
                    </div>
                    <div className='text-slate-500'>
                        Get all your maintenance, sinking fund, fire insurance, assessment & etc billing done just in
                        few clicks with SQL Joint Management Body.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/construction.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Construction
                    </div>
                    <div className='text-slate-500'>
                        Procurement, budget control, project comparison profit and loss statement have never been that
                        simple.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/photocopy.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Photocopier
                    </div>
                    <div className='text-slate-500'>
                        Monthly charges, meter reading, FOC copies, rebate, contract expired and others. SQL photocopier
                        module handle all the work done for you.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/timber.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Timber/Glass
                    </div>
                    <div className='text-slate-500'>
                        Different material, different price? Length x Width x Height, too many measurements but simple
                        management in SQL.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/property.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Property Management
                    </div>
                    <div className='text-slate-500'>
                        Too many properties to manage? Let SQL help you to generate all the rental billing, next
                        available date so you will never miss out.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/manufacture.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Manufacturing
                    </div>
                    <div className='text-slate-500'>
                        Couldn't find a system to handle your production line? Let's give you a hand to simplify and
                        reduce the human error.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/oil.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Oil Import/Export
                    </div>
                    <div className='text-slate-500'>
                        To calculate the nett weight, gross weight and convert it to different UOM of full container
                        load (FCL) and more.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/ordering.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Franchise Ordering
                    </div>
                    <div className='text-slate-500'>
                        Manage all the franchisee order in 1 platform, so you can link up your inventory, update the
                        order status and set cut-off time.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/industry/loan.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        SQL Money Lending
                    </div>
                    <div className='text-slate-500'>
                        Insert the loan amount and let the system calculate the interest no matter fixed interest or
                        flexible interest calculation & HP schedule.
                    </div>
                </div>

                <div
                    className='flex flex-col items-center justify-center gap-4 border-dotted border-2 border-primary-900 rounded-lg p-6'>
                    <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                    <div className='text-primary-900 text-2xl font-bold text-center'>
                        More ...
                    </div>
                    <div className='text-slate-500'>
                        In special industries that not listed? Don't worry, let's help you figure out the best solution
                        & customize for your business.
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-10'>
                <Link
                    href='https://wa.me/message/BTIUQPHTL6AKE1'
                    target='_blank'
                    className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                    <button>
                        ENQUIRY
                    </button>
                </Link>

                <Link href='tel:+630376294207' passHref
                      className='flex items-center justify-center bg-white text-primary-900 w-full md:w-1/5 rounded-3xl p-5'>
                    <button>
                        Call Us
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Specialindustry;
