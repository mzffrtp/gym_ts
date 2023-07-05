import benefitsimage from "@/assets/benefitsimg.png";
import HText from "@/shared/header-text";
import { motion } from "framer-motion";

export default function GrapDes() {
  return (
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      <motion.img
        className="mx-auto  w-[15rem] mt-3"
        alt="benefits image"
        src={benefitsimage}
        whileHover={{
          y: -20,
          x: 90,
        }}
      />
      <div>
        <div className="relative">
          <div className="before-absolute before:top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>Fitness Excellence Community!</HText>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="my-5 text-justify">
            Welcome to the Fitness Excellence Community, where extraordinary
            individuals like you come together to unlock their true potential
            and achieve unparalleled fitness greatness. Here, we celebrate the
            power of determination, passion, and perseverance. Join our vibrant
            community of like-minded individuals who share a common goal: to
            reach new heights of physical and mental strength.
          </p>
          <p className="mb-5 text-justify">
            As a member of our Fitness Excellence Community, you'll discover a
            whole new level of motivation and accountability. Our dedicated team
            of passionate fitness professionals will guide and challenge you,
            providing expert advice and unwavering support along your journey.
            With access to cutting-edge facilities and top-of-the-line
            equipment, you'll have all the tools you need to sculpt your dream
            physique and unleash your inner champion. Are you ready to join us
            on this transformative fitness adventure? Together, we'll redefine
            what it means to achieve Fitness Excellence.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
