import React from 'react';
import teamOne from '../../assets/images/team-1.jpg';
import teamTwo from '../../assets/images/team-2.jpg';
// import teamThree from '../../assets/images/team-3.jpg';
// import teamFour from '../../assets/images/team-4.jpg';

function TeamHomeOne() {
    return (
        <>
            <section className="appie-team-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Founders</h3>
                                <p>Different layouts and styles for team sections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={teamOne} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Michael</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={teamTwo} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Samuel</h5>
                                    <span>CEO-Founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
