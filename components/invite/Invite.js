"use client";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import toast from "react-hot-toast";
import QRCode from 'qrcode.react';
import { useState } from "react";
import bgimg from "@/public/invite-page/bgimg.png";
import logo from "@/public/invite-page/logo.png";
import Image from 'next/image';

const Invite = ({ user }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    const [text, setText] = useState(process.env.NEXT_PUBLIC_REGISTER_URL || "");

    return (
        <>
            <section className="invitation-section">
                <div className="main-invite">
                    <div className="bg-img">
                        <Image
                            src={bgimg}
                            alt="bgimg"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="home-main-container">
                        <Breadcrumb title="Invitation" link="/dashboard" />
                        <div className="logo-center">
                            <Image
                                src={logo}
                                alt="logo"
                                height={100}
                                width={100}
                                unoptimized
                            />
                            <div className="qr-bg">
                                <QRCode value={text} size={256} />
                            </div>
                            <h1>Profile Referral Code</h1>
                            <p onClick={() => copyToClipboard(user?.invitation_code ?? "")}>{user?.invitation_code ?? ""} <i className="fa fa-file-alt"></i></p>
                            <div className='support-button'>
                                <button onClick={() => copyToClipboard(user?.invitation_code ?? "")}>Copy Referral Code</button>
                            </div>
                        </div>
                        <div className="invite-footer-container">
                            <div className="invite-footer">
                                <p> Copyright © 2024 FCM . All Rights Reserved</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Invite;