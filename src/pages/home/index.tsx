import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/action-button/action-button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import gymlogo from "@/assets/gymlogo.png";
import homepic from "@/assets/workout1.png";
import { SelectedPage } from "@/shared/types";

type HomePagePropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function HomePage({ setSelectedPage }: HomePagePropsType) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* image and main header */}
      <div className="mx-auto w-5/6 itmes-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before::-left-20 before:z-[-1] ">
                <img alt="home page text" src={gymlogo} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled training for fitness. You are very near to get your{" "}
              <span>DREAM Body</span>now!
            </p>
          </div>
          {/* actions */}
          <div className="mt-8 flex items-center gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              {" "}
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-extrabold text-primary-500 underline hover:text-lg"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* image */}
        <div className="flex baisis:3/5 md:h-[25rem] md:w-[35rem] justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home image" src={homepic} />
        </div>
      </div>
      {/* sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img alt="redbul" src={"redbul"} />
              <img alt="sponsor 2" src={"redbul"} />
              <img alt="sponsor3" src={"redbul"} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
