import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Transitions from "@/ComponentPages/Transitionss/Transitions";

const NotAuthenticated = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="NotAuthenticatedPage">
                <div className="main_wrapper">
                    <div className="main">
                        <div className="antenna">
                            <div className="antenna_shadow"></div>
                            <div className="a1"></div>
                            <div className="a1d"></div>
                            <div className="a2"></div>
                            <div className="a2d"></div>
                            <div className="a_base"></div>
                        </div>
                        <div className="tv">
                            <div className="cruve">
                                <svg
                                    className="curve_svg"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 189.929 189.929"
                                    xml:space="preserve"
                                >
                                    <path
                                        d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                    ></path>
                                </svg>
                            </div>
                            <div className="display_div">
                                <div className="screen_out">
                                    <div className="screen_out1">
                                        <div className="screen">
                                            <span className="notfound_text">Verification required</span>
                                        </div>
                                        <div className="screenM">
                                            <span className="notfound_text">Verification required</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lines">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                            <div className="buttons_div">
                                <div className="b1">
                                    <div></div>
                                </div>
                                <div className="b2"></div>
                                <div className="speakers">
                                    <div className="g1">
                                        <div className="g11"></div>
                                        <div className="g12"></div>
                                        <div className="g13"></div>
                                    </div>
                                    <div className="g"></div>
                                    <div className="g"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="base1"></div>
                            <div className="base2"></div>
                            <div className="base3"></div>
                        </div>
                    </div>
                    <div className="text_404">
                        <div className="text_4041">4</div>
                        <div className="text_4042">0</div>
                        <div className="text_4043">4</div>
                    </div>
            <button class="animated-button" onClick={() => navigate("/")} >
                <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span class="text" >Back To Home</span>
                <span class="circle"></span>
                <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </button>
                </div>

            </div>
        </>
    );
};

const wrappedNotAuthenticated = Transitions(NotAuthenticated)
export default wrappedNotAuthenticated;
