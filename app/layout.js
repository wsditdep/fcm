import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/auth.scss";
import "./styles/appLayout.scss";
import "./styles/styles.scss";
import "./styles/global.scss";
import { toast, Toaster } from 'react-hot-toast';
import LiveSupport from '@/components/liveSupport/LiveSupport';
import favicon from "@/public/faviconV2.png";

export const metadata = {
  title: "Welcome-FCM Travel Solutions",
  description: "",
  icons: {
    icon: {
      url: { favicon },
      type: "image/png",
    },
    shortcut: { url: "/faviconV2.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
      </head>
      <body>

        <Toaster
          containerStyle={{
            position: 'fixed',
            top: '60%',
            transform: 'translateY(-50%)',
          }}
          toastOptions={{
            duration: 1000,
            className: '',
            style: {
              display: 'grid',
              placeItems: 'center',
              textAlign: 'center',
              fontSize: '1.35rem',
              borderRadius: '2rem',
              padding: '3rem',
            },
            success: {
              style: {
                color: 'green',
              },
              icon: (
                <div className="img-container" style={{ paddingBottom: '2rem' }}>
                  <img
                    src="/logo.png"
                    alt="Success Icon"
                    style={{ width: '10rem', height: 'auto' }}
                  />
                </div>
              ),
            },
            error: {
              style: {
                color: 'red',
              },
              icon: (
                <div className="img-container" style={{ paddingBottom: '2rem' }}>
                  <img
                    src="/logo.png"
                    alt="Success Icon"
                    style={{ width: '10rem', height: 'auto' }}
                  />
                </div>
              ),
            },
          }}
          gutter={50}
        />



        <div className="platform-layout-parent">
          <div className="platform-layout-childs">
            {children}
          </div>
        </div>
        <LiveSupport />
      </body>
    </html>
  );
}
