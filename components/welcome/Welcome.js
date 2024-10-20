"use client"


import Image from "next/image"
import Popup from "reactjs-popup";
import logo from "@/public/welcome/logo.png";
import bgimg1 from "@/public/welcome/bgimg1.png"
import card1 from "@/public/welcome/card1.png"
import card2 from "@/public/welcome/card2.png"
import card3 from "@/public/welcome/card3.png"
import card4 from "@/public/welcome/card4.png"
import brand1 from "@/public/welcome/brand1.png"
import brand2 from "@/public/welcome/brand2.png"
import brand3 from "@/public/welcome/brand3.png"
import brand4 from "@/public/welcome/brand4.png"
import brand5 from "@/public/welcome/brand5.png"
import brand6 from "@/public/welcome/brand6.png"
import contentlogo1 from "@/public/welcome/contentlogo1.png";
import contentlogo2 from "@/public/welcome/contentlogo2.png";
import contentlogo3 from "@/public/welcome/contentlogo3.png";
import techimg from "@/public/welcome/tech-img.png"
import Signin from "../auth/Signin";
import { useState } from "react";
import SignUp from "../auth/SignUp";

const Welcome = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (

        <section className="welcome-page-parent">
            <div className="welcomepage-parent">
                <div className="welcomepage-child">
                    <div className="welcome-top-parent">
                        <div className="welcome-top-child">
                            <Image
                                src={logo}
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
                <div className="welcomepage-child">
                    <div className="welcome-bg-img">
                        <Image
                            src={bgimg1}
                            alt="img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                        <div className="welcome-overlay">
                            <div className="overlay-img">
                                <h2>Discover the alternative
                                    in business travel</h2>
                            </div>
                            <div className="welcome-overlay-content">
                                <p>Welcome to the place where clients are truly partners. As
                                    an extension of your team, FCM Travel is the travel
                                    management company that brings agility to your
                                    corporate travel programme, driving value and creates
                                    simplicity.</p>
                            </div>
                            <div className="welcome-overlay-content">
                                <p>Welcome to the place where clients are truly partners. As
                                    an extension of your team, FCM Travel is the travel
                                    management company that brings agility to your
                                    corporate travel programme, driving value and creates
                                    simplicity.</p>
                            </div>
                            <div className="welcome-overlay-btn">
                                <Popup trigger={<button>Get on the road</button>} position="right center" modal nested>
                                    {close => (
                                        <div className="modal">
                                            <div className="nav-bar">
                                                <h1></h1>
                                                <button onClick={() => { close(); setIsLogin(); }}> &times;</button>
                                            </div>
                                            <div className="content">
                                                {
                                                    isLogin
                                                        ?
                                                        <SignUp setIsLogin={setIsLogin} />
                                                        :
                                                        <Signin setIsLogin={setIsLogin} />

                                                }

                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcomepage-child">
                    <div className="travel-programmes-parent">
                        <div className="programmes-tiltle">
                            <h1>How we add value to business travel programmes</h1>
                        </div>
                        <div className="travel-programmes-child">
                            <div className="programmes-card">
                                <div className="card-logo">
                                    <Image
                                        src={card1}
                                        alt="img"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <div className="card-title">
                                    <p>Consistent Experience</p>
                                </div>
                                <div className="card-content">
                                    <p>Knowledgeable teams backed by seamless digital experience.</p>
                                </div>
                            </div>
                            <div className="programmes-card">
                                <div className="card-logo">
                                    <Image
                                        src={card2}
                                        alt="img"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <div className="card-title">
                                    <p>Data that influences</p>
                                </div>
                                <div className="card-content">
                                    <p>Strategy that goes beyond problem solving.</p>
                                </div>
                            </div>
                        </div>
                        <div className="travel-programmes-child">
                            <div className="programmes-card">
                                <div className="card-logo">
                                    <Image
                                        src={card3}
                                        alt="img"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <div className="card-title">
                                    <p>Best-in-market content</p>
                                </div>
                                <div className="card-content">
                                    <p>Procured through our experience and reach.</p>
                                </div>
                            </div>
                            <div className="programmes-card">
                                <div className="card-logo">
                                    <Image
                                        src={card4}
                                        alt="img"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <div className="card-title">
                                    <p>A collaborative partner</p>
                                </div>
                                <div className="card-content">
                                    <p>Our client relationships drive everything we do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="welcomepage-child">
                    <div className="partner-brands-wrapper">
                        <div className="programmes-tiltle">
                            <h1>Collaborating on travel programmes with</h1>
                        </div>

                        <div className="partner-brands-parent">
                            <div className="partner-brands-child">
                                <Image
                                    src={brand1}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partner-brands-child">
                                <Image
                                    src={brand2}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partner-brands-child">
                                <Image
                                    src={brand3}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partner-brands-child">
                                <Image
                                    src={brand4}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partner-brands-child">
                                <Image
                                    src={brand5}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partner-brands-child">
                                <Image
                                    src={brand6}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>

                    </div>
                </div>




                <div className="welcomepage-child">

                    <div className="travel-technology-wrapper">
                        <div className="programmes-tiltle">
                            <h1>Technology built around your woes</h1>
                        </div>
                        <div className="travel-technology-parent">
                            <div className="travel-technology-child">
                                <p>Craving a smoother way to book and manage business
                                    trips, with quick access to support, 24/7? Yearning to
                                    easily search and pull reports for travel insights, and view
                                    safety & risk alerts in one place? </p>
                            </div>
                            <div className="travel-technology-child">
                                <p>Our customers felt the same way. That’s why we built the
                                    FCM Platform, a business travel platform that’s designed
                                    to transform travel programmes.
                                </p>
                            </div>
                            <div className="travel-technology-child">
                                <p>With the FCM Platform, you get:</p>
                            </div>
                            <div className="travel-technology-child">
                                <ul>
                                    <li>• Global consistency</li>
                                    <li>• Personalised user experience</li>
                                    <li>• Alternative approach to innovation</li>
                                    <li>• Actionable insights</li>
                                </ul>
                            </div>
                            <div className="travel-technology-child">
                                <Image
                                    src={techimg}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>

                </div>




                <div className="welcomepage-child">

                    <div className="img-content-container">
                        <div className="programmes-tiltle">
                            <h1>Company travel strategy that keeps everyone…</h1>
                        </div>
                        <div className='company-content-parent'>
                            <div className='company-content-child'>
                                <div className='company-content-logo-parent'>
                                    <Image
                                        src={contentlogo1}
                                        alt='logo'
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />

                                </div>
                                <div className='company-content-logo-child'>

                                    <h2>Safe & Productive</h2>
                                    <p>Keep travellers safe and everyone productive,
                                        even if there are bumps in the road. We'll assist
                                        with robust travel and duty of care policies and
                                        practical pointers to experienced teams, speedy
                                        reports and customisable tech.</p>
                                </div>

                            </div>


                            <div className='company-content-child'>
                                <div className='company-content-logo-parent'>
                                    <Image
                                        src={contentlogo2}
                                        alt='logo'
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />

                                </div>
                                <div className='company-content-logo-child'>

                                    <h2>On-budget</h2>
                                    <p>Maximising ROI on your travel spend is critical, so
                                        our technology, teams, and guidance are designed
                                        to deliver optimum value. Plus, with decades of
                                        experience behind us, we have the best-in-market
                                        content and deals.</p>
                                </div>

                            </div>


                            <div className='company-content-child'>
                                <div className='company-content-logo-parent'>
                                    <Image
                                        src={contentlogo3}
                                        alt='logo'
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />

                                </div>
                                <div className='company-content-logo-child'>

                                    <h2>Thinking ahead</h2>
                                    <p>Stay ahead of disruption with real-time
                                        information, so business trips stay seamless, and
                                        your programme is adaptable to change. You’ll
                                        have a say in our technology roadmap, futureproofing your stack and priorities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="welcomepage-child">
                    <div className="welcome-footer">
                        <p>Copyright © 2024 FCM . All Rights Reserved</p>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Welcome



