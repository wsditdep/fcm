"use client";

import Link from "next/link";
import { useState } from 'react';
import { useFormStatus } from "react-dom";
import { logout, resetPassword } from "@/app/actions/user/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";


function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Change Security PIN"}</button>
        </>
    )
}

const changePassword = () => {
    const { push } = useRouter();

    const [isShow, setIsShow] = useState(false);

    const handleForm = async (formData) => {
        try {
            const response = await resetPassword(formData);

            if (response.status === 201) {
                toast.success(response.message);
                await logout();
                push('/');
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="auth-section-parent">
                <Breadcrumb title="Security Center" link="/dashboard" />

                <section className="auth-section bgColor">
                    <div className="auth-wrapper security-crenter-wrapper">

                        <div className="security-tab">
                            <Link href="/dashboard/recovery/changePassword">
                                <button className="security-tab-active">Login Password</button>
                            </Link>
                            <Link href="/dashboard/recovery/changePin">
                                <button>Withdraw PIN</button>
                            </Link>
                        </div>
                        <div className="security-tab-parent">
                        </div>
                        <div className="security-section-parent">
                            <form action={handleForm}>
                                <div className="security-section-child">
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>Old Password</label>

                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="old_password"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>
                                    </div>
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>New Password</label>
                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="new_password"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>

                                    </div>
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>Confirm Password</label>

                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="confirm_password"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>

                                    </div>
                                    <div className="app-form-group">
                                        <div className="change-btn">
                                            <Submit />
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div className="pwd-footer-container">
                    <div className="pwd-footer">
                        <p>Copyright © 2024 FCM . All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default changePassword