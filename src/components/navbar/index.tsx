import logo from "@/assets/logobody.png";
import Link from "../links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ActionButton from "@/shared/action-button/action-button";
import MobilMenuModal from "./mobil-menu-modal";

type NavbarPropsType = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

export default function Navbar({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarPropsType) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px");
  const [menuToogled, setMenuToogled] = useState<boolean>(false);
  const navbarBg = isTopOfPage ? "" : "bg-cyan-200 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBg} ${flexBetween} fixed top-0 z-30 py-6 w-full`}
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => {
                  setMenuToogled(!menuToogled);
                  console.log("hamburger menu tiklandi");
                  console.log("menu toogled", menuToogled);
                }}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobil menu modal */}
      {!isAboveMediumScreens && menuToogled && (
        <MobilMenuModal
          setMenuToogled={setMenuToogled}
          menuToogled={menuToogled}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </nav>
  );
}
