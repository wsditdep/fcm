
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Image from 'next/image';
import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import ValidateJourney from '@/components/journey/ValidateJourney';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import Navbar from "@/components/navBar/Navbar"
import bronzelevel from "@/public/journey-page/bronze-level.png"
import silverlevel from "@/public/journey-page/silver-level.png"
import goldlevel from "@/public/journey-page/gold-level.png"
import elitelevel from "@/public/journey-page/elite-level.png"

import contentlogo1 from "@/public/journey-page/contentlogo1.png";
import contentlogo2 from "@/public/journey-page/contentlogo2.png";
import contentlogo3 from "@/public/journey-page/contentlogo3.png";


export const dynamic = "force-dynamic";

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};

  return (
    <>
      <Navbar />
      <Breadcrumb title="Home page" link="/dashboard" />
      <section className="journey-section">

        <div className='journey-main-wrapper'>
          <div className='journey-main-parent'>
            <div className='journey-main-child'>

              <div className='journey-main-sub-child'>
                <div className='journey-level-tap-parent'>
                  <div className='journey-level-tap-child'>
                    <div className='level-img'>

                      {
                        user?.membership_level === "Basic Tour"
                          ?
                          <Image
                            src={bronzelevel}
                            alt='icon'
                            height={100}
                            width={100}
                            unoptimized
                          />
                          : user?.membership_level === "Silver Tour"
                            ? <Image
                              src={silverlevel}
                              alt='icon'
                              height={100}
                              width={100}
                              unoptimized
                            />
                            : user?.membership_level === "Gold Tour"
                              ? <Image
                                src={goldlevel}
                                alt='icon'
                                height={100}
                                width={100}
                                unoptimized
                              />
                              : user?.membership_level === "Elite Tour"
                                ? <Image
                                  src={elitelevel}
                                  alt='icon'
                                  height={100}
                                  width={100}
                                  unoptimized
                                />
                                :
                                <></>
                      }

                    </div>
                    <div className='level-text'>
                      <h3>Current Level</h3>
                    </div>
                  </div>
                  <div className='journey-level-tap-child'>
                    <div className='level'>
                      <h2>{user.membership_level}</h2>
                    </div>
                  </div>
                </div>
              </div>


              <div className='journey-main-sub-child'>
                <div className='journey-account-tap-parent'>
                  <div className='joureny-account-tap-child'>
                    <div className='order'>
                      <p>Order Amount</p>
                      <h1>{user?.today_order ?? ""}/{user?.daily_available_order ?? ""}</h1>
                    </div>
                  </div>
                  <div className='joureny-account-tap-child'>
                    <div className='balances'>
                      <p>Commission</p>
                      <h1>$ {user?.today_commission?.toFixed(2) ?? ""}</h1>
                    </div>
                    {/* <div className='balances'>
                      <p>Total Profit</p>
                      <h1>$ {user?.today_commission?.toFixed(2) ?? ""}</h1>
                    </div> */}
                    <div className='balances'>
                      <p>Account Balance</p>
                      <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='journey-main-sub-child'>
                <div className='journey-btn-parent'>
                  <div className='journey-btn-child'>
                    <div className="submit-btn">
                      <ValidateJourney />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='journey-main-child'>
              <div className='journey-next-main-parent'>

                <div className='journey-next-main-child'>
                  <div className='journey-img-content-parent'>
                    <div className='journey-img-content-child'>
                      <div className='journey-video-container'>
                        <video autoPlay loop muted playsInline width="100%" height="100%">
                          <source src="https://res.cloudinary.com/dn5zwro9j/video/upload/v1727226036/do0xvbm4uszrflbvo2mp.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='journey-next-main-child'>
                  <div className="img-content-container">
                    <div className='company-travel-head'>
                      <h2>Company travel strategy
                        that keeps everyone…</h2>
                    </div>
                    <div className='company-content-parent'>
                      <div className='company-content-child'>
                        <div className='company-content-logo-parent'>
                          <Image
                            src={contentlogo1}
                            alt='logo'
                            width={100}
                            height={100}
                          />
                          <div className='company-content-logo-child'>

                            <h2>Safe & Productive</h2>
                            <p>Keep travellers safe and everyone productive,
                              even if there are bumps in the road. We'll assist
                              with robust travel and duty of care policies and
                              practical pointers to experienced teams, speedy
                              reports and customisable tech.</p>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='company-content-parent'>
                      <div className='company-content-child'>
                        <div className='company-content-logo-parent'>
                          <Image
                            src={contentlogo2}
                            alt='logo'
                            width={100}
                            height={100}
                          />
                          <div className='company-content-logo-child'>

                            <h2>On-budget</h2>
                            <p>Maximising ROI on your travel spend is critical, so
                              our technology, teams, and guidance are designed
                              to deliver optimum value. Plus, with decades of
                              experience behind us, we have the best-in-market
                              content and deals.</p>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='company-content-parent'>
                      <div className='company-content-child'>
                        <div className='company-content-logo-parent'>
                          <Image
                            src={contentlogo3}
                            alt='logo'
                            width={100}
                            height={100}
                          />
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
                </div>
                <div className='journey-next-main-child'>
                  <div className='journey-note-parent'>
                    <div className='journey-note-child'>
                      <div className='note-title'>
                        <p>Important Notes</p>
                      </div>
                      <div className='note-contents'>
                        <ul>
                          <li>• Operation Hours: 10:00AM - 10:00PM (Mon - Sun)</li>
                          <li>• Should you need further details, please contact customer service</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='journey-next-main-child'>
                  <div className="welcome-footer-container">
                    <div className="welcome-footer">
                      <p>Copyright © 2024 FCM . All Rights Reserved.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section >
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page;