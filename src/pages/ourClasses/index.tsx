import HText from "@/shared/header-text";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Lesson from "./components/lesson/lesson";

type OurClassesPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function OurClasses({ setSelectedPage }: OurClassesPropsType) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 mt-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="text-justify py-5">
              No matter your fitness level, our gym classes are designed to
              inspire and empower you to reach your goals. Discover the joy of
              sweating it out with like-minded individuals, fostering a sense of
              camaraderie and friendly competition. With our carefully curated
              class schedule, you'll never get bored, as each session brings a
              new challenge to keep you engaged and motivated. Are you ready to
              step into our vibrant class atmosphere and unleash your full
              potential? Get ready for a fitness experience like no other.
            </p>
          </div>
        </motion.div>
        <Lesson />
      </motion.div>
    </section>
  );
}
