import benefitsimage from "@/assets/benefitsimg.png";
import HText from "@/shared/header-text";
import { motion } from "framer-motion";

export default function GrapDes() {
  return (
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      <img
        className="mx-auto  w-[15rem] mt-3"
        alt="benefits image"
        src={benefitsimage}
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
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae
            vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat
            sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id
            pretium sapien proin integer nisl. Felis orci diam odio.
          </p>
          <p className="mb-5">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
