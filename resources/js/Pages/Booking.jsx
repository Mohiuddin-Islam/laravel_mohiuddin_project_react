import React from 'react'
import Header from './Sections/Header'
import { usePage } from "@inertiajs/react";

export default function Booking() {
  const{car_lists, drivers} = usePage().props;
  return (
    <>
    <Header/>

    <div>
  {/*<< Breadcrumb Section Start >>*/}
  <div className="breadcrumb-wrapper bg-cover" style={{backgroundImage: 'url("assets/img/banner.jpg")'}}>
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
        <h1 className="wow fadeInUp" data-wow-delay=".5s">Single Car</h1>
      </div>
    </div>
  </div>
  {/* Car Details Section Start */}
  <section className="car-details fix section-padding">
    <div className="container">
      <div className="car-details-wrapper">
        <div className="row g-5">
          <div className="col-lg-12">
            <div className="car-details-items">
              <div className="car-image">
                <img src="assets/img/car/car-details.jpg" alt="img" />
              </div>
              <div className="car-content">
                <div className="star">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <span>2 Reviews</span>
                </div>
                <h3>Hyundai Accent Limited</h3>
                <h6>$70.00 <span>/ Day</span></h6>
                <p className="mt-4 mb-4">
                  To deliver on the promise of technology and human We help our clients become sions of themselves. Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem ipsum has been the industry’s standard dummy text ever since the 1500s.
                </p>
                <div className="icon-details-area">
                  <h4>Key Features</h4>
                  <div className="icon-details-main-items">
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/icon/07.png" alt="img" />
                      </div>
                      <div className="content">
                        <h6>body:</h6>
                        <p>Sedan</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/icon/07.png" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Mileage:</h6>
                        <p>70.000 (Mi)</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/icon/07.png" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Year:</h6>
                        <p>2024</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/icon/07.png" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Engine:</h6>
                        <p>2500 cc</p>
                      </div>
                    </div>
                  </div>
                  <div className="icon-details-main-items">
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/door.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Passengers:</h6>
                        <p>6 Seats</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/seat.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Gear:</h6>
                        <p>Automatic</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/automatic.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Gear:</h6>
                        <p>Automatic</p>
                      </div>
                    </div>
                    <div className="icon-items">
                      <div className="icon">
                        <img src="assets/img/car/petrol.svg" alt="img" />
                      </div>
                      <div className="content">
                        <h6>Fuel:</h6>
                        <p>Petrol</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="car-booking-items">
              <div className="booking-header">
                <h3>Request for Booking</h3>
                <p>Send your requirement to us. We will check email and contact you soon.</p>
              </div>
              <form action="#" id="contact-form" method="POST" className="contact-form-items">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <label className="label-text">Your Name</label>
                      <input type="text" name="name" id="name" placeholder="Afzaal Islam" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <label className="label-text">Email</label>
                      <input type="text" name="email" id="email" placeholder="pixydrops@gmail.com" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <label className="label-text">Phone Number</label>
                      <input type="text" name="phone" id="phone" placeholder="+ 00 0000 - 000" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <label className="label-text">Address</label>
                      <input type="text" name="address" id="address" placeholder="Address" />
                    </div>
                  </div>

      <div className="col-lg-4">
    <div className="form-clt">
        <label className="label-text">CarList</label>
        <div className="category-oneadjust">
            <select name="cate" className="category" style={{ display: 'none' }}>
            </select>
            <div className="nice-select category" tabIndex={0}>
                <span className="current">Choose Car</span>
                <ul className="list">
                    {car_lists.map(({ id, brand, model }) => (
                        <li key={id} data-value={brand} className="option selected">
                            {brand} - {model}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="col-lg-4">
    <div className="form-clt">
        <label className="label-text">Driver</label>
        <div className="category-oneadjust">
            <select name="cate" className="category" style={{ display: 'none' }}>
            </select>
            <div className="nice-select category" tabIndex={0}>
                <span className="current">Choose Driver</span>
                <ul className="list">
                    {drivers.map(({ id, name}) => (
                        <li key={id} data-value={name} className="option selected">
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</div>
                  <div className="col-lg-4">
                    <div className="form-clt">
                      <label className="label-text">Date</label>
                      <div id="datepicker4" className="input-group date" data-date-format="dd-mm-yyyy">
                      <input type="date" class="form-control"/>
                      <span class="glyphicon glyphicon-th"></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-12">
                    <button className="theme-btn" type="submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <div className="col-lg-4">
            <div className="car-list-sidebar">
              <h4 className="title">Booking Form</h4>
              <form action="#" id="contact-form2" method="POST" className="contact-form-items">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <label className="label-text">Pick-up Location</label>
                      <div className="category-oneadjust">
                        <select name="cate" className="category">
                          <option value={1}>
                            Select Location
                          </option>
                          <option value={1}>
                            Houston
                          </option>
                          <option value={1}>
                            Texas
                          </option>
                          <option value={1}>
                            New York
                          </option>
                          <option value={1}>
                            Other Location
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <label className="label-text">Pick-up Date</label>
                      <div id="datepicker" className="input-group date" data-date-format="dd-mm-yyyy">
                        <input className="form-control" type="text" placeholder="Check in" readOnly />
                        <span className="input-group-addon"> <i className="fa-solid fa-calendar-days" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <label className="label-text">Drop-off Date</label>
                      <div id="datepicker2" className="input-group date" data-date-format="dd-mm-yyyy">
                        <input className="form-control" type="text" placeholder="Check in" readOnly />
                        <span className="input-group-addon"> <i className="fa-solid fa-calendar-days" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <label className="label-text">Quantity</label>
                      <div className="category-oneadjust">
                        <select name="cate" className="category">
                          <option value={1}>
                            1
                          </option>
                          <option value={1}>
                            2
                          </option>
                          <option value={1}>
                            3
                          </option>
                          <option value={1}>
                            4
                          </option>
                          <option value={1}>
                            5
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <label className="label-text">Resources</label>
                      <div className="input-save-items-area">
                        <div className="input-save-items">
                          <div className="input-save d-flex align-items-center mb-3">
                            <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext3" />
                            <label htmlFor="saveForNext3">Driver</label>
                          </div>
                          <div className="input-save d-flex align-items-center">
                            <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext4" />
                            <label htmlFor="saveForNext4">Baby Seat</label>
                          </div>
                        </div>
                        <div className="input-save-items">
                          <div className="input-save d-flex align-items-center mb-3">
                            <label>$10.00 / Day</label>
                          </div>
                          <div className="input-save d-flex align-items-center">
                            <label>$30.00 / Total</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt">
                      <button type="submit" className="theme-btn">Book Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
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
    
    </>
    )
    }
