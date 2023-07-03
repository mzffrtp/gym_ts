import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/action-button/action-button";
import AnchorLink from "react-anchor-link-smooth-scroll";

import gymlogo from "@/assets/gymlogo.png";
import homepic from "@/assets/workout1.png";
import jupiter from "@/assets/jupiter.png";
import winn from "@/assets/winn.png";
import angle from "@/assets/angle.png";

import { SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";

type HomePagePropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function HomePage({ setSelectedPage }: HomePagePropsType) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-max md:pb-0">
      {/* image and main header */}

      <motion.div
        className="mx-auto w-5/6 itmes-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Home);
        }}
      >
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            className="md:-mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before::-left-20 before:z-[-1] ">
                <img alt="home page text" src={gymlogo} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled training for fitness. You are very near to get your{" "}
              <span>DREAM Body</span>!
            </p>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
          </motion.div>
        </div>
        {/* image */}
        <div className="flex baisis:3/5 md:h-[25rem] md:w-[35rem] justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <motion.img
            whileHover={{
              y: -10,
              x: 150,
              rotate: -10,
              transition: { duration: 0.4 },
            }}
            alt="home image"
            src={homepic}
          />
        </div>
      </motion.div>
      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[15rem] w-full py-8 bg-primary-100">
          <div className="mx-auto w-5/6">
            <p className="text-2xl mb-3 underline">Our Sponsors</p>
            <div className="flex w-3/5 items-center justify-between gap-8 my-3">
              <div className="flex flex-col align-middle gap-3 items-center">
                <img alt="Jupiter" src={jupiter} className="h-16" />
                <p className="text-xl font-bold">Jupiter</p>
              </div>
              <div className="flex flex-col align-middle gap-3 items-center">
                <img alt="winn" src={winn} className="h-16" />
                <p className="text-xl font-bold">Winn</p>
              </div>
              <div className="flex flex-col align-middle gap-3 items-center">
                <img className="h-16" alt="angle" src={angle} />
                <p className="text-xl font-bold">Angle</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
