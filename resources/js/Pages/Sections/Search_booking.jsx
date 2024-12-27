import React from "react";

export default function Search_booking() {
    return (
        <>
            <section className="hero-section hero-3 fix">
                <div className="array-button">
                    <button
                        className="image-array-left bg-cover"
                        style={{
                            backgroundImage:
                                'url("assets/img/")',
                        }}
                    >
                        <i className="fa-solid fa-chevron-left" />
                    </button>
                    <button
                        className="image-array-right bg-cover"
                        style={{
                            backgroundImage:
                                'url("assets/img/")',
                        }}
                    >
                        <i className="fa-solid fa-chevron-right" />
                    </button>
                </div>
                <h6 className="search-text">Search Any Car</h6>
                <div className="line-icon">
                    <img src="assets/img/hero/icon.png" alt="img" />
                </div>
                <div className="swiper hero-slider-3">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div
                                className="hero-image bg-cover"
                                style={{
                                    backgroundImage:
                                        'url("assets/img/hero/car_lax.jpg")',
                                }}
                            >
                                <div
                                    className="line-shape"
                                    data-animation="slideInLeft"
                                    data-duration="3s"
                                    data-delay="2.1s"
                                >
                                    <img
                                        src="assets/img/hero/line-shape-1.png"
                                        alt="shape-img"
                                    />
                                </div>
                                <div
                                    className="line-shape-2"
                                    data-animation="slideInLeft"
                                    data-duration="3s"
                                    data-delay="2.3s"
                                >
                                    <img
                                        src="assets/img/hero/line-shape-2.png"
                                        alt="shape-img"
                                    />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-12">
                                        <div className="hero-content">
                                            <h4
                                                className="text-white"
                                                data-animation="fadeInUp"
                                                data-delay="1.3s"
                                            >
                                                Welcome to remons rentals
                                            </h4>
                                            <h1
                                                className="text-white"
                                                data-animation="fadeInUp"
                                                data-delay="1.3s"
                                            >
                                                Save big <br />
                                                with car rental
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div
                                className="hero-image bg-cover"
                                style={{
                                    backgroundImage:
                                        'url("assets/img/hero/slider1.png")',
                                }}
                            >
                                <div
                                    className="line-shape"
                                    data-animation="slideInLeft"
                                    data-duration="3s"
                                    data-delay="2.1s"
                                >
                                    <img
                                        src="assets/img/hero/line-shape-1.png"
                                        alt="shape-img"
                                    />
                                </div>
                                <div
                                    className="line-shape-2"
                                    data-animation="slideInLeft"
                                    data-duration="3s"
                                    data-delay="2.3s"
                                >
                                    <img
                                        src="assets/img/hero/line-shape-2.png"
                                        alt="shape-img"
                                    />
                                </div>
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-12">
                                        <div className="hero-content">
                                            <h4
                                                className="text-white"
                                                data-animation="fadeInUp"
                                                data-delay="1.3s"
                                            >
                                                Welcome to remons rentals
                                            </h4>
                                            <h1
                                                className="text-white"
                                                data-animation="fadeInUp"
                                                data-delay="1.3s"
                                            >
                                                Save big <br />
                                                with car rental
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Search Booking Section Start */}
            <section className="search-booking-section section-padding">
                <div className="container">
                    <div className="search-booking-wrapper">
                        <div className="booking-man float-bob-x">
                            <img src="assets/img/booking-man.webp" alt="img" />
                        </div>
                        <div className="row g-4 justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="search-booking-content">
                                    <div className="section-title">
                                        <img
                                            src="assets/img/sub-icon.png"
                                            alt="icon-img"
                                            className="wow fadeInUp"
                                        />
                                        <span
                                            className="wow fadeInUp"
                                            data-wow-delay=".2s"
                                        >
                                            Get to know us
                                        </span>
                                        <h2
                                            className="wow fadeInUp"
                                            data-wow-delay=".4s"
                                        >
                                            Search Book &amp; <br />
                                            Rent Vehicle Easily
                                        </h2>
                                    </div>
                                    <p
                                        className="mt-3 mt-md-0 wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        Lorem ipsum is simply ipun txns mane so
                                        dummy text of free <br /> available in
                                        market the printing and typesetting
                                        industry has <br /> been the industry's
                                        standard dummy text ever.
                                    </p>
                                    <div className="icon-area">
                                        <div
                                            className="icon-items wow fadeInUp"
                                            data-wow-delay=".3s"
                                        >
                                            <div className="icon">
                                                <img
                                                    src="assets/img/feature-benefit/icon-1.png"
                                                    alt="icon-img"
                                                />
                                            </div>
                                            <h4>
                                                Easier &amp; <br />
                                                Faster Bookings
                                            </h4>
                                        </div>
                                        <div
                                            className="icon-items wow fadeInUp"
                                            data-wow-delay=".5s"
                                        >
                                            <div className="icon">
                                                <img
                                                    src="assets/img/feature-benefit/icon-2.png"
                                                    alt="icon-img"
                                                />
                                            </div>
                                            <h4>
                                                Too Many <br />
                                                Pickup Locations
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="product-search-area">
                                    <form
                                        action="#"
                                        id="contact-form"
                                        method="POST"
                                    >
                                        <div className="row g-4">
                                            <div className="col-md-12">
                                                <div className="pickup-items">
                                                    <label className="field-label">
                                                        Pickup Location
                                                    </label>
                                                    <div className="category-oneadjust" class="form-control">
                                                        <select
                                                            name="cate"
                                                            className="category"
                                                        >
                                                            <option>
                                                                Choose Location
                                                            </option>
                                                            <option value={1}>
                                                                Broklyn Street
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
                                            <div className="col-md-12">
                                                <div className="pickup-items">
                                                    <label className="field-label">
                                                        Pick-up Date
                                                    </label>
                                                    <div
                                                        id="datepicker"
                                                        className="input-group date"
                                                        data-date-format="dd-mm-yyyy"
                                                    >
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Check in"
                                                            readOnly
                                                        />
                                                        <span className="input-group-addon">
                                                            {" "}
                                                            <i className="fa-solid fa-calendar-days" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="pickup-items">
                                                    <label className="field-label">
                                                        Drop-off Date
                                                    </label>
                                                    <div
                                                        id="datepicker2"
                                                        className="input-group date"
                                                        data-date-format="dd-mm-yyyy"
                                                    >
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="Check in"
                                                            readOnly
                                                        />
                                                        <span className="input-group-addon">
                                                            {" "}
                                                            <i className="fa-solid fa-calendar-days" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="pickup-items">
                                                    <label className="field-label">
                                                        Car Type
                                                    </label>
                                                    <div className="category-oneadjust">
                                                        <select
                                                            name="cate"
                                                            className="category"
                                                        >
                                                            <option>
                                                                Choose Car
                                                            </option>
                                                            <option value={1}>
                                                                cars
                                                            </option>
                                                            <option value={1}>
                                                                sedan
                                                            </option>
                                                            <option value={1}>
                                                                sports
                                                            </option>
                                                            <option value={1}>
                                                                jeep
                                                            </option>
                                                            <option value={1}>
                                                                limousine
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="pickup-items">
                                                    <button
                                                        type="submit"
                                                        className="theme-btn"
                                                    >
                                                        Find a Car
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
