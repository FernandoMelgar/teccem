import React, { useState } from "react";
import { comData } from "./componentData/comData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const length = comData.length;
  console.log(length);

  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? length - 1 : currentImageIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === length - 1 ? 0 : currentImageIndex + 1
    );
  };

  if (!Array.isArray(comData) || comData.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="carousel">
        <FaArrowLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowRight className="right-arrow" onClick={nextSlide} />
        {comData.map((item, index) => {
          return (
            <div
              className={index === currentImageIndex ? "slide-active" : "slide"}
              key={index}
            >
              {index === currentImageIndex && (
                <div>
                  <div className="carouselimg-title">{item.title}</div>
                  <img src={item.image} alt="item.title" className="image" />
                  <p className="carousel-description">{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}
