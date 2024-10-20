import { auth } from "../auth";
import { fetchNotice } from "../actions/notice/data";
import { fetchAuthenticatedUser, fetchCommission, fetchMembership } from "../actions/user/data";
import Image from "next/image";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";
import logo from "@/public/logo1.png";
import bgimg from "@/public/home-page/bgimg.png";
import icon1 from "@/public/home-page/icon1.png";
import icon2 from "@/public/home-page/icon2.png";
import icon3 from "@/public/home-page/icon3.png";
import icon4 from "@/public/home-page/icon4.png";
import img1 from "@/public/home-page/img1.png";
import img2 from "@/public/home-page/img2.png"

export const dynamic = "force-dynamic"

import Dogglewindow from "@/components/doggleWindow/Dogglewindow";
import Navbar from "@/components/navBar/Navbar";
import Link from "next/link";

const page = async () => {

    const { user } = await auth();
    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const notice = await fetchNotice() || [];
    const { allCommission, userCommission } = await fetchCommission();


    const memberShipLevel = await fetchMembership();


    return (
        <>
            <div className="main-home-wrapper">
                <Navbar />
                <div className="main-home">
                    <div className="bg-img">
                        <Image
                            src={bgimg}
                            alt="bg img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>

                    <div className="home-main-container">
                        <div className="home-content-parent">
                            <div className="home-content-child">
                                <div className="logo-panel">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="home-content-child">
                                <div className="text-panel">
                                    <h3>FCM Travel in Australia</h3>
                                    <p>FCM is the trusted market leader in Australia. We
                                        worked hard to get here and we work hard every
                                        day to stay here.</p>
                                </div>
                            </div>
                        </div>


                        <div className="home-cards-parent">
                            <div className="home-cards-child">

                                <div className="home-cards-sub-child">
                                    <div className="card-icon">
                                        <Link href={"/dashboard/booking"}>
                                            <Image
                                                src={icon1}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-name">
                                        <p>Booking</p>
                                    </div>
                                </div>

                                <div className="home-cards-sub-child">
                                    <div className="card-icon">
                                        <Link href={"/dashboard/recharge"}>
                                            <Image
                                                src={icon2}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-name">
                                        <p>Recharge</p>
                                    </div>
                                </div>
                                <div className="home-cards-sub-child">
                                    <div className="card-icon">
                                        <Link href={"/dashboard/withdrawal"}>
                                            <Image
                                                src={icon3}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-name">
                                        <p>Withdraw</p>
                                    </div>
                                </div>
                                <div className="home-cards-sub-child">
                                    <div className="card-icon">
                                        <Link href={"/dashboard/invite"}>
                                            <Image
                                                src={icon4}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </Link>
                                    </div>
                                    <div className="card-name">
                                        <p>Invitation code</p>
                                    </div>
                                </div>
                            </div>


                            <Dogglewindow memberShipLevel={JSON.parse(JSON.stringify(memberShipLevel))} />


                        </div>

                        <div className="home-contents-container">
                            <div className="home-contents-parent">
                                <div className="home-contents-child">
                                    <div className="img-content">
                                        <Image
                                            src={img1}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content-heading">
                                        <h1>Our expertise</h1>
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content">
                                        <p>FCM Australia was named Leading TMC for Oceania at
                                            the World Travel Awards 2020.
                                            The TMC was named one of the 10 most innovative
                                            professional services firms of 2019 by Australian
                                            Financial Review. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-contents-parent">
                                <div className="home-contents-child">
                                    <div className="img-content1">
                                        <Image
                                            src={img2}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content-heading">
                                        <h1>Local services</h1>
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content">
                                        <div className="content-sub">
                                            <p>FCM Australia offers many corporate travel and
                                                expense management services including: </p>
                                            <p>• 24/7 emergency assistance</p>
                                            <p>• Best in market technology </p>
                                            <p>• Corporate travel policy advice </p>
                                            <p>• Global travel buying power </p>
                                            <p>• Group bookings, and charter services  </p>
                                            <p>• Local and multinational support </p>
                                            <p>• Meetings, incentives, conferences and events (MICE) </p>
                                            <p>• Payment solutions </p>
                                            <p>• Traveller safety and security services </p>
                                            <p>• VIP executive service </p>
                                            <p>• Visa, passport and travel insurance assistance</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="home-contents-parent">
                                <div className="home-contents-child">
                                    <div className="img-content">
                                        <Image
                                            src={img3}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content-heading">
                                        <h1>Why we do it.</h1>
                                    </div>
                                </div>
                                <div className="home-contents-child">
                                    <div className="content">
                                        <p>We want to share our excitement for Australia’s beautiful
                                            places and hope to inspire both backpackers visiting for
                                            the first time, and Australians and New Zealanders who
                                            have lived here all their lives, to seek out all the places
                                            and adventures this part of the world has to offer.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="welcome-footer-container">
                            <div className="welcome-footer">
                                <p>Copyright © 2024 FCM . All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SecurityCheck
                user={JSON.parse(JSON.stringify(user))}
                authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
            />
        </>
    )
}

export default page