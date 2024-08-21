// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import { SLIDEDATA } from "../utils/helper";
// import nextarrow from "../assets/images/svg/next-arrow.svg";
// import prevarrow from "../assets/images/svg/prev-arrow.svg";

// const Practice = () => {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   const sliderRef1 = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     setNav1(sliderRef1.current);
//   }, []);
//   const sliderSettingsMain = {
//     asNavFor: nav2,
//     ref: sliderRef1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="bg-gray-200 py-5">
//       <h1 className="text-black xl:text-6xl sm:text-4xl text-2xl font-bold text-center">
//         Slick-Slider
//       </h1>
//       <div className="container mx-auto xl:max-w-[1100px] px-4 md:py-10 py-5 relative">
//         <button
//           className="absolute bottom-1/2 left-[-7%] xl:flex hidden cursor-pointer"
//           onClick={() => sliderRef1?.current?.slickPrev()}
//         >
//           <img src={prevarrow} alt="prevarrow" />
//         </button>
//         <button
//           className="absolute bottom-1/2 right-[-7%] xl:flex hidden cursor-pointer"
//           onClick={() => sliderRef1?.current?.slickNext()}
//         >
//           <img src={nextarrow} alt="nextarrow" />
//         </button>
//         <Slider {...sliderSettingsMain}>
//           {SLIDEDATA.map((obj, i) => (
//             <div className="rounded-xl" key={i}>
//               <img
//                 src={obj.img}
//                 alt={obj.title}
//                 className="w-full max-w-[1140px] h-full md:max-h-[692px] md:min-h-[692px] max-h-[490px] min-h-[490px] object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </Slider>
//         <div className="flex justify-center gap-6">
//           {SLIDEDATA.map((obj, i) => (
//             <div key={i}>
//               <img
//                 src={obj.img}
//                 alt={obj.title}
//                 className={`min-w-[92px] max-w-[92px] w-full h-full min-h-[82px] max-h-[82px] object-cover rounded-md transition-all ease-linear duration-300 ${
//                   activeIndex === i
//                     ? "border-2 border-orange border-solid shadow-custom"
//                     : ""
//                 }`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Practice;

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { SLIDEDATA } from "../utils/helper";
import nextarrow from "../assets/images/svg/next-arrow.svg";
import prevarrow from "../assets/images/svg/prev-arrow.svg";

const Practice = () => {
  const [nav1, setNav1] = useState(null);
  const sliderRef1 = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setNav1(sliderRef1.current);
  }, []);

  const sliderSettingsMain = {
    asNavFor: nav1,
    ref: sliderRef1,
    arrows: false,
    dotes: true,
    fade: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const handleTabClick = (index) => {
    sliderRef1.current.slickGoTo(index);
    setActiveIndex(index);
  };

  return (
    <div className="bg-gray-200 py-5">
      <h1 className="text-black xl:text-6xl sm:text-4xl text-2xl font-bold text-center">
        Slick-Slider
      </h1>
      <div className="container mx-auto xl:max-w-[1100px] px-4 md:py-10 py-5 relative">
        <button
          className="absolute xl:bottom-1/2 lg:bottom-[16%] md:bottom-[26%] sm:bottom-[30%] min-[376px]:bottom-[31%] bottom-[40%] xl:left-[-7%] left-1/2 cursor-pointer ps-2 z-[1]"
          onClick={() => sliderRef1?.current?.slickPrev()}
        >
          <img
            src={prevarrow}
            alt="Previous Arrow"
            className="sm:max-w-[56px] sm:max-h-[56px] max-w-10 max-h-10"
          />
        </button>
        <button
          className="absolute xl:bottom-1/2 lg:bottom-[16%] md:bottom-[26%] sm:bottom-[30%] min-[376px]:bottom-[31%] bottom-[40%] xl:right-[-7%] right-1/2 cursor-pointer pe-2 z-[1]"
          onClick={() => sliderRef1?.current?.slickNext()}
        >
          <img
            src={nextarrow}
            alt="Next Arrow"
            className="sm:max-w-[56px] sm:max-h-[56px] max-w-10 max-h-10"
          />
        </button>
        <Slider className="pb-12 sm:pt-0" {...sliderSettingsMain}>
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
        <div className="flex justify-center flex-wrap sm:gap-6 gap-3 xl:mt-6 mt-10">
          {SLIDEDATA.map((obj, i) => (
            <div
              key={i}
              className={`cursor-pointer p-2 rounded-md transition-all ease-linear duration-300 ${
                activeIndex === i
                  ? "border-2 border-orange border-solid shadow-custom"
                  : "border-2 border-transparent border-solid"
              }`}
              onClick={() => handleTabClick(i)}
            >
              <img
                src={obj.img}
                alt={obj.title}
                className="xl:min-w-[135px] xl:max-w-[135px] xl:min-h-[110px] xl:max-h-[110px] min-w-[92px] max-w-[92px] w-full h-full min-h-[82px] max-h-[82px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Practice;
