import React from "react";
import Header from "./Sections/Header";
import Search_area from "./Sections/Search_area";


export default function About() {
    return (
        <>
            <div>
                
                {/* Header Top Section Start */}
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
                                    About Us
                                </li>
                            </ul>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">About Us</h1>
                        </div>
                    </div>
                </div>
                {/* About Section Start */}
                <section className="about-section fix section-padding">
                    <div className="container">
                        <div className="about-wrapper-2">
                            <div className="row g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="about-image">
                                        <img src="assets/img/about/aboutus.webp" alt="about-image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content">
                                        <div className="section-title">
                                            <img src="assets/img/sub-icon.png" alt="icon-img" className="wow fadeInUp" />
                                            <span className="wow fadeInUp" data-wow-delay=".2s">Get to know us</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                                Trusted &amp; Leading in
                                                Car Rent Services
                                            </h2>
                                        </div>
                                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".6s">
                                        A leading car rental service in Bangladesh with a fleet of over 100 premium cars. They offer a variety of vehicles, including cars, micro buses, pick ups, ambulances, trucks, covered vans, and commercial vehicles. They also provide airport and railway transfers.
                                        </p>
                                        <div className="about-list-wrapper">
                                            <div className="about-list-items wow fadeInUp" data-wow-delay=".3s">
                                                <ul>
                                                    <li>
                                                        <i className="fa-solid fa-arrow-right" />
                                                        National
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-arrow-right" />
                                                        Enterprise                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-arrow-right" />
                                                        Advantage Rent A Car
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-arrow-right" />
                                                        Ace Rent A Car
                                                    </li>
                                                </ul>
                                                <a href="#" className="theme-btn">Discover More</a>
                                            </div>
                                            <div className="author-items wow fadeInUp" data-wow-delay=".5s">
                                                <div className="icon">
                                                    <i className="fa-solid fa-phone" />
                                                </div>
                                                <p>Need help? Talk to an <br /> Expert</p>
                                                <h6><a href="tel:9288009850">+92 (8800) - 9850</a></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Section Start */}
                <section className="team-section fix section-padding pt-0">
                    <div className="container">
                        <div className="section-title text-center">
                            {/* <img src="assets/img/sub-icon.png" alt="icon-img" className="wow fadeInUp" /> */}
                            <span className="wow fadeInUp" data-wow-delay=".2s">Our expert people</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                Meet Our Professional <br />
                                Team Members
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="team-card-items">
                                    <div className="border-shape">
                                        <img src="assets/img/team/border.png" alt="img" />
                                    </div>
                                    <div className="team-image">
                                        <img src="assets/img/team/team-01.webp" alt="team-img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="#">Mike Hardson</a></h3>
                                        <p>manager</p>
                                        <div className="social-icon d-flex align-items-center justify-content-center">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="team-card-items">
                                    <div className="border-shape">
                                        <img src="assets/img/team/border.png" alt="img" />
                                    </div>
                                    <div className="team-image">
                                        <img src="assets/img/team/team-02.webp" alt="team-img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="#">Aleesha Brown</a></h3>
                                        <p>manager</p>
                                        <div className="social-icon d-flex align-items-center justify-content-center">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="team-card-items">
                                    <div className="border-shape">
                                        <img src="assets/img/team/border.png" alt="img" />
                                    </div>
                                    <div className="team-image">
                                        <img src="assets/img/team/team-03.webp" alt="team-img" />
                                    </div>
                                    <div className="team-content">
                                        <h3><a href="#">David Jhonson</a></h3>
                                        <p>manager</p>
                                        <div className="social-icon d-flex align-items-center justify-content-center">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-youtube" /></a>
                                            <a href="#"><i className="fab fa-linkedin-in" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Car Sale Section Start */}
                <section className="car-sale-section fix section-padding pt-0">
                    <div className="container-fluid">
                        <div className="car-sale-wrapper">
                            <div className="sale-shape">
                                <img src="assets/img/bg-shape-saleoff.png" alt="shape-img" />
                            </div>
                            <div className="badge-shape">
                                <img src="assets/img/bagde.png" alt="shape-img" />
                            </div>
                            <div className="car-shape">
                                <img src="assets/img/car-slideshow-2.webp" alt="img" />
                            </div>
                            <div className="car-sale-content">
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">Sale 50% Off</h2>
                                <h3 className="wow fadeInUp" data-wow-delay=".5s">on all rental cars for 1 month</h3>
                                <a href={route('booking')} className="theme-btn bg-header wow fadeInUp" data-wow-delay=".7s">Book Your Car</a>
                            </div>
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
    );
}

