import { fetchContent } from "@/app/actions/content/data";
import Sidebar from "../sidebar/Sidebar";
import { fetchAuthenticatedUser } from '@/app/actions/user/data';


import logo from "@/public/logo.png";
import notifiicon from "@/public/sidebar/notifiicon.png";
import Image from "next/image";

const navbar = async () => {
    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const content = await fetchContent() || [];

    return (
        <div className="top-nav">

            <div className="top-nav-parent">

                <div className="dashboard-navigation">

                    <div className="dashboard-navigation-parent">
                        <Sidebar
                            session={JSON.parse(JSON.stringify(authenticatedUser))}
                            content={JSON.parse(JSON.stringify(content))}
                        />
                        <div className="dashboard-navigation-childs">
                            <div className="logo">
                                <Image
                                    src={logo}
                                    height={100}
                                    width={100}
                                    alt="logo"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="dashboard-navigation-childs">
                            <div className="notifi-icon">
                                <Image
                                    src={notifiicon}
                                    height={100}
                                    width={100}
                                    alt="logo"
                                    unoptimized
                                />
                            </div>
                            <div className="notifi-count">
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default navbar;
