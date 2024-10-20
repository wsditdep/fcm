"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Breadcrumb = ({ link, title, activeWithdrawalHistory, activeRechargeHistory }) => {

    const pathname = usePathname();
    const lastWord = pathname.split('/').filter(Boolean).pop();

    return (
        <div className="breadcrumb-wrapper">
            <div className="breadcrumb-wrapper-childs">
                <Link href={link}>
                    <i className="fa fa-angle-left"></i>
                </Link>
                <h2 className={lastWord === "support" ? "white" : ""}>{title}</h2>
            </div>
            <div className="breadcrumb-wrapper-childs">
                {
                    activeWithdrawalHistory && activeWithdrawalHistory
                        ?
                        <Link href="/dashboard/withdrawalHistory">
                            <i className="fa fa-history"></i>
                        </Link>
                        :
                        activeRechargeHistory && activeRechargeHistory
                            ?
                            <Link href="/dashboard/rechargeHistory">
                                <i className="fa fa-history"></i>
                            </Link>
                            :
                            <></>
                }
            </div>
        </div>
    )
}

export default Breadcrumb