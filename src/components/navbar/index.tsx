import logo from "@/assets/logobody.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 py-6 w-full bg-teal-100`}
      >
        <div className={` ${flexBetween}  mx-auto w-5/6`}>
          <div className={` ${flexBetween}  w-full gap-16`}>
            {/* Left side */}
            <div className={`${flexBetween} w-1/5 `}>
              <img src={logo} />
              <p className="text-center w-56"> MT Body Worx</p>
            </div>
            {/* Middle and Right side */}
            <div className={`${flexBetween} w-4/5 py-4`}>
              <div className={`${flexBetween} gap-16 text-sm`}>
                <Link to={"/"}>Home</Link>
                <Link to={"benefits"}>Benefits</Link>
                <Link to={"ourclasses"}>Our Classes</Link>
                <Link to={"contactus"}>Contact Us</Link>
              </div>
              <div className={`${flexBetween} gap-8`}>
                <button className="w-24 hover:bg-fuchsia-200 hover:rounded-full text-lg p-2">
                  Sign In
                </button>
                <button className="w-52 rounded-full bg-lime-300 hover:bg-fuchsia-200 text-lg p-2">
                  Become a member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
