import React from 'react'
import Header from './Sections/Header'
import Search_area from './Sections/Search_area'

export default function Faq() {
    return (
        <>

            <div>
                
                {/* Header Top Section Start */}
                <Header/>
                {/* Header Section Start */}

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
                                    Faqs
                                </li>
                            </ul>
                            <h1 className="wow fadeInUp" data-wow-delay=".5s">Faqs</h1>
                        </div>
                    </div>
                </div>
                {/*<< Faq Section Start >>*/}
                <section className="faq-section-2 fix section-padding">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4">
                                <div className="faq-sidebar">
                                    <div className="search-widget">
                                        <form action="#">
                                            <input type="text" placeholder="Search" />
                                            <button type="submit"><i className="fa-regular fa-magnifying-glass" /></button>
                                        </form>
                                    </div>
                                    <h3>
                                        Still have Questions? <br />
                                        Call Now!
                                    </h3>
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="content">
                                            <p>Call Anytime</p>
                                            <h6><a href="tel:+923076806860">+ 92 ( 307 ) 68 - 06860</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="faq-content">
                                    <div className="section-title">
                                        <img src="assets/img/sub-icon.png" alt="icon-img" className="wow fadeInUp" />
                                        <span className="wow fadeInUp" data-wow-delay=".2s">Frequently asked questions</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".4s">
                                            Question &amp; Answers
                                        </h2>
                                    </div>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <div className="accordion" id="accordion">
                                            <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".3s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                                        How to process the funtion for construction?
                                                    </button>
                                                </h5>
                                                <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".5s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                                        Where should I incorporate my business?
                                                    </button>
                                                </h5>
                                                <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow mb-4 fadeInUp" data-wow-delay=".7s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                        How there are many variations of passages
                                                    </button>
                                                </h5>
                                                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-4 wow fadeInUp" data-wow-delay=".3s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="true" aria-controls="faq4">
                                                        How to process the funtion for construction?
                                                    </button>
                                                </h5>
                                                <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow mb-4 fadeInUp" data-wow-delay=".7s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                                                        How to process the funtion for construction?
                                                    </button>
                                                </h5>
                                                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item wow mb-4 fadeInUp" data-wow-delay=".7s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                                                        How there are many variations of passages
                                                    </button>
                                                </h5>
                                                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb wow fadeInUp" data-wow-delay=".3s">
                                                <h5 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-expanded="true" aria-controls="faq7">
                                                        How to process the funtion for construction?
                                                    </button>
                                                </h5>
                                                <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <div className="accordion-body">
                                                        There are many variations of passages of available but the have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    )
}

