import { IFormInput } from "@/shared/types/form-types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { inputStyles } from "../../style/inputStyles";

export default function Form() {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    trigger,
    reset,
  } = useForm<IFormInput>();

  const validateAge = (value: number) => {
    if (value <= 18 || value > 99) {
      return "Invalid Age, you should be over 18 and below 99!";
    }
    return true;
  };

  const onSubmit = async (e: any) => {
    if (errors) {
      return;
    }
    const isValid = await trigger();
    !isValid && e.preventDefault;
    reset();
  };

  return (
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
        onSubmit={onSubmit}
      >
        <input
          className={inputStyles}
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
        <input
          className={inputStyles}
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="mt-1 text-primary-500">
            {errors.email.type === "required" && "This field is required!"}
            {errors.email.type === "pattern" && "Invalid email address!"}
          </p>
        )}
        <input
          className={inputStyles}
          type="number"
          placeholder="AGE"
          {...register("age", {
            validate: validateAge,
          })}
        />
        {errors.age && (
          <p className="mt-1 text-primary-500">{errors.age.message}</p>
        )}

        <textarea
          className={inputStyles}
          placeholder="MESSAGE"
          rows={4}
          cols={50}
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="mt-1 text-primary-500">
            {errors.message.type === "required" && "This field is required!"}
            {errors.message.type === "maxLength" &&
              "Text length should not be over 2000 caharacters!"}
          </p>
        )}
        <button
          type="submit"
          className="bg-secondary-500 rounded-lg mb-5 px-20 py-3 hover:text-white transition duration-500"
        >
          Submit
        </button>
        {isSubmitSuccessful && isSubmitted && (
          <p className="mt-1 text-primary-500"> Form submitted successfully!</p>
        )}
      </form>
    </motion.div>
  );
}
