import HText from "@/shared/header-text";
import { SelectedPage } from "@/shared/types/other-types";
import { motion } from "framer-motion";
import Benefit from "./components/benefit/benefit";
import GrapDes from "./components/graphic-defination";
import BenBtn from "./components/benefit-buttons";

type BenefitsPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function Benefits({ setSelectedPage }: BenefitsPropsType) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}

        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>NOT JUST A SIMPLE GYM</HText>
          <p className="text-justify mt-3">
            We provide top-notch equipment, expert trainers, and diverse classes
            to help you effortlessly reach your fitness goals. With a focus on
            individual well-being, we offer personalized attention to your
            specific needs and track your progress.
          </p>
        </motion.div>
        {/* benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Benefit setSelectedPage={setSelectedPage} />
        </motion.div>
        {/* page pic and description */}
        <GrapDes />
        {/* buttons */}
        <BenBtn setSelectedPage={setSelectedPage} />
      </motion.div>
    </section>
  );
}
