"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Confirm"}</button>
        </>
    )
}

const LinkWallet = ({ user }) => {
    const { push, refresh } = useRouter();

    const [selectedNetworkOption, setSelectedNetworkOption] = useState("TRC 20");

    const handleNetworkOptionChange = (e) => {
        setSelectedNetworkOption(e.target.value);
    };


    const handleForm = async (formData) => {
        try {

            formData.append("id", user?._id);
            formData.append("network_type", selectedNetworkOption);

            const response = await createWallet(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard/withdrawal');
                refresh();
                return;
            } else {
                return toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setSelectedNetworkOption(user?.network_type ?? "TRC 20")
    }, [])

    return (


        <>
            <Breadcrumb title="Wallet Info" link="/dashboard" />
            <section className="link-wallet-section">

                <div className="wallet-section-wrapper">
                    <form action={handleForm}>
                        <div className="wallet-section-parent">
                            <div className="wallet-head-content">
                                <p>Dear user to protect your funds, please make sure
                                    you enter the correct and completed information</p>
                            </div>
                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Customer Name</p>
                                    <input
                                        type="text"
                                        placeholder="Type Full Name"
                                        name="customer_name"
                                        defaultValue={user?.customer_name ?? ""}
                                        required
                                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>

                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Wallet Name</p>
                                    <input
                                        type="text"
                                        placeholder="Type Wallet Name"
                                        name="wallet_name"
                                        defaultValue={user?.wallet_name ?? ""}
                                        required
                                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>

                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Wallet Address</p>
                                    <input
                                        type="text"
                                        placeholder="Type Wallet Address"
                                        name="wallet_address"
                                        defaultValue={user?.wallet_address}
                                        required onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>

                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Network</p>
                                    <div className="cus-radio-btn-wrapper">
                                        <div className="radio-btn-parent">
                                            <div className="radio-btn-child">
                                                <input className="radio"
                                                    type="radio"
                                                    name="network_type"
                                                    value="TRC 20"
                                                    checked={selectedNetworkOption === "TRC 20"}
                                                    onChange={(e) => handleNetworkOptionChange(e)}
                                                />
                                                <span>TRC 20</span>
                                            </div>
                                            <div className="radio-btn-child">
                                                <input className="radio"
                                                    type="radio"
                                                    name="network_type"
                                                    value="ERC 20"
                                                    checked={selectedNetworkOption === "ERC 20"}
                                                    onChange={(e) => handleNetworkOptionChange(e)}
                                                />
                                                <span>ERC 20</span>
                                            </div>
                                            <div className="radio-btn-child">
                                                <input className="radio"
                                                    type="radio"
                                                    name="network_type"
                                                    value="BTC"
                                                    checked={selectedNetworkOption === "BTC"}
                                                    onChange={(e) => handleNetworkOptionChange(e)}
                                                />
                                                <span>BTC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Phone Number</p>
                                    <input
                                        type="number"
                                        placeholder="Type Phone No"
                                        name="phone_number"
                                        defaultValue={user?.phone_number}
                                        required onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>




                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <div className="app-form-group">
                                        {
                                            user?.network_type === null
                                                ?
                                                <Submit />
                                                :
                                                <></>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="welcome-footer-container">
                    <div className="welcome-footer">
                        <p>Copyright © 2024 FCM . All Rights Reserved.</p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default LinkWallet