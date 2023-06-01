import { CircleStackIcon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "@/assets/logobody.png";
import { Link } from "react-router-dom";

export default function Navbar () {
    const flexBetween = "flex items-center justify-between"
    return(
        <nav>
            <div className={`${flexBetween} py-6 bg-teal-100`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                       <div className={`${flexBetween} gap-8`}>
                            <img  src={logo}/>
                            <p> MT Body Worx</p>
                       </div>
                       <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/benefits"}>Benefits</Link>
                            <Link to={"/ourclasses"}>Our Classes</Link>
                            <Link to={"/contactus"}>Contact Us</Link>
                        </div>
                        <div className={`${flexBetween} w-full gap-8`}>
                            <p>Sign In</p>
                            <button>Become a Member</button>
                        </div>

                       </div>

                    </div>

                </div>
            </div>

        </nav>
    )
}
