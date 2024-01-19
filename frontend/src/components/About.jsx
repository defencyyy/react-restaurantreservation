import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>
              Tablo is a "table" for gathering. A space where communities are
              built and inspiring moments are shared.
            </p>
          </div>
          <p className="mid">
            Tablo Kitchen x Café is a community cafe and restaurant. Designed
            and created to be a place of creativity, community, and comfort
            food.
          </p>
          {/* <Link to={"menu"} spy={true} smooth={true} duration={500}>
          Explore Menu{"/react-restaurantreservation/frontend/public/TABLO QR MENU DEC 2023 NEW.pdf "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link> */}
          <a href="https://drive.google.com/file/d/1sMrACUVH50Dys16jr7OTCwJ1YbgzxCOu/view">
            Explore Menu
          </a>
        </div>
        <div className="banner">
          <div>
            <img src="table.jpg" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
