// Step 1: Import React
import * as React from "react";
import { Header } from "../Components/Header/Header";

import "../app.scss";
import Layout from "../Components/Layout";
import Carousel from "../Components/Carousel/Carousel";
import stars from "../images/stars.svg";
import moon from "../images/moon.svg";
import vector1 from "../images/vector1.svg";
import vector2 from "../images/vector2.svg";
import vector3 from "../images/vector3.svg";
import vector4 from "../images/vector4.svg";
import vector5 from "../images/vector5.svg";
import vector6 from "../images/vector6.svg";
import event1 from "../images/group5.png";
import event2 from "../images/group6.png";
import event3 from "../images/group7.png";
import event4 from "../images/group8.png";
import dummySound from "../images/dummySound.png";
import funBackgroundIMG from "../images/Rectangle7.png";
import { AlbumEffect } from "../Components/Album-effect/AlbumEffect";

// Step 2: Define your component

const IndexPage = () => {
  const [scrollPosition, setScrollPosition] = React.useState(300);

  const handleScroll = (event) => {
    const position = window.pageYOffset;
    console.log(scrollPosition > 900);
    if (position > 900) {
      setScrollPosition(300);
    } else setScrollPosition(position + 300);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleClickScroll = () => {
    const element = document.getElementById("services");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log(scrollPosition);
  return (
    <Layout>
      <div className="home-page">
        <div className="stars-container">
          <div className="hero">
            <h1>Feel Free Events</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor ultricies sit
              condimentum molestie. Vestibulum dignissim dolor tincidunt at.{" "}
            </p>
            <button>Contacteaza-ne</button>
          </div>
          <img
            src={moon}
            className="moon"
            style={{ top: `${scrollPosition}px `, transition: "1s" }}
          ></img>
          {/* <img src={stars} alt="stars background" /> */}
          <h1 className="services" id="services">
            Servicii & Inchirieri
          </h1>
          <div className="vectorImg">
            <section className="sound">
              <h3>Sonorizare</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Porttitor ultricies sit
                condimentum molestie. Vestibulum dignissim dolor tincidunt at.
              </p>
              <ul>
                <li>
                  Pulvinar lectus facilisis dictum elementum vulputate purus
                  sed.{" "}
                </li>
                <li>
                  Tempus volutpat urna accumsan eget id viverra praesent
                  facilisi.{" "}
                </li>
                <li>
                  Vel mauris at tellus odio. Eu fermentum volutpat morbi feugiat
                  ac amet eu.
                </li>
                <li>
                  {" "}
                  Eu morbi semper potenti aliquam sagittis sit. In euismod diam
                  aliquet nibh sit et at libero blandit.
                </li>
              </ul>

              <div className="sound-images">
                <img src={dummySound}></img>
                <img src={dummySound}></img>
                <img src={dummySound}></img>
                <img src={dummySound}></img>
              </div>
              <button>Contacteaza-ne</button>
            </section>
          </div>
          <div></div>
          <section className="sound">
            <h3>Photobooth</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor ultricies sit
              condimentum molestie. Vestibulum dignissim dolor tincidunt at.
            </p>
            <ul>
              <li>
                Pulvinar lectus facilisis dictum elementum vulputate purus sed.{" "}
              </li>
              <li>
                Tempus volutpat urna accumsan eget id viverra praesent facilisi.{" "}
              </li>
              <li>
                Vel mauris at tellus odio. Eu fermentum volutpat morbi feugiat
                ac amet eu.
              </li>
              <li>
                {" "}
                Eu morbi semper potenti aliquam sagittis sit. In euismod diam
                aliquet nibh sit et at libero blandit.
              </li>
            </ul>
            {/* <ParallaxLayer offset={1}>
                <h2 style={{ color: "white", fontSize: "40px" }}>
                  Welcome to my website 2
                </h2>
              </ParallaxLayer> */}
            <div className="sound-images photobooth">
              {/* <img src={photobooth1} width={278} height={168}></img>
              <img src={photobooth2} width={278} height={168}></img>
              <img src={photobooth3} width={278} height={168}></img>
              <img src={photobooth4} width={278} height={168}></img> */}
              <AlbumEffect />
            </div>
            <button>Contacteaza-ne</button>
          </section>
          <section className="sound">
            <h3>Lumini și Scentotehnică</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor ultricies sit
              condimentum molestie. Vestibulum dignissim dolor tincidunt at.
            </p>
            <ul>
              <li>
                Pulvinar lectus facilisis dictum elementum vulputate purus sed.{" "}
              </li>
              <li>
                Tempus volutpat urna accumsan eget id viverra praesent facilisi.{" "}
              </li>
              <li>
                Vel mauris at tellus odio. Eu fermentum volutpat morbi feugiat
                ac amet eu.
              </li>
              <li>
                {" "}
                Eu morbi semper potenti aliquam sagittis sit. In euismod diam
                aliquet nibh sit et at libero blandit.
              </li>
            </ul>

            <div className="sound-images">
              <img src={dummySound}></img>
              <img src={dummySound}></img>
              <img src={dummySound}></img>
              <img src={dummySound}></img>
            </div>
            <button>Contacteaza-ne</button>
          </section>
        </div>
        <div className="vector-group">
          <img src={vector1} />
          <img src={vector2} />
          <img src={vector3} />
          <img src={vector4} />
          <img src={vector5} />
          <img src={vector6} />
        </div>
        <section className="events">
          <div className="overlay">
            <h1 className="event-title">Evenimentele noastre</h1>

            <div className="pictures-container">
              <img src={event1}></img>
              <img src={event2}></img>
              <img src={event3}></img>
              <img src={event4}></img>
            </div>
          </div>
        </section>
        <section className="fun">
          <div className="fun-container">
            <h1>Feel Free Events! Hai sa ne distram!</h1>
            <span className="rainbow"></span>
            <p>
              Lorem ipsum dolor sit amet consectetur. Porttitor ultricies sit
              condimentum molestie. Vestibulum dignissim dolor tincidunt at.
              Pulvinar lectus facilisis dictum elementum vulputate purus sed.
              Tempus volutpat urna accumsan eget id viverra praesent facilisi.
            </p>
            <button>Contacteaza-ne</button>
          </div>
          <img src={funBackgroundIMG} width={500} height={250} />
        </section>
      </div>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
