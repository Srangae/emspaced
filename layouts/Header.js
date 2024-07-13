"use client";
import { nicolasUtility } from "@/utility";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  useEffect(() => {
    nicolasUtility.stickyNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

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
      <div className="nicolas_sm_header">
        <div className="overlay_el">
          <div className="overlay_bg" />
          <div className="overlay_content bg-white">
            <div className="logo">
              <Link href="/">
                <img src="/img/emspaced-logo.png" alt={2} />
              </Link>
            </div>
            <div className="menu">
              <ul>
                <li key={1}>
                  <Link href="/">About Us</Link>
                </li>
                <li key={2} className="">
                  <Link href="/">Products</Link>
                </li>
                <li key={3}>
                  <Link href="/event">Events</Link>
                </li>
                <li key={4}>
                  <Link href="/blog">Blogs</Link>
                </li>
                <li key={5}>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="button">
              <div className="text-white hover:text-primary">
                <Link
                  className="bg-primary-900"
                  href="https://wa.link/3chr1y"
                  target="_blank"
                >
                  Whatsapp
                </Link>
              </div>
            </div>
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
    { id: 1, title: "home", href: "#home" },
    { id: 2, title: "about", href: "#about" },
    { id: 3, title: "service", href: "#service" },
    { id: 4, title: "event", href: "#event" },
    { id: 4, title: "Blog", href: "#blog" },
    { id: 5, title: "contact", href: "#contact" },
  ];

  return (
    <Fragment>
      {/* Mobile Menu */}
      <div className="nicolas_sa_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="/">
                <img src="/img/emspaced-logo.png" alt="" />
              </a>
            </div>
            <div className="trigger" onClick={() => setToggle(!toggle)}>
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box">
                  <div className="hamburger-inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="dropdown"
          style={{ display: toggle ? "block" : "none" }}
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
          <div className="overlay_bg" />
          <div className="overlay_content">
            <div className="logo">
              <Link href="/">
                <img src="/img/logo/company_logo_black.jpeg" alt={2} />
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
