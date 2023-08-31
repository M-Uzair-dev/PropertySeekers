import React from "react";
import mainpic from "./images/webpic.png";
import "./mainpage.css";

const Mainpage = () => {
  return (
    <>
      <div className="mainpage">
        <div className="content">
          <div className="texts">
            <h1 className="mainheading">
              <span style={{ color: "rgb(50, 164, 230)" }}>Homefind</span>, The
              Real Estate Experts You Can Trust.
            </h1>
            <p className="paragraph" style={{ cursor: "default" }}>
              Homefind is your one-stop shop for all things real estate. Our
              experienced agents can help you find the perfect home for your
              needs and budget. We offer services either you want to buy or sell
              your house
            </p>
          </div>
          <p className="youarehere" style={{ cursor: "default" }}>
            You are here to :
          </p>
          <div className="buttonsmain">
            <button className="shine2">Buy</button>
            <button className="shine2">Sell</button>
          </div>
          <div className="acievements">
            <div className="acievement">
              <h1>
                300<span style={{ color: "rgb(50, 164, 230)" }}>+</span>
              </h1>
              <p>Projects</p>
            </div>
            <div className="acievement second">
              <h1>
                900<span style={{ color: "rgb(50, 164, 230)" }}>+</span>
              </h1>
              <p>Clients</p>
            </div>
            <div className="acievement">
              <h1>
                20<span style={{ color: "rgb(50, 164, 230)" }}>+</span>
              </h1>
              <p>Awards</p>
            </div>
          </div>
        </div>
        <div className="mainimage">
          <img src={mainpic} alt="mainpic" />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
