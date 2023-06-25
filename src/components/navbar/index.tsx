import logo from "@/assets/logobody.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  const [member, setMember] = useState(false);
  return (
    <nav>
      <div className={`${flexBetween} py-6 bg-teal-100 p-6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          <div className={`${flexBetween} w-56 gap-8`}>
            <img src={logo} />
            <p className="text-center w-56"> MT Body Worx</p>
          </div>
          {
            // todo: hamburger menu
          }
          <div className={`${flexBetween} gap-16 text-sm`}>
            <Link to={"/"}>Home</Link>
            <Link to={"benefits"}>Benefits</Link>
            <Link to={"ourclasses"}>Our Classes</Link>
            <Link to={"contactus"}>Contact Us</Link>
          </div>
          <button className="w-52 rounded-full border-4 border-fuchsia-500 border-double hover:bg-fuchsia-200">
            {member ? "Sign In" : "Become a member"}
          </button>
        </div>
      </div>
    </nav>
  );
}
