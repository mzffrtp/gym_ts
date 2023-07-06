import { IFormInput } from "@/shared/types/form-types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    formState: { errors },
  } = useForm<IFormInput>();
  return (
    <div className="mt-10 justify-between gap-8 md:flex">
      <motion.div
        className="mt-10 basis-3/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form
          target="_blank"
          action="https://formsubmit.co/mzffr.tpgl@gmail.com"
          method="POST"
        >
          <input
            className=""
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-primary-500">
              {errors.name.type === "required" && "This field is required!"}
              {errors.name.type === "maxLength" &&
                "Max length is 20 charracters!"}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
