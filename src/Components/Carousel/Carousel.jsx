import React, { useState, useEffect } from "react";
import { imagesDB } from "../imagesDB";

import "./Carousel.scss";

const Carousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [refresh, setRefresh] = useState(true);
  const [direction, setDirection] = useState("right");
  const [nextImage, setNextImage] = useState(1);
  const [prevImage, setPrevImage] = useState(imagesDB.length - 1);

  const handleNext = () => {
    if (selectedImage === imagesDB().length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImage === 0) {
      setSelectedImage(imagesDB().length - 1);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const refreshSlide = () => {
    setRefresh(false);
    setTimeout(() => {
      setRefresh(true);
    }, 100);
  };

  const category = imagesDB().filter((image) => image.event === "Wedding");
  console.log(imagesDB()[selectedImage].img);
  return (
    <div className="carousel-container">
      <h1 className="gallery-title">Gallery</h1>
      <div className="main-img-container">
        {/* <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            handlePrevious();
            refreshSlide();
            setDirection("left");
          }}
        /> */}

        <img
          src={imagesDB()[selectedImage].img}
          alt="The house from the offer."
          className="main-img"
        />

        {/* <ArrowForwardIosIcon
          className="forward-arrow"
          onClick={() => {
            handleNext();
            refreshSlide();
            setDirection("right");
          }}
        /> */}
      </div>
      <div className="images-container">
        {imagesDB().map((item, index) => (
          <img
            onClick={() => setSelectedImage(index)}
            src={item.img}
            srcSet={item.img}
            alt={item.event}
            loading="lazy"
            className="each-image"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
