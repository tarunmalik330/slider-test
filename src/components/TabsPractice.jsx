import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TabsPractice = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = parseInt(queryParams.get("tab")) || 1;

  const [openTab, setOpenTab] = useState(initialTab);

  useEffect(() => {
    setOpenTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (tabIndex) => {
    setOpenTab(tabIndex);
    navigate(`?tab=${tabIndex}`);
  };

  return (
    <div className="container xl:max-w-[1164px] mx-auto px-4 py-14">
      <h1 className="text-black xl:text-6xl sm:text-4xl text-2xl font-bold text-center mb-8">
        Tabs
      </h1>
      <ul className="flex gap-16 justify-center pb-8">
        <li>
          <Link
            className={`text-[30px] font-bold ${
              openTab === 1 ? "text-orange" : "text-black"
            }`}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(1);
            }}
          >
            Tab-1
          </Link>
        </li>
        <li>
          <Link
            className={`text-[30px] font-bold ${
              openTab === 2 ? "text-orange" : "text-black"
            }`}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(2);
            }}
          >
            Tab-2
          </Link>
        </li>
        <li>
          <Link
            className={`text-[30px] font-bold ${
              openTab === 3 ? "text-orange" : "text-black"
            }`}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(3);
            }}
          >
            Tab-3
          </Link>
        </li>
        <li>
          <Link
            className={`text-[30px] font-bold ${
              openTab === 4 ? "text-orange" : "text-black"
            }`}
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(4);
            }}
          >
            Tab-4
          </Link>
        </li>
      </ul>
      <div className={openTab === 1 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-slate-100 rounded-sm flex items-center justify-center">
          <p className="text-center font-bold text-[32px] text-black">Tab-1</p>
        </div>
      </div>
      <div className={openTab === 2 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-slate-100 rounded-sm flex items-center justify-center">
          <p className="text-center font-bold text-[32px] text-black">Tab-2</p>
        </div>
      </div>
      <div className={openTab === 3 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-slate-100 rounded-sm flex items-center justify-center">
          <p className="text-center font-bold text-[32px] text-black">Tab-3</p>
        </div>
      </div>
      <div className={openTab === 4 ? "block" : "hidden"}>
        <div className="w-full h-[100px] bg-slate-100 rounded-sm flex items-center justify-center">
          <p className="text-center font-bold text-[32px] text-black">Tab-4</p>
        </div>
      </div>
    </div>
  );
};

export default TabsPractice;
