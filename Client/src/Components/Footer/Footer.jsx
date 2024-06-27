import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer>
      <div className="footercontent">
        <div className="footerleft">
          <div className="flogo ">
            <h1>Fladdra</h1>
            <img src={logo} />
          </div>
          <div className="fsocial">
            <a href="https://www.linkedin.com/company/fladdra" target="_blank">
            <FaLinkedin />
            </a>
            <FaYoutubeSquare />
            <FaSquareInstagram />
            <FaFacebookSquare />
            <FaSquareXTwitter />
          </div>
          <div className="fcontact">
            <div className="number">
              <MdOutlineLocalPhone /> <p> 9881109889</p>
            </div>
            <div className="mail">
              <MdOutlineAlternateEmail />
              <p>info@fladdra.com</p>
            </div>
          </div>
        </div>
        <div className="footerright">
          <div className="rightleft">
            <h3>Solutions</h3>
            <ol>
              <li>Data</li>
              <li>Cloud</li>
              <li>AI</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "20px" }}>Industries</h3>
            <ol>
              <li>Healthcare</li>
              <li>Financial Services</li>
              <li>Higher Education</li>
              <li>High-Tech</li>
              <li>B2C</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "10px" }}>Technology</h3>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
          </div>
          <div className="rightright">
            <h3>Partners</h3>
            <ol>
              <li>Adobe</li>
              <li>Google</li>
              <li>Salesforce</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "20px" }}>Who We Are</h3>

            <ol>
              <li>News</li>
              <li>Events</li>
              <li>Join The Team</li>
            </ol>
            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
            <h3 style={{ marginTop: "10px" }}>Our Thinking</h3>
            <ol>
              <li>Think Further Blog</li>
              <li>Further Education</li>
              <li>Resources</li>
            </ol>

            <div
              style={{
                backgroundColor: "white",
                width: "226px",
                height: "1.5px",
                marginTop: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
