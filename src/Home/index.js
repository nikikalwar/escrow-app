import { Layout } from "../Layouts";
import "./index.css";
import "@lottiefiles/lottie-player";
export const Home = () => {
  return (
    <>
      <Layout>
        <div className="home-parent">
          <div className="glowing-parent">
            <div className="h-100">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_CH477GLlq5.json"
                background="transparent"
                speed="1"
                style={{ width: "100vh", height: "100vh" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="glowing-text-part">
              <h1> Who we are</h1>
              <br></br>

              <p>
                We were the first company to create online escrow over a decade
                ago.<br></br>
                We're leading the way in safe, reliable, and trustworthy escrow
                services <br></br>and will be for many years to come.
              </p>
            </div>
          </div>
        </div>
        <div className="row glowing-parent">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_ndt8zfny.json"
            background="#222"
            speed="1"
            style={{ width: "100vh", height: "100vh" }}
            loop
            autoplay
          ></lottie-player>
          <div className="glowing-text-part2">
              <h1>Your security is our priority</h1>
              <br></br>

              <p>Escrow uses the highest level of Internet Security and it is secured by 256 bits SSL security 
               <br></br>
               encryption to ensure that your information is comepletely protected from fraud.
              </p>
            </div>
        </div>
        
      </Layout>
    </>
  );
};
