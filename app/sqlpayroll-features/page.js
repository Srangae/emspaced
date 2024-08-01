import NikolasLayout from "@/layouts/NikolasLayout";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import SQLAccountPricing from "@/components/SqlAccountPricing";
import Image from "next/image";
import SQLCloudAccountBanner from "@/components/SQLCloudAccountBanner";
import MarqueeTitle from "@/components/MarqueeTitle";
import Specialindustry from "@/components/Specialindustry";
import Call_us_banner from "@/components/call_us_banner";

const page = () => {
    return (
        <NikolasLayout>
            <div className="nicolas_sm_contact">
                <div className="nicolas_sm_page_title">
                    <div className="container">
                        <div className="flex flex-col items-center justify-center">
                            <div className='font-bold text-6xl text-primary-900 text-center'>SQL Payroll Features</div>
                            <div className='flex items-center justify-center py-6 text-2xl text-secondary-600'>
                                Process - Review - Print
                            </div>
                            <div className='flex items-center justify-center py-6 text-2xl text-secondary-600'>
                                It's simply at its best
                            </div>

                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-primary-900 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nicolas_sm_awards">
                <div className='flex items-center justify-center w-full py-6'>
                    <div className='md:w-2/12 border-y-2 py-2 text-primary-900 font-bold text-center text-4xl'>
                        Highlight
                    </div>
                </div>
                <div className="container">
                <div className='flex items-center justify-center pt-6 text-3xl text-primary-900 font-bold'>
                        Monthly Payroll Process
                    </div>
                    <div className="extra_container">
                        <div className="awards_in text-secondary-600">
                            <div className="image_box">
                                <img src="/img/account_features/tax.jpg" alt={2}/>
                            </div>
                            <div className="awards_box text-left">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Quick and Easy monthly processing</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Enjoy speedy payroll processing and view each earning breakdown with an
                                        intuitive screen display.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Flexible amendment</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Edit payroll processes anytime anywhere with SQL Payroll software. Experience
                                        accurate, real time recalculations of statutory contributions.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Compliant to all local legislation</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll is compliant to all Malaysian statutory bodies like KWSP, LHDN and
                                        SOCSO. Our system saves you the trouble by auto calculating EPF, SOCSO, EIS,
                                        HRDF and PCB contribution. To ensure flawless calculations, our PCB calculator
                                        comes with the latest contributions rates.
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>E-payslip with password encryption</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Send individual payslips by batch with the batch email feature. Every e-mail
                                        sent comes with a password encryption to ensure utmost privacy and security.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Unlimited month end process</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Process multiple month ends by groups. You can process separate month end for
                                        different groups of employees. Eg, you can process the salaries for the sales
                                        group on the 25th of every month and the other groups on the end of every month.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex items-center justify-center pt-6 text-3xl text-primary-900 font-bold'>
                        Reporting
                    </div>
                    <div className="extra_container">
                        <div className="awards_in text-secondary-600">
                            <div className="image_box">
                                <img src="/img/account_features/reporting.jpg" alt={2}/>
                            </div>
                            <div className="awards_box text-left">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Statutory reports with e-submission</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll software contains all necessary statutory report forms like EPF
                                        Borang A, SOCSO Borang 8A, PCB Income Tax CP39, and EIS Lampiran 1.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Form EA and Borang E CP8D</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Generate employee forms EA and employer form E and also perform e-submission
                                        with SQL Payroll software.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Comprehensive management report</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Our wide variety of customizable reports and payslips allow you to create the
                                        ideal report that truly represents your corporate identity and business nature.
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Others government reports</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll software ready with all malaysia government report EPF Borang A,
                                        SOCSO Borang 2, SOCSO Borang 3, SOCSO Borang 8A, EIS Borang 1, EIS Borang 1A,
                                        EIS Borang 2, EIS Borang 2A, EIS Lampiran 1, Income Tax CP39, CP39A, Income Tax
                                        CP 39A, Income Tax CP 22, Income Tax EA Form, Income Tax EC Form, Income Tax CP
                                        8, CP 159, Income Tax e Data Praisi, Income Tax CP 8D Borang E, Income Tax
                                        Lampiran B (PCB Audit) Income Tax Lampiran 2 (PCB Audit), Income Tax PCB 2(II),
                                        Zakat Borang Skim Berkat, HRDF Report.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-primary-900 font-bold'>
                            Leave Management
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in text-secondary-600">
                            <div className="image_box">
                                <img src="/img/account_features/on-leave.jpg" alt={2}/>
                            </div>
                            <div className="awards_box text-left">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Self defined leave type</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll HR software lets you manage multiple leave types for your employees.
                                        Including annual leave, unpaid leave, and medical leave. Create more leave types
                                        based on your business needs like compassionate leave, study leave and others.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Leave entitlement</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        By using leave group entitlement. You can set the number of leaves a group of
                                        employees are entitled to. You can create a group for managerial group, sales
                                        group, and contract worker group.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Flexible unpaid leave formula</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll software design with simplified interface, you can set your unpaid
                                        leave formula as easy by select the numbers of calendar method (labour law
                                        compliance) as well as by custom days setting example 26 days. Set your own
                                        unpaid leave formulas by selecting the day of unpaid leave taken on the calendar
                                        (compliant with labour law) and the customizable number of days.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Annual Leave brought forward</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Annual leave can be brought forward to the next year. All you have to do is set
                                        the maximum number of days and the system will do the rest.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll HR software consists of a complete and comprehensive set of leave
                                        reports such as leave application report, leave balance report, leave
                                        entitlement report, and yearly leave report.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-primary-900 font-bold'>
                            Other Functions
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in text-secondary-600">
                            <div className="image_box">
                                <img src="/img/account_features/s_p.jpg" alt={2}/>
                            </div>
                            <div className="awards_box text-left">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Comprehensive HR Software package</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Customizable date range comparison to view your financial report in eg. 24
                                        months or more. Flexible calendar year vs financial year reporting. SQL Account
                                        also support multiple projects comparison.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>SQL View - Limit access view</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Create unlimited sub accounts and financial reports. View it in a summarize
                                        format or by sub account details.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Data Import</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Flexible data import / integration from any time attendance system in excel or
                                        csv format.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Adhoc/Frequency process</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        Process adhoc payment interval such as bonus, commission , as separate payroll
                                        payment. These payouts are separated from the usual payroll process or set
                                        Payroll frequency to process bi-monthly or even weekly salary. Our system will
                                        automatically proportion the salaries accordingly.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p className='font-bold text-primary-900'>Time management system integration</p>
                                    </div>
                                    <div className='text-sm w-1/2'>
                                        SQL Payroll can be integrated seamlessly with most time attendance systems. SQL
                                        Payroll calculates OT, Leaves, and allowances without any mistakes and minimal
                                        external interference.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-6'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
                        target='_blank'
                        className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            ENQUIRY
                        </button>
                    </Link>

                    <Link href='/products/sqlpayroll#payroll_pricing' passHref
                          className='flex items-center justify-center bg-secondary-800 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            PRICING
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-1 py-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-2xl'>
                    Better Software For Your Business
                </div>
                <div className='py-5 text-4xl font-bold'>
                    SQL Account Highlight Features
                </div>
                <div className='text-xl pb-5'>
                    There's nothing better than a great software and useful features
                </div>

                <div className='w-full'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                        target='_blank'>
                        <button className='bg-primary-900 p-3 rounded-3xl md:w-1/5'>
                            Enquiry
                        </button>
                    </Link>
                </div>
            </div>

            <div className='payroll_banner_1 w-full'>
                <div className='flex flex-col text-center items-center justify-center py-20 md:py-20 gap-10 px-10'>
                    <div className='text-3xl md:text-6xl text-white'>
                        SQL E Leave Features
                    </div>

                    <div className='text-xl text-white'>
                        Designed for who choose the right payroll software
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full'>
                <div className='grid md:grid-cols-2 gap-10 p-10'>
                    <div className='flex items-center justify-end'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='credit_card' objectFit='cover' width={500}
                               height={500}/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 text-left'>
                        <div className='text-4xl text-primary-900 font-bold text-center'>
                            Employee Dashboard
                        </div>
                        <div className='text-lg text-secondary-600'>
                            Say goodbye to printing leave application forms. Apply your leave with SQL E Leave mobile
                            app anytime, anywhere. Enjoy the freedom of checking your leave status on your mobile and
                            receive notification alert when your leave has been approved.
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-10 p-10'>
                    <div className='flex items-center justify-end'>
                        <Image src='/img/payment.jpg' alt='credit_card' objectFit='cover' width={500}
                               height={500}/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='text-4xl text-primary-900 text-center font-bold'>
                            Payslip Info
                        </div>
                        <div className='text-left text-lg text-secondary-600'>
                            View your past payslips from an unlimited number of months on the e-leave app. you can check
                            your salary details like wages, allowance, deduction, epf, socso and many more.
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-10 p-10'>
                    <div className='flex items-center justify-end'>
                        <Image src='/img/pos.jpg' alt='credit_card' objectFit='cover' width={500}
                               height={500}/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='text-4xl text-primary-900 font-bold text-center'>
                            EA Record
                        </div>
                        <div className='text-left text-lg text-secondary-600'>
                            Have unlimited access when referring to your past records of EA forms for a seamless and
                            smooth process of e-filing on LHDN.
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-10 p-10'>
                    <div className='flex items-center justify-end'>
                        <Image src='/img/friendly.jpg' alt='credit_card' objectFit='cover' width={500}
                               height={500}/>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='text-4xl text-primary-900 text-center font-bold'>
                            Manager Dashboard
                        </div>
                        <div className='text-left text-lg text-secondary-600'>
                            Check leave pending approval, apply leave on behalf of your employees, and check daily
                            attendance all on your mobile phone! Leave application and leave balance repots can also be
                            generated.
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-6'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLPayrollSQLELeave/formperma/60VtgNr5hL5RctFPddc-A4jazeEJ0P0OPtVuHir38s0'
                        target='_blank'
                        className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            ENQUIRY
                        </button>
                    </Link>

                    <Link href='/products/sqlpayroll#payroll_pricing' passHref
                          className='flex items-center justify-center bg-primary-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            PRICING
                        </button>
                    </Link>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-10 p-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-4xl font-bold'>
                    What is EPF (KWSP) ?
                </div>
                <div className='text-xl pb-5 text-justify'>
                    A portion of an employee’s salary and employer’s contribution on behalf of their workers. Every
                    company is required to contribute EPF for their staff/workers and remit the contribution sum to KWSP
                    before the 15th day of the following month. SQL Payroll is compatible with the labour laws and
                    regulations in Malaysia. This makes SQL payroll the best software for all companies in Malaysia.
                </div>
            </div>


            <div className='flex flex-col items-center justify-center w-full bg-white p-10 gap-10'>
                <div className='md:text-6xl text-4xl text-primary-900 font-bold text-center'>
                    What is subject to EPF (KWSP)?
                </div>

                <div className='text-lg md:text-2xl text-secondary-600 md:text-center text-justify'>
                    All remuneration in money due to an employee under his contract of service or apprenticeship whether
                    it was agreed to be paid monthly, weekly, daily or otherwise.
                </div>

                <table className='table-auto border w-full'>
                    <thead>
                    <tr className='text-primary-900 text-xl h-16 text-left'>
                        <th className='px-4'>
                            Payments that are <strong>liable</strong> for EPF contribution
                        </th>
                        <th>
                            Payments <strong>NOT liable</strong> for EPF contribution
                        </th>
                    </tr>
                    </thead>
                    <tbody className='text-secondary-600 text-md border-2'>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Salary
                        </td>
                        <td>
                            ❌ Service charges
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Payment for unutilised annual or medical leave
                        </td>
                        <td>
                            ❌ Overtime payment
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Bonus
                        </td>
                        <td>
                            ❌ Gratuity
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Allowance
                        </td>
                        <td>
                            ❌ Retirement benefits
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Commission
                        </td>
                        <td>
                            ❌ Retrenchment, temporary and lay-off termination benefits
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Incentive
                        </td>
                        <td>
                            ❌ Any travelling allowance or the value of any travelling concession
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Arrears of wages
                        </td>
                        <td>
                            ❌ Payment in lieu of notice of termination of employment
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Wages for maternity leave
                        </td>
                        <td>
                            ❌ Director's fee
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Wages for study leave
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Wages for half day leave
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Other payments under services contract or otherwise
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className='flex flex-col items-center justify-center text-primary-900 font-bold italic text-2xl w-1/2'>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                    <p>
                        Every business deserves a personalized software that matches its
                        business nature and daily operations to become more efficient.
                    </p>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl text-primary-900 font-bold py-10'>
                        EPF (KWSP) Common FAQ
                    </div>

                    <div className='grid md:grid-cols-4 items-start gap-4 text-left'>
                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Rm 5000 - Employer EPF 12%/13%?
                            </div>
                            <div className=' text-lg text-white'>
                                If an employees’ salary below RM 5000, the employer contribution rate will automatically
                                be set at 13%. While a salary above RM 5000 will receive employer’s contribution rate of
                                12%. SQL Payroll will handle this automatically.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                60 year old EPF Rate?
                            </div>
                            <div className=' text-lg text-white'>
                                If an employee is 60-year-old above, the employee’s EPF contribution rate will be 0%
                                while the employer’s contribution rate is 4%, as per KWSP instructions. SQL Payroll will
                                detect the employee’s age & assign the EPF rate accordingly.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                EPF Rate for 75 year old above?
                            </div>
                            <div className=' text-lg text-white'>
                                A 75-year-old employee will have 0% contribution for EPF on both parties.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Management level with higher EPF Rate?
                            </div>
                            <div className=' text-lg text-white'>
                                In SQL Payroll, you can even set your own EPF rate based on your company’s policies like
                                setting the EPF rate at 19% for employees In the management level.
                            </div>
                        </div>
                    </div>

                    <div className='flex w-5/6 items-center justify-center py-6 text-primary-900 text-lg'>
                        <div>
                            In SQL Payroll, you can even set your own EPF rate based on your company’s policies like
                            setting
                            the EPF rate at 19% for employees In the management level.
                        </div>
                    </div>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-10 p-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-4xl'>
                    What is SOCSO (PERKESO)?
                </div>
                <div className='text-xl pb-5 text-justify'>
                    SOCSO is a social security organization that is also known as PERKESO (Pertubuhan Keselamatan
                    Social). SOCSO to provide assistance both medically & financially to employees that have had their
                    abilities reduced or incapacitated due to accidents or diseases. They also provide assistance to the
                    dependants of employees if they die through pensions.
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full bg-white p-10 gap-10'>
                <div className='md:text-6xl text-4xl text-primary-900 font-bold text-center'>
                    What is Subject to SOCSO?
                </div>

                <table className='table-auto border w-full'>
                    <thead>
                    <tr className='text-primary-900 text-xl h-16  text-left'>
                        <th className='px-4'>
                            Type of Remuneration <strong>Subject</strong> to SOCSO
                        </th>
                        <th>
                            Type of Remuneration <strong>NOT Subject</strong> to SOCSO
                        </th>
                    </tr>
                    </thead>
                    <tbody className='text-secondary-600 text-md border-2'>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Salary
                        </td>
                        <td>
                            ❌ Travelling Allowance
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Pay Leave
                        </td>
                        <td>
                            ❌ EPF
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Holidays
                        </td>
                        <td>
                            ❌ Special Expense (Claims)
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Overtime
                        </td>
                        <td>
                            ❌ Gratuity
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Extra Work on Holiday
                        </td>
                        <td>
                            ❌ Annual Bonus
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Allowance
                        </td>
                        <td>
                            ❌ Benefits in Kind/ VOLA
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Commission
                        </td>
                        <td>
                            ❌ Other Remuneration
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className='flex flex-col items-center justify-center text-primary-900 text-2xl w-1/2'>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                    <p className='font-bold italic'>
                        The above list is not exhaustive. Should you require further clarification, please contact SOCSO
                        Customer Service at 1-300-22-800, enquiry or any SOCSO Office.
                    </p>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl text-primary-900 font-bold py-10'>
                        SOCSO Common FAQ
                    </div>

                    <div className='grid md:grid-cols-4 items-start gap-4 text-left'>
                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold text-left'>
                                Contribution of the First Category
                            </div>
                            <div className=' text-lg text-white'>
                                If an employees’ age below 60, The rate of contribution under this category comprises
                                1.75% of employer’s share and 0.5% of employees’ monthly wages according to the
                                contribution schedule.SQL Payroll will detect the age of employees and automatically
                                calculate it.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Contribution of Second Category
                            </div>
                            <div className=' text-lg text-white'>
                                All employees who have reached the age of 60, the rate of contribution under this
                                category is 1.25% of employees’ monthly wages, payable by the employer, based on the
                                contribution schedule. SQL Payroll can handle this automatically for you.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold '>
                                SOCSO (Employment Injury Scheme) for foreign worker
                            </div>
                            <div className=' text-lg text-white'>
                                Starting from the 1st of January 2019, all employers who hire foreign workers are
                                required to register their foreign employees with SOCSO. The contribution rate for
                                foreign workers is 1.25% of the insured monthly wagers and is to be borne by the
                                employer.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Unsure about First or Second Category?
                            </div>
                            <div className=' text-lg text-white'>
                                <p>
                                    If you are unsure your employees should be under first or second category of SOCSO,
                                    don’t worry. SQL Payroll will automatically detect the age of the employees and
                                    calculate accordingly in accordance to the SOCSO table.
                                </p>
                                <br/>
                                <p>
                                    In addition, for all employees who are currently 59 years old and above the age of
                                    60
                                    years old later, SQL Payroll will automatically calculate their SOCSO contribution
                                    in
                                    compliance to government rules without needing users to make any changes in the
                                    settings
                                    of SQL Payroll.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-10 p-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-4xl font-bold'>
                    What is Employment Insurance System (EIS)?
                </div>
                <div className='text-xl pb-5 text-justify'>
                    EIS is a financial scheme aimed at helping employees who have lost their job, and it is managed by
                    SOCSO. This scheme is meant to enable retrenched workers to gain monetary funds that would help them
                    get back on their feet for up to six months.
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full bg-white p-10 gap-10'>
                <div className='md:text-6xl text-4xl text-primary-900 font-bold text-center'>
                    Who is subject to EIS (Employment Insurance System)?
                </div>

                <div className='flex flex-col items-center justify-center text-left'>
                    <div className='grid md:grid-cols-4 items-start gap-4'>
                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                1.
                            </div>
                            <div className=' text-lg text-white'>
                                All employers in the private sector are required to pay monthly contributions for each
                                of their employees. (Government employees, domestic workers and the self-employed are
                                exempted).
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                2.
                            </div>
                            <div className=' text-lg text-white'>
                                An employee is defined as a person who is employed for wages under a contract of service
                                or apprenticeship with an employer. The contract of service or apprenticeship may be
                                expressed or implied and may be oral or in writing.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                3.
                            </div>
                            <div className=' text-lg text-white'>

                                All employees aged 18 to 60 are required to contribute. However, employees aged 57 and
                                above who have no prior contributions before the age of 57 are exempted.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                4.
                            </div>
                            <div className=' text-lg text-white'>
                                Contribution rates are capped at insured salary of RM4000.00.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center text-primary-900 text-2xl w-1/2'>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                    <p className='font-bold italic'>
                        The above list is not exhaustive. Should you require further clarification, please contact SOCSO
                        Customer Service at 1-300-22-800, enquiry or any SOCSO Office.
                    </p>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl text-primary-900 font-bold py-10'>
                        EIS Common FAQ
                    </div>

                    <div className='grid md:grid-cols-4 items-start gap-4 text-left'>
                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                What is EIS Rate?
                            </div>
                            <div className=' text-lg text-white'>
                                Employers and employees will contribute 0.2% each of an employee’s salary, this means
                                that the total contribution would be 0.4% of an employee’s monthly salary, the maximum
                                monthly salary capped at RM 4000.00. No Worries, SQL Payroll will automatic calculate
                                the EIS compliant to rules and regulation.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                What is the EIS rate for employee's age of 60 and above?
                            </div>
                            <div className=' text-lg text-white'>
                                If an employee is 60-year-old above, EIS contribution is not required. SQL Payroll will
                                detect the age of employee and automatic set to NO contribution to EIS.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                I have lost my job. Am i eligible to apply for EIS benefits?
                            </div>
                            <div className=' text-lg text-white'>
                                All EIS applications must meet the following requirements:
                                <div className='flex flex-col items-start justify-center pt-2 gap-2'>
                                    <div>
                                        i. To apply within 60 days from the date of loss of employment
                                    </div>
                                    <div>
                                        ii. To meet the Contributions Qualifying Conditions, namely the EIS
                                        contributions that
                                        have been paid based on the EIS contribution schedule and having a minimum
                                        number of
                                        months within a specified period.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                How do i apply for EIS benefits if i have lost my job?
                            </div>
                            <div className=' text-lg text-white'>
                                The EIS application can be made online via EIS Portal or go to the nearest SOCSO office
                                throughout the country including Sabah and Sarawak.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-10 p-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-4xl font-bold'>
                    What is PCB Malaysia?
                </div>
                <div className='text-xl pb-5 text-justify'>
                    PCB (Potangan Cukai Bulanan) or MTD (Monthly Tax Deduction) is an income tax deduction mechanism
                    from an employee’s current monthly remuneration in accordance with the schedule of Monthly Tax
                    Deductions (PCB) or other methods approved by the DG
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full bg-white p-10 gap-10'>
                <div className='md:text-6xl text-4xl text-primary-900 font-bold text-center'>
                    What is Subject to PCB?
                </div>

                <table className='table-auto border w-full'>
                    <thead>
                    <tr className='text-primary-900 text-xl h-16 text-left'>
                        <th className='px-4'>
                            Type of Remuneration <strong>Subject</strong> to PCB
                        </th>
                        <th>
                            Type of Remuneration <strong>NOT Subject</strong> for PCB
                        </th>
                    </tr>
                    </thead>
                    <tbody className='text-secondary-600 text-md border-2'>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Salary/ Wages
                        </td>
                        <td>
                            ❌ Deduction for Zakat
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Overtime Payment
                        </td>
                        <td>
                            ❌ Benefits in Kind (BIK)
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Commission
                        </td>
                        <td>
                            ❌ Value of Living Accommodation (VOLA)
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Tips
                        </td>
                        <td className='w-1/2 p-4'>
                            ✳️ BIK and VOLA are part of remuneration which is not subject
                            to MTD. However, employee may make an irrevocable election
                            to include the BIK and VOLA as part of his remuneration to
                            be subject to MTD by completing a prescribed form and
                            submit to employer. If employer agrees, BIK and VOLA are
                            subjected to MTD.
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Allowance
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Bonus/Incentive
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Director fees
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Perquisite
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Employee's share option scheme (ESOS)
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Tax borne by the employer
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Gratuity
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Compensation for loss of employment
                        </td>
                    </tr>
                    <tr className='h-12 border'>
                        <td className='px-4'>
                            ✅ Any other payment in addition to normal remuneration for current month
                        </td>
                    </tr>

                    </tbody>
                </table>

                <div className='flex flex-col items-center justify-center text-primary-900 text-2xl w-1/2'>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                    <p className='font-bold italic'>
                        The above list is not exhaustive. Should you require further clarification, please contact IRB
                        Malaysia Contact Management Centre at 1-300-88-5436, enquiry at any LHDN Office.
                    </p>
                    <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <div className='text-4xl text-primary-900 font-bold py-10'>
                        PCB Common FAQ
                    </div>

                    <div className='grid md:grid-cols-4 items-start gap-4 text-left'>
                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Accuracy of PCB Calculation
                            </div>
                            <div className=' text-lg text-white'>
                                SQL Payroll has 100% accuracy for PCB calculation. SQL Payroll uses the latest formulas
                                for the calculation. Hence, all PCB calculations are in line with LHDN’s own online pcb
                                calculator.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Benefit in Kind
                            </div>
                            <div className=' text-lg text-white'>
                                Benefit-in-kind are benefits that employees receive from their employers. Examples of
                                benefits are Motorcar, Value of Living Accommodation (VOLA) and etc. Employers can
                                process benefit in kind prior to processing the routine payroll using SQL Payroll
                                system.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                Tax Relief
                            </div>
                            <div className=' text-lg text-white'>
                                You can also declare certain expenditures for optional tax relief. Expenditures that are
                                valid for optional tax relief are medical expenses for parents, personal medical
                                expenses, education, child education saving, and life insurance. You can insert all this
                                record in SQL Payroll.
                            </div>
                        </div>

                        <div
                            className='flex flex-col items-center justify-center bg-teal-600 p-5 rounded-xl shadow-lg gap-5'>
                            <div className='text-2xl text-primary-900 font-bold'>
                                What is CP 38?
                            </div>
                            <div className=' text-lg text-white'>
                                CP38 is an instruction for a monthly salary deduct issued by LHDN. Employers make
                                additional deductions from employee’s salary towards the settlement of the employee’s
                                income tax arrears. CP38 is useful in terms of easing the burden of taxpayers. Instead
                                of paying a large sum or money in one go, CP38 is less drastic and less of a financial
                                burden. In SQL Payroll, employers can set for an auto deduction on employee’s wages
                                after receiving instructions from LHDN with simple finger clicks.
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <SQLCloudAccountBanner/>

        </NikolasLayout>
    )
        ;
};
export default page;
