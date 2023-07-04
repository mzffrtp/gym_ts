import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type BenefitPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function Benefit({ setSelectedPage }: BenefitPropsType) {
  return (
    <>
      <motion.div
        variants={container}
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-infrastructure-gig-economy-flaticons-flat-flat-icons.png" />
          </div>
        </div>

        <h4 className="font-bold">Modern and advanced infrastructure</h4>
        <p className="my-3">
          Our contemporary infrastructure offers cutting-edge facilities,
          equipped with the latest technology and advanced features, ensuring a
          modern and efficient experience.
        </p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
      <motion.div
        variants={container}
        className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      >
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-fitness-fitness-and-healthy-living-flaticons-lineal-color-flat-icons-2.png" />
          </div>
        </div>

        <h4 className="font-bold">Endless options for a diverse journey!</h4>
        <p className="my-3">
          Dive into a world of fitness possibilities! Explore diverse classes,
          stay motivated, and reach your goals. Join us on a thrilling fitness
          journey today! Do not hesistate!
        </p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
      <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-coach-running-flaticons-lineal-color-flat-icons-2.png" />
          </div>
        </div>

        <h4 className="font-bold">Skilled Fitness Coaches</h4>
        <p className="my-3">
          Receive personalized attention and expert advice from our team of pro
          trainers, ensuring you receive the support and motivation needed to
          maximize your results.
        </p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
    </>
  );
}
