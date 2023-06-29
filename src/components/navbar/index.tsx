import logo from "@/assets/logobody.png";
import Link from "../links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

type NavbarPropsType = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  selectedPage,
  setSelectedPage,
}: NavbarPropsType) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
  const [menuToogled, setMenuToogled] = useState<boolean>(false);
  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 py-6 w-full bg-teal-100`}
      >
        <div className={` ${flexBetween}  mx-auto w-5/6`}>
          <div className={` ${flexBetween}  w-full gap-16`}>
            {/* Left side */}
            <div className={`${flexBetween} text-xl `}>
              <img src={logo} />
              <p className="text-center w-56"> MT Body Worx</p>
            </div>
            {/* Middle and Right side */}

            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-4/5 py-4`}>
                <div className={`${flexBetween} gap-16 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
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
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setMenuToogled(!menuToogled);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
