"use client";
import { nicolasUtility } from "@/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";
import {IconCaretDownFilled, IconBrandWhatsapp} from "@tabler/icons-react";
import {useCollapse} from "react-collapsed";

const Header = () => {
  useEffect(() => {
    nicolasUtility.stickyNav();
  }, []);
  // const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const pathName = usePathname();

  const menus = [
    { id: 1, title: "About Us", href: "/" },
    { id: 2, title: "Products", href: "#" },
    { id: 3, title: "Events", href: "/event" },
    { id: 4, title: "Blogs", href: "/blog" },
    { id: 5, title: "Contact Us", href: "/contact" },
  ];

  return (
    <Fragment>
      {/* Mobile Menu */}
      <MobileMenu />
      {/* /Mobile Menu */}
      {/* Header */}
      <div className="">
        <div className='fixed z-50 top-0 hidden md:flex bg-white w-full items-center justify-center py-6 gap-4'>
          <div className=' flex justify-center w-1/5'>
            <div className="logo">
              <Link href="/">
                <img src="/img/emspaced-logo.png" alt="Logo"/>
              </Link>
            </div>
          </div>
          <div className=' flex justify-between items-center w-3/5'>
            <div>
              <button className='hover:bg-banner-50 rounded-xl py-4 px-6 hover:bg-opacity-50'>
                <Link href='/about'>
                  About Us
                </Link>
              </button>
            </div>
            <div className='relative'>
              <button onClick={toggleExpand} className="flex items-center hover:bg-banner-50 rounded-xl py-4 px-6 hover:bg-opacity-50">
                <span className="mr-1">Products</span>
                <IconCaretDownFilled size="20" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}/>
              </button>
              {isExpanded && (
                  <ul className="absolute left-0 top-full mt-2 bg-white border rounded-xl border-gray-200 shadow-lg w-48">
                    <li>
                      <Link href="/products/sqlaccount" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">SQL Account</Link>
                    </li>
                    <li>
                      <Link href="/products/sqlpayroll" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">SQL Payroll</Link>
                    </li>
                    <li>
                      <Link href="/products/sqlpos" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">SQL POS</Link>
                    </li>
                    <li>
                      <Link href="/products/sqlcloud" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">SQL Cloud
                        (SaaS)</Link>
                    </li>
                    {/*<li>*/}
                    {/*  <Link href="/products/sqldashboard" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">SQL*/}
                    {/*    Dashboard</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*  <Link href="/products/ctos" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">CTOS CREDIT</Link>*/}
                    {/*</li>*/}
                    <li>
                      <Link href="/products/hr" className="block px-4 py-2 hover:bg-banner-50 hover:bg-opacity-50">HR Software
                        Malaysia</Link>
                    </li>
                  </ul>
              )}
            </div>
            <div>
              <button className='hover:bg-banner-50 rounded-xl py-4 px-6 hover:bg-opacity-50'>
                <Link href='/event'>
                  Events
                </Link>
              </button>
            </div>
            <div>
              <button className='hover:bg-banner-50 rounded-xl py-4 px-6 hover:bg-opacity-50'>
                <Link href='/blog'>
                  Blogs
                </Link>
              </button>
            </div>
            <div>
              <button className='hover:bg-banner-50 rounded-xl py-4 px-6 hover:bg-opacity-50'>
                <Link href='/contact'>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
          <div className='flex justify-center w-1/5'>
            <button className='flex gap-2 items-center bg-primary-900 text-white text-xl rounded-xl py-4 px-8'>
              <IconBrandWhatsapp/>
                <Link href="https://wa.link/3chr1y" target="_blank">
                  Whatsapp
                </Link>
              </button>
          </div>
        </div>
      </div>
      {/* /Header */}
    </Fragment>
  );
};
export default Header;

export const OnePageHeader = () => {
  useEffect(() => {
    nicolasUtility.stickyNav();
    nicolasUtility.activeMenuBySection();
  }, []);
  const [toggle, setToggle] = useState(false);

  const pathName = usePathname();

  const menus = [
    {id: 1, title: "home", href: "#home"},
    {id: 2, title: "about", href: "#about"},
    {id: 3, title: "service", href: "#service"},
    {id: 4, title: "event", href: "#event"},
    {id: 4, title: "Blog", href: "#blog"},
    {id: 5, title: "contact", href: "#contact"},
  ];

  return (
      <Fragment>
        {/* Mobile Menu */}
        <div className="nicolas_sa_mobile_menu">
          <div className="mobile_menu_inner">
            <div className="mobile_in">
              <div className="logo">
                <a href="/">
                  <img src="/img/emspaced-logo.png" alt=""/>
                </a>
              </div>
              <div className="trigger" onClick={() => setToggle(!toggle)}>
                <div className="hamburger hamburger--slider">
                  <div className="hamburger-box">
                    <div className="hamburger-inner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
              className="dropdown"
              style={{display: toggle ? "block" : "none"}}
          >
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                {menus.map((menu) => (
                    <li key={menu.id}>
                      <Link href={menu.href}>{menu.title}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* /Mobile Menu */}
        {/* Header */}
        <div className="nicolas_sm_header">
          <div className="overlay_el">
            <div className="overlay_bg"/>
            <div className="overlay_content">
              <div className="logo">
                <Link href="/">
                  <img src="/img/logo/company_logo_black.jpeg" alt={2}/>
                </Link>
              </div>
              <div className="menu">
                <ul className="anchor_nav">
                  {menus.map((menu) => (
                      <li key={menu.id}>
                      <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="button">
              <Link href="https://wa.link/3chr1y" target="_blank">
                Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /Header */}
    </Fragment>
  );
};
