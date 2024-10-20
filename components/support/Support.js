import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import Navbar from "@/components/navBar/Navbar";
import bgimg from "@/public/home-page/bgimg.png";
import headphone from "@/public/support-page/headphone.png"
import logo from "@/public/support-page/logo.png"


const Support = ({ setting }) => {
    return (
        <>
            <Navbar />
            <section>
                <div className="main-support">
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
                      
                                <Breadcrumb title="Contact Us" link="/dashboard" />
                                <div className="logo-center">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                     <Image
                                     className='support-img'
                                        src={headphone}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                    <h1>Contact Us via Whatsapp</h1>
                                    <p>Operation Hours: 10:00AM - 10:00PM</p>
                                    <p>(Mon - Sun)</p>
                                    <div className='support-button'>
                                        <button>Redirect to Whatsapp</button>
                                    </div>
                                </div>
                                <div className="support-footer-container">
                            <div className="support-footer">
                                <p>Copyright © 2024 FCM . All Rights Reserved.</p>
                            </div>
                        </div>
                            </div>
                      
                    </div>
                
            </section>



        </>
    )
}

export default Support