import { elastic as Menu } from "react-burger-menu";
import Link from "next/link";
import { useCollapse } from "react-collapsed";
import { IconCaretDownFilled } from '@tabler/icons-react';

export const MobileMenu = () => {
  const { getToggleProps, getCollapseProps, isExpanded } = useCollapse();
  return (
    <div className="nicolas_sa_mobile_menu shadow">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <img src="/img/emspaced-logo.png" alt="" />
            </a>
          </div>
          <Menu right>
            <Link id="home" className="menu-item" href="/">
              About Us
            </Link>
            <div className="menu-item">
              <button {...getToggleProps()} className="flex items-center">
                <span className="mr-1">Products</span> 
                <IconCaretDownFilled size="20" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              <ul {...getCollapseProps()} className="sub-menu">
                <li>
                  <Link href="/products/sqlaccount">SQL Account</Link>
                </li>
                <li>
                  <Link href="/products/sqlpayroll">SQL Payroll</Link>
                </li>
                <li>
                  <Link href="/products/sqlpos">SQL POS</Link>
                </li>
                <li>
                  <Link href="/products/sqlcloud">SQL Cloud (SaaS)</Link>
                </li>
                <li>
                  <Link href="/products/sqldashboard">SQL Dashboard</Link>
                </li>
                <li>
                  <Link href="/products/ctos">CTOS CREDIT</Link>
                </li>
                <li>
                  <Link href="/products/hr">HR Software Malaysia</Link>
                </li>
              </ul>
            </div>
            {/* <Accordion transition transitionTimeout={250} className="text-sm menu-item">
              <AccordionItem header={<span className="font-normal block">Products</span>} headingProps={{ className: "font-normal"}} buttonProps={{ className: 'text-xl text-white'}}>
                <ul>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                  <li>test</li>
                </ul>
              </AccordionItem>
            </Accordion> */}
            <Link id="event" className="menu-item" href="/event">
              Events
            </Link>
            <Link id="blog" className="menu-item" href="/blog">
              Blogs
            </Link>
            <Link id="contact" className="menu-item" href="/contact">
              Contact Us
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  );
};
