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
                        <div className="page_title_in">
                            <h3 className='text-teal-600'>SQL Account Features</h3>
                            <div className='flex items-center justify-center py-6 text-2xl text-teal-600'>
                                Optimized - Stable - Feature loaded
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:mt-10 mt-20'>
                            <button className='bg-green-950 text-white w-32 rounded-xl p-2'>
                                <Link
                                    href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                                    target='_blank'>
                                    Enquiry
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center p-10 text-center gap-10'>
                    <div className='text-6xl text-teal-600'>
                        SQL Account Core Features
                    </div>

                    <div className='text-white text-xl'>
                        SQL Account is suitable for small businesses to large organizations in both on-premise and
                        online accounting software. Choose what's best for the workflow of your accountant and
                        bookkeeper.
                    </div>

                    <div className='nicolas_sm_service_details'>
                        <div className="service_list">
                            <ul>
                                <li>
                                    <div className="list_inner">
                                        <span>01</span>
                                        <h3>General Ledger</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️ Maintain Account
                                            </div>
                                            <div>
                                                ✔️ Cash Book Entry
                                            </div>
                                            <div>
                                                ✔️ Journal Entry
                                            </div>
                                            <div>
                                                ✔️ Maintain Stock Value
                                            </div>
                                            <div>
                                                ✔️ Maintain Budget
                                            </div>
                                            <div>
                                                ✔️ Bank Reconciliation
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <span>02</span>
                                        <h3>Customer</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️ Maintain Account
                                            </div>
                                            <div>
                                                ✔️ Customer Invoice
                                            </div>
                                            <div>
                                                ✔️ Customer Payment
                                            </div>
                                            <div>
                                                ✔️ Customer Credit Note
                                            </div>
                                            <div>
                                                ✔️ Customer Debit Note
                                            </div>
                                            <div>
                                                ✔️ Customer Contra
                                            </div>
                                            <div>
                                                ✔️ Customer Refund
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <span>03</span>
                                        <h3>Supplier</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️ Maintain Supplier
                                            </div>
                                            <div>
                                                ✔️ Supplier Invoice
                                            </div>
                                            <div>
                                                ✔️ Supplier Payment
                                            </div>
                                            <div>
                                                ✔️ Supplier Credit Note
                                            </div>
                                            <div>
                                                ✔️ Supplier Debit Note
                                            </div>
                                            <div>
                                                ✔️ Supplier Contra
                                            </div>
                                            <div>
                                                ✔️ Supplier Refund
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <span>04</span>
                                        <h3>Sales</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️ Sales Quotation
                                            </div>
                                            <div>
                                                ✔️ Sales Order
                                            </div>
                                            <div>
                                                ✔️ Delivery Order
                                            </div>
                                            <div>
                                                ✔️ Sales Invoice
                                            </div>
                                            <div>
                                                ✔️ Cash Invoice
                                            </div>
                                            <div>
                                                ✔️ Cash Sales
                                            </div>
                                            <div>
                                                ✔️ Sales Credit Note
                                            </div>
                                            <div>
                                                ✔️ Sales Debit Note
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <span>05</span>
                                        <h3>Purchase</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️ Purchase Request
                                            </div>
                                            <div>
                                                ✔️ Purchase Order
                                            </div>
                                            <div>
                                                ✔️ Goods Received
                                            </div>
                                            <div>
                                                ✔️ Purchase Invoice
                                            </div>
                                            <div>
                                                ✔️ Cash Purchase
                                            </div>
                                            <div>
                                                ✔️ Purchase Returned
                                            </div>
                                            <div>
                                                ✔️ Purchase Debit Note
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <span>06</span>
                                        <h3>Stock</h3>
                                        <div className="flex flex-col gap-1 py-5">
                                            <div>
                                                ✔️Maintain Stock Group
                                            </div>
                                            <div>
                                                ✔️ Maintain Stock Item
                                            </div>
                                            <div>
                                                ✔️ Stock Received*
                                            </div>
                                            <div>
                                                ✔️ Stock Issue*
                                            </div>
                                            <div>
                                                ✔️ Stock Adjustment*
                                            </div>
                                            <div>
                                                ✔️ Stock Transfer*
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='flex flex-col items-center justify-center text-center text-white w-full gap-1 py-10 bg-gradient-to-r from-emerald-500 to-emerald-900'>
                <div className='italic text-2xl'>
                    Better Software For Your Business
                </div>
                <div className='py-5 text-4xl'>
                    SQL Account Highlight Features
                </div>
                <div className='text-xl pb-5'>
                    There's nothing better than a great software and useful features
                </div>

                <div className='w-full'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                        target='_blank'>
                        <button className='bg-emerald-900 p-3 rounded-3xl md:w-1/5'>
                            Enquiry
                        </button>
                    </Link>
                </div>
            </div>

            <div className="nicolas_sm_awards">
                <div className="container">
                    <div className='flex items-center justify-center pt-6 text-3xl text-emerald-900'>
                        📚 General Ledger
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Flexible financial reports</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Customizable date range comparison to view your financial report in eg. 24
                                        months or more. Flexible calendar year vs financial year reporting. SQL
                                        Account also support multiple projects comparison.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Unlimited level of GL Account</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Create unlimited sub accounts and financial reports. View it in a summarize
                                        format or by sub account details.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Drill down view source document</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        All our reports are built in with a smart drill down feature. Double click any
                                        figure in your financial reports and you will able to see the detail of the
                                        source document.
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Multi entities consolidation account</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Use SQL consolidation account to evaluate group companies financial performance
                                        without any hassle.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL Account provide a comprehensive range of financial reports such as G/L
                                        Document Listing, Journal of Transaction Listing, Transaction Summary Listing,
                                        Ledger Report, Trial Balance, Receipt and Payment report, Profit and Loss
                                        Statement and Balance Sheet Statement.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex items-center justify-center pt-6 text-3xl text-emerald-900'>
                        💎 Customer
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Fast entry multi invoice interface</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Key in bulk invoices using fast entry listing screen or import data directly
                                        form Excel document. Speedy invoice generation with just 1 click.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Advance SSM number search</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        A useful feature recommended by Tax Accountants. SSM Power Search open the path
                                        for fast, real time connection to SSM Malaysia. This comes in handy when you
                                        need to search for a company's registration number in your bill payments to
                                        ensure Tax Compliance.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Advance credit control</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Has your customer been holding an outstanding amount for an extended period of
                                        time? To prevent this, you can set not only credit limits in SQL system, but
                                        also an OVERDUE limit. With this, you can prevent creations of delivery orders &
                                        invoices for an overdue customer.
                                    </div>
                                </div>

                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Customer account activities</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        The fastest way to view your customer full activity as simple as double click.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>CTOS</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL Account is the only accounting software in Malaysia that integrated with
                                        real time CTOS financial data. It provides SQL Account users a financial
                                        standing overview of their customers and suppliers. Helping users make better
                                        business risk assessment.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Customer module has a wide range of reports such as Customer Document Listing,
                                        Customer Balance Report, Due Document Listing, Aging Report, Customer Statement,
                                        Customer Post Dated Cheque Listing, Customer Analysis by Document, and Customer
                                        Sales and Collection Analysis. Each of these reports have been proved to work
                                        well with multi-currency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-emerald-900'>
                            💼 Supplier

                        </div>
                        <div className='pt-5 text-md text-white text-center md:w-1/2'>
                            The features listed in the customer module are also applicable for supplier module and
                            there's more for supplier
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Interbank GIRO bulks payment</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Create multiple bank accounts for each supplier if necessary. You can select the
                                        bank of your choice for each payment that you make and generate e-banking giro
                                        integration.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Fast, accurate, user-friendly features</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Our supplier module contains an array of features like: fast entry for multiple
                                        invoices, flexible aging formula setting, advance credit limit & credit control,
                                        auto knock off invoice after payment, post-date cheque and bounced cheque
                                        management and many more!
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        We provide a wide range of reports that are detailed and user-friendly at the
                                        same time. The supplier module comes with: Supplier Document Listing, Supplier
                                        Balance Report, Due Document Listing, Aging Report, Supplier Statement, Supplier
                                        Post Dated Cheque Listing, Supplier Analysis by Document and Supplier Sales and
                                        Collection Analysis. Each of these reports have been proved to work well with
                                        multi-currency.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-emerald-900'>
                            📤 Sales & 📥 Purchase
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Profit Estimator</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Get the best estimation of profit before you send out your quotations! The
                                        profit estimator works by accessing the actual cost of the item. But you can
                                        also enter your desired profit amount or profit margin and we can compute what
                                        your selling price should be!
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Multiple Pricing & AI selling price assignment</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        The Multiple Pricing feature let you set separate sales price for dealers and
                                        end-users in the easiest way possible. Our latest AI selling price assignment
                                        supports bulk qty pricing, priority following quotation and also allows you to
                                        set pricing with limited time validity.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Batch email customer invoice/ customer statement of account</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Are you still manually sending customer statements? With SQL Account batch email
                                        feature, you can automatically send out all statement of account to respective
                                        customers in just a few clicks. You can also set a password encryption for the
                                        documents sent.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Best selling item & trade overview</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL Account’s report designs come with flexible grouping and filtering function.
                                        You can view the top/bottom 20 products , customer, agent and more using the
                                        evolutionary flexible Mix & Match SQL reporting with complete drill down to
                                        individual source functions.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Sales Order to Purchase Order</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        With SQL sales order to purchase order module, you can simply manage your
                                        customer order and transfer to place the order with your supplier just in 1
                                        click.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Our sales module comes with a plethora of sales reports such as Sales Document
                                        Listing, Outstanding Sales Document Listing, Sales Picking List, Customer Price
                                        History, Profit and Loss by Document, Sales Analysis by Document and Yearly
                                        Sales Analysis.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-emerald-900'>
                            📦 Stock
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Accuracy for stock costing</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL stock costing with FIFO, weighted average, you can even backdate
                                        transactions and our system will automatically calculate the costing.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Never running out of stock</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL has a smart automated stock reorder advice function. With this, you can
                                        generate a purchase order just by using a drag and drop function.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Multiple Warehouse Management</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Track your inventory beyond the warehouse/location. Perform stock transfers
                                        between inter-branch, consignment, van sales and more.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Multiple UOM management</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Set your stock item with multiple units of measurement such as unit, box,
                                        carton! You can simple preset different UOM for the product that you purchased
                                        and sold. For eg. You purchased a product in carton but sell it in unit.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Barcode Generation</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Create your barcode and raise you invoice by scanning a barcode during your
                                        sales transaction, you can even print barcode sticker from SQL!
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        The stock module comes with Stock Document Listing, Stock Reorder Advice, Stock
                                        Physical Worksheet, Stock Card, Stock Month End Balance, Stock Aging and Stock
                                        Analysis by Document.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-emerald-900'>
                            ⚙️ Production
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Raw material management</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Simply insert the raw materials formulation for the finished goods and let the
                                        system calculate the finished goods costing included wastage and overhead cost,
                                        so you will never sell under cost.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Work-In-Progress</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        With SQL Job Order module you can simply monitor and estimate your customer
                                        ordered goods status and keep you customer update about the status of their
                                        order.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Plan your production well</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Planing isn't that easy, but SQL Bill of Material Planner let you executes
                                        material requirement planning with high precision & speed.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Item Assembly/ Disassembly</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL Item Assembly/Disassembly simplified the process for user to manage the
                                        finished goods after production team had completed the job. Also you can simply
                                        disassembly the finished goods so your raw meterial volume will be readjust by
                                        system.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        The production module comes with Job Order Listing, Pending Producting Document
                                        Listing, B.O.M. Relation Report, B.O.M. Listing, Material Usage Report, B.O.M.
                                        Planner and Wastage Report.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='flex flex-col items-center justify-center pt-6'>
                        <div className='text-3xl text-emerald-900'>
                            💲 Sales Service Tax / GST (Singapore)
                        </div>
                    </div>
                    <div className="extra_container">
                        <div className="awards_in">
                            <div className="image_box">
                                <img src="/img/dashboard/dashboard-1.jpg" alt={2}/>
                            </div>
                            <div className="awards_box">
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Automate SST for all documents</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SQL Account will automatically set sales and service tax in your invoice so that
                                        you never have to worry about forgetting to include tax in your invoice.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>SST-02 draft</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Need an estimate figure for your sales tax/service tax? Process SST-02 and check
                                        the estimation. You can make changes in this draft if you need to.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>SST-02 Report</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        Completed SST report compliant to Royal Malaysia Custom Department. All sales,
                                        purchase, exported sales, exemption for sales and purchase will be populated by
                                        the system.
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center border-b pb-2">
                                    <div className='font-bold text-lg text-white w-1/2 text-center'>
                                        <p>Reporting</p>
                                    </div>
                                    <div className='text-sm w-1/2 text-left'>
                                        SST-02 report, SST Listing, advance filtering for SST listing and pivot table
                                        function for SST Listing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-6'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                        target='_blank'
                        className='flex items-center justify-center bg-emerald-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            ENQUIRY
                        </button>
                    </Link>

                    <Link href='/products/sqlaccount#sql_pricing' passHref
                          className='flex items-center justify-center bg-white text-emerald-900 w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            PRICING
                        </button>
                    </Link>
                </div>
            </div>

            <div className='container'>
                <div className='flex items-center justify-center text-center py-6 text-4xl text-emerald-900'>
                    Other Amazing Features
                </div>

                <div className='grid md:grid-cols-4 gap-4 items-start justify-center w-full px-4'>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Foreign Currency
                        </div>
                        <div>
                            SQL advance currency module (inclusive of Customer, Supplier, foreign currency bank account)
                            automate all currencies transaction, has accurate gain loss calculation.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Project Accounting
                        </div>
                        <div>
                            Our software has extended our accounting function by not only generating Profit & Loss by
                            project and multiple years of retained earning by project, but also making it possible to
                            Balance Sheet report by project too.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Item Template
                        </div>
                        <div>
                            Create combination of several products into a package, easy invoice billing by a single
                            click.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Landing Cost
                        </div>
                        <div>
                            Cost apportionment into product costing such us transportation cost apportionment into few
                            product costing.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Serial Number
                        </div>
                        <div>
                            Unique serial number for each product quantity, trace balance qty with serial number info,
                            check serial number inquiry & stock balance listing by serial number.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Item Batch
                        </div>
                        <div>
                            Manage your item batch easily and batch reporting can easily show the batch item movement.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Global Price Change
                        </div>
                        <div>
                            Update all items pricing by increasing or reducing, it can be update by group of products,
                            adjust the group of products by increase percentage or value.
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4 text-center'>
                        <Image src='/img/dashboard/dashboard-1.jpg' alt='Dashboard' width={300} height={200}/>
                        <div className='text-emerald-900 text-2xl'>
                            Customisable suite to your unique business
                        </div>
                        <div>
                            We make our system compatible with your business. From purchase invoice that require an
                            approval to complex calculation-based function.
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center md:flex-row flex-col w-full gap-5 py-6'>
                    <Link
                        href='https://forms.zohopublic.com/golink/form/SQLAccountSQLCloudAccount/formperma/D6D-umfQ8QraNJIw5HyiDTKj_S-GcrWdgTUW2FH1AeE'
                        target='_blank'
                        className='flex items-center justify-center bg-emerald-900 text-white w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            ENQUIRY
                        </button>
                    </Link>

                    <Link href='/products/sqlaccount#sql_pricing' passHref
                          className='flex items-center justify-center bg-white text-emerald-900 w-full md:w-1/5 rounded-3xl p-5'>
                        <button>
                            PRICING
                        </button>
                    </Link>
                </div>
            </div>

            <SQLCloudAccountBanner/>

            <div id='special_industry'>
                <Specialindustry/>
            </div>

            <Call_us_banner/>

        </NikolasLayout>
    )
        ;
};
export default page;
