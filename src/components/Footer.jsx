import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
    return (
        <div className='footer-section h-full'>
            <div className="footer-top-section bg-black text-white mt-2">
                <div className="top-container p-4 md:p-14 flex justify-evenly items-center flex-col gap-10 md:flex-row">
                    <div className="top-container-left">
                        <h1 className=" font-bold text-3xl md:text-5xl mb-4">Ready to get started?</h1>
                        <button className="py-2 px-4 mx-2 font-bold bg-[--primary-color] rounded-full text-sm">SIGN UP FOR FREE</button>
                        <a className=" text-xs font-bold pb-1 border-b-2 border-red-400" href="#">TALK TO SALES</a>
                    </div>
                    <div className="top-container-right rounded-2xl border-2 p-7 w-[350px] md:w-[410px]">
                        <h1 className="text-2xl font-light">"At any levels of scale, RevenueCat just works"</h1>
                        <div className="user-profile flex gap-2 items-center mt-4">
                            <div className="user-image w-8 h-8 rounded-full bg-cover overflow-hidden">
                                <img className="w-full h-full" src="./user-2.jpg" alt="" />
                            </div>
                            <div className="user-details leading-4 flex flex-col items-center">
                                <span className="font-normal  text-sm">Thomas Petit, wellingtown</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-section grid grid-cols-2 gap-5 md:grid-cols-5 p-10 md:py-20 md:px-40 justify-evenly h-full ">
                <div className="footer-bottom-image hidden md:flex flex-col justify-between">
                    <img className="w-24" src="./meta-logo.png" alt="" />
                    <div>
                        <div className="flex text-4xl gap-1 mb-1">
                            <IoLogoGithub />
                            <AiFillTwitterCircle />
                        </div>
                        <span className="text-sm ">@2022 RevenueCat</span>
                    </div>

                </div>
                <div className="resources">
                    <ul className=" flex flex-col gap-2">
                        <li><b>Resources</b></li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Contact</li>
                        <li>Customers</li>
                        <li>Help center</li>
                        <li>Podcast</li>
                    </ul>
                </div>
                <div className="documentation">
                    <ul className=" flex flex-col gap-2">
                        <li><b>Documentation</b></li>
                        <li>Quickstart Guide</li>
                        <li>System status</li>
                        <li>SDKs</li>
                        <li>API Reference</li>
                        <li>Sample Apps</li>
                        <li>Migration Guide</li>
                        <li>View all docs</li>
                    </ul>
                </div>
                <div className="product">
                    <ul className=" flex flex-col gap-2">
                        <li><b>Product</b></li>
                        <li>Why RevenueCart?</li>
                        <li>Integrations</li>
                        <li>For Engineering Teams</li>
                        <li>For Marketing Teams</li>
                        <li>For Product Teams</li>
                        <li>Apple Receipt Checker</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="legal">
                    <ul className=" flex flex-col gap-2">
                        <li><b>Legal</b></li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>GDPR</li>
                        <li>Contact</li>
                        <li>Fair Billing Policy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer