import React from "react";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <>
        {/* Back To Top Start */}
                        <div className="scroll-up">
                            <svg
                                className="scroll-circle svg-content"
                                width="100%"
                                height="100%"
                                viewBox="-1 -1 102 102"
                            >
                                <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                            </svg>
                        </div>
                        {/* Offcanvas Area Start */}
                        <div className="fix-area">
                            <div className="offcanvas__info">
                                <div className="offcanvas__wrapper">
                                    <div className="offcanvas__content">
                                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                            <div className="offcanvas__logo">
                                                <Link href={route('home')}>
                                                    <img
                                                        src="assets/img/logo/black-logo.svg"
                                                        alt="logo-img"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="offcanvas__close">
                                                <button>
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text d-none d-xl-block">
                                            Nullam dignissim, ante scelerisque the is
                                            euismod fermentum odio sem semper the is
                                            erat, a feugiat leo urna eget eros. Duis
                                            Aenean a imperdiet risus.
                                        </p>
                                        <div className="mobile-menu fix mb-3" />
                                        <div className="offcanvas__contact">
                                            <h4>Contact Info</h4>
                                            <ul>
                                                <li className="d-flex align-items-center">
                                                    <div className="offcanvas__contact-icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="offcanvas__contact-text">
                                                        <a target="_blank" href="#">
                                                            Main Street, Melbourne,
                                                            Australia
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="offcanvas__contact-icon mr-15">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <div className="offcanvas__contact-text">
                                                        <a href="mailto:info@example.com">
                                                            <span className="mailto:info@example.com">
                                                                info@example.com
                                                            </span>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="offcanvas__contact-icon mr-15">
                                                        <i className="fal fa-clock" />
                                                    </div>
                                                    <div className="offcanvas__contact-text">
                                                        <a target="_blank" href="#">
                                                            Mod-friday, 09am -05pm
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="d-flex align-items-center">
                                                    <div className="offcanvas__contact-icon mr-15">
                                                        <i className="far fa-phone" />
                                                    </div>
                                                    <div className="offcanvas__contact-text">
                                                        <a href="tel:+11002345909">
                                                            +11002345909
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="header-button mt-4">
                                                <Link
                                                    href={route('f_contact')}
                                                    className="theme-btn text-center"
                                                >
                                                    <span>
                                                        Get A Quote
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="social-icon d-flex align-items-center">
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas__overlay" />
            {/* Header Section Start */}
            <header className="header-section">
                <div className="header-top-section style-two">
                    <div className="container-fluid">
                        <div className="header-top-wrapper style-2">
                            <ul className="contact-list">
                                <li>
                                    <i className="fas fa-envelope" />
                                    <Link
                                        href="mailto:info@example.com"
                                        className="link"
                                    >
                                        info@example.com
                                    </Link>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt" />
                                    88 Broklyn Golden Street. New York
                                </li>
                            </ul>
                            <div className="header-top-right">
                                <ul className="top-list">
                                    <li>
                                        <Link href={route('f_contact')}>Help</Link>
                                    </li>
                                    <li>
                                        <Link href={route('f_contact')}>Support</Link>
                                    </li>
                                    <li>
                                        <Link href={route('f_contact')}>Contact</Link>
                                    </li>
                                </ul>
                                <div className="social-icon d-flex align-items-center">
                                    <Link href="#">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link href="#">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link href="#">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                    <Link href="#">
                                        <i className="fa-brands fa-youtube" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header-3">
                    <div className="container-fluid">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="header-left">
                                    <div className="logo">
                                        <Link
                                            href={route('home')}
                                            className="header-logo-1"
                                        >
                                            <img
                                                src="assets/img/logo/white-logo-2.svg"
                                                alt="logo-img"
                                            />
                                        </Link>
                                        <Link
                                            href={route('home')}
                                            className="header-logo-2"
                                        >
                                            <img
                                                src="assets/img/logo/black-logo.svg"
                                                alt="logo-img"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li className="has-dropdown active menu-thumb">
                                                        <Link href={route('home')}>
                                                            Home
                                                            
                                                        </Link>
                                                        
                                                    </li>
                                                    <li>
                                                        <Link href={route('about')}>
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <Link href={route('carlist')}>
                                                            CarList
                                                            
                                                        </Link>
                                                        
                                                    </li>
                                                    
                                                    <li>
                                                        <Link href={route('faq')}>
                                                            FAQ
                                                            
                                                        </Link>
                                                        
                                                    </li>
                                                    <li>
                                                        <Link href={route('f_contact')}>
                                                            Contact
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h6>
                                                <a href="tel:+9288009850">
                                                    +92 (8800) - 9850
                                                </a>
                                            </h6>
                                        </div>
                                    </div>
                                    <a
                                        href="#0"
                                        className="search-trigger search-icon"
                                    >
                                        <i className="fa-regular fa-magnifying-glass" />
                                    </a>
                                    <div className="header-button">
                                        <Link href={route('booking')}
                                            className="theme-btn"
                                        >
                                            Booking a Car
                                        </Link>
                                    </div>
                                    <div className="header__hamburger d-xl-none my-auto">
                                        <div className="sidebar__toggle">
                                            <i className="fas fa-bars" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
