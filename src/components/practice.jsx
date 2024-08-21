import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { SLIDEDATA } from "../utils/helper";
import nextarrow from "../assets/images/svg/next-arrow.svg";
import prevarrow from "../assets/images/svg/prev-arrow.svg";

const Practice = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  const sliderSettingsMain = {
    asNavFor: nav2,
    ref: sliderRef1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const sliderSettingsNav = {
    className: "nav-slider mt-9",
    asNavFor: nav1,
    ref: sliderRef2,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    focusOnSelect: true,
    dots: true,
    centerMode: true,
    centerPadding: "0",
    infinite: true,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
      <div className="bg-gray-200 py-5">
          <h1 className="text-black xl:text-6xl sm:text-4xl text-2xl font-bold text-center">Slick-Slider</h1>
      <div className="container mx-auto xl:max-w-[1100px] px-4 md:py-10 py-5 relative">
        <button
          className="absolute bottom-1/2 left-[-7%] xl:flex hidden cursor-pointer"
          onClick={() => sliderRef1?.current?.slickPrev()}
        >
          <img src={prevarrow} alt="prevarrow" />
        </button>
        <button
          className="absolute bottom-1/2 right-[-7%] xl:flex hidden cursor-pointer"
          onClick={() => sliderRef1?.current?.slickNext()}
        >
          <img src={nextarrow} alt="nextarrow" />
        </button>
        <Slider {...sliderSettingsMain}>
          {SLIDEDATA.map((obj, i) => (
            <div className="rounded-xl" key={i}>
              <img
                src={obj.img}
                alt={obj.title}
                className="w-full max-w-[1140px] h-full md:max-h-[692px] md:min-h-[692px] max-h-[490px] min-h-[490px] object-cover rounded-xl"
              />
            </div>
          ))}
        </Slider>
        <Slider {...sliderSettingsNav}>
          {SLIDEDATA.map((obj, i) => (
            <div key={i}>
              <img
                src={obj.img}
                alt={obj.title}
                className={`min-w-[92px] max-w-[92px] w-full h-full min-h-[82px] max-h-[82px] object-cover rounded-md transition-all ease-linear duration-300 ${
                  activeIndex === i
                    ? "border-2 border-orange border-solid shadow-custom"
                    : ""
                }`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Practice;
