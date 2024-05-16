import "./App.css";
import hero from "./assets/hero.svg";
import Card from "./cards/Card";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import Box from "./boxs/Box";

const App = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar container">
          <li>Works</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
      </div>

      <div className="hero_page">
        <div className="hero container">
          <div>
            <h1>
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="btn-resume">Download Resume</button>
          </div>
          <div className="hero-img">
            <img src={hero} alt="img" />
          </div>
        </div>
      </div>

      <Box />

      <Card />

      <div className="footer">
        <div className="footer_images container">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
        <p className="container">Copyright ©2020 All rights reserved </p>
      </div>
    </>
  );
};

export default App;
