import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <a href="#"> Home</a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/">Home 1</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">
                        Rentals <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/about-us">North Gate</Link>
                        </li>
                        <li>
                            <Link to="/error">South Gate</Link>
                        </li>
                        <li>
                            <Link to="/error">West Gate</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/service">About Us</Link>
                </li>
                {/* <li>
                    <a href="#">
                        News <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="/news">News Page</Link>
                        </li>
                        <li>
                            <Link to="/news/single-news">Single News</Link>
                        </li>
                    </ul>
                </li> */}
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
