"use client";
import MarqueeTitle from "@/components/MarqueeTitle";
import NikolasLayout from "@/layouts/NikolasLayout";
import { nicolasUtility } from "@/utility";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";
const page = () => {
  useEffect(() => {
    nicolasUtility.dataImage();
  }, []);

  return (
    <NikolasLayout>
      {/* Page_title */}
      <div className="nicolas_sm_page_title">
        <div className="container">
          <div className="page_title_in">
            <h3>
              <span className="underline">
                Blog <br />
              </span>
              <span className="stroke_text">Let's Read, </span>
              <span className="underline">Know More About Us</span>
            </h3>
          </div>
        </div>
      </div>
      {/* /Page_title */}
      {/* Blog */}
      <div className="nicolas_sm_blog no_padding blogpage">
        <div className="nicolas_sm_extra_title">
          <MarqueeTitle marqueeText="BLOGS" />
        </div>
        <div className="container">
          <div className="extra_container">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>19 February, 2022</span>
                      <h3>
                        <Link href='blog_details/1'>
                          The Ultimate Guide on HR Software System Malaysia
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details/1">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="/img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="/img/blog/blog_1.jpg" alt={1} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details/1"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>16 February, 2022</span>
                      <h3>
                        <Link href="blog_details/2">
                          How to Choose Accounting Software for Small Business
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details/2">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="/img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="/img/blog/blog_2.jpg" alt={2} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details/2"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>11 December 2021</span>
                      <h3>
                        <Link href="blog_details/3">
                          Benefits of Using Accounting Software for Business
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details/3">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="/img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="/img/blog/blog_3.jpg" alt={3} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details/3"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="left">
                    <div className="news">
                      <span>10 December 2021</span>
                      <h3>
                        <Link href="blog_details/4">
                          What Features Your Business Payroll System Should Have?
                        </Link>
                      </h3>
                    </div>
                    <div className="button">
                      <Link href="blog_details/4">
                        Read the story{" "}
                        <img
                          className="sm_svg"
                          src="/img/svg/down_arrow.svg"
                          alt={1}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="right">
                    <div className="image">
                      <img src="/img/blog/blog_4.jpg" alt={5} />
                      <Link
                        className="nicolas_sm_full_link"
                        href="blog_details/4"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/*<div className="nicolas_sm_button">*/}
            {/*  <a href="#">*/}
            {/*    More{" "}*/}
            {/*    <img*/}
            {/*      className="sm_svg"*/}
            {/*      src="img/svg/down_arrow.svg"*/}
            {/*      alt="arrow"*/}
            {/*    />*/}
            {/*  </a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      {/* /Blog */}
    </NikolasLayout>
  );
};
export default page;
