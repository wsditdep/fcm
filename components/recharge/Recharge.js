"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import bgimg from "@/public/withdraw-page/bgimg.png"

const Recharge = ({ user }) => {
    const amounts = [
        { value: "$ 50.00", numericValue: 50 },
        { value: "$ 100.00", numericValue: 100 },
        { value: "$ 200.00", numericValue: 200 },
        { value: "$ 1000.00", numericValue: 1000 },
        { value: "$ 3000.00", numericValue: 3000 },
        { value: "Others", numericValue: 0 }
    ];

    const [amountData, setAmountData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null); // Reset the active index if user types in a custom amount
    };

    return (
        <>
            <Breadcrumb title="Recharge" link="/dashboard" activeRechargeHistory={true} />
            <section className="transaction-section">
                <div className="transaction-box-wrapper">
                    <div className="transaction-current-balance">
                        <p>Assets Balance</p>
                        <h3>USDT {user?.balance?.toFixed(2) ?? 0}</h3>
                        <h5>*You will receive your withdrawal within an hour</h5>
                    </div>
                    <div className='bg-img'>
                        <Image
                            src={bgimg}
                            alt='img'
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                </div>

                <div className="withdrawal-input">
                    <p>Enter Amount to Deposit</p>
                    <div className='input-parent'>
                        <div className='input-child'>
                            <input
                                type="number"
                                placeholder="Enter the deposit amount"
                                value={amountData === 0 ? "" : amountData}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='input-child'>
                            {/* <h1>All</h1> */}
                        </div>
                    </div>
                </div>


                <div className="amount-options">
                    <div className="amount-option-parent">
                        {amounts.map((amount, index) => (
                            <div
                                className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                key={index}
                                onClick={() => handleClick(index, amount.numericValue)}
                            >
                                <h3>{amount.value}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="amount-submit-btn">
                    <Link href="/dashboard/support">
                        <button className="btn global-primary-btn">Deposit Now</button>
                    </Link>
                </div>
                <div className="welcome-footer-container">
                    <div className="welcome-footer">
                        <p>Copyright © 2024 FCM . All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Recharge;
