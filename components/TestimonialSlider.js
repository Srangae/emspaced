"use client";
import {sliderProps} from "@/utility/sliderProps";
import {Component} from "react";
import Slider from "react-slick";
import Image from "next/image";
import {IconArrowBack} from "@tabler/icons-react";

export default class TestimonialSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    render() {
        return (
            <div className="nicolas_sm_section">
                <div className="nicolas_sm_testimonials">
                    <div className="container pb-10">
                        <Image src='/img/home/homepage_banner.jpg' alt="Banner" fill
                               className='bg-opacity-50'/>
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="nicolas_sm_main_title">
                            <div className="left">
                            </div>
                            <div className="right">
                                <div className="prev_next">
                                    <a
                                        className="prev "
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.previous();
                                        }}
                                    >
                                        <img className="sm_svg" src="/img/svg/arrow.svg" alt={1}/>
                                    </a>
                                    <a
                                        className="next "
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            this.next();
                                        }}
                                    >
                                        <img className="sm_svg" src="/img/svg/arrow.svg" alt={2}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials_in">
                            <Slider
                                ref={(c) => (this.slider = c)}
                                {...sliderProps.testimonial}
                                className=""
                            >
                                <div>
                                    <div className="list_inner">
                                        <div className="details">
                                            <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                                            <p>
                                                Every business deserves a personalized software that matches its
                                                business nature and daily operations to become more efficient.
                                            </p>
                                        </div>
                                        <div className="info">
                                            <div className="job">
                                                <h3>WELCOME TO EMSPACED</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="list_inner">
                                        <div className="details">
                                            <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                                            <p>
                                                1st to provide industry-leading business analytics and intelligence to
                                                SQL Account users.
                                            </p>
                                        </div>
                                        <div className="info">
                                            <div className="job">
                                                <h3>SQL BI Dashboard</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="list_inner">
                                        <div className="details">
                                            <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                                            <p>
                                                SQL Account has helped over 210,000 businesses to simplify their
                                                business operations.
                                            </p>
                                        </div>
                                        <div className="info">
                                            <div className="job">
                                                <h3>#1 ACCOUNTING SOFTWARE IN MALAYSIA</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="list_inner">
                                        <div className="details">
                                            <img className="sm_svg" src="/img/svg/quote.svg" alt={1}/>
                                            <p>
                                                Easily process and print from one to hundreds of employee’s pay slip
                                                with just a few clicks.
                                            </p>
                                        </div>
                                        <div className="info">
                                            <div className="job">
                                                <h3>MOST USER FRIENDLY PAYROLL SYSTEM</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

TestimonialSlider.defaultProps = {
    title: "Satisfied clients",
    sectionNumber: "06",
};
