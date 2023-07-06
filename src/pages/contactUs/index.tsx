import HText from "@/shared/header-text";
import { SelectedPage } from "@/shared/types/other-types";
import { motion } from "framer-motion";
import Form from "./components/form/form";

type ContactUsPropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};
export default function ContactUs({ setSelectedPage }: ContactUsPropsType) {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50, y: -50 },
            visible: { opacity: 1, x: 0, y: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN US</span> AND GET IN SHAPE
          </HText>
          <p className="my-5">
            Achieve your fitness goals with our expert trainers, motivating
            atmosphere, and top-notch facilities. Start your transformation
            today for a healthier, stronger, and more confident you.
          </p>
        </motion.div>
        <Form />
      </motion.div>
    </section>
  );
}
