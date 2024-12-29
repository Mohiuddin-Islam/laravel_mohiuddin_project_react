import React from 'react'
import Header from './Sections/Header'
import Search_area from './Sections/Search_area'
import { usePage } from "@inertiajs/react";

export default function Carlist() {
    const{carlists} = usePage().props;
    return (
        <>
            <div>
                
                {/* Header Section Start */}
            <Header/>
                {/* Search Area Start */}
                <Search_area/>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("assets/img/banner.jpg")' }}>
                    <div className="container">
                        <div className="page-heading">
                            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                                <li>
                                    <a href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="fas fa-chevron-right" />
                                </li>
                                <li>
                                    Cars
                                </li>
                            </ul>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Car Style</h1>
                        </div>
                    </div>
                </div>
                {/* Car Rentals Section Start */}
                <section className="car-rentals-section-2 section-padding fix">
                    <div className="container">
                        <div className="row g-4">

                            {/* Loop Start */}
                            {carlists.map(({id, brand, model, engine, price_per_day, image, status}) => (

                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="car-rentals-items mt-0">
                                    <div className="car-image">
                                        <img src={image} alt="img" />
                                    </div>
                                    <div className="car-content">
                                        <div className="post-cat">
                                            {model}
                                        </div>
                                        
                                        <div className="star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            
                                        </div>
                                        <h4><a href="car-details.html">{brand} {engine}</a></h4>
                                        <h4><a href="car-details.html">{status}</a></h4>
                                        <h6>{price_per_day} <span>/ Day</span></h6>
                                        <div className="icon-items">
                                            <ul>
                                                <li>
                                                    <img src="assets/img/car/seat.svg" alt="img" className="me-1" />
                                                    6 Seats
                                                </li>
                                                <li>
                                                    <img src="assets/img/car/door.svg" alt="img" className="me-1" />
                                                    2 Doors
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <img src="assets/img/car/automatic.svg" alt="img" className="me-1" />
                                                    Automatic
                                                </li>
                                                <li>
                                                    <img src="assets/img/car/petrol.svg" alt="img" className="me-1" />
                                                    Petrol
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <a href={route('book.create')} className="theme-btn bg-color w-100 text-center">Book Now <i className="fa-solid fa-arrow-right ps-1" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>
                {/* Cta Cheap Rental Section Start */}
                <section className="cta-cheap-rental-section">
                    <div className="container">
                        <div className="cta-cheap-rental">
                            <div className="cta-cheap-rental-left wow fadeInUp" data-wow-delay=".3s">
                                <div className="logo-thumb">
                                    <a href="index.html">
                                        <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                                    </a>
                                </div>
                                <h4 className="text-white">Save big with our cheap car rental</h4>
                            </div>
                            <div className="social-icon d-flex align-items-center wow fadeInUp" data-wow-delay=".5s">
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                <a href="#"><i className="fab fa-twitter" /></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                                <a href="#"><i className="fa-brands fa-youtube" /></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Section Start */}
                <footer className="footer-section fix">
                    <div className="container">
                        <div className="footer-widgets-wrapper">
                            <div className="row justify-content-between">
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                    <div className="single-footer-widget shape-map">
                                        <div className="widget-head">
                                            <h4>Contact</h4>
                                        </div>
                                        <div className="footer-content">
                                            <p>
                                                66 Road Broklyn Golden Street, 600
                                                New York, USA
                                            </p>
                                            <ul className="contact-info">
                                                <li>
                                                    <i className="fa-regular fa-envelope" />
                                                    <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                                                </li>
                                                <li>
                                                    <i className="fa-solid fa-phone-volume" />
                                                    <a href="tel:926668880000">+92 (666) 888 0000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h4>Contact</h4>
                                        </div>
                                        <ul className="list-items">
                                            <li>
                                                <a href="about.html">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="car-details.html">
                                                    New Cars
                                                </a>
                                            </li>
                                            <li>
                                                <a href="news-details.html">
                                                    Latest News
                                                </a>
                                            </li>
                                            <li>
                                                <a href="gallery.html">
                                                    Gallery
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h4>Gallery</h4>
                                        </div>
                                        <div className="footer-gallery">
                                            <div className="gallery-wrap">
                                                <div className="gallery-item">
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-1.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-1.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-2.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-2.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-3.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-3.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gallery-item">
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-4.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-4.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-5.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-5.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="thumb">
                                                        <a href="assets/img/footer/gallery-6.webp" className="img-popup">
                                                            <img src="assets/img/footer/gallery-6.webp" alt="gallery-img" />
                                                            <div className="icon">
                                                                <i className="far fa-plus" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                    <div className="single-footer-widget">
                                        <div className="widget-head">
                                            <h4>Newsletter</h4>
                                        </div>
                                        <div className="footer-content">
                                            <p>Subscribe our newsletter to get our latest update &amp; news</p>
                                            <div className="footer-input">
                                                <input type="email" id="email2" placeholder="Email address" />
                                                <button className="newsletter-btn" type="submit">
                                                    <i className="fa-regular fa-paper-plane" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-wrapper">
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    © Copyright 2024 by <a href="index.html">Remons.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}
