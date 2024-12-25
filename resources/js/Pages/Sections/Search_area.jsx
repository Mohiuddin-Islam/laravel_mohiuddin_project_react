import React from "react";

export default function Search_area() {
    return (
        <>
            <div className="search-wrap">
                <div className="search-inner">
                    <i
                        className="fas fa-times search-close"
                        id="search-close"
                    />
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input
                                    type="search"
                                    className="main-search-input"
                                    placeholder="Search..."
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}