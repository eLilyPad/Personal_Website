import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import image1 from "../media/Elizabeth Bryce.jpg";
import image2 from "../media/pog2.png";
import image3 from "../media/Screenshot 2022-11-01 at 09.48.28.png";
import image4 from "../media/Screenshot 2022-11-22 at 12.57.19.png";

const GalleryData = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];

function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  function nextSlide() {
    if (current === slideLength - 1) setCurrent(0);
    else setCurrent(current + 1);
  }
  function prevSlide() {
    if (current === 0) setCurrent(slideLength - 1);
    else setCurrent(current - 1);
  }

  if (!Array.isArray(slides) || slideLength <= 0) return null;

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {GalleryData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="portfolio image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
}

export default function Gallery() {
  return (
    <section id="Gallery">
      <ImageSlider slides={GalleryData} />
    </section>
  );
}
