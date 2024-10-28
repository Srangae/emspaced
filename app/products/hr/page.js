'use client'
import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import {useMetadata} from "@/context/MetadataContext";
import {useEffect} from "react";

const page = () => {
    const {setMetadata} = useMetadata()

    useEffect(() => {
        setMetadata({
            title: 'Streamline Your Business with Expert HR Services - Emspaced ',
            description: "Streamline HR management with Emspaced's solution. Enhance employee engagement and simplify compliance to create a more productive workplace environment",
        })
    }, [setMetadata])
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">

                        <div className="flex flex-col items-center justify-center">
                            <div className='font-bold text-6xl text-primary-900 text-center'>HR Software Malaysia</div>
                            <div className='flex items-center justify-center py-6 text-2xl text-secondary-600'>We offer
                                a great overlap of technology, software and accounting
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex text-lg p-10 text-secondary-800'>
                    The Emspaced Malaysia is built to provide its services to Human Resource Managers and help them make
                    their work more manageable and easy. With Emspaced HR software Malaysia, we cater to all individuals,
                    from small organizations, private companies to large business groups. We use our skills and
                    knowledge to resolve the issues of our valuable customers. Our expert team of professionals goes
                    deep down into the history and then suggests the solution for your problems.
                </div>

                <div
                    className='flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-900 w-full'>
                    <div className='w-5/6 flex flex-col gap-5 py-6 text-white'>
                        <div className='text-center text-6xl py-6 font-bold'>
                            Advantages of HR Software Malaysia
                        </div>
                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                Hr software is popular worldwide because of its ability to speed up the performance in
                                slow administrative tasks.
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Salary slips circulation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                It can help your business administrative tasks by circulating salary slips any year, any
                                month. You can avail of two of the popular options for making the process simple. The
                                two options are;
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-decimal'>
                                    <li>
                                        Print payslip
                                    </li>
                                    <li>
                                        Send batch E-Payslip)
                                    </li>
                                    <li>
                                        Easy Calculation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                Hr software helps in making the calculations process error-free and easy. You can avail
                                automatic calculations for EPF/SOSCO/EIS/PCB/HRDF
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Electronic bank payment.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                It supports all Malaysian bank giro electronic payment for salary and statutory
                                E-submission.

                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Reports prepared at just one click
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                It helps in keeping all government reports ready. You need to click to print EPF Borang
                                A, SOCSO Borang 8A, PCB, Income Tax CP39, EIS Lampiran, EA Form, Borang-E, and many
                                more.

                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        e-Leave/ e-Claim mobile application
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                The e-Leave/ e-Claim mobile application also comes under hr software. It assists the
                                employee and superior in monitoring leave. You can also say updates with live
                                notification updates.

                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Once in a lifetime payment
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                You are only required to make a one-time payment for lifetime license usage. It does not
                                require a monthly payment.
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Law regulation
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                Every minor detail is fully compiled per Gov taxes & regulation
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Accounting software
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left flex flex-col gap-5'>
                            <div>
                                It is seamless integration with <Link href='/products/sqlaccount'
                                                                      className='text-blue-400'>accounting
                                software.</Link>
                            </div>
                            <div className='md:px-20 px-10'>
                                <ul className='list-disc'>
                                    <li>
                                        Flexible setting
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='text-left'>
                            It offers flexible settings that users can easily define.
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white flex flex-col gap-5 items-center justify-center p-10'>
                <div className='text-emerald-900 text-4xl font-bold'>
                    Why do you need to use HR Software?
                </div>

                <div className='text-teal-600 text-xl'>
                    Hr software can prove beneficial for you and your organization in the long run as it helps in;
                </div>

                <div>
                    <ul className='list-disc text-teal-600 text-lg'>
                        <li>
                            Reduction in errors and mistakes
                        </li>
                        <li>
                            Streamlined processes
                        </li>
                        <li>
                            Better data organization
                        </li>
                        <li>
                            Better analysis
                        </li>
                        <li>
                            Financial management
                        </li>
                        <li>
                            Time and attendance management
                        </li>
                        <li>
                            Talent management
                        </li>
                        <li>
                            Accounting features
                        </li>
                        <li>
                            Aid in recruitment and hiring
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center p-10 bg-white gap-5'>
                <div className='text-emerald-900 font-bold text-4xl'>
                    What makes HR Software Malaysia different?
                </div>

                <div className='text-teal-600 text-xl text-left'>
                    What makes Hr software stand out from others is its approach to making things more manageable and
                    easy. The amazing features, the high-performance software, and the efficient team of professionals
                    are some things that attract customers from all around the country.

                </div>
            </div>
        </NikolasLayout>
    );
};
export default page;
