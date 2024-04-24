"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import { TbMessages } from "react-icons/tb";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <SectionHeading name="Contact Me" />
        <TbMessages className="text-3xl -translate-y-4" />
      </div>
      <p className="text-gray-800 text-lg font-medium">
        Please get in touch with me directly at{" "}
        <a
          href="mailto:soham.gupta003@gmail.com"
          className="underline decoration-indigo-500 hover:text-indigo-500 hover:no-underline"
        >
          my email
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          
          if(error) {
            toast.error(error, { duration: 8000 });
            return;
          }

          toast.success("Email Sent Successfully :)");
        }}
        
      >

        <input
          name="email"
          className="h-14 rounded-lg blackBorder p-4"
          type="email"
          placeholder="Enter your email address"
          maxLength={50}
          required
        />

        <textarea
          name="message"
          className="h-52 my-3 rounded-lg blackBorder p-4"
          placeholder="Enter your message"
          required
          minLength={25}
          maxLength={500}
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
