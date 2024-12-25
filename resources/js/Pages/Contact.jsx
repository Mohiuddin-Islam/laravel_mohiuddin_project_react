import React from 'react'
import Header from './Sections/Header'
import Search_area from './Sections/Search_area'

export default function Contact() {
    return (
        <>
            <div>
                
                {/* Header Top Section Start */}
                <Header/>
                {/* Search Area Start */}
                <Search_area/>
                {/*<< Breadcrumb Section Start >>*/}
                <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: 'url("assets/img/contact_us.jpeg")' }}>
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
                                    Contact
                                </li>
                            </ul>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Contact</h1>
                        </div>
                    </div>
                </div>
                {/* Contact Section Start */}
                <section className="contact-section-1 fix section-padding pb-0">
                    <div className="container">
                        <div className="contact-wrapper-area">
                            <div className="row g-4">
                                <div className="col-lg-9">
                                    <div className="contact-content">
                                        <div className="section-title">
                                            <img src="assets/img/sub-icon.png" alt="icon-img" className="wow fadeInUp" />
                                            <span className="wow fadeInUp" data-wow-delay=".2s">contact us</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                                Drop us a Line
                                            </h2>
                                        </div>
                                        <form action="#" id="contact-form" method="POST" className="contact-form-items mt-5 mt-md-0">
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="email" id="email2" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <input type="text" name="phone" id="phone" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-clt">
                                                        <textarea name="message" id="message" placeholder="Write a Comment" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <button type="submit" className="theme-btn">
                                                        Send a Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="contact-right-items">
                                        <div className="contact-img">
                                            <img src="assets/img/contact.webp" alt="img" />
                                        </div>
                                        <div className="icon-items">
                                            <div className="icon">
                                                <img src="assets/img/question.png" alt="img" />
                                            </div>
                                            <div className="content">
                                                <p>Have Question?</p>
                                                <h6><a href="tel:+923076806860">+ 92 ( 307 ) 68 - 06860</a></h6>
                                            </div>
                                        </div>
                                        <div className="icon-items">
                                            <div className="icon">
                                                <img src="assets/img/email.png" alt="img" />
                                            </div>
                                            <div className="content">
                                                <p>Write Email</p>
                                                <h6><a href="mailto:info@example.com" className="link">info@example.com</a></h6>
                                            </div>
                                        </div>
                                        <div className="icon-items">
                                            <div className="icon">
                                                <img src="assets/img/location.png" alt="img" />
                                            </div>
                                            <div className="content">
                                                <p>Visit Office</p>
                                                <h6>
                                                    24 Valentin, Street Road <br />
                                                    New York
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="social-icon d-flex align-items-center">
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
                                            <a href="#"><i className="fa-brands fa-youtube" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<< Map Section Start >>*/}
                <div className="map-section">
                    <div className="map-items">
                        <div className="googpemap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
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
                            <div className="row">
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
                                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
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
                                                <input type="email" id="email" placeholder="Email address" />
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
