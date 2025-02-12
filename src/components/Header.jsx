import { Link, NavLink } from "react-router-dom";
import assets from "../assets/assets";
import { CgArrowLongRight } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  return (
    <div className="w-[90%] md:w-[1200px] mx-[auto] mt-4">
      <div className="flex justify-between items-center bg-Hbg h-[76px] border border-[#197686] rounded-xl py-[12px] px-[16px]">
        <Link to="/">
          <img src={assets.logo} alt="" className="w-14 md:w-20" />
        </Link>

        {}
        <div className="hidden md:flex">
          <ul className="flex justify-between items-center text-[#B3B3B3] text-[18px] gap-8">
            <NavLink to="/" className="hover:text-white">
              Events
            </NavLink>
            <NavLink to="/attendee-details" className="hover:text-white">
              Attendee Details
            </NavLink>
            <NavLink to="/ticket-ready" className="hover:text-white">
              Ticket Ready
            </NavLink>
          </ul>
        </div>

        <div className="">
          <button className="flex justify-between items-center bg-[#FFFFFF] text-[#0A0C11] text-[16px] px-[16px] md:px-[24px] py-[12px] rounded-md gap-2 md:gap-4">
            MY TICKETS
            <CgArrowLongRight className="text-lg md:text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
