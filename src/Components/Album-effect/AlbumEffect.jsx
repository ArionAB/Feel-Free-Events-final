import React, { useState } from "react";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";
import img9 from "../../images/9.jpg";
import img10 from "../../images/10.jpg";
import rightArrow from "../../images/next-svgrepo-com.svg";
import leftArrow from "../../images/next-svgrepo-com.svg";

import "./AlbumEffect.scss";
import { imagesDB } from "../imagesDB";

export const AlbumEffect = () => {
  const [scale, setScale] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const handleScaleNext = () => {
    setScale("scale-right");
    setTimeout(() => {
      setScale("");
    }, 750);
    setImageIndex((prev) => {
      if (prev === imagesDB.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const handleScalePrevious = () => {
    setScale("scale-left");
    setTimeout(() => {
      setScale("");
    }, 750);
    setImageIndex((prev) => {
      if (prev === 0) {
        return imagesDB.length - 1;
      }
      return prev - 1;
    });
  };

  const img = imagesDB();

  return (
    <div className="card-container">
      <img
        src={leftArrow}
        onClick={handleScalePrevious}
        width={50}
        style={{ rotate: "180deg" }}
      ></img>
      <div className="card-group">
        <div className={`relative-card-container ${scale}`}>
          <div
            className="big-card card-one"
            style={{ backgroundImage: `url(${img[imageIndex].img})` }}
          >
            <img className="little-card little-one" src={img1}></img>
            <img className="little-card little-two" src={img2} />
          </div>
          <div
            className="big-card card-two"
            style={{ backgroundImage: `url(${img[imageIndex + 1].img})` }}
          ></div>
          <div
            className="big-card card-three"
            style={{ backgroundImage: `url(${img[imageIndex + 2].img})` }}
          >
            <img className="little-card little-three" src={img3} />
          </div>
          <div
            className="big-card card-four"
            style={{ backgroundImage: `url(${img[imageIndex + 3].img})` }}
          >
            <img className="little-card little-four" src={img4} />
          </div>

          <div className="little-card"></div>
          <div className="little-card"></div>
          <div className="little-card"></div>
        </div>
      </div>
      <img src={rightArrow} onClick={handleScaleNext} width={50}></img>
    </div>
  );
};
