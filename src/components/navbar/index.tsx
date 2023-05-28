import { CircleStackIcon } from "@heroicons/react/24/outline"
import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "@/assets/logobody.png";

export default function Navbar () {
    const flexBetween = "flex items-center justify-between"
    return(
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 bg-teal-100`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                       <div className={`${flexBetween} gap-8`}>
                            <img  src={logo}/>
                            <p> MT Body Worx</p>
                       </div>
                       <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Classes</p>
                            <p>Contact Us</p>
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
